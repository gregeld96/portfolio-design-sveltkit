import { PUBLIC_API_URL } from "$env/static/public";
import { get } from "svelte/store";
import { auth } from "$lib/stores/session";

export async function http<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const { token } = get(auth);

    const isFormData = options.body instanceof FormData;

    const res = await fetch(`${PUBLIC_API_URL}/${endpoint}`, {
        headers: {
            ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...(options.headers || {})
        },
        ...options
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `Error ${res.status}`);
    }

    return res.json();
}