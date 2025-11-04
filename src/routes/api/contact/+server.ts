import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// Validate email format
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone number (basic international format)
function isValidPhone(phone: string): boolean {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

export const POST: RequestHandler = async ({ request, platform }) => {
    try {
        const formData = await request.json();

        // Validate required fields
        const { name, email, projectTitle, projectDescription } = formData;

        if (!name?.trim()) {
            return json({ error: 'Name is required' }, { status: 400 });
        }

        if (!email?.trim() || !isValidEmail(email)) {
            return json({ error: 'Valid email is required' }, { status: 400 });
        }

        if (!projectTitle?.trim()) {
            return json({ error: 'Project title is required' }, { status: 400 });
        }

        if (!projectDescription?.trim()) {
            return json({ error: 'Project description is required' }, { status: 400 });
        }

        if (formData.phoneNumber && !isValidPhone(formData.phoneNumber)) {
            return json({ error: 'Please enter a valid phone number' }, { status: 400 });
        }

        const TELEGRAM_TOKEN =
            platform?.env?.TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
        const TELEGRAM_CHAT_ID =
            platform?.env?.TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID;

        await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: `📩 New Contact Form:\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n💬 Phone Number: ${formData.phoneNumber}\n 📝 Project: ${formData.projectTitle}\n 🌍 From Country: ${formData.country}\n 🗒️ Description: ${formData.projectDescription}`,
            }),
        });

        return json({
            success: true,
            message: 'Form submitted successfully'
        });

    } catch (error) {
        console.error('Form submission error:', error);
        return json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
};