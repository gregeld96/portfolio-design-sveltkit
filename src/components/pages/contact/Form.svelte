<script lang="ts">
    import Success from './Success.svelte'

    // Form state
    let formData = $state({
        name: '',
        email: '',
        phoneNumber: '',
        projectTitle: '',
        projectDescription: '',
        country: ''
    });

    let isLoading = $state(false);
    let isSubmitted = $state(false);
    let error = $state('');

    async function handleSubmit(event: Event) {
        event.preventDefault();
        isLoading = true;
        error = '';

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            isSubmitted = true;
            
            // Reset form
            formData = {
                name: '',
                email: '',
                phoneNumber: '',
                projectTitle: '',
                projectDescription: '',
                country: ''
            };

        } catch (err) {
            error = err instanceof Error ? err.message : 'Something went wrong';
        } finally {
            isLoading = false;
        }
    }

    function handleInput(field: keyof typeof formData, value: string) {
        formData[field] = value;
    }
</script>

<div class="mt-8 mx-4 sm:mx-6 lg:mx-auto md:max-w-2xl bg-white/50 dark:bg-black/20 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl border border-white/20 dark:border-black/20" id="form-container">
    {#if isSubmitted}
        <Success />
    {:else}
        <form onsubmit={handleSubmit} class="group grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2" id="project-form">
            <!-- Name Field -->
            <div class="sm:col-span-1">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" for="name">Name *</label>
                <input
                    bind:value={formData.name}
                    class="w-full rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-800/70 px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                />
            </div>

            <!-- Email Field -->
            <div class="sm:col-span-1">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" for="email">Email *</label>
                <input
                    bind:value={formData.email}
                    class="w-full rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-800/70 px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                />
            </div>

            <!-- Phone Number -->
            <div class="sm:col-span-1">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" for="phone-number">Phone Number</label>
                <input
                    bind:value={formData.phoneNumber}
                    class="w-full rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-800/70 px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
                    id="phone-number"
                    type="tel"
                    placeholder="+1 (555) 987-6543"
                />
            </div>

            <!-- Project Title -->
            <div class="sm:col-span-1">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" for="project-title">Project Title *</label>
                <input
                    bind:value={formData.projectTitle}
                    class="w-full rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-800/70 px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
                    id="project-title"
                    type="text"
                    placeholder="e.g., E-commerce Platform"
                    required
                />
            </div>

            <!-- Project Description -->
            <div class="sm:col-span-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" for="project-description">Project Description *</label>
                <textarea
                    bind:value={formData.projectDescription}
                    class="w-full rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-800/70 px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 resize-vertical min-h-[120px]"
                    id="project-description"
                    placeholder="Describe your project in detail..."
                    maxlength="500"
                    rows="4"
                    required
                ></textarea>
                <div class="flex justify-between mt-2">
                    <span class="text-xs text-gray-500 dark:text-gray-400">Required field</span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">{formData.projectDescription.length}/500</span>
                </div>
            </div>

            <!-- Country -->
            <div class="sm:col-span-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" for="country">Country</label>
                <select
                    bind:value={formData.country}
                    class="w-full rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-800/70 px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                    id="country"
                >
                    <option value="">Select a country</option>
                    <option value="ID">Indonesia</option>
                    <option value="SG">Singapore</option>
                    <option value="MY">Malaysia</option>
                    <option value="TH">Thailand</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <!-- Error Message -->
            {#if error}
                <div class="sm:col-span-2">
                    <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                        <p class="text-sm text-red-600 dark:text-red-400">{error}</p>
                    </div>
                </div>
            {/if}

            <!-- Submit Button -->
            <div class="sm:col-span-2">
                <button
                    type="submit"
                    disabled={isLoading}
                    class="w-full inline-flex items-center justify-center rounded-lg h-12 px-6 border border-transparent bg-gradient-to-r from-primary to-primary/90 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {#if isLoading}
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    {:else}
                        Submit Request
                    {/if}
                </button>
            </div>
        </form>
    {/if}
</div>

<style>
    /* Custom styles for better mobile experience */
    select {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
        background-position: right 0.5rem center;
        background-repeat: no-repeat;
        background-size: 1.5em 1.5em;
        padding-right: 2.5rem;
    }

    .dark select {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    }

    /* Improve touch targets on mobile */
    @media (max-width: 640px) {
        input, textarea, select, button {
            font-size: 16px; /* Prevents zoom on iOS */
        }
    }
</style>