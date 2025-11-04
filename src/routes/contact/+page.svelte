<script lang="ts">
	import BriefHero from '../../components/pages/contact/BriefHero.svelte';
	import Form from '../../components/pages/contact/Form.svelte';

</script>

<div class="relative flex min-h-screen w-full flex-col items-center justify-center p-2 sm:p-6 md:p-8">
    <div class="w-full max-w-6xl">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <BriefHero />
            <Form />
        </div>
    </div>
</div>