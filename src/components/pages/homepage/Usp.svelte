<script lang="ts">
    import { Lightbulb, Layers, TrendingUp } from 'lucide-svelte';
    import { onMount } from 'svelte';

    const usps = [
        {
            icon: Lightbulb,
            title: 'Partner for Growth',
            description: 'As a founding engineer and full-stack freelancer, I help startups and teams transform ideas into reliable, high-performing products that can evolve as the business grows',
            gradientFrom: 'from-purple-600/20',
            gradientTo: 'to-indigo-500/20',
            mobileDelay: 'delay-100',
            tabletDelay: 'delay-100',
            desktopDelay: 'delay-100'
        },
        {
            icon: Layers,
            title: 'Build Fast, Scale Smart',
            description: 'design and develop production-ready web and mobile applications using modern stacks — React, Node.js, Golang, and React Native — ensuring fast delivery and long-term scalability',
            gradientFrom: 'from-pink-500/20',
            gradientTo: 'to-orange-500/20',
            mobileDelay: 'delay-200',
            tabletDelay: 'delay-150',
            desktopDelay: 'delay-200'
        },
        {
            icon: TrendingUp,
            title: 'Quality That Converts',
            description: 'Every feature I ship is built with user experience, maintainability, and performance in mind — helping clients achieve measurable results, not just working code',
            gradientFrom: 'from-teal-500/20',
            gradientTo: 'to-cyan-500/20',
            mobileDelay: 'delay-300',
            tabletDelay: 'delay-200',
            desktopDelay: 'delay-300'
        }
    ];

    let animated = $state(false);
    let containerRef: HTMLDivElement;
    let screenSize = $state('mobile'); // 'mobile', 'tablet', 'desktop'

    onMount(() => {
        // Check screen size on mount and resize
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animated = true;
                    }
                });
            },
            { 
                threshold: screenSize === 'mobile' ? 0.1 : 
                          screenSize === 'tablet' ? 0.2 : 0.3 
            }
        );

        if (containerRef) {
            observer.observe(containerRef);
        }

        return () => {
            if (containerRef) {
                observer.unobserve(containerRef);
            }
            window.removeEventListener('resize', checkScreenSize);
        };
    });

    function checkScreenSize() {
        const width = window.innerWidth;
        if (width < 768) {
            screenSize = 'mobile';
        } else if (width >= 768 && width < 1024) {
            screenSize = 'tablet';
        } else {
            screenSize = 'desktop';
        }
    }
</script>

<style>
    .usp-item {
        opacity: 0;
        transform: translateX(-30px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .usp-item.animate-in {
        opacity: 1;
        transform: translateX(0);
    }

    /* Mobile delays */
    .usp-item:nth-child(1) { transition-delay: 0.1s; }
    .usp-item:nth-child(2) { transition-delay: 0.2s; }
    .usp-item:nth-child(3) { transition-delay: 0.3s; }

    /* Tablet delays */
    @media (min-width: 768px) and (max-width: 1023px) {
        .usp-item:nth-child(1) { transition-delay: 0.1s; }
        .usp-item:nth-child(2) { transition-delay: 0.15s; }
        .usp-item:nth-child(3) { transition-delay: 0.2s; }
    }

    /* Desktop delays */
    @media (min-width: 1024px) {
        .usp-item:nth-child(1) { transition-delay: 0.1s; }
        .usp-item:nth-child(2) { transition-delay: 0.2s; }
        .usp-item:nth-child(3) { transition-delay: 0.3s; }
    }

    /* Mobile optimizations */
    .mobile-icon { height: 5rem; width: 5rem; }
    .mobile-text-xl { font-size: 1.5rem; line-height: 2rem; }
    .mobile-text-sm { font-size: 0.875rem; line-height: 1.25rem; }
    .mobile-padding { padding: 1.25rem; }
    .mobile-gap { gap: 1rem; }

    /* Tablet optimizations */
    .tablet-icon { height: 6rem; width: 6rem; }
    .tablet-text-2xl { font-size: 1.75rem; line-height: 2.25rem; }
    .tablet-text-base { font-size: 1rem; line-height: 1.5rem; }
    .tablet-padding { padding: 1.5rem; }
    .tablet-gap { gap: 1.25rem; }

    /* Desktop styles (your original) */
    .desktop-icon { height: 7rem; width: 7rem; }
</style>

<div class="flex flex-col gap-8 mt-6 md:gap-10 lg:gap-12" bind:this={containerRef}>
    <!-- Mobile: Single column with adjusted spacing -->
    <div class="grid grid-cols-1 gap-6 md:hidden">
        {#each usps as { icon: Icon, title, description, gradientFrom, gradientTo, mobileDelay }, index}
            <div 
                class="usp-item group relative flex flex-col items-start text-left mobile-gap overflow-hidden rounded-xl bg-linear-to-br {gradientFrom} {gradientTo} mobile-padding shadow-xl transition-all duration-300 hover:shadow-2xl {animated ? 'animate-in' : ''}"
            >
                <div class="mobile-icon transition-all duration-300 group-hover:scale-110 self-start flex items-center justify-center">
                    <Icon 
                        size={48} 
                        strokeWidth={1.5} 
                        class="text-white"
                    />
                </div>
                <div class="relative z-10 flex flex-col gap-2 w-full">
                    <h3 class="mobile-text-xl font-bold text-white">{title}</h3>
                    <p class="mobile-text-sm text-white/70 leading-relaxed">{description}</p>
                </div>
            </div>
        {/each}
    </div>

    <!-- Tablet: 2-column grid -->
    <div class="hidden grid-cols-1 gap-6 md:grid lg:hidden">
        {#each usps as { icon: Icon, title, description, gradientFrom, gradientTo, tabletDelay }, index}
            <div 
                class="usp-item group relative flex flex-col items-start text-left tablet-gap overflow-hidden rounded-xl bg-linear-to-br {gradientFrom} {gradientTo} tablet-padding shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl {animated ? 'animate-in' : ''}"
            >
                <div class="tablet-icon transition-all duration-300 group-hover:scale-110 self-start flex items-center justify-center">
                    <Icon 
                        size={56} 
                        strokeWidth={1.5} 
                        class="text-white"
                    />
                </div>
                <div class="relative z-10 flex flex-col gap-2 w-full">
                    <h3 class="tablet-text-2xl font-bold text-white">{title}</h3>
                    <p class="tablet-text-base text-white/70 leading-relaxed">{description}</p>
                </div>
            </div>
        {/each}
    </div>

    <!-- Desktop: 3-column grid (your original layout) -->
    <div class="hidden grid-cols-1 gap-8 lg:grid lg:grid-cols-3">
        {#each usps as { icon: Icon, title, description, gradientFrom, gradientTo, desktopDelay }, index}
            <div 
                class="usp-item group relative flex flex-col items-start text-left gap-4 overflow-hidden rounded-xl bg-linear-to-br {gradientFrom} {gradientTo} p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl {animated ? 'animate-in' : ''}"
            >
                <div class="desktop-icon transition-all duration-300 group-hover:scale-110 self-start flex items-center justify-center">
                    <Icon 
                        size={64} 
                        strokeWidth={1.5} 
                        class="text-white"
                    />
                </div>
                <div class="relative z-10 flex flex-col gap-2">
                    <h3 class="text-3xl font-bold text-white">{title}</h3>
                    <p class="text-white/70">{description}</p>
                </div>
            </div>
        {/each}
    </div>
</div>