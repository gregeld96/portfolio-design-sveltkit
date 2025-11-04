<script lang="ts">
    import HeroAbout from '../../components/pages/about/HeroAbout.svelte';
    import TechnicalSkill from '../../components/pages/about/TechnicalSkill.svelte';
    import CareerProgress from '../../components/pages/about/CareerProgress.svelte';
</script>

<section class="container mx-auto flex flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8">
    <div>
        <HeroAbout />
    </div>
    <div>
        <TechnicalSkill />
    </div>
    <div>
        <CareerProgress />
    </div>
</section>