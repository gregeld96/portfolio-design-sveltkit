<script lang="ts">
	import Hero from '../components/pages/homepage/Hero.svelte';
	import Usp from '../components/pages/homepage/Usp.svelte';
	import Testimonial from '../components/pages/homepage/Testimonial.svelte';
	import ProjectCase from '../components/pages/homepage/ProjectCase.svelte';

</script>

<main class="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8 py-10 md:py-16">
    <div class="flex flex-col gap-16 md:gap-24">
        <div class="@container">
            <Hero />
            <Usp />
            <ProjectCase />
            <Testimonial />
        </div>
    </div>
</main>