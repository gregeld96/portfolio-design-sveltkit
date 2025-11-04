<script lang="ts">
    import { Stethoscope, Users, Smartphone, ArrowRight, Code, Database, Cloud, Network, Video, Shield, Globe } from 'lucide-svelte';
    import { onMount } from 'svelte';

    const projects = [
        {
            icon: Stethoscope,
            title: 'Perigigi - Electronic Medical Record Platform',
            subtitle: 'Full-Stack Freelance / Founding Engineer',
			description:
				'As a founding engineer, I built Perigigi — an electronic medical record (EMR) platform designed by Indonesian dentists to simplify clinic operations and enhance patient care. Integrated with Indonesia’s SatuSehat (Ministry of Health) and BPJS Kesehatan systems, Perigigi empowers dental professionals to manage records, services, and patient data securely through both web and mobile apps.',
			gradientFrom: 'from-blue-600/20',
            gradientTo: 'to-teal-500/20',
            techStack: [
                { name: 'React', icon: Code },
                { name: 'Node.js', icon: Code },
                { name: 'Firebase', icon: Cloud },
                { name: 'PostgreSQL', icon: Database },
                { name: 'React Native', icon: Smartphone }
            ],
            features: [
                { text: 'Integrated with SatuSehat & BPJS', icon: Shield },
                { text: 'Multi Platform Syncronization (Web & Mobile)', icon: Smartphone },
                { text: '95% Stability with modern Tech Stack', icon: Globe }
            ],
            delay: 'delay-100'
        },
        {
            icon: Users,
            title: 'Tanyo - Decentralized Consultation & Learning Platform',
            subtitle: 'Full-Stack Freelance Engineer',
			description:
				'Led development as a full-stack freelance engineer for TANYO, a decentralized social platform where experts can sell online consultations, courses, webinars, and video calls. The app integrates real-time WebRTC communication, and scalable microservices — helping professionals connect, teach, and grow their audience globally.',
            gradientFrom: 'from-purple-500/20',
            gradientTo: 'to-indigo-500/20',
            techStack: [
                { name: 'MongoDB', icon: Database },
                { name: 'Microservice', icon: Network },
                { name: 'Node.js', icon: Code },
                { name: 'React.js', icon: Code },
                { name: 'React Native', icon: Smartphone },
                { name: 'WebRTC', icon: Video },
                { name: 'Socket.io', icon: Network }
            ],
            features: [
                { text: 'Global Time Syncronization', icon: Globe },
                { text: 'Secure Video & Booking Event', icon: Shield },
                { text: 'Stable Real-time Communication', icon: Video }
            ],
            delay: 'delay-200'
        }
    ];

    let animated = $state(false);
    let containerRef: HTMLDivElement;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animated = true;
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (containerRef) {
            observer.observe(containerRef);
        }

        return () => {
            if (containerRef) {
                observer.unobserve(containerRef);
            }
        };
    });
</script>

<style>
    .project-card {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
        transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .project-card.animate-in {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    .project-icon {
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    }

    .group:hover .project-icon {
        transform: scale(1.1) rotate(5deg);
        filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.3));
    }

    .tech-icon, .feature-icon {
        transition: transform 0.3s ease;
    }

    .tech-pill:hover .tech-icon,
    .feature-item:hover .feature-icon {
        transform: scale(1.2);
    }

    /* Mobile delays */
    .project-card:nth-child(1) { transition-delay: 0.1s; }
    .project-card:nth-child(2) { transition-delay: 0.2s; }

    /* Tablet delays */
    @media (min-width: 768px) and (max-width: 1023px) {
        .project-card:nth-child(1) { transition-delay: 0.1s; }
        .project-card:nth-child(2) { transition-delay: 0.15s; }
    }

    /* Desktop delays */
    @media (min-width: 1024px) {
        .project-card:nth-child(1) { transition-delay: 0.1s; }
        .project-card:nth-child(2) { transition-delay: 0.2s; }
    }

    /* Line clamp for better text control */
    .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>

<div class="flex flex-col gap-8 mt-16 md:gap-10 md:mt-20" bind:this={containerRef}>
    <!-- Header Section -->
    <div class="flex flex-col gap-3 text-left items-start md:gap-4">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            <span class="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Featured Projects</span> &amp; Case Studies
        </h2>
        <p class="text-base text-white/70 sm:text-lg md:text-xl leading-relaxed">
            A showcase of turning complex problems into beautiful, impactful products.
        </p>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
        {#each projects as { icon: Icon, title, subtitle, description, gradientFrom, gradientTo, techStack, features, delay }, index}
            <div 
                class="project-card group relative flex flex-col overflow-hidden rounded-2xl bg-linear-to-br {gradientFrom} {gradientTo} p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl sm:p-7 {animated ? 'animate-in' : ''}"
            >
                <div class="flex items-start gap-4 mb-4">
                    <div class="shrink-0">
                        <div class="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                            <Icon 
                                size={32} 
                                strokeWidth={1.5} 
                                class="project-icon text-white"
                            />
                        </div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h3 class="text-xl font-bold text-white sm:text-2xl line-clamp-2">{title}</h3>
                        <p class="text-sm text-white/70 mt-1 line-clamp-1">{subtitle}</p>
                    </div>
                </div>

                <!-- Description -->
                <div class="mb-6">
                    <p class="text-sm text-white/80 leading-relaxed line-clamp-6 sm:text-base sm:line-clamp-5">
                        {description}
                    </p>
                </div>

                <!-- Key Features -->
                <div class="mb-6 space-y-3">
                    <h4 class="text-sm font-semibold text-white">Key Responsibilities</h4>
                    <div class="space-y-2">
                        {#each features as { text, icon: FeatureIcon }}
                            <div class="feature-item flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200">
                                <FeatureIcon size={16} class="feature-icon shrink-0" />
                                <span class="text-sm">{text}</span>
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- Tech Stack -->
                <div>
                    <h4 class="text-sm font-semibold text-white mb-3">Tech Stack</h4>
                    <div class="flex flex-wrap gap-2">
                        {#each techStack as { name, icon: TechIcon }}
                            <div class="tech-pill flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-200">
                                <TechIcon size={12} class="tech-icon" />
                                <span>{name}</span>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <!-- CTA Button -->
    <div class="flex justify-start">
        <a 
            class="group flex items-center gap-3 rounded-xl bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 hover:shadow-lg" 
            href="/projects"
        >
            <span>View All Case Studies</span>
            <ArrowRight size={16} class="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
    </div>
</div>