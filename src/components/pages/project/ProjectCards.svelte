<script lang="ts">
	import {
		ShoppingCart,
		LayoutDashboard,
		Video,
		Stethoscope,
		Truck,
		Utensils,
		Wrench,
		ArrowRight,
		Zap,
		Database,
		Globe,
		Search,
		Filter,
		X,
		Users,
		CreditCard,
		FileDigit,
		GraduationCap
	} from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	const projects = [
		{
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
				planning: '4 weeks',
				development: '14 weeks',
				testing: '1 weeks',
				deployment: '1 weeks'
			}
		},
		{
			id: 2,
			title: 'Nebula Dashboard',
			description:
				'Migrated from third-party dashboard to custom internal dashboard for end-to-end e-commerce business processes. Similar to Nebula JS architecture with modern tech stack.',
			icon: LayoutDashboard,
			detailUrl: '/projects/nebula-dashboard',
			tags: ['Next.js', 'Golang', 'MongoDB', 'Tailwind', 'shadcn/ui', 'Business Intelligence'],
			featured: true,
			category: 'Internal Tool',
			technologies: {
				frontend: 'Next.js, Tailwind, Shadcn UI',
				backend: 'Golang, MongoDB',
				features: ['Business analytics', 'Order management', 'Inventory tracking']
			},
			platformFeatures: [
				'Real-time business analytics dashboard',
				'Order processing and fulfillment tracking',
				'Inventory management and stock alerts',
				'Customer relationship management',
				'Sales performance metrics',
				'Multi-store management interface',
				'Data visualization and reporting',
				'Automated business intelligence'
			],
			achievements: [
				'Successfully migrated from third-party to custom solution',
				'Reduced operational costs by 40%',
				'Improved data processing speed by 60%',
				'Created unified dashboard for multiple business units'
			],
			metrics: {
				performance: '60%',
				engagement: '75%',
				satisfaction: '88%',
				efficiency: '40%',
				costReduction: '40%',
				dataProcessing: '60%',
				reportingTime: '30min',
				accuracy: '99.5%'
			},
			challenges: [
				'Migrating large volumes of historical data without downtime',
				'Integrating with multiple legacy systems',
				'Ensuring real-time data synchronization',
				'Creating intuitive UI for complex business processes'
			],
			solutions: [
				'Implemented phased migration strategy with rollback capabilities',
				'Developed custom API adapters for legacy system integration',
				'Used WebSocket connections for real-time data updates',
				'Conducted extensive user testing for UI refinement'
			],
			timeline: {
				planning: '4 weeks',
				development: '16 weeks',
				testing: '5 weeks',
				deployment: '3 weeks'
			}
		},
		{
			id: 3,
			title: 'Tanyo App',
			description:
				'Enhanced real-time communication stability using WebRTC and Socket.io for influencer/mentor calls and webinars within the platform across web and mobile.',
			icon: Video,
			detailUrl: '/projects/tanyo-app',
			tags: ['React', 'React Native', 'Express.js', 'MongoDB', 'WebRTC', 'Socket.io', 'Real-time'],
			featured: false,
			category: 'Real-time Communication',
			technologies: {
				mobile: 'React Native',
				frontend: 'React',
				backend: 'Express.js, MongoDB',
				realtime: 'WebRTC, Socket.io'
			},
			platformFeatures: [
				'High-quality video conferencing',
				'Real-time screen sharing',
				'Interactive webinar hosting',
				'Chat and messaging system',
				'User presence and availability',
				'Recording and playback functionality',
				'Multi-platform compatibility',
				'Session scheduling and management'
			],
			achievements: [
				'Improved real-time communication stability by 75%',
				'Reduced video call latency by 50%',
				'Enabled cross-platform compatibility',
				'Enhanced user experience for mentors and influencers'
			],
			metrics: {
				performance: '75%',
				engagement: '60%',
				satisfaction: '85%',
				efficiency: '45%',
				latency: '50%',
				stability: '75%',
				concurrentUsers: '500+',
				uptime: '99.8%'
			},
			challenges: [
				'Maintaining video quality across different network conditions',
				'Synchronizing real-time data across multiple clients',
				'Handling large-scale webinar sessions',
				'Ensuring cross-platform compatibility'
			],
			solutions: [
				'Implemented adaptive bitrate streaming for varying network conditions',
				'Used operational transforms for real-time data consistency',
				'Developed scalable WebRTC infrastructure with load balancing',
				'Created unified codebase with platform-specific optimizations'
			],
			timeline: {
				planning: '1 weeks',
				development: '2 weeks',
				testing: '1 weeks',
				deployment: '1 weeks'
			}
		},
		{
			id: 4,
			title: 'Perigigi Clinic System',
			description:
				'Full application migration from Firebase to microservices architecture with Node.js, PostgreSQL, and third-party healthcare integrations including SatuSehat and BPJS.',
			icon: Stethoscope,
			detailUrl: '/projects/perigigi-clinic',
			tags: [
				'React Native',
				'React',
				'Node.js',
				'PostgreSQL',
				'Microservices',
				'SatuSehat',
				'BPJS'
			],
			featured: true,
			category: 'Healthcare',
			technologies: {
				mobile: 'React Native',
				frontend: 'React, Firebase, Tailwind CSS',
				backend: 'Node.js, PostgreSQL, Microservices',
				infrastructure: 'Firebase Hosting, NGINX',
				integrations: 'SatuSehat, BPJS'
			},
			platformFeatures: [
				'Patient management and electronic health records',
				'Appointment scheduling and reminders',
				'Medical billing and insurance claims',
				'Prescription and medication management',
				'Laboratory results integration',
				'Telemedicine capabilities',
				'Multi-clinic management',
				'Healthcare regulatory compliance'
			],
			achievements: [
				'Successfully migrated entire system from Firebase to microservices',
				'Integrated with national healthcare systems (SatuSehat, BPJS)',
				'Improved system performance by 70%',
				'Enhanced data security and compliance'
			],
			metrics: {
				performance: '70%',
				engagement: '55%',
				satisfaction: '94%',
				efficiency: '60%',
				appointmentTime: '65%',
				dataSecurity: '100%',
				compliance: '100%',
				integrationSuccess: '98%'
			},
			challenges: [
				'Ensuring HIPAA compliance and data security during migration',
				'Integrating with complex government healthcare APIs',
				'Maintaining system availability during migration',
				'Training medical staff on new system features'
			],
			solutions: [
				'Implemented end-to-end encryption and audit trails',
				'Developed robust error handling and retry mechanisms',
				'Used blue-green deployment strategy for zero downtime',
				'Created comprehensive training materials and workshops'
			],
			timeline: {
				planning: '1 weeks',
				development: '8 weeks',
				testing: '1 weeks',
				deployment: '1 weeks'
			}
		},
		{
			id: 5,
			title: 'Feeder Logistics Dashboard',
			description:
				'End-to-end internal logistics system for delivery coordination and tracking with third-party integrations including ID Express and SAPX for package management.',
			icon: Truck,
			detailUrl: '/projects/feeder-logistics',
			tags: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'ID Express', 'SAPX', 'Logistics'],
			featured: false,
			category: 'Logistics',
			technologies: {
				frontend: 'React, PDF, Tailwind CSS',
				backend: 'Node.js, PostgreSQL',
				integrations: 'ID Express, SAPX',
				features: ['Delivery coordination', 'Real-time tracking', 'Package management']
			},
			platformFeatures: [
				'Real-time package tracking and monitoring',
				'Delivery route optimization',
				'Driver and vehicle management',
				'Warehouse inventory management',
				'Automated dispatch system',
				'Customer notification system',
				'Performance analytics and reporting',
				'Multi-carrier integration'
			],
			achievements: [
				'Reduced delivery time by 30% through route optimization',
				'Improved package tracking accuracy to 99.5%',
				'Automated 80% of manual logistics processes',
				'Integrated multiple third-party logistics providers'
			],
			metrics: {
				performance: '30%',
				engagement: '70%',
				satisfaction: '89%',
				efficiency: '80%',
				deliveryTime: '30%',
				trackingAccuracy: '99.5%',
				automation: '80%',
				costSavings: '25%'
			},
			challenges: [
				'Integrating with multiple logistics provider APIs with different standards',
				'Real-time GPS tracking and route optimization',
				'Handling large volumes of package data',
				'Ensuring data consistency across distributed systems'
			],
			solutions: [
				'Created unified API specification for logistics providers',
				'Implemented advanced routing algorithms with real-time traffic data',
				'Used distributed caching and database partitioning',
				'Developed event-driven architecture for data consistency'
			],
			timeline: {
				planning: '2 weeks',
				development: '8 weeks',
				testing: '1 weeks',
				deployment: '1 weeks'
			}
		},
		{
			id: 6,
			title: 'Hachi Group Booking',
			description:
				'Complete booking and loyalty platform showing nearest Hachi Group restaurants with end-to-end reservation process and customer loyalty features.',
			icon: Utensils,
			detailUrl: '/projects/hachi-booking',
			tags: ['React', 'Sass', 'Golang', 'Location Services', 'Loyalty Program'],
			featured: false,
			category: 'Hospitality',
			technologies: {
				frontend: 'React, Sass',
				backend: 'Golang',
				features: ['Restaurant locator', 'Booking system', 'Loyalty program']
			},
			platformFeatures: [
				'Restaurant location and discovery',
				'Real-time table availability',
				'Online reservation system',
				'Customer loyalty program',
				'Menu management and updates',
				'Waitlist management',
				'Customer feedback system',
				'Multi-restaurant chain support'
			],
			achievements: [
				'Increased restaurant bookings by 45%',
				'Improved customer retention through loyalty program',
				'Reduced no-show rates by 60%',
				'Enhanced user experience with location-based services'
			],
			metrics: {
				performance: '45%',
				engagement: '65%',
				satisfaction: '91%',
				efficiency: '55%',
				bookings: '45%',
				retention: '60%',
				noShowReduction: '60%',
				userSatisfaction: '91%'
			},
			challenges: [
				'Real-time table availability synchronization across multiple restaurants',
				'Integrating with various mapping and location services',
				'Managing peak-hour booking traffic',
				'Creating personalized loyalty program experiences'
			],
			solutions: [
				'Implemented real-time WebSocket connections for availability updates',
				'Used geolocation APIs with fallback mechanisms',
				'Developed queue management system for high traffic periods',
				'Created AI-driven personalized recommendation engine'
			],
			timeline: {
				planning: '1 weeks',
				development: '4 weeks',
				testing: '1 weeks',
				deployment: '1 weeks'
			}
		},
		{
			id: 7,
			title: 'Montero Mechanic Booking',
			description:
				'End-to-end mechanic booking system where customers schedule visits and mechanics submit reports via dedicated applications for complete service management.',
			icon: Wrench,
			detailUrl: '/projects/montero-booking',
			tags: ['React', 'Flutter', 'Node.js', 'PostgreSQL', 'NGINX', 'Service Management'],
			featured: false,
			category: 'Service Booking',
			technologies: {
				frontend: 'React',
				mobile: 'Flutter Mobile',
				backend: 'Node.js, PostgreSQL',
				infrastructure: 'NGINX'
			},
			platformFeatures: [
				'Customer booking and scheduling',
				'Mechanic dispatch and routing',
				'Service history and records',
				'Digital service reports',
				'Payment processing',
				'Inventory and parts management',
				'Customer notification system',
				'Performance analytics'
			],
			achievements: [
				'Reduced service response time by 50%',
				'Improved mechanic efficiency by 35%',
				'Digitized 100% of service reports',
				'Enhanced customer satisfaction through real-time updates'
			],
			metrics: {
				performance: '50%',
				engagement: '75%',
				satisfaction: '93%',
				efficiency: '35%',
				responseTime: '50%',
				mechanicEfficiency: '35%',
				digitization: '100%',
				customerSatisfaction: '93%'
			},
			challenges: [
				'Real-time mechanic location tracking and route optimization',
				'Synchronizing data between web and mobile applications',
				'Handling emergency service requests efficiently',
				'Managing spare parts inventory across multiple locations'
			],
			solutions: [
				'Implemented real-time GPS tracking with optimized routing algorithms',
				'Used shared database with conflict resolution strategies',
				'Developed priority-based dispatch system for emergencies',
				'Created centralized inventory management with automated reordering'
			],
			timeline: {
				planning: '1 weeks',
				development: '4 weeks',
				testing: '1 weeks',
				deployment: '1 weeks'
			}
		},
		{
			id: 8,
			title: 'M4CR Website',
			description:
				'Official website for Indonesian Ministry of Forestry M4CR program featuring latest updates, 360° location views, and content management dashboard with multi-language support.',
			icon: Globe,
			detailUrl: '/projects/m4cr-website',
			tags: ['Next.js', 'Node.js', 'Prisma', 'Panoramic Library', 'Multi-language', 'Government'],
			featured: true,
			category: 'Government',
			technologies: {
				frontend: 'Next.js, Panoramic Library',
				backend: 'Node.js, Prisma',
				features: ['360° Views', 'Content Management', 'Multi-language', 'Real-time Updates'],
				integrations: 'Indonesian Ministry Systems'
			},
			platformFeatures: [
				'Interactive 360° location visualization',
				'Multi-language content management',
				'Real-time news and updates',
				'Document and resource library',
				'Contact and inquiry system',
				'Event calendar and management',
				'User role-based access control',
				'Analytics and reporting dashboard'
			],
			achievements: [
				'Successfully delivered government project on schedule',
				'Implemented innovative 360° visualization technology',
				'Supported multiple languages for broader accessibility',
				'Created efficient content management system for ministry staff'
			],
			metrics: {
				performance: '85%',
				engagement: '70%',
				satisfaction: '96%',
				efficiency: '60%',
				pageLoad: '1.5s',
				accessibility: '100%',
				multilingual: '3 languages',
				contentUpdates: 'Real-time'
			},
			challenges: [
				'Implementing high-performance 360° panoramic views',
				'Ensuring accessibility compliance for government website',
				'Managing multi-language content synchronization',
				'Integrating with existing government systems and protocols'
			],
			solutions: [
				'Optimized panoramic image loading with progressive enhancement',
				'Implemented WCAG 2.1 AA compliance throughout the application',
				'Developed centralized content management with translation workflows',
				'Created secure API gateways for government system integration'
			],
			timeline: {
				planning: '1 weeks',
				development: '3 weeks',
				testing: '1 weeks',
				deployment: '1 weeks'
			}
		},
		{
			id: 9,
			title: 'MyRehobot Church App',
			description:
				'Comprehensive lifestyle application for Indonesian Christian church enabling event booking, administrative management, and servanthood duty coordination for church members.',
			icon: Users,
			detailUrl: '/projects/myrehobot-app',
			tags: ['Flutter', 'Node.js', 'Firebase', 'OneSignal', 'Handlebars', 'Church Management'],
			featured: false,
			category: 'Religious',
			technologies: {
				mobile: 'Flutter',
				backend: 'Node.js, Firebase',
				features: [
					'Event Booking',
					'Member Management',
					'Servanthood Coordination',
					'Push Notifications'
				],
				integrations: 'OneSignal, Firebase Services'
			},
			platformFeatures: [
				'Event registration and ticketing',
				'Member directory and profiles',
				'Servanthood duty scheduling',
				'Prayer request system',
				'Donation and tithing management',
				'Church announcement system',
				'Bible study and resource access',
				'Community engagement features'
			],
			achievements: [
				'Increased church event participation by 60%',
				'Streamlined administrative processes by 75%',
				'Improved member engagement through push notifications',
				'Enhanced servanthood coordination and scheduling'
			],
			metrics: {
				performance: '60%',
				engagement: '80%',
				satisfaction: '90%',
				efficiency: '75%',
				eventParticipation: '60%',
				adminEfficiency: '75%',
				memberEngagement: '80%',
				notificationOpenRate: '85%'
			},
			challenges: [
				'Managing complex scheduling for multiple church activities and volunteers',
				'Ensuring data privacy for sensitive member information',
				'Integrating with existing church management systems',
				'Creating intuitive interface for users of all technical levels'
			],
			solutions: [
				'Developed advanced scheduling algorithm with conflict detection',
				'Implemented role-based access control and data encryption',
				'Created flexible API architecture for system integration',
				'Designed user-friendly interface with comprehensive onboarding'
			],
			timeline: {
				planning: '4 weeks',
				development: '16 weeks',
				testing: '1 weeks',
				deployment: '1 weeks'
			}
		},
		{
			id: 10,
			title: 'TokoSrc Payment Integration',
			description:
				'Enhanced e-commerce platform with third-party bank payment integration and advanced promotion features for better customer experience and sales conversion.',
			icon: CreditCard,
			detailUrl: '/projects/tokosrc-payment',
			tags: ['React Native', 'Laravel', 'Payment Gateway', 'Bank Integration', 'Promotions'],
			featured: false,
			category: 'E-commerce',
			technologies: {
				mobile: 'React Native',
				backend: 'Laravel',
				features: ['Bank Payment Integration', 'Promotion System', 'Sales Analytics'],
				integrations: 'Third-party Banking APIs'
			},
			platformFeatures: [
				'Multiple payment gateway integration',
				'Bank transfer and virtual account support',
				'Promotion and discount management',
				'Loyalty and reward system',
				'Sales analytics and reporting',
				'Customer payment history',
				'Automated refund processing',
				'Payment security and fraud detection'
			],
			achievements: [
				'Increased payment success rate by 40%',
				'Reduced cart abandonment by 25%',
				'Enhanced customer trust with multiple payment options',
				'Improved sales through targeted promotions'
			],
			metrics: {
				performance: '40%',
				engagement: '55%',
				satisfaction: '88%',
				efficiency: '65%',
				paymentSuccess: '40%',
				cartAbandonment: '25%',
				salesGrowth: '35%',
				fraudPrevention: '99%'
			},
			challenges: [
				'Integrating with multiple banking APIs with different security protocols',
				'Ensuring PCI DSS compliance for payment processing',
				'Handling real-time promotion calculations during checkout',
				'Preventing fraudulent transactions while maintaining user experience'
			],
			solutions: [
				'Implemented unified security layer for banking API integration',
				'Used tokenization and encryption for PCI DSS compliance',
				'Developed real-time promotion engine with caching',
				'Created machine learning-based fraud detection system'
			],
			timeline: {
				planning: '1 weeks',
				development: '2 weeks',
				testing: '1 weeks',
				deployment: '1 weeks'
			}
		},
		{
			id: 11,
			title: 'RIPLAY Bank Digitalization',
			description:
				'Microservice architecture implementation for major Indonesian private bank to digitize paper-based processes including account opening forms and banking operations.',
			icon: FileDigit,
			detailUrl: '/projects/riplay-bank',
			tags: ['React', 'Java Spring Boot', 'Microservices', 'Banking', 'Digital Transformation'],
			featured: true,
			category: 'Banking',
			technologies: {
				frontend: 'React',
				backend: 'Java Spring Boot, Microservices',
				features: ['Digital Forms', 'Account Opening', 'Document Management', 'Compliance'],
				integrations: 'Banking Core Systems, Regulatory APIs'
			},
			platformFeatures: [
				'Digital account opening process',
				'Electronic document management',
				'Customer identity verification',
				'Automated compliance checking',
				'Real-time application tracking',
				'Multi-channel customer support',
				'Banking product catalog',
				'Customer relationship management'
			],
			achievements: [
				'Reduced account opening time from days to minutes',
				'Eliminated 90% of paper-based processes',
				'Improved regulatory compliance accuracy',
				'Enhanced customer satisfaction through digital experience'
			],
			metrics: {
				performance: '95%',
				engagement: '85%',
				satisfaction: '92%',
				efficiency: '90%',
				processingTime: '95%',
				paperReduction: '90%',
				complianceAccuracy: '98%',
				customerSatisfaction: '92%'
			},
			challenges: [
				'Ensuring banking-grade security in microservices architecture',
				'Integrating with legacy mainframe banking systems',
				'Meeting strict financial regulatory requirements',
				'Handling high-volume transaction processing'
			],
			solutions: [
				'Implemented zero-trust security architecture with service mesh',
				'Developed robust API gateways for legacy system communication',
				'Created automated compliance checking with audit trails',
				'Used event sourcing and CQRS for high-performance processing'
			],
			timeline: {
				planning: '4 weeks',
				development: '16 weeks',
				testing: '1 weeks',
				deployment: '1 weeks'
			}
		},
		{
			id: 12,
			title: 'Kasi Edu Indonesia Platform',
			description:
				'Architected and built a comprehensive multi-tenant educational ecosystem from scratch, featuring a full Learning Management System (LMS), Event Management System, and Crowdfunding platform. Created a seamless educational marketplace supporting course delivery, live events, and community fundraising with integrated payment systems and third-party CRM.',
			icon: GraduationCap,
			detailUrl: '/projects/kasi-edu-platform',
			tags: [
				'React',
				'Node.js',
				'Payment Gateway',
				'LMS',
				'Multi-tenant',
				'Event Management',
				'Crowdfunding',
				'CRM Integration',
				'System Architecture',
				'Educational Technology',
				'Team Leadership'
			],
			featured: true,
			category: 'Education Technology',
			technologies: {
				frontend: 'React, Next, UI/UX Design, Tailwind CSS',
				backend: 'Node.js, PostgreSQL, Prisma, API Design',
				infrastructure: 'Multi-tenant Architecture, Payment Systems, Cloud Services',
				integrations: 'Payment Gateways, Third-party CRM, Vendor Systems, Analytics',
				platforms: 'Learning Management System, Event Management, Crowdfunding Platform'
			},
			platformFeatures: [
				'Multi-tenant educational ecosystem',
				'Course creation and delivery system',
				'Live webinar and workshop hosting',
				'Community fundraising platform',
				'Student progress tracking and analytics',
				'Secure payment processing integration',
				'Vendor CRM integration and management',
				'User management and role-based access'
			],
			achievements: [
				'Built complete educational platform from ground up',
				'Led technical team and system architecture design',
				'Integrated multiple payment gateway systems',
				'Created scalable multi-tenant solution for multiple institutions',
				'Implemented real-time event management capabilities'
			],
			metrics: {
				performance: '65%',
				engagement: '80%',
				satisfaction: '95%',
				efficiency: '55%',
				courseCompletion: '75%',
				revenueGrowth: '120%',
				userRetention: '85%',
				systemUptime: '99.9%'
			},
			challenges: [
				'Designing scalable multi-tenant architecture',
				'Integrating multiple payment and CRM systems',
				'Ensuring data isolation between tenants',
				'Managing real-time features for large user bases'
			],
			solutions: [
				'Implemented database-level tenant isolation with row-level security',
				'Created unified payment gateway abstraction layer',
				'Used microservices with dedicated databases per service',
				'Leveraged Redis and WebSocket for real-time features'
			],
			timeline: {
				planning: '1 weeks',
				development: '4 weeks',
				testing: '1 weeks',
				deployment: '1 weeks'
			}
		}
	];

	// Category colors
	const categoryColors = {
		'E-commerce': 'from-orange-500 to-red-500',
		'Internal Tool': 'from-blue-500 to-cyan-500',
		'Real-time Communication': 'from-green-500 to-emerald-500',
		Healthcare: 'from-purple-500 to-pink-500',
		Logistics: 'from-indigo-500 to-blue-500',
		Hospitality: 'from-rose-500 to-pink-500',
		'Service Booking': 'from-amber-500 to-orange-500',
		Government: 'from-teal-500 to-cyan-500',
		Religious: 'from-violet-500 to-purple-500',
		Banking: 'from-slate-500 to-gray-500',
		'Education Technology': 'from-blue-500 to-indigo-500'
	};

	// State management
	let searchTerm = '';
	let selectedCategory: any = 'all';
	let selectedTechnologies: any = [];
	let showFeaturedOnly = false;
	let isFilterOpen = false;
	let activeFilterTab = 'category'; // For mobile filter tabs

	// Get unique categories and technologies for filters
	const categories = ['all', ...new Set(projects.map((p) => p.category))];
	const allTechnologies = [...new Set(projects.flatMap((p) => p.tags))];

	// Technology groups for better organization
	const technologyGroups = {
		Frontend: ['React', 'Next.js', 'SvelteKit', 'Flutter', 'React Native'],
		Backend: ['Golang', 'Node.js', 'Express.js', 'Laravel', 'Java Spring Boot'],
		Database: ['MongoDB', 'PostgreSQL', 'Prisma'],
		'APIs & Services': [
			'Shopify API',
			'WebRTC',
			'Socket.io',
			'Microservices',
			'Xendit',
			'Payment Gateway',
			'Bank Integration',
			'CRM Integration'
		],
		Infrastructure: [
			'NGINX',
			'Firebase',
			'Firebase Hosting',
			'Tailwind',
			'shadcn/ui',
			'Sass',
			'OneSignal',
			'Handlebars',
			'Multi-tenant',
			'System Architecture'
		],
		'Platform Systems': [
			'LMS',
			'Event Management',
			'Crowdfunding',
			'Educational Technology',
			'Team Leadership',
			'Team Management'
		],
		Specialized: ['Panoramic Library', 'Multi-language', 'Location Services']
	};

	// Filter projects based on search and filters
	$: filteredProjects = projects.filter((project) => {
		// Search term filter
		const matchesSearch =
			searchTerm === '' ||
			project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

		// Category filter
		const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;

		// Technology filter
		const matchesTechnologies =
			selectedTechnologies.length === 0 ||
			selectedTechnologies.some((tech: any) => project.tags.includes(tech));

		// Featured filter
		const matchesFeatured = !showFeaturedOnly || project.featured;

		return matchesSearch && matchesCategory && matchesTechnologies && matchesFeatured;
	});

	function resetFilters() {
		searchTerm = '';
		selectedCategory = 'all';
		selectedTechnologies = [];
		showFeaturedOnly = false;
	}

	function toggleTechnology(tech: any) {
		if (selectedTechnologies.includes(tech)) {
			selectedTechnologies = selectedTechnologies.filter((t) => t !== tech);
		} else {
			selectedTechnologies = [...selectedTechnologies, tech];
		}
	}

	// Count projects by category for the filter chips
	$: categoryCounts = categories.reduce((acc: any, category: any) => {
		if (category === 'all') {
			acc[category] = projects.length;
		} else {
			acc[category] = projects.filter((p) => p.category === category).length;
		}
		return acc;
	}, {});

	function handleProjectClick(projectUrl: string) {
		window.location.href = projectUrl;
	}
</script>

<section class="py-8 sm:py-12 lg:py-16">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mb-8 space-y-6">
			<div class="relative mx-auto">
				<div class="group relative">
					<div
						class="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500 to-purple-600 opacity-25 blur transition-opacity duration-300 group-hover:opacity-50"
					></div>
					<div class="relative">
						<Search
							class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400 transition-colors duration-200 group-focus-within:text-blue-500"
						/>
						<input
							type="text"
							placeholder="Search projects, technologies, or features..."
							bind:value={searchTerm}
							class="focus:ring-opacity-50 w-full rounded-2xl border-0 bg-white py-4 pr-12 pl-12 text-gray-900 placeholder-gray-500 shadow-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
						/>
						{#if searchTerm}
							<button
								on:click={() => (searchTerm = '')}
								class="absolute top-1/2 right-4 -translate-y-1/2 transform text-gray-400 transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-300"
							>
								<X class="h-5 w-5" />
							</button>
						{:else}
							<div class="absolute top-1/2 right-4 -translate-y-1/2 transform text-gray-400">
								<kbd
									class="rounded-lg border border-gray-300 bg-gray-50 px-2 py-1 text-xs dark:border-gray-600 dark:bg-gray-700"
									>⌘K</kbd
								>
							</div>
						{/if}
					</div>
				</div>
			</div>

			<div class="space-y-4">
				<!-- Desktop Filter Bar -->
				<div
					class="hidden items-center justify-between rounded-2xl border border-gray-200 bg-linear-to-r from-gray-50 to-blue-50 p-6 shadow-sm lg:flex dark:border-gray-700 dark:from-gray-800 dark:to-blue-900/20"
				>
					<!-- Category Quick Filters -->
					<div class="flex items-center gap-2">
						<span class="text-sm font-medium whitespace-nowrap text-gray-700 dark:text-gray-300"
							>Categories:</span
						>
						<div class="flex flex-wrap gap-2">
							{#each categories as category}
								{#if category !== 'all'}
									<button
										on:click={() => (selectedCategory = category)}
										class="transform rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 {selectedCategory ===
										category
											? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
											: 'border border-gray-200 bg-white text-gray-700 shadow hover:bg-gray-50 hover:shadow-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
									>
										{category}
										<span class="ml-1 text-xs opacity-75">({categoryCounts[category]})</span>
									</button>
								{/if}
							{/each}
						</div>
					</div>

					<!-- Right Side Controls -->
					<div class="flex items-center gap-4">
						<!-- Featured Toggle -->
						<label class="relative inline-flex cursor-pointer items-center">
							<input type="checkbox" bind:checked={showFeaturedOnly} class="peer sr-only" />
							<div
								class="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
							></div>
							<span
								class="ml-3 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300"
							>
								<Zap size={14} class={showFeaturedOnly ? 'text-yellow-400' : 'text-gray-400'} />
								Featured
							</span>
						</label>

						<!-- Reset Button -->
						<button
							on:click={resetFilters}
							class="rounded-xl border border-transparent px-4 py-2 text-sm text-gray-600 transition-colors duration-200 hover:border-gray-300 hover:bg-white hover:text-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200"
						>
							Reset All
						</button>
					</div>
				</div>

				<!-- Tablet Filter Bar -->
				<div
					class="hidden items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:flex lg:hidden dark:border-gray-700 dark:bg-gray-800"
				>
					<!-- Category Select -->
					<div class="flex-1">
						<select
							bind:value={selectedCategory}
							class="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
						>
							{#each categories as category}
								<option value={category}>
									{category === 'all'
										? 'All Categories'
										: `${category} (${categoryCounts[category]})`}
								</option>
							{/each}
						</select>
					</div>

					<!-- Featured Toggle -->
					<label class="flex cursor-pointer items-center gap-2 whitespace-nowrap">
						<input
							type="checkbox"
							bind:checked={showFeaturedOnly}
							class="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
						/>
						<span class="text-sm text-gray-700 dark:text-gray-300">Featured</span>
					</label>

					<!-- Filter Toggle -->
					<button
						on:click={() => (isFilterOpen = !isFilterOpen)}
						class="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
					>
						<Filter class="h-4 w-4" />
						<span>Tech</span>
					</button>
				</div>

				<!-- Mobile Filter Controls -->
				<div class="space-y-4 sm:hidden">
					<!-- Mobile Filter Tabs -->
					<div class="flex rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
						<button
							on:click={() => (activeFilterTab = 'category')}
							class="flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 {activeFilterTab ===
							'category'
								? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
								: 'text-gray-600 dark:text-gray-400'}"
						>
							Category
						</button>
						<button
							on:click={() => (activeFilterTab = 'tech')}
							class="flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 {activeFilterTab ===
							'tech'
								? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
								: 'text-gray-600 dark:text-gray-400'}"
						>
							Technology
						</button>
						<button
							on:click={() => (activeFilterTab = 'featured')}
							class="flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 {activeFilterTab ===
							'featured'
								? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
								: 'text-gray-600 dark:text-gray-400'}"
						>
							Featured
						</button>
					</div>

					<!-- Mobile Filter Content -->
					<div
						class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
					>
						{#if activeFilterTab === 'category'}
							<div class="grid grid-cols-2 gap-2">
								{#each categories as category}
									<button
										on:click={() => (selectedCategory = category)}
										class="rounded-lg p-3 text-sm font-medium transition-all duration-200 {selectedCategory ===
										category
											? 'bg-blue-500 text-white shadow-md'
											: 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
									>
										{category === 'all' ? 'All' : category}
										<span class="mt-1 block text-xs opacity-75">({categoryCounts[category]})</span>
									</button>
								{/each}
							</div>
						{:else if activeFilterTab === 'tech'}
							<div class="max-h-48 space-y-3 overflow-y-auto">
								{#each Object.entries(technologyGroups) as [group, techs]}
									<div>
										<h4
											class="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400"
										>
											{group}
										</h4>
										<div class="flex flex-wrap gap-1">
											{#each techs as tech}
												{#if allTechnologies.includes(tech)}
													<button
														on:click={() => toggleTechnology(tech)}
														class="transform rounded-full border px-2 py-1 text-xs transition-all duration-200 hover:scale-105 {selectedTechnologies.includes(
															tech
														)
															? 'border-transparent bg-linear-to-r from-green-500 to-emerald-600 text-white shadow-sm'
															: 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
													>
														{tech}
													</button>
												{/if}
											{/each}
										</div>
									</div>
								{/each}
							</div>
						{:else}
							<div class="text-center">
								<label class="inline-flex cursor-pointer items-center">
									<input type="checkbox" bind:checked={showFeaturedOnly} class="peer sr-only" />
									<div
										class="peer relative h-7 w-14 rounded-full bg-gray-200 peer-checked:bg-yellow-500 peer-focus:ring-4 peer-focus:ring-blue-300 after:absolute after:top-0.5 after:left-1 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
									></div>
									<span
										class="ml-3 flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-300"
									>
										<Zap
											size={20}
											class={showFeaturedOnly ? 'animate-pulse text-yellow-400' : 'text-gray-400'}
										/>
										Show Featured Only
									</span>
								</label>
							</div>
						{/if}
					</div>
				</div>

				<!-- Enhanced Technology Filter Panel for Desktop -->
				<div
					class="hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:block dark:border-gray-700 dark:bg-gray-800"
				>
					<div class="mb-4 flex items-center justify-between">
						<h3 class="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
							<Filter class="h-5 w-5 text-blue-500" />
							Filter by Technology
						</h3>
						{#if selectedTechnologies.length > 0}
							<button
								on:click={() => (selectedTechnologies = [])}
								class="text-sm text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
							>
								Clear all
							</button>
						{/if}
					</div>

					<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
						{#each Object.entries(technologyGroups) as [group, techs]}
							<div>
								<h4
									class="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
								>
									<div class="h-2 w-2 rounded-full bg-blue-500"></div>
									{group}
								</h4>
								<div class="space-y-2">
									{#each techs as tech}
										{#if allTechnologies.includes(tech)}
											<label
												class="group flex cursor-pointer items-center gap-3 transition-all duration-200 hover:translate-x-1"
											>
												<input
													type="checkbox"
													checked={selectedTechnologies.includes(tech)}
													on:change={() => toggleTechnology(tech)}
													class="rounded border-gray-300 text-blue-500 transition-all duration-200 focus:ring-blue-500"
												/>
												<span
													class="text-sm text-gray-600 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
												>
													{tech}
												</span>
											</label>
										{/if}
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Enhanced Active Filters Display -->
			{#if selectedCategory !== 'all' || selectedTechnologies.length > 0 || showFeaturedOnly}
				<div
					class="flex items-center gap-3 rounded-xl border border-blue-200 bg-linear-to-r from-blue-50 to-indigo-50 p-4 dark:border-blue-800 dark:from-blue-900/20 dark:to-indigo-900/20"
				>
					<span class="text-sm font-medium whitespace-nowrap text-blue-700 dark:text-blue-300"
						>Active filters:</span
					>
					<div class="flex flex-wrap gap-2">
						{#if selectedCategory !== 'all'}
							<span
								class="inline-flex items-center gap-2 rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white shadow-sm"
							>
								{selectedCategory}
								<button
									on:click={() => (selectedCategory = 'all')}
									class="transition-colors hover:text-blue-200"
								>
									<X class="h-3 w-3" />
								</button>
							</span>
						{/if}
						{#each selectedTechnologies as tech}
							<span
								class="inline-flex items-center gap-2 rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white shadow-sm"
							>
								{tech}
								<button
									on:click={() => toggleTechnology(tech)}
									class="transition-colors hover:text-green-200"
								>
									<X class="h-3 w-3" />
								</button>
							</span>
						{/each}
						{#if showFeaturedOnly}
							<span
								class="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-3 py-1 text-sm font-medium text-white shadow-sm"
							>
								<Zap class="h-3 w-3" />
								Featured Only
								<button
									on:click={() => (showFeaturedOnly = false)}
									class="transition-colors hover:text-yellow-200"
								>
									<X class="h-3 w-3" />
								</button>
							</span>
						{/if}
					</div>
				</div>
			{/if}

			<!-- Results Count with Progress Bar -->
			<div class="flex items-center justify-between">
				<div class="text-sm text-gray-600 dark:text-gray-400">
					Showing <span class="font-semibold text-gray-900 dark:text-white"
						>{filteredProjects.length}</span
					>
					of
					<span class="font-semibold text-gray-900 dark:text-white"> {projects.length}</span> projects
				</div>
				<div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700">
					<div
						class="h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out"
						style="width: {(filteredProjects.length / projects.length) * 100}%"
					></div>
				</div>
			</div>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each filteredProjects as project, index (project.id)}
				<div
					in:fade|local={{ duration: 400, delay: index * 100 }}
					class="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
					on:click={() => handleProjectClick(project.detailUrl)}
				>
					<div class="flex h-full flex-col p-5 sm:p-6">
						<!-- Category Badge -->
						<div class="mb-4 flex items-center justify-between">
							<div
								class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
							>
								{project.category}
							</div>
							{#if project.featured}
								<div
									class="inline-flex animate-pulse items-center rounded-full bg-linear-to-r from-yellow-500 to-amber-500 px-2 py-1 text-xs font-medium text-white"
								>
									<Zap size={10} class="mr-1" />
									Featured
								</div>
							{/if}
						</div>

						<!-- Icon Container -->
						<div
							class={`flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br sm:h-16 sm:w-16 ${categoryColors[project.category]} mb-4 text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
						>
							<svelte:component this={project.icon} size={24} class="sm:h-7 sm:w-7" />
						</div>

						<!-- Project Title -->
						<h3
							class="mb-2 line-clamp-2 text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600 sm:text-lg dark:text-white dark:group-hover:text-blue-400"
						>
							{project.title}
						</h3>

						<!-- Project Description -->
						<p
							class="mb-4 line-clamp-3 grow text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-gray-400"
						>
							{project.description}
						</p>

						<!-- Technology Highlights -->
						<div class="mb-4 space-y-2">
							{#if project.technologies.frontend}
								<div class="flex items-center text-xs text-gray-500 dark:text-gray-400">
									<Globe size={10} class="mr-2 shrink-0 text-blue-500" />
									<span class="truncate">{project.technologies.frontend}</span>
								</div>
							{/if}

							{#if project.technologies.backend}
								<div class="flex items-center text-xs text-gray-500 dark:text-gray-400">
									<Database size={10} class="mr-2 shrink-0 text-green-500" />
									<span class="truncate">{project.technologies.backend}</span>
								</div>
							{/if}
						</div>

						<!-- Technology Tags -->
						<div class="mb-4 flex flex-wrap gap-1">
							{#each project.tags.slice(0, 3) as tag, index (index)}
								<span
									class={`rounded-md border px-2 py-1 text-xs font-medium transition-colors
					  ${['Golang', 'Node.js', 'Express.js'].includes(tag) ? 'border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-300' : ['React', 'Next.js', 'SvelteKit'].includes(tag) ? 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300' : 'border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}
								>
									{tag}
								</span>
							{/each}
							{#if project.tags.length > 3}
								<span class="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
									+{project.tags.length - 3}
								</span>
							{/if}
						</div>

						<!-- CTA -->
						<div
							class="mt-2 flex items-center justify-between border-t border-gray-200 pt-3 text-xs text-gray-500 transition-colors group-hover:text-blue-600 sm:text-sm dark:border-gray-700 dark:text-gray-400 dark:group-hover:text-blue-400"
						>
							<span class="font-medium">View details</span>
							<div class="flex items-center">
								<ArrowRight size={14} class="transition-transform group-hover:translate-x-1" />
							</div>
						</div>
					</div>
				</div>
			{:else}
				<!-- No Results State -->
				<div class="col-span-full text-center py-12" in:fade|local>
					<div class="max-w-md mx-auto">
						<div
							class="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
						>
							<Search class="w-8 h-8 text-gray-400" />
						</div>
						<h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
							No projects found
						</h3>
						<p class="text-gray-500 dark:text-gray-400 mb-4">
							Try adjusting your search terms or filters
						</p>
						<button
							on:click={resetFilters}
							class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
						>
							Reset Filters
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Custom utilities for better mobile experience */
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* Smooth scrolling for technology filter */
	.overflow-y-auto {
		scrollbar-width: thin;
		scrollbar-color: #cbd5e0 transparent;
	}

	.overflow-y-auto::-webkit-scrollbar {
		width: 4px;
	}

	.overflow-y-auto::-webkit-scrollbar-track {
		background: transparent;
	}

	.overflow-y-auto::-webkit-scrollbar-thumb {
		background: #cbd5e0;
		border-radius: 2px;
	}
</style>
