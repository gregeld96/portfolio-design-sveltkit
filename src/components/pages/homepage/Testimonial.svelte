<script lang="ts">
	import { Quote, MessageSquare, MessageCircle } from 'lucide-svelte';
	import { onMount } from 'svelte';

	const testimonials = [
		{
			quote:
				'“Working with Greg was transformative. His focus on system stability and long-term scalability ensured our platform runs smoothly even under heavy growth. Truly a rare engineer who builds for the future.”',
			name: 'Diaz Gotama',
			title: 'Founder, Perigigi',
			gradientFrom: 'from-indigo-500/20',
			gradientTo: 'to-purple-600/20',
			icon: Quote,
			iconColor: 'text-indigo-300',
			mobileDelay: 'delay-100',
			tabletDelay: 'delay-100',
			desktopDelay: 'delay-100'
		},
		{
			quote:
				'"Greg technical depth and clean architecture mindset helped us scale Tanyo faster than we imagined. He doesn`t just code — he engineers systems that stay robust and secure for years.”',
			name: 'Avan Fadli',
			title: 'CEO, Tanyo & Twillink',
			gradientFrom: 'from-green-500/20',
			gradientTo: 'to-teal-500/20',
			icon: MessageCircle,
			iconColor: 'text-green-300',
			mobileDelay: 'delay-300',
			tabletDelay: 'delay-200',
			desktopDelay: 'delay-200'
		},
		{
			quote:
				'“When it comes to fullstack excellence, Greg stands out. His attention to performance, reliability, and security gives us confidence to innovate without worrying about technical debt.”',
			name: 'Leo',
			title: 'Co-Founder, Feeder',
			gradientFrom: 'from-sky-500/20',
			gradientTo: 'to-blue-600/20',
			icon: MessageSquare,
			iconColor: 'text-sky-300',
			mobileDelay: 'delay-500',
			tabletDelay: 'delay-300',
			desktopDelay: 'delay-300'
		}
	];

	let animated = $state(false);
	let containerRef: HTMLDivElement;
	let screenSize = $state('mobile'); // 'mobile', 'tablet', 'desktop'
	
	// Add typewriter effect state
	let typedQuotes = $state<string[]>([]);
	let currentTypingIndex = $state(0);

	onMount(() => {
		// Check screen size on mount and resize
		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animated = true;
						// Start typewriter effect
						startTypewriterEffect();
					}
				});
			},
			{ 
				threshold: screenSize === 'mobile' ? 0.1 : 
						  screenSize === 'tablet' ? 0.15 : 0.2 
			}
		);

		if (containerRef) {
			observer.observe(containerRef);
		}

		return () => {
			if (containerRef) {
				observer.unobserve(containerRef);
			}
			window.removeEventListener('resize', checkScreenSize);
		};
	});

	function checkScreenSize() {
		const width = window.innerWidth;
		if (width < 768) {
			screenSize = 'mobile';
		} else if (width >= 768 && width < 1024) {
			screenSize = 'tablet';
		} else {
			screenSize = 'desktop';
		}
	}

	function startTypewriterEffect() {
		// Adjust typing speed and delays based on screen size
		const typingSpeed = screenSize === 'mobile' ? 35 : 
						  screenSize === 'tablet' ? 40 : 45;
		const staggerDelay = screenSize === 'mobile' ? 250 : 
						   screenSize === 'tablet' ? 200 : 150;
		
		typedQuotes = testimonials.map(() => '');
		currentTypingIndex = 0;
		typeNextQuote(typingSpeed, staggerDelay);
	}

	function typeNextQuote(typingSpeed: number, staggerDelay: number) {
		if (currentTypingIndex >= testimonials.length) return;

		const testimonial = testimonials[currentTypingIndex];
		const words = testimonial.quote.split(' ');
		let currentWordIndex = 0;
		let currentText = '';

		const typeInterval = setInterval(() => {
			if (currentWordIndex < words.length) {
				currentText += (currentWordIndex === 0 ? '' : ' ') + words[currentWordIndex];
				typedQuotes[currentTypingIndex] = currentText;
				currentWordIndex++;
			} else {
				clearInterval(typeInterval);
				currentTypingIndex++;
				setTimeout(() => typeNextQuote(typingSpeed, staggerDelay), staggerDelay);
			}
		}, typingSpeed);
	}
</script>

<style>
	.testimonial-card {
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.testimonial-card.animate-in {
		opacity: 1;
		transform: translateY(0);
	}

	/* Mobile delays */
	.testimonial-card:nth-child(1) { transition-delay: 0.1s; }
	.testimonial-card:nth-child(2) { transition-delay: 0.3s; }
	.testimonial-card:nth-child(3) { transition-delay: 0.5s; }

	/* Tablet delays */
	@media (min-width: 768px) and (max-width: 1023px) {
		.testimonial-card:nth-child(1) { transition-delay: 0.1s; }
		.testimonial-card:nth-child(2) { transition-delay: 0.2s; }
		.testimonial-card:nth-child(3) { transition-delay: 0.3s; }
	}

	/* Desktop delays */
	@media (min-width: 1024px) {
		.testimonial-card:nth-child(1) { transition-delay: 0.1s; }
		.testimonial-card:nth-child(2) { transition-delay: 0.15s; }
		.testimonial-card:nth-child(3) { transition-delay: 0.2s; }
	}

	/* Typewriter cursor effect */
	.typing-cursor::after {
		content: '|';
		animation: blink 1s infinite;
		color: rgba(255, 255, 255, 0.7);
	}

	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}

	/* Mobile optimizations */
	.mobile-text { font-size: 0.95rem; line-height: 1.5; }
	.mobile-icon { width: 4rem; height: 4rem; top: -1rem; right: -1rem; }
	.mobile-padding { padding: 1.25rem; }
	.mobile-min-height { min-height: 260px; }

	/* Tablet optimizations */
	.tablet-text { font-size: 1rem; line-height: 1.6; }
	.tablet-icon { width: 5rem; height: 5rem; top: -1.5rem; right: -1.5rem; }
	.tablet-padding { padding: 1.5rem; }

	/* Desktop optimizations */
	.desktop-text { font-size: 1.125rem; line-height: 1.7; }
	.desktop-icon { width: 6rem; height: 6rem; top: -2rem; right: -2rem; }
	.desktop-padding { padding: 1.5rem; }
</style>

<div class="mt-10 flex flex-col gap-6 md:mt-14 md:gap-10 lg:mt-16 lg:gap-12" bind:this={containerRef}>
	<div class="flex flex-col items-start gap-3 text-left md:gap-4">
		<h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
			Kind Words From Collaborators
		</h2>
	</div>
	
	<!-- Mobile: Horizontal scroll (under 768px) -->
	<div class="block md:hidden">
		<div class="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide">
			{#each testimonials as { quote, name, title, gradientFrom, gradientTo, icon: Icon, iconColor, mobileDelay }, index}
				<div class="w-[85vw] shrink-0 snap-center sm:w-[80vw]">
					<div
						class="testimonial-card mobile-min-height mobile-padding group relative flex flex-col justify-between overflow-hidden rounded-xl bg-linear-to-br {gradientFrom} {gradientTo} shadow-xl transition-all duration-300 {animated ? 'animate-in' : ''}"
					>
						<div
							class="mobile-icon absolute opacity-10 transition-all duration-300 group-hover:scale-110 group-hover:opacity-20 {iconColor}"
						>
							<Icon size={48} strokeWidth={1} />
						</div>
						<blockquote class="mobile-text relative z-10 font-medium text-white">
							{#if typedQuotes[index]}
								{typedQuotes[index]}
								{#if currentTypingIndex === index}<span class="typing-cursor"></span>{/if}
							{:else}
								{quote}
							{/if}
						</blockquote>
						<div class="relative z-10 mt-4">
							<p class="text-sm font-bold text-white sm:text-base">{name}</p>
							<p class="text-xs text-gray-400 sm:text-sm">{title}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<!-- Mobile scroll indicator -->
		<div class="mt-4 flex justify-center gap-2">
			{#each testimonials as _, index}
				<div class="h-1.5 w-1.5 rounded-full bg-white/30"></div>
			{/each}
		</div>
	</div>
	
	<!-- Tablet: 2-column grid (768px - 1023px) -->
	<div class="hidden grid-cols-1 gap-6 md:grid lg:hidden">
		{#each testimonials as { quote, name, title, gradientFrom, gradientTo, icon: Icon, iconColor, tabletDelay }, index}
			<div
				class="testimonial-card tablet-min-height tablet-padding group relative flex flex-col justify-between overflow-hidden rounded-xl bg-linear-to-br {gradientFrom} {gradientTo} shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl {animated ? 'animate-in' : ''}"
			>
				<div
					class="tablet-icon absolute opacity-10 transition-all duration-300 group-hover:scale-110 group-hover:opacity-20 {iconColor}"
				>
					<Icon size={64} strokeWidth={1} />
				</div>
				<blockquote class="tablet-text relative z-10 font-medium text-white">
					{#if typedQuotes[index]}
						{typedQuotes[index]}
						{#if currentTypingIndex === index}<span class="typing-cursor"></span>{/if}
					{:else}
						{quote}
					{/if}
				</blockquote>
				<div class="relative z-10 mt-6">
					<p class="text-base font-bold text-white md:text-lg">{name}</p>
					<p class="text-sm text-gray-400">{title}</p>
				</div>
			</div>
		{/each}
	</div>
	
	<!-- Desktop: 3-column grid (1024px+) -->
	<div class="hidden grid-cols-1 gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
		{#each testimonials as { quote, name, title, gradientFrom, gradientTo, icon: Icon, iconColor, desktopDelay }, index}
			<div
				class="testimonial-card group relative flex flex-col justify-between overflow-hidden rounded-xl bg-linear-to-br {gradientFrom} {gradientTo} p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl {animated ? 'animate-in' : ''}"
			>
				<div
					class="desktop-icon absolute opacity-10 transition-all duration-300 group-hover:scale-110 group-hover:opacity-20 {iconColor}"
				>
					<Icon size={80} strokeWidth={1} />
				</div>
				<blockquote class="desktop-text relative z-10 font-medium text-white">
					{#if typedQuotes[index]}
						{typedQuotes[index]}
						{#if currentTypingIndex === index}<span class="typing-cursor"></span>{/if}
					{:else}
						{quote}
					{/if}
				</blockquote>
				<div class="relative z-10 mt-6">
					<p class="text-lg font-bold text-white">{name}</p>
					<p class="text-sm text-gray-400">{title}</p>
				</div>
			</div>
		{/each}
	</div>
</div>