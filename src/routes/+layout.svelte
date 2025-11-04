<script lang="ts">
	import '../app.css';
	import Header from '../components/shared/Header/Header.svelte';
	import Footer from '../components/shared/Footer/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Gregorius Eldwin Pradipta - Full Stack / Freelance Developer</title>
	<meta name="description" content="Gregorius Eldwin Pradipta is a fullstack freelance developer and founding engineer based in Indonesia, available for remote projects worldwide. Ready for hire to build web and mobile applications." />
</svelte:head>

<div class="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
	<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
		<Header />

		{@render children()}

		<Footer />
	</div>
</div>
