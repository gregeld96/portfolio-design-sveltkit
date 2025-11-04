<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	// Timeline data with progress levels
	export let timelineItems = [
		{
			id: 1,
			title: 'CTO at Kasi Edu Indonesia',
			period: 'Jan 2023 - Jun 2024',
			workType: 'Part-time (Remote)',
			description:
				'As CTO, architected and built the entire technology platform from scratch including a comprehensive Learning Management System (LMS), Event Management System, and Crowdfunding platform. Led the technical vision and development of multi-tenant educational ecosystem supporting course creation, live events, and community fundraising. Implemented payment gateway integrations and third-party vendor CRM systems to create a seamless educational marketplace experience.',
			icon: 'school',
			responsibilities: [
				'Led end-to-end development of multi-tenant educational platform',
				'Architected Learning Management System (LMS) for course delivery and student management',
				'Built Event Management System for hosting live webinars and workshops',
				'Developed Crowdfunding platform to support community-driven educational initiatives',
				'Integrated payment gateways for secure transactions',
				'Collaborated with third-party vendors to implement CRM systems for user management',
			],
			progress: 90,
			level: 'Leadership',
			skills: [
				'Payment Gateway Integration',
				'React',
				'Node.js',
				'Team Management',
				'Crowdfunding',
				'Event Management System',
				'Learning Management System',
				'Third Party Vendor System CRM',
				'System Architecture',
				'Multi-tenant Platform',
				'Educational Technology'
			]
		},
		{
			id: 2,
			title: 'Senior Fullstack Developer at Luxehouze',
			period: 'Jan 2023 - Current',
			workType: 'Full Time (Remote)',
			description:
				'Leading maintenance of 3 Luxehouze websites, managing team of 5 developers. Migrated Shopify to Svelte with MongoDB, Vercel, and Golang. Improved website speed from 6.0s to 4.0s and implemented code review processes.',
			icon: 'rocket_launch',
			responsibilities: [
				'Led migration of Luxehouze website from Shopify to Svelte with MongoDB, Vercel, and Golang backend',
				'Managed a team of 5 developers for ongoing website maintenance and feature development',
				'Implemented code review processes to ensure high-quality code standards',
				'Optimized website performance, reducing load times from 6.0s to 2.0s',
				'Collaborated with cross-functional teams to align technical solutions with business goals',
				'Ensured scalability and reliability of the new platform to support growing user base',
				'Led migration internal Luxehouze system called nebula'
			],
			progress: 95,
			level: 'Leadership',
			skills: [
				'Svelte',
				'Golang',
				'MongoDB',
				'Shopify API',
				'Vercel',
				'Team Management',
				'Code Review',
				'SEO',
				'System Architecture'
			]
		},
		{
			id: 3,
			title: 'Fullstack Developer at Tanyo App',
			period: 'July 2023 - June 2024',
			workType: 'Part-time (Remote)',
			description:
				'Implemented clean code concepts, enhanced global datetime systems, achieved 100% stability for payment processing. Designed microservices architecture and integrated unit testing with Jest.',
			icon: 'architecture',
			responsibilities: [
				'Implemented clean code principles to enhance code maintainability and readability',
				'Enhanced global datetime synchronization across the platform for consistent user experience',
				'Achieved 100% stability in booking processing systems through rigorous testing and optimization',
				'Designed and implemented microservices architecture to improve scalability and modularity',
				'Integrated unit testing using Jest to ensure code quality and reliability',
				'Collaborated with cross-functional teams to deliver new features and improvements',
				'Optimized backend services for performance and efficiency',
				'Implemented real time communication using socket.io'
			],
			progress: 85,
			level: 'Senior',
			skills: [
				'Microservices',
				'Jest',
				'Node.js',
				'TypeScript',
				'System Design',
				'Unit Testing',
				'Payment Systems',
				'Socket Io'
			]
		},
		{
			id: 4,
			title: 'Fullstack Developer at Feeder Indonesia',
			period: 'May 2023 - July 2023',
			workType: 'Part-time (Remote)',
			description:
				"Architected and built Feeder's core logistics aggregation platform integrating major Indonesian courier APIs (JNE, Sicepat, J&T, Spax). Created a unified internal system that streamlined delivery order creation, courier selection, and shipment tracking across multiple providers.",
			icon: 'local_shipping',
			responsibilities: [
				'Architected and developed Feeder’s logistics aggregation platform from the ground up',
				'Integrated major Indonesian courier APIs including ID Express, J&T, and SPAX into a unified system',
				'Created a streamlined internal interface for delivery order creation and management',
				'Implemented courier selection logic to optimize shipping options based on cost and delivery time',
				'Developed real-time shipment tracking features to provide visibility across multiple courier services',
				'Collaborated with cross-functional teams to ensure seamless integration with existing systems',
				'Optimized backend processes for efficiency and scalability'
			],
			progress: 82,
			level: 'Senior-Level',
			skills: [
				'React',
				'Node.js',
				'REST API Integration',
				'Logistics Systems',
				'Database Architecture',
				'Process Automation',
				'Third-party APIs',
				'System Integration'
			]
		},
		{
			id: 5,
			title: 'Fullstack Developer at Perigigi Indonesia',
			period: 'Jan 2023 - Jan 2024',
			workType: 'Part-time (Remote)',
			description:
				'Successfully migrated entire website and app system to Node.js from Firebase, achieving 99% stability. Updated customer app to modern React TypeScript design.',
			icon: 'code',
			responsibilities: [
				'Migrated Perigigi’s entire web and mobile application system from Firebase to a Node.js backend, enhancing performance and stability',
				'Achieved 99% system stability post-migration through rigorous testing and optimization',
				'Redesigned and updated the customer-facing app using modern React TypeScript for improved user experience',
				'Collaborated with cross-functional teams to ensure seamless transition and minimal downtime during migration',
				'Implemented new features and enhancements based on user feedback to improve overall functionality',
				'Optimized backend services for scalability and efficiency to support growing user base'
			],
			progress: 80,
			level: 'Senior',
			skills: [
				'Node.js',
				'React',
				'TypeScript',
				'Firebase',
				'PostgreSQL',
				'GCP',
				'NGINX',
				'System Migration'
			]
		},
		{
			id: 6,
			title: 'Fullstack Developer at PT. IDStar Cipta Teknologi',
			period: 'Jan 2022 - Jan 2023',
			workType: 'Contract (Hybrid)',
			description:
				'Acted as lead replacement in tech meetings at CIMB Niaga. Designed database architecture and created RIPLAY server using Java Spring Boot with React dashboard.',
			icon: 'business_center',
			responsibilities: [
				'Served as lead developer representative in technical meetings with CIMB Niaga, ensuring clear communication of project requirements and progress',
				'Designed and implemented the database architecture for the RIPLAY server, optimizing data storage and retrieval processes',
				'Developed the RIPLAY server using Java Spring Boot, ensuring robust backend functionality and performance',
				'Created a user-friendly React dashboard for monitoring and managing the RIPLAY system',
				'Collaborated closely with cross-functional teams to align technical solutions with business objectives',
				'Conducted code reviews to maintain high code quality standards'
			],
			progress: 75,
			level: 'Mid-Senior',
			skills: [
				'Java Spring Boot',
				'React',
				'Hibernate ORM',
				'Database Architecture',
				'Ant Design',
				'Banking Systems'
			]
		},
		{
			id: 7,
			title: 'Fullstack Web & Flutter Developer at Cranium Indonesia',
			period: 'Sep 2021 - Jan 2022',
			workType: 'Contract (Remote)',
			description:
				'Managed team of 2 developers, created end-to-end applications including MyRehobot and Wingas. Developed transaction and payment features for TokoSrc (Sampoerna Project).',
			icon: 'devices',
			responsibilities: [
				'Managed a team of 2 developers to deliver high-quality web and mobile applications',
				'Developed the MyRehobot application, focusing on user experience and functionality',
				'Created the Wingas app, implementing key features for seamless user interaction',
				'Built transaction and payment processing features for TokoSrc as part of the Sampoerna Project',
				'Collaborated with cross-functional teams to ensure project requirements were met',
				'Conducted code reviews and provided mentorship to junior developers'
			],
			progress: 70,
			level: 'Mid-Level',
			skills: [
				'Flutter',
				'React',
				'Node.js',
				'Team Management',
				'Payment Systems',
				'Mobile Development',
				'Database Design'
			]
		},
		{
			id: 8,
			title: 'Web Developer at Malaysian Private Company',
			period: '2020 - 2021',
			workType: 'Full-time (Remote)',
			description:
				'Developed and maintained WordPress websites for international clients, specializing in SEO optimization, theme customization, and plugin development. Managed website performance, security, and content updates while ensuring optimal search engine visibility and user experience.',
			icon: 'web',
			responsibilities: [
				'Developed and maintained WordPress websites for various international clients',
				'Specialized in SEO optimization to improve website search engine rankings and visibility',
				'Customized WordPress themes to meet specific client design and functionality requirements',
				'Developed custom plugins to extend website capabilities and enhance user experience',
				'Managed website performance, ensuring fast load times and responsiveness',
				'Implemented security measures to protect websites from vulnerabilities and threats',
				'Regularly updated website content and features based on client needs and feedback'
			],
			progress: 60,
			level: 'Junior',
			skills: [
				'WordPress',
				'SEO',
				'PHP',
				'CSS',
				'JavaScript',
				'Theme Development',
				'Plugin Customization',
				'Website Maintenance',
				'Content Management'
			]
		}
	];

	let visibleItems : any[] = [];
	let isAnimating = false;
	let currentIndex = 0;

	// Animation function
	function animateTimeline() {
		if (isAnimating || currentIndex >= timelineItems.length) return;

		isAnimating = true;
		visibleItems = [...visibleItems, timelineItems[currentIndex]];
		currentIndex++;

		setTimeout(() => {
			isAnimating = false;
			if (currentIndex < timelineItems.length) {
				animateTimeline();
			}
		}, 400);
	}

	onMount(() => {
		animateTimeline();
	});

	$: if ($page.url.pathname === '/about-me') {
        setTimeout(() => {
            animateTimeline();
        }, 50);
    }
</script>

<div class="relative mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
	<!-- Header -->
	<div class="mb-8 text-center sm:mb-12">
		<h1
			class="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl lg:text-4xl dark:text-white"
		>
			Career Journey
		</h1>
		<p class="mx-auto max-w-2xl px-2 text-base text-gray-600 sm:text-lg dark:text-gray-300">
			Tracking my professional growth from education to leadership
		</p>
	</div>

	<!-- Timeline -->
	<div class="relative">
		<!-- Timeline line - Hidden on mobile, visible on tablet and desktop -->
		<div
			class="absolute top-0 bottom-0 left-4 hidden w-0.5 transform bg-linear-to-b from-blue-400 to-purple-600 sm:block lg:left-1/2 lg:-translate-x-1/2 dark:from-blue-600 dark:to-purple-800"
		></div>

		<!-- Timeline items -->
		{#each visibleItems as item, index (item.id)}
			<div
				class="timeline-item relative mb-8 flex flex-col items-start transition-all duration-500 ease-out sm:mb-12 lg:flex-row"
				class:lg:flex-row-reverse={index % 2 === 0}
				in:fly={{ y: 30, duration: 500, delay: index * 200 }}
			>
				<!-- Timeline dot - Mobile centered, tablet/desktop aligned with line -->
				<div
					class="absolute top-4 left-4 z-10 h-3 w-3 transform rounded-full border-2 border-white bg-linear-to-br from-blue-500 to-purple-600 shadow-lg sm:left-4 sm:h-4 sm:w-4 sm:border-4 lg:left-1/2 lg:-translate-x-1/2 dark:border-gray-900"
				></div>

				<!-- Icon - Hidden on mobile, visible on tablet and desktop -->
				<div
					class="absolute -top-2 left-0 z-20 hidden h-8 w-8 transform items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 text-white shadow-lg sm:flex sm:h-10 sm:w-10 lg:-top-4 lg:left-1/2 lg:h-12 lg:w-12 lg:-translate-x-1/2 lg:shadow-xl"
				>
					<span class="material-symbols-outlined text-lg sm:text-xl lg:text-xl">{item.icon}</span>
				</div>

				<!-- Content Container -->
				<div class={`ml-12 sm:ml-16 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
					<!-- Content Card -->
					<div
						class="transform rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:rounded-xl sm:p-6 sm:shadow-lg sm:hover:-translate-y-1 sm:hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
					>
						<!-- Title -->
						<h3
							class="mb-2 text-lg leading-tight font-bold text-gray-900 sm:mb-3 sm:text-xl dark:text-white"
						>
							{item.title}
						</h3>

						<!-- Period - Mobile inline, desktop separate -->
						<div class="mb-3 flex flex-col justify-between sm:mb-4 sm:block">
							<span class="text-sm font-medium text-blue-600 dark:text-blue-400">{item.period}</span>
							<p class="mt-2 text-sm font-medium text-white">{item.workType}</p>
						</div>

						<!-- Key Responsibilities -->
						<div class="mb-3">
							<!-- <h4
								class="mb-2 text-sm font-semibold text-gray-900 sm:mb-3 dark:text-white"
							>
								Key Responsibilities
							</h4> -->
							<ul class="mb-4 list-disc list-inside space-y-1 text-sm text-gray-600 sm:mb-6 sm:text-base dark:text-gray-300">
								{#each item.responsibilities as responsibility}
									<li>{responsibility}</li>
								{/each}
							</ul>
						</div>

						<!-- Skills Tags -->
						<div class="flex flex-wrap gap-1.5 sm:gap-2">
							{#each item.skills as skill}
								<span
									class="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium whitespace-nowrap text-blue-800 dark:bg-blue-900 dark:text-blue-200"
								>
									{skill}
								</span>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.timeline-item {
		opacity: 0;
		transform: translateY(20px);
	}

	/* Smooth animations */
	:global(.timeline-item) {
		animation: fadeInUp 0.6s ease-out forwards;
	}

	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Mobile optimizations */
	@media (max-width: 640px) {
		:global(.timeline-item) {
			margin-bottom: 2rem;
		}
	}

	/* Tablet optimizations */
	@media (min-width: 641px) and (max-width: 1024px) {
		:global(.timeline-item) {
			margin-bottom: 3rem;
		}
	}
</style>
