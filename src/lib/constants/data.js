import {
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
    GraduationCap,
} from 'lucide-svelte';

export const projects = [{
        id: 1,
        title: 'Headless E-commerce',
        description: 'Built a headless e-commerce platform using SvelteKit with MongoDB, Go, and multiple third-party integrations including Shopify API, Brevo for email, and Xendit for payments.',
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
        description: 'Migrated from third-party dashboard to custom internal dashboard for end-to-end e-commerce business processes. Similar to Nebula JS architecture with modern tech stack.',
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
        description: 'Enhanced real-time communication stability using WebRTC and Socket.io for influencer/mentor calls and webinars within the platform across web and mobile.',
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
        description: 'Full application migration from Firebase to microservices architecture with Node.js, PostgreSQL, and third-party healthcare integrations including SatuSehat and BPJS.',
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
        description: 'End-to-end internal logistics system for delivery coordination and tracking with third-party integrations including ID Express and SAPX for package management.',
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
        description: 'Complete booking and loyalty platform showing nearest Hachi Group restaurants with end-to-end reservation process and customer loyalty features.',
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
        description: 'End-to-end mechanic booking system where customers schedule visits and mechanics submit reports via dedicated applications for complete service management.',
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
        description: 'Official website for Indonesian Ministry of Forestry M4CR program featuring latest updates, 360° location views, and content management dashboard with multi-language support.',
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
            multilingual: '2',
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
        description: 'Comprehensive lifestyle application for Indonesian Christian church enabling event booking, administrative management, and servanthood duty coordination for church members.',
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
        description: 'Enhanced e-commerce platform with third-party bank payment integration and advanced promotion features for better customer experience and sales conversion.',
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
        description: 'Microservice architecture implementation for major Indonesian private bank to digitize paper-based processes including account opening forms and banking operations.',
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
        description: 'Architected and built a comprehensive multi-tenant educational ecosystem from scratch, featuring a full Learning Management System (LMS), Event Management System, and Crowdfunding platform. Created a seamless educational marketplace supporting course delivery, live events, and community fundraising with integrated payment systems and third-party CRM.',
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
]

/**
 * @param {string} slug
 */
export function getProjectBySlug(slug) {
    return projects.find(project =>
        project.detailUrl === `/projects/${slug}` ||
        project.title.toLowerCase().replace(/\s+/g, '-') === slug
    );
}

// Helper function to get all project slugs for static generation
export function getAllProjectSlugs() {
    return projects.map(project => ({
        slug: project.detailUrl.replace('/projects/', '')
    }));
}