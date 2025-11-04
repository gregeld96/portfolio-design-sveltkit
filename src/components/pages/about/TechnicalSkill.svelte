<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	interface Skill {
		id: number;
		category: string;
		items: string[];
		icon: string;
		color: string;
		delay: number;
        fullWidth?: boolean;
	}

	let visibleItems = false;

	// Skills data
	const skills: Skill[] = [
		{
			id: 1,
			category: 'Backend & Languages',
			items: [
				'Node.js',
				'TypeScript',
				'Golang',
				'Java Spring Boot',
				'Rust',
				'PHP',
				'Express.js',
				'Fastify'
			],
			icon: 'code',
			color: 'from-blue-500 to-cyan-500',
			delay: 0
		},
		{
			id: 2,
			category: 'Frontend & Mobile',
			items: [
				'React',
				'Svelte/SvelteKit',
				'Next.js',
				'Flutter',
				'React Native',
				'TypeScript',
				'Shopify',
				'WordPress'
			],
			icon: 'palette',
			color: 'from-purple-500 to-pink-500',
			delay: 100
		},
		{
			id: 3,
			category: 'Databases & Storage',
			items: [
				'MongoDB',
				'PostgreSQL',
				'MySQL',
				'Firebase',
				'Database Architecture',
				'Hibernate ORM'
			],
			icon: 'storage',
			color: 'from-green-500 to-emerald-500',
			delay: 200
		},
		{
			id: 4,
			category: 'Cloud & DevOps',
			items: [
				'AWS',
				'GCP',
				'Vercel',
				'Docker',
				'NGINX',
				'CI/CD',
				'GitHub Actions',
				'VPS',
				'System Architecture'
			],
			icon: 'cloud',
			color: 'from-orange-500 to-red-500',
			delay: 300
		},
		{
			id: 5,
			category: 'Specialized Systems',
			items: [
				'Microservices',
				'Payment Gateway',
				'LMS',
				'E-commerce',
				'Logistics API',
				'Third-party Integration',
				'SEO',
				'CRM Systems'
			],
			icon: 'architecture',
			color: 'from-indigo-500 to-purple-500',
			delay: 400,
			fullWidth: true
		},
		{
			id: 6,
			category: 'Leadership & Tools',
			items: [
				'Team Management',
				'Code Review',
				'System Design',
				'Agile',
				'Jira',
				'Trello',
				'Slack',
				'Confluence',
				'Pair Programming'
			],
			icon: 'groups',
			color: 'from-teal-500 to-blue-500',
			delay: 500,
			fullWidth: true
		}
	];

	onMount(() => {
		visibleItems = true;
	});

	$: if ($page.url.pathname === '/about-me') {
        setTimeout(() => {
            visibleItems = true;
        }, 50);
    }
</script>

<div class="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-8 text-center sm:mb-12">
		<h2 class="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl dark:text-white">
			Technical Skills
		</h2>
		<p class="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg dark:text-gray-300">
			Comprehensive expertise across modern development stack
		</p>
	</div>

	<!-- Skills Grid -->
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8">
		{#each skills as skill (skill.id)}
			<div
				class={`skill-card relative transform overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-xl sm:p-6 lg:p-7 dark:border-gray-700 dark:bg-gray-800 ${
					visibleItems ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
				} ${skill.fullWidth ? 'sm:col-span-2' : ''}`}
				style={`transition-delay: ${skill.delay}ms;`}
				in:fly={{ y: 30, duration: 600, delay: skill.delay }}
			>
				<!-- Background Gradient -->
				<div class="absolute inset-0 bg-linear-to-br opacity-5 {skill.color}"></div>

				<!-- Animated Border -->
				<div
					class="absolute inset-0 rounded-2xl bg-linear-to-r {skill.color} opacity-0 transition-opacity duration-500 hover:opacity-100"
				>
					<div class="absolute inset-px rounded-2xl bg-white dark:bg-gray-800"></div>
				</div>

				<div class="relative z-10">
					<!-- Header with Icon -->
					<div class="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
						<div
							class="h-10 w-10 shrink-0 bg-linear-to-br sm:h-12 sm:w-12 {skill.color} flex items-center justify-center rounded-xl shadow-lg"
						>
							<span class="material-symbols-outlined text-lg text-white sm:text-xl">
								{skill.icon}
							</span>
						</div>
						<div>
							<h3 class="text-lg leading-tight font-bold text-gray-900 sm:text-xl dark:text-white">
								{skill.category}
							</h3>
						</div>
					</div>

					<!-- Skills List -->
					<div class="flex flex-wrap gap-2 sm:gap-3">
						{#each skill.items as item, index (item)}
							<span
								class="skill-tag inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-md sm:px-4 sm:py-2 sm:text-base dark:bg-gray-700 dark:text-gray-300"
								in:fly={{ y: 20, duration: 400, delay: skill.delay + index * 50 }}
							>
								{item}
							</span>
						{/each}
					</div>
				</div>

				<!-- Hover Effect -->
				<div
					class="absolute inset-0 bg-linear-to-br {skill.color} rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-5"
				></div>
			</div>
		{/each}
	</div>
</div>

<style>
	.skill-card {
		/* opacity: 0; */
		transform: translateY(8px);
	}

	.skill-tag {
		/* opacity: 0; */
		transform: translateY(10px);
	}

	/* Smooth hover effects */
	.skill-card:hover .skill-tag {
		transform: translateY(-2px);
	}

	/* Mobile optimizations */
	@media (max-width: 640px) {
		.skill-card {
			padding: 1.25rem;
		}

		.skill-tag {
			font-size: 0.875rem;
			padding: 0.5rem 0.75rem;
		}
	}

	/* Tablet optimizations */
	@media (min-width: 641px) and (max-width: 1024px) {
		.skill-card {
			padding: 1.5rem;
		}
	}
</style>
