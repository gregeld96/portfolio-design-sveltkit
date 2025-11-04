<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let mounted = false;
	let showFullBio = false;

	const profile = {
		name: 'Gregorius Eldwin Pradipta',
		title: 'Founding Engineer / Fullstack Developer',
		location: 'Jakarta, Indonesia',
		image: '/profile.jpeg',
		bio: {
			short:
				'Passionate fullstack developer with 6+ years of experience building scalable web applications and leading engineering teams from concept to production.',
			full: `I'm a passionate fullstack developer with 6+ years of experience specializing in building scalable web applications and leading engineering teams from concept to production. As a Founding Engineer, I've architected systems serving millions of users and mentored junior developers to excel in modern tech stacks.

My expertise spans across JavaScript/TypeScript ecosystems with deep knowledge in React, Node.js, and cloud infrastructure. I thrive in startup environments where I can contribute to both technical architecture and product strategy.

When I'm not coding, I enjoy contributing to open-source projects, writing technical blogs, and exploring new technologies in the ever-evolving web development landscape.`
		},
		stats: [
			{ label: 'Projects', value: '10+' },
			{ label: 'Experience', value: '6+ years' },
			{ label: 'Companies', value: '4' }
		]
	};

	function toggleBio() {
		showFullBio = !showFullBio;
	}

	onMount(() => {
		mounted = true;
	});

	$: if ($page.url.pathname === '/about-me') {
        setTimeout(() => {
            mounted = true;
        }, 50);
    }
</script>

<div
	class="flex transform flex-col items-start gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-lg sm:gap-8 sm:p-8 dark:border-gray-700 dark:bg-gray-800 {mounted
		? 'translate-y-0 opacity-100'
		: 'translate-y-8 opacity-0'}"
	in:fly={{ y: 30, duration: 600 }}
>
	<!-- Main Content -->
	<div class="flex w-full flex-col items-center gap-6 sm:gap-8 md:flex-row">
		<!-- Profile Image -->
		<div class="group relative">
			<div
				class="mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-blue-200 shadow-lg transition-all duration-500 sm:h-32 sm:w-32 md:mx-0 dark:border-blue-800 {mounted
					? 'scale-100'
					: 'scale-90'}"
			>
				<div
					class="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
					style='background-image: url("{profile.image}");'
				></div>
			</div>
			<!-- Online Status Indicator -->
			<div
				class="absolute right-2 bottom-2 h-4 w-4 animate-pulse rounded-full border-2 border-white bg-green-500 shadow-lg sm:right-3 sm:bottom-3 sm:h-5 sm:w-5 dark:border-gray-800"
			></div>
		</div>

		<!-- Profile Info -->
		<div class="flex-1 space-y-3 text-center sm:space-y-4 md:text-left">
			<!-- Name -->
			<div class="flex flex-col gap-2 md:gap-0 space-y-1">
				<p
					class="text-2xl leading-tight font-bold text-gray-900 transition-all duration-500 sm:text-3xl dark:text-white {mounted
						? 'translate-x-0 opacity-100'
						: 'translate-x-4 opacity-0'}"
				>
					{profile.name}
				</p>
				<h1
					class="text-base md:text-lg font-semibold text-blue-600 transition-all delay-100 duration-500 sm:text-xl dark:text-blue-400 {mounted
						? 'translate-x-0 opacity-100'
						: 'translate-x-4 opacity-0'}"
				>
					{profile.title}
				</h1>
				<div
					class="flex items-center justify-center gap-2 text-gray-500 transition-all delay-200 duration-500 md:justify-start dark:text-gray-400 {mounted
						? 'translate-x-0 opacity-100'
						: 'translate-x-4 opacity-0'}"
				>
					<span class="material-symbols-outlined text-lg">location_on</span>
					<h2 class="text-base sm:text-lg">{profile.location}</h2>
				</div>
			</div>

			<!-- Stats -->
			<div class="flex justify-center gap-4 pt-2 sm:gap-6 md:justify-start">
				{#each profile.stats as stat, index (stat.label)}
					<div
						class="text-center transition-all duration-500 {mounted
							? 'scale-100 opacity-100'
							: 'scale-90 opacity-0'}"
						style="transition-delay: {300 + index * 100}ms;"
					>
						<p class="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">{stat.value}</p>
						<p class="text-xs text-gray-500 sm:text-sm dark:text-gray-400">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Biography Section -->
	<div class="w-full space-y-4 border-t border-gray-200 pt-6 dark:border-gray-700">
		<div class="flex items-center justify-between">
			<h3
				class="flex items-center gap-2 text-lg font-semibold text-gray-900 sm:text-xl dark:text-white"
			>
				<span class="material-symbols-outlined text-blue-600 dark:text-blue-400">person</span>
				About Me
			</h3>
			<button
				onclick={toggleBio}
				class="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm text-blue-600 transition-colors duration-200 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30"
			>
				<span class="material-symbols-outlined text-lg">
					{showFullBio ? 'expand_less' : 'expand_more'}
				</span>
				{showFullBio ? 'Show Less' : 'Show More'}
			</button>
		</div>

		<!-- Bio Content -->
		<div class="space-y-3">
			<p
				class="text-sm leading-relaxed text-gray-700 sm:text-base dark:text-gray-300 {showFullBio
					? 'line-clamp-none'
					: 'line-clamp-3'}"
			>
				{showFullBio ? profile.bio.full : profile.bio.short}
			</p>

			<!-- Quick Facts (Visible in full bio) -->
			{#if showFullBio}
				<div class="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2" in:fade={{ duration: 300 }}>
					{#each [{ icon: 'code', text: 'Fullstack JavaScript/TypeScript' }, { icon: 'architecture', text: 'System Architecture & Scalability' }, { icon: 'school', text: 'Mentoring & Team Leadership' }, { icon: 'open_in_new', text: 'Tech Explorer' }] as fact, index (fact.text)}
						<div
							class="flex items-center gap-3 rounded-lg bg-gray-50 p-3 transition-all duration-300 hover:bg-gray-100 dark:bg-gray-700/50 dark:hover:bg-gray-700"
							in:fly={{ x: -20, duration: 400, delay: index * 100 }}
						>
							<span class="material-symbols-outlined text-lg text-blue-600 dark:text-blue-400">
								{fact.icon}
							</span>
							<span class="text-sm text-gray-700 dark:text-gray-300">{fact.text}</span>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<!-- Action Buttons -->
	<div class="flex w-full flex-col gap-3 pt-4 sm:flex-row">
		<!-- <a
            target="_blank"
			href="mailto:gregeld96@gmail.com?subject=Let's Work Together&body=Hi Gregorius, I came across your portfolio and would like to connect regarding..."
			class="flex flex-1 transform items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg"
		>
			<span class="material-symbols-outlined">mail</span>
			Contact Me
		</a> -->
        <a
			href="/contact"
			class="flex flex-1 transform items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg"
		>
			<span class="material-symbols-outlined">mail</span>
			Contact Me
		</a>
		<!-- <button class="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex-1">
            <span class="material-symbols-outlined">download</span>
            Download CV
        </button> -->
	</div>
</div>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* Smooth transitions for all interactive elements */
	button {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Mobile optimizations */
	@media (max-width: 640px) {
		.profile-card {
			padding: 1.5rem;
		}
	}

	/* Tablet optimizations */
	@media (min-width: 641px) and (max-width: 1024px) {
		.profile-card {
			padding: 2rem;
		}
	}
</style>
