<style>
    /* Custom breakpoint for very small phones */
    @media (max-width: 360px) {
        .xs-text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
        }
        .xs-text-xs {
            font-size: 0.75rem;
            line-height: 1rem;
        }
        .xs-h-14 {
            height: 3.5rem;
            width: 3.5rem;
        }
    }
</style>

<div class="flex flex-col justify-center gap-3 xs:gap-4 sm:gap-6">
    <div class="space-y-2 sm:space-y-3 md:space-y-4 text-center md:text-left">
        <h1 class="xs-text-2xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Let's Build Together
        </h1>
        <p class="xs-text-xs text-sm text-gray-600 dark:text-gray-300 sm:text-base md:text-lg leading-relaxed">
            Have a project in mind or an exciting role to fill? I'm passionate about building innovative solutions from the ground up. Let's connect and see how we can create something amazing.
        </p>
    </div>
    
    <div class="flex flex-col items-center gap-3 xs:gap-4 sm:flex-row sm:items-center sm:gap-4">
        <img 
            alt="Founding Engineer Portrait" 
            class="xs-h-14 h-16 w-16 rounded-full border-2 xs:border-3 border-primary/50 object-cover sm:h-20 sm:w-20 md:h-24 md:w-24" 
            src="/profile.jpeg"
        />
        <div class="text-center sm:text-left space-y-1">
            <h3 class="text-sm font-bold text-gray-900 dark:text-white sm:text-base md:text-lg lg:text-xl">
                Gregorius Eldwin Pradipta
            </h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                Founding Engineer
            </p>
        </div>
    </div>
</div>