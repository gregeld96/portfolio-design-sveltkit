<script lang="ts">
	import {
		Check,
		Code2,
		Star,
		AlertTriangle,
		Calendar,
		Zap,
		ArrowLeft,
		Clock,
		Users,
		Target,
		ShoppingCart,
		LayoutDashboard,
		Video,
		Stethoscope,
		Truck,
		Utensils,
		Wrench,
		Globe,
		CreditCard,
		FileDigit,
		GraduationCap
	} from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	export let project = {
		id: 1,
		title: 'Headless E-commerce',
		description:
			'Built a headless e-commerce platform using SvelteKit with MongoDB, Go, and multiple third-party integrations including Shopify API, Brevo for email, and Xendit for payments.',
		icon: ShoppingCart,
		detailUrl: '/projects/headless-ecommerce',
		tags: ['SvelteKit', 'MongoDB', 'Golang', 'Shopify API', 'Xendit', 'Brevo', 'Zoho'],
		featured: true,
		category: 'E-commerce',
		technologies: {
			frontend: 'SvelteKit, Tailwind CSS',
			backend: 'Golang, MongoDB',
			integrations: 'Shopify API, Brevo, Xendit, Zoho'
		},
		platformFeatures: [
			'Headless e-commerce architecture',
			'Multi-vendor marketplace support',
			'Product catalog and inventory management',
			'Shopping cart and checkout system',
			'Payment gateway integration',
			'Email marketing automation',
			'Third-party CRM integration',
			'Order tracking and management'
		],
		achievements: [
			'Built scalable headless e-commerce platform from scratch',
			'Integrated multiple payment and service providers',
			'Created seamless multi-vendor marketplace experience',
			'Implemented real-time inventory and order management'
		],
		metrics: {
			performance: '40%',
			engagement: '35%',
			satisfaction: '92%',
			efficiency: '50%',
			conversion: '28%',
			revenue: '45%',
			loadTime: '1.2s',
			uptime: '99.9%'
		},
		challenges: [
			'Integrating multiple third-party payment gateways with different APIs',
			'Managing real-time inventory across multiple vendors',
			'Ensuring platform scalability during peak traffic periods',
			'Maintaining consistent user experience across different devices'
		],
		solutions: [
			'Implemented unified payment gateway abstraction layer',
			'Developed real-time inventory synchronization system',
			'Used microservices architecture for better scalability',
			'Adopted responsive design with progressive enhancement'
		],
		timeline: {
			planning: '3 weeks',
			development: '14 weeks',
			testing: '4 weeks',
			deployment: '2 weeks'
		}
	};

	// Icon mapping
	const iconComponents = {
		ShoppingCart,
		LayoutDashboard,
		Video,
		Stethoscope,
		Truck,
		Utensils,
		Wrench,
		Globe,
		Users,
		CreditCard,
		FileDigit,
		GraduationCap
	};

	// Enhanced project descriptions based on category
	const categoryDescriptions = {
		'E-commerce': `This comprehensive e-commerce solution was architected to handle high-volume transactions while delivering a seamless shopping experience across all devices. The platform integrates multiple payment providers and third-party services to create a robust, scalable marketplace ecosystem capable of supporting thousands of concurrent users.`,
		'Internal Tool': `As a mission-critical internal dashboard, this system was designed to provide real-time business intelligence and operational insights. The migration from third-party solutions to a custom-built platform resulted in significant cost savings and improved data processing capabilities for enterprise-level e-commerce operations.`,
		'Real-time Communication': `This advanced communication platform leverages cutting-edge WebRTC technology to deliver studio-quality video conferencing and interactive webinar experiences. Built with scalability in mind, it supports large-scale virtual events while maintaining exceptional audio-video quality and real-time interactivity.`,
		Healthcare: `A comprehensive healthcare management system that successfully migrated from Firebase to a microservices architecture while maintaining strict compliance with healthcare regulations. The platform seamlessly integrates with national healthcare systems, providing clinics with powerful tools for patient management and telemedicine services.`,
		Logistics: `An enterprise-grade logistics dashboard that revolutionizes package management and delivery coordination. The system integrates multiple third-party logistics providers, offering real-time tracking, route optimization, and automated dispatch capabilities for efficient supply chain management.`,
		Hospitality: `A sophisticated booking and loyalty platform designed specifically for the restaurant industry. The system combines location-based services with real-time availability management to create exceptional dining experiences and drive customer retention through innovative loyalty programs.`,
		'Service Booking': `A full-stack service management platform that digitizes the entire mechanic booking process. From customer scheduling to mechanic dispatch and digital reporting, this system streamlines operations while enhancing customer satisfaction through real-time updates and transparent service tracking.`,
		Government: `An official government portal featuring innovative 360° visualization technology and multi-language support. Built to strict accessibility standards, this platform serves as a comprehensive information hub while providing efficient content management capabilities for ministry staff.`,
		Religious: `A comprehensive church management application that modernizes administrative processes and enhances community engagement. The platform streamlines event management, member coordination, and communication while maintaining the spiritual focus of the organization.`,
		Banking: `A large-scale digital transformation project for a major private bank, implementing microservices architecture to replace paper-based processes. This system dramatically reduces account opening times while ensuring full regulatory compliance and enhanced customer experience.`,
		'Education Technology': `As the lead architect and developer, I built this comprehensive educational ecosystem from the ground up. The multi-tenant platform supports multiple institutions with advanced learning management, event hosting, and community fundraising capabilities, creating a seamless educational marketplace experience.`
	};

	// Dynamic metrics labels based on project category
	$: metricLabels = {
		performance:
			project.category === 'Education Technology'
				? 'Platform Performance'
				: project.category === 'Healthcare'
					? 'System Performance'
					: 'Performance Improvement',
		engagement:
			project.category === 'Education Technology' ? 'User Engagement' : 'User Engagement Increase',
		satisfaction: 'User Satisfaction Rate',
		efficiency: 'Operational Efficiency',
		conversion: 'Conversion Rate Increase',
		revenue: 'Revenue Growth',
		loadTime: 'Average Load Time',
		uptime: 'System Uptime',
		costReduction: 'Cost Reduction',
		dataProcessing: 'Data Processing Speed',
		latency: 'Latency Reduction',
		stability: 'System Stability',
		appointmentTime: 'Appointment Processing Time',
		dataSecurity: 'Data Security Compliance',
		compliance: 'Regulatory Compliance',
		integrationSuccess: 'Integration Success Rate',
		deliveryTime: 'Delivery Time Reduction',
		trackingAccuracy: 'Tracking Accuracy',
		automation: 'Process Automation',
		costSavings: 'Cost Savings',
		courseCompletion: 'Course Completion Rate',
		userRetention: 'User Retention Rate',
		systemUptime: 'System Uptime',
		pageLoad: 'Page Load Time',
		accessibility: 'Accessibility Compliance',
		multilingual: 'Supported Languages',
		contentUpdates: 'Content Update Speed',
		eventParticipation: 'Event Participation',
		adminEfficiency: 'Admin Efficiency',
		memberEngagement: 'Member Engagement',
		notificationOpenRate: 'Notification Open Rate',
		paymentSuccess: 'Payment Success Rate',
		cartAbandonment: 'Cart Abandonment Reduction',
		salesGrowth: 'Sales Growth',
		fraudPrevention: 'Fraud Prevention',
		processingTime: 'Processing Time Reduction',
		paperReduction: 'Paper Process Reduction',
		complianceAccuracy: 'Compliance Accuracy',
		customerSatisfaction: 'Customer Satisfaction',
		bookings: 'Booking Increase',
		retention: 'Customer Retention',
		noShowReduction: 'No-Show Reduction',
		userSatisfaction: 'User Satisfaction',
		responseTime: 'Response Time Improvement',
		mechanicEfficiency: 'Mechanic Efficiency',
		digitization: 'Process Digitization'
	};

	// Color mapping for metrics
	const metricColors = [
		'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400',
		'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700 text-green-600 dark:text-green-400',
		'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400',
		'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-700 text-orange-600 dark:text-orange-400',
		'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-700 text-red-600 dark:text-red-400',
		'from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400',
		'from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border-teal-200 dark:border-teal-700 text-teal-600 dark:text-teal-400',
		'from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border-amber-200 dark:border-amber-700 text-amber-600 dark:text-amber-400'
	];

	// Function to get color by index
	function getMetricColor(index: number) {
		return metricColors[index % metricColors.length];
	}

	// Navigation function
	function goBack() {
		window.history.back();
	}

	// Smooth scroll to section
	function scrollToSection(sectionId) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	// Animation states
	let animatedElements = new Set();

	// Intersection Observer for scroll animations
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !animatedElements.has(entry.target)) {
						animatedElements.add(entry.target);
						entry.target.classList.add('animate-in');
					}
				});
			},
			{ threshold: 0.1 }
		);

		// Observe all animatable elements
		document.querySelectorAll('.scroll-animate').forEach((el) => {
			observer.observe(el);
		});

		return () => observer.disconnect();
	});

  // Function to open WhatsApp with project context
  function contactViaWhatsApp(): void {
    const phoneNumber = "+628123456789";
    const projectName = project.title;
    const projectCategory = project.category;
    
    const message = `Hello! I'm interested in your "${projectName}" project (${projectCategory}). I'd like to discuss how we can work together on similar projects.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  }
</script>

<svelte:head>
	<title>{project.title} | Project Details</title>
	<meta name="description" content={project.description} />
</svelte:head>

<main class="min-h-screen bg-gray-50 dark:bg-gray-900">
	<!-- Navigation Header -->
	<header
		class="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md transition-all duration-300 dark:border-gray-700 dark:bg-gray-900/80"
		in:fade={{ duration: 500 }}
	>
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<button
					on:click={goBack}
					class="group flex items-center gap-2 text-gray-600 transition-all duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
				>
					<ArrowLeft class="h-5 w-5 transition-transform group-hover:-translate-x-1" />
					<span class="font-medium">Back to Projects</span>
				</button>

				<div class="flex items-center gap-4">
					<span
						class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 transition-colors dark:bg-blue-900/30 dark:text-blue-300"
					>
						{project.category}
					</span>
					{#if project.featured}
						<span
							class="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 transition-colors dark:bg-yellow-900/30 dark:text-yellow-300"
						>
							<Zap class="h-4 w-4" />
							Featured
						</span>
					{/if}
				</div>
			</div>
		</div>
	</header>

	<div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<!-- Hero Section -->
			<section class="scroll-animate mb-16">
				<div class="mb-12 text-center" in:fade={{ delay: 200, duration: 800 }}>
					<h1
						class="mb-6 text-4xl leading-tight font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white"
					>
						{project.title}
					</h1>
					<p class="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-400">
						{project.description}
					</p>
				</div>
			</section>

			<!-- Quick Stats -->
			<div
				class="scroll-animate mb-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4"
				in:fade={{ delay: 600, duration: 800 }}
			>
				<div
					class="rounded-2xl border border-gray-200 bg-white p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg sm:p-6 dark:border-gray-700 dark:bg-gray-800"
				>
					<Clock class="mx-auto mb-2 h-6 w-6 text-blue-500 sm:mb-3 sm:h-8 sm:w-8" />
					<div class="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
						{project.timeline.development}
					</div>
					<div class="text-xs text-gray-500 sm:text-sm dark:text-gray-400">Development</div>
				</div>
				<div
					class="rounded-2xl border border-gray-200 bg-white p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg sm:p-6 dark:border-gray-700 dark:bg-gray-800"
				>
					<Target class="mx-auto mb-2 h-6 w-6 text-green-500 sm:mb-3 sm:h-8 sm:w-8" />
					<div class="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
						{project.achievements.length}+
					</div>
					<div class="text-xs text-gray-500 sm:text-sm dark:text-gray-400">Key Achievements</div>
				</div>
				<div
					class="rounded-2xl border border-gray-200 bg-white p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg sm:p-6 dark:border-gray-700 dark:bg-gray-800"
				>
					<Users class="mx-auto mb-2 h-6 w-6 text-purple-500 sm:mb-3 sm:h-8 sm:w-8" />
					<div class="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
						{project.platformFeatures.length}
					</div>
					<div class="text-xs text-gray-500 sm:text-sm dark:text-gray-400">Platform Features</div>
				</div>
				<div
					class="rounded-2xl border border-gray-200 bg-white p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg sm:p-6 dark:border-gray-700 dark:bg-gray-800"
				>
					<Code2 class="mx-auto mb-2 h-6 w-6 text-orange-500 sm:mb-3 sm:h-8 sm:w-8" />
					<div class="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
						{project.tags.length}
					</div>
					<div class="text-xs text-gray-500 sm:text-sm dark:text-gray-400">Technologies</div>
				</div>
			</div>

			<!-- Main Content Grid -->
			<div class="mb-16 grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-4">
				<!-- Main Content (3/4 width) -->
				<div class="space-y-12 sm:space-y-16 lg:col-span-3">
					<!-- Project Overview -->
					<section id="overview" class="scroll-animate scroll-mt-24">
						<h2
							class="mb-6 border-b border-gray-200 pb-4 text-3xl font-bold text-gray-900 sm:mb-8 sm:text-4xl dark:border-gray-700 dark:text-white"
						>
							Project Overview
						</h2>
						<div class="prose prose-lg dark:prose-invert max-w-none">
							<p
								class="mb-6 text-lg leading-relaxed text-gray-600 sm:mb-8 sm:text-xl dark:text-gray-400"
							>
								{project.description}
							</p>

							<!-- Enhanced category-based description -->
							<p class="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
								{categoryDescriptions[project.category]}
							</p>
						</div>
					</section>

					<!-- Platform Features -->
					<section id="features" class="scroll-animate scroll-mt-24">
						<h2
							class="mb-6 border-b border-gray-200 pb-4 text-3xl font-bold text-gray-900 sm:mb-8 sm:text-4xl dark:border-gray-700 dark:text-white"
						>
							Platform Features
						</h2>
						<div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
							{#each project.platformFeatures as feature, index}
								<div
									class="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:gap-4 sm:rounded-2xl sm:p-6 dark:border-gray-700 dark:bg-gray-800"
									in:fade={{ delay: index * 100, duration: 600 }}
								>
									<div
										class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-purple-600 transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10 sm:rounded-xl"
									>
										<span class="text-sm font-semibold text-white">{index + 1}</span>
									</div>
									<div>
										<p
											class="text-sm leading-relaxed font-medium text-gray-700 sm:text-base dark:text-gray-300"
										>
											{feature}
										</p>
									</div>
								</div>
							{/each}
						</div>
					</section>

					<!-- Key Achievements -->
					<section id="achievements" class="scroll-animate scroll-mt-24">
						<h2
							class="mb-6 border-b border-gray-200 pb-4 text-3xl font-bold text-gray-900 sm:mb-8 sm:text-4xl dark:border-gray-700 dark:text-white"
						>
							Key Achievements
						</h2>
						<div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
							{#each project.achievements as achievement, index}
								<div
									class="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:shadow-md sm:gap-4 sm:rounded-2xl sm:p-6 dark:border-gray-700 dark:bg-gray-800"
									in:fade={{ delay: index * 100 + 200, duration: 600 }}
								>
									<div
										class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 transition-transform group-hover:scale-110 sm:h-8 sm:w-8 dark:bg-green-900/30"
									>
										<Check class="h-3 w-3 text-green-600 sm:h-4 sm:w-4 dark:text-green-400" />
									</div>
									<div>
										<p
											class="text-sm leading-relaxed text-gray-700 sm:text-base dark:text-gray-300"
										>
											{achievement}
										</p>
									</div>
								</div>
							{/each}
						</div>
					</section>

					<!-- Technical Implementation -->
					<section id="technical" class="scroll-animate scroll-mt-24">
						<h2
							class="mb-6 border-b border-gray-200 pb-4 text-3xl font-bold text-gray-900 sm:mb-8 sm:text-4xl dark:border-gray-700 dark:text-white"
						>
							Technical Implementation
						</h2>
						<div class="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
							{#each Object.entries(project.technologies) as [category, tech], index}
								<div
									class="space-y-3 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:shadow-lg sm:space-y-4 sm:rounded-2xl sm:p-6 dark:border-gray-700 dark:bg-gray-800"
									in:fade={{ delay: index * 150 + 400, duration: 600 }}
								>
									<h4
										class="flex items-center gap-2 text-lg font-semibold text-gray-900 capitalize sm:text-xl dark:text-white"
									>
										<div class="h-2 w-2 rounded-full bg-blue-500 sm:h-3 sm:w-3"></div>
										{category
											.split('_')
											.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
											.join(' ')}
									</h4>
									<p class="text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-400">
										{tech}
									</p>
								</div>
							{/each}
						</div>
					</section>

					<!-- Challenges & Solutions -->
					<section id="challenges" class="scroll-animate scroll-mt-24">
						<h2
							class="mb-6 border-b border-gray-200 pb-4 text-3xl font-bold text-gray-900 sm:mb-8 sm:text-4xl dark:border-gray-700 dark:text-white"
						>
							Challenges & Solutions
						</h2>
						<div class="space-y-4 sm:space-y-6">
							{#each project.challenges as challenge, index}
								<div
									class="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2"
									in:slide={{ delay: index * 200, duration: 800 }}
								>
									<!-- Challenge -->
									<div
										class="rounded-xl border border-red-200 bg-red-50 p-4 transition-all duration-300 hover:shadow-md sm:rounded-2xl sm:p-6 dark:border-red-700 dark:bg-red-900/20"
									>
										<div class="mb-3 flex items-center gap-3 sm:mb-4">
											<AlertTriangle class="h-5 w-5 text-red-500 sm:h-6 sm:w-6" />
											<h5 class="text-base font-semibold text-red-800 sm:text-lg dark:text-red-300">
												Challenge
											</h5>
										</div>
										<p class="text-sm leading-relaxed text-red-700 sm:text-base dark:text-red-400">
											{challenge}
										</p>
									</div>

									<!-- Solution -->
									<div
										class="rounded-xl border border-green-200 bg-green-50 p-4 transition-all duration-300 hover:shadow-md sm:rounded-2xl sm:p-6 dark:border-green-700 dark:bg-green-900/20"
									>
										<div class="mb-3 flex items-center gap-3 sm:mb-4">
											<Check class="h-5 w-5 text-green-500 sm:h-6 sm:w-6" />
											<h5
												class="text-base font-semibold text-green-800 sm:text-lg dark:text-green-300"
											>
												Solution
											</h5>
										</div>
										<p
											class="text-sm leading-relaxed text-green-700 sm:text-base dark:text-green-400"
										>
											{project.solutions[index]}
										</p>
									</div>
								</div>
							{/each}
						</div>
					</section>
				</div>

				<!-- Sidebar (1/4 width) -->
				<aside class="space-y-6 sm:space-y-8">
					<!-- Quick Navigation -->
					<div class="scroll-animate sticky top-32 space-y-4">
						<div
							class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 sm:rounded-2xl sm:p-6 dark:border-gray-700 dark:bg-gray-800"
						>
							<h4
								class="mb-3 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg dark:text-white"
							>
								Quick Navigation
							</h4>
							<nav class="space-y-1 sm:space-y-2">
								{#each ['overview', 'features', 'achievements', 'technical', 'challenges', 'metrics'] as section}
									<button
										on:click={() => scrollToSection(section)}
										class="w-full rounded-lg px-2 py-2 text-left text-xs text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 sm:px-3 sm:text-sm dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										{section
											.split('_')
											.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
											.join(' ')}
									</button>
								{/each}
							</nav>
						</div>

						<!-- Tech Stack -->
						<div
							class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 sm:rounded-2xl sm:p-6 dark:border-gray-700 dark:bg-gray-800"
						>
							<h4
								class="mb-3 flex items-center gap-2 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg dark:text-white"
							>
								<Code2 class="h-4 w-4 text-blue-500 sm:h-5 sm:w-5" />
								Tech Stack
							</h4>
							<div class="flex flex-wrap gap-1 sm:gap-2">
								{#each project.tags as tag}
									<span
										class={`rounded-lg px-2 py-1 text-xs font-medium 
                      ${
												['React', 'Next.js', 'SvelteKit', 'Flutter', 'React Native'].includes(tag)
													? 'border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
													: [
																'Node.js',
																'Golang',
																'Express.js',
																'Laravel',
																'Java Spring Boot'
														  ].includes(tag)
														? 'border border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-300'
														: ['MongoDB', 'PostgreSQL', 'Prisma'].includes(tag)
															? 'border border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-800 dark:bg-purple-900/20 dark:text-purple-300'
															: 'border border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300'
											}`}
									>
										{tag}
									</span>
								{/each}
							</div>
						</div>

						<!-- Project Highlights -->
						<div
							class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 sm:rounded-2xl sm:p-6 dark:border-gray-700 dark:bg-gray-800"
						>
							<h4
								class="mb-3 flex items-center gap-2 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg dark:text-white"
							>
								<Star class="h-4 w-4 text-yellow-500 sm:h-5 sm:w-5" />
								Key Highlights
							</h4>
							<ul class="space-y-2 sm:space-y-3">
								{#each project.platformFeatures.slice(0, 5) as feature}
									<li
										class="flex items-start gap-2 text-xs text-gray-600 sm:gap-3 sm:text-sm dark:text-gray-400"
									>
										<div
											class="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:h-5 sm:w-5 dark:bg-blue-900/30"
										>
											<Check class="h-2 w-2 text-blue-600 sm:h-3 sm:w-3 dark:text-blue-400" />
										</div>
										<span class="leading-relaxed">{feature}</span>
									</li>
								{/each}
							</ul>
						</div>

						<!-- Project Timeline -->
						<div
							class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 sm:rounded-2xl sm:p-6 dark:border-gray-700 dark:bg-gray-800"
						>
							<h4
								class="mb-3 flex items-center gap-2 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg dark:text-white"
							>
								<Calendar class="h-4 w-4 text-green-500 sm:h-5 sm:w-5" />
								Development Timeline
							</h4>
							<div class="space-y-2 text-xs sm:space-y-3 sm:text-sm">
								{#each Object.entries(project.timeline) as [phase, duration]}
									<div
										class="flex items-center justify-between border-b border-gray-100 py-1 last:border-b-0 sm:py-2 dark:border-gray-700"
									>
										<span class="text-gray-600 capitalize dark:text-gray-400">{phase}</span>
										<span class="font-medium text-gray-700 dark:text-gray-300">{duration}</span>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</aside>
			</div>

			<!-- Impact & Metrics Section -->
			<section id="metrics" class="scroll-animate mb-16 scroll-mt-24">
				<div class="mb-8 text-center sm:mb-12">
					<h2 class="mb-3 text-3xl font-bold text-gray-900 sm:mb-4 sm:text-4xl dark:text-white">
						Project Impact & Metrics
					</h2>
					<p class="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
						Measurable results and performance indicators that demonstrate the success of this
						project
					</p>
				</div>

				<div class="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
					{#each Object.entries(project.metrics).slice(0, 4) as [key, value], index}
						<div
							class="rounded-xl p-6 sm:rounded-2xl sm:p-8 {getMetricColor(
								index
							)} transform text-center transition-all duration-500 hover:scale-105 hover:shadow-xl"
							in:fade={{ delay: index * 150, duration: 800 }}
						>
							<p class="mb-3 text-3xl font-bold sm:mb-4 sm:text-5xl">{value}</p>
							<p class="text-sm font-medium sm:text-lg">
								{metricLabels[key] ||
									key
										.split('_')
										.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
										.join(' ')}
							</p>
						</div>
					{/each}
				</div>

				<!-- Additional metrics row -->
				{#if Object.keys(project.metrics).length > 4}
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
						{#each Object.entries(project.metrics).slice(4) as [key, value], index}
							<div
								class="rounded-xl p-6 sm:rounded-2xl sm:p-8 {getMetricColor(
									index + 4
								)} transform text-center transition-all duration-500 hover:scale-105 hover:shadow-xl"
								in:fade={{ delay: (index + 4) * 150, duration: 800 }}
							>
								<p class="mb-3 text-3xl font-bold sm:mb-4 sm:text-5xl">{value}</p>
								<p class="text-sm font-medium sm:text-lg">
									{metricLabels[key] ||
										key
											.split('_')
											.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
											.join(' ')}
								</p>
							</div>
						{/each}
					</div>
				{/if}
			</section>

			<!-- Call to Action -->
			<section class="scroll-animate mb-16">
				<div
					class="rounded-2xl border border-gray-200 bg-linear-to-r from-gray-50 to-blue-50 p-8 text-center transition-all duration-500 hover:shadow-2xl sm:rounded-3xl sm:p-12 dark:border-gray-700 dark:from-gray-800 dark:to-blue-900/20"
					in:fade={{ delay: 800, duration: 1000 }}
				>
					<h3 class="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl dark:text-white">
						Ready to Build Something Amazing?
					</h3>
					<p
						class="mx-auto mb-6 max-w-2xl text-lg text-gray-600 sm:mb-8 sm:text-xl dark:text-gray-400"
					>
						Let's discuss how we can bring your vision to life with cutting-edge technology and
						proven development practices.
					</p>
					<div class="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
						<button
  on:click={contactViaWhatsApp}
  class="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl sm:rounded-xl sm:px-8 sm:py-4 sm:text-lg"
>
  Discuss This Project
</button>
						<button
							on:click={goBack}
							class="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-50 sm:rounded-xl sm:px-8 sm:py-4 sm:text-lg dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
						>
							View More Projects
						</button>
					</div>
				</div>
			</section>
		</div>
	</div>
</main>

<style>
	.prose {
		line-height: 1.75;
	}
	.prose p {
		margin-bottom: 1.25em;
	}

	/* Smooth scrolling for the entire page */
	html {
		scroll-behavior: smooth;
	}

	/* Custom scrollbar */
	::-webkit-scrollbar {
		width: 6px;
	}

	::-webkit-scrollbar-track {
		background: #f1f5f9;
	}

	.dark ::-webkit-scrollbar-track {
		background: #1e293b;
	}

	::-webkit-scrollbar-thumb {
		background: #cbd5e1;
		border-radius: 3px;
	}

	.dark ::-webkit-scrollbar-thumb {
		background: #475569;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #94a3b8;
	}

	/* Scroll animations */
	.scroll-animate {
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease-out;
	}

	.scroll-animate.animate-in {
		opacity: 1;
		transform: translateY(0);
	}

	/* Hover animations */
	.hover-lift {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.hover-lift:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
	}

	/* Mobile optimizations */
	@media (max-width: 640px) {
		.container {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}

	/* Reduced motion for accessibility */
	@media (prefers-reduced-motion: reduce) {
		.scroll-animate {
			transition: none;
			opacity: 1;
			transform: none;
		}

		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
		}
	}
</style>
