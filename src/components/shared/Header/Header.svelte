<script lang="ts">
    import { Menu, X, FileText } from 'lucide-svelte';
    import { onMount } from 'svelte';

    let isMenuOpen = $state(false);
    let isScrolled = $state(false);

    function closeMenu() {
        isMenuOpen = false;
    }

    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 10;
        };

        window.addEventListener('scroll', handleScroll);
        
        // Close menu when window is resized to desktop
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                closeMenu();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    });

    $effect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
    });
</script>

<header 
    class="sticky top-0 z-50 w-full transition-all duration-300 {isScrolled ? 'border-b border-white/20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-lg shadow-lg' : 'border-b border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm'}"
>
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <!-- Logo -->
        <a href="/" class="flex cursor-pointer items-center gap-3 z-50">
            <img src="/favicon.png" alt="Header Logo" class="w-8 h-8 sm:w-10 sm:h-10" />
            <span class="text-lg font-bold text-gray-900 dark:text-white hidden sm:block">Gregorius Eldwin Pradipta</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden items-center gap-6 lg:gap-8 md:flex">
            <a class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200" href="/about-me">About</a>
            <a class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200" href="/projects">Projects</a>
            <a class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200" href="/contact">Contact</a>
            
            <!-- <button class="flex min-w-[100px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-primary/50 hover:scale-105 active:scale-95">
                <FileText size={16} />
                <span class="truncate">Resume</span>
            </button> -->
        </nav>

        <!-- Mobile Menu Button -->
        <button 
            class="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10 md:hidden z-50 transition-colors hover:bg-white/20"
            onclick={() => isMenuOpen = !isMenuOpen}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
        >
            {#if isMenuOpen}
                <X size={20} class="text-gray-700 dark:text-gray-300" />
            {:else}
                <Menu size={20} class="text-gray-700 dark:text-gray-300" />
            {/if}
        </button>

        <!-- Mobile Menu Overlay -->
        {#if isMenuOpen}
            <div 
                class="fixed inset-0 top-0 left-0 w-full h-screen bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-lg md:hidden z-40"
                role="dialog"
                aria-modal="true"
            >
                <!-- Close button at top right -->
                <div class="absolute top-4 right-4 z-50">
                    <button 
                        class="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10 transition-colors hover:bg-white/20"
                        onclick={closeMenu}
                        aria-label="Close menu"
                    >
                        <X size={20} class="text-gray-700 dark:text-gray-300" />
                    </button>
                </div>

                <!-- Navigation Content -->
                <div class="flex flex-col items-center justify-center h-full space-y-8 px-6 pt-16">
                    <a 
                        class="text-2xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-200 py-3 w-full text-center"
                        href="/about-me"
                        onclick={closeMenu}
                    >
                        About
                    </a>
                    <a 
                        class="text-2xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-200 py-3 w-full text-center"
                        href="/projects"
                        onclick={closeMenu}
                    >
                        Projects
                    </a>
                    <a 
                        class="text-2xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-200 py-3 w-full text-center"
                        href="/contact"
                        onclick={closeMenu}
                    >
                        Contact
                    </a>
                    
                    <!-- <button 
                        class="flex items-center justify-center gap-3 w-full max-w-xs rounded-full h-14 bg-primary text-white text-lg font-bold shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 mt-8"
                        onclick={closeMenu}
                    >
                        <FileText size={20} />
                        <span>View Resume</span>
                    </button> -->
                </div>
            </div>
        {/if}
    </div>
</header>

<style>
    /* Ensure sticky positioning works */
    header {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
    }

    /* Mobile menu animations */
    .fixed {
        animation: fadeIn 0.3s ease-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Improve mobile touch targets */
    @media (max-width: 768px) {
        a, button {
            -webkit-tap-highlight-color: transparent;
            /* min-height: 44px; */
            min-width: 44px;
        }
        
        /* Ensure mobile menu covers entire screen */
        .fixed {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
            height: 100vh;
        }
    }

    /* Prevent body scroll when menu is open */
    body.menu-open {
        overflow: hidden;
        position: fixed;
        width: 100%;
    }
</style>