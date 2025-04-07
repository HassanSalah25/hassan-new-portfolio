const projectsData = [
    {
        id: 1,
        title: "Aladdin - Directory",
        category: ["Directory"],
        description: "A powerful business directory platform tailored for local markets in Egypt. It features categorized listings, advanced search, map integrations, and business profiles — helping users find trusted services effortlessly",
        img: "",
        date: "22 MAY",
        github: "https://github.com/HassanSalah25/aladdin-ref",
        link: "https://aladdin-eg.com/",
        tools: ["Laravel, ", "MySQL, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/aladdin/aladdin-directory.png", "assets/imgs/projects/aladdin/1.png"],
        responsibilities: [
            "Designed and developed RESTful APIs using Laravel to manage business listings, categories, and user profiles.",
            "Implemented advanced search functionality with keyword matching, filters, and geolocation proximity using MySQL full-text search.",
            "Integrated Google Maps API for interactive map views and location-based service discovery.",
            "Built admin dashboard with role-based access control for managing listings, users, and reported content.",
            "Implemented frontend UI using Blade templates, HTML5, SCSS, and vanilla JavaScript for dynamic interactivity.",
            "Established authentication and authorization logic using Laravel Sanctum for both users and admins.",
            "Handled file uploads for business logos and gallery images with validation, storage linking, and optimization.",
            "Wrote modular, reusable backend services and controller logic following SOLID principles.",
            "Conducted extensive testing and debugging across multiple devices to ensure responsiveness and performance.",
            "Deployed project to production using shared hosting with GitHub integration and CI/CD via Git Hooks."
        ],
        role: ["Backend", "Frontend"]

    },
    {
        id: 2,
        title: "Neo Health Register",
        category: ["Healthcare Center"],
        description: "Neo Healthcare Center is a healthcare management platform designed to streamline appointment registration processes. Patients can schedule appointments for specific services with doctors, view available slots, and receive confirmations. Built with Laravel PHP, MySQL, and native HTML/CSS/JS, the system ensures security, high performance, and a smooth user experience for both patients and healthcare administrators.",
        img: "",
        date: "22 MAY",
        github: "https://github.com/HassanSalah25/neo-healthcare",
        link: "https://github.com/HassanSalah25/neo-healthcare",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/neo/neo.png","assets/imgs/projects/neo/1.png"],
        responsibilities: [
            "Built appointment registration logic with dynamic scheduling and doctor availability",
            "Created secure backend APIs using Laravel to manage users, services, and appointments",
            "Designed patient-friendly frontend with interactive forms and real-time slot updates",
            "Integrated email notifications for appointment confirmations and cancellations",
            "Implemented admin dashboard to manage doctors, services, and appointment history",
            "Optimized database queries for performance and scalability using Eloquent ORM"
        ],
        role: ["Backend", "Frontend"],
    },
    {
        id: 3,
        title: "Shoaa - Healthcare",
        category: ["Healthcare Center"],
        description: "Shoaa is a healthcare center website developed using WordPress, providing an efficient and user-friendly platform for patients to register appointments for various healthcare services with doctors. The website integrates customized WordPress features to streamline the appointment booking process while maintaining a clean and responsive design for optimal user experience on all devices.",
        img: "",
        date: "22 MAY",
        github: null,
        link: "https://shoaamc.com/",
        tools: ["WordPress, ", "PHP, ", "MySQL, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/shoaa/shoaa.png","assets/imgs/projects/shoaa/1.png"],
        responsibilities: [
            "Built appointment registration logic with dynamic scheduling and doctor availability",
            "Created secure backend APIs using Laravel to manage users, services, and appointments",
            "Designed patient-friendly frontend with interactive forms and real-time slot updates",
            "Integrated email notifications for appointment confirmations and cancellations",
            "Implemented admin dashboard to manage doctors, services, and appointment history",
            "Optimized database queries for performance and scalability using Eloquent ORM"
        ],
        role: ["Backend", "Frontend"],
    },
    {
        id: 4,
        title: "Cotton House Kidswear - E-Commerce",
        category: ["E-commerce"],
        description: "CottonHouseKidsWear is an e-commerce website that sells custom clothing for all ages and genders. The platform is designed to offer an easy-to-use shopping experience, allowing customers to browse various categories of clothes, view product details, and purchase customized clothing items. Customers can select sizes, colors, and styles based on their preferences. The website is built using Laravel PHP, MySQL, and other modern web technologies to ensure high performance, security, and scalability. The front-end is clean and user-friendly, with responsive design ensuring that the site functions well on both mobile and desktop devices.",
        img: "",
        date: "16 JAN",
        github: "https://github.com/HassanSalah25/cottonhousekidswear",
        link: "https://github.com/HassanSalah25/cottonhousekidswear",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/ct/ct.png","assets/imgs/projects/ct/1.png"],
        responsibilities: [
            "Developed the full e-commerce backend using Laravel and MySQL for product & order management",
            "Implemented dynamic filters, custom size/color selectors, and product customization logic",
            "Integrated payment gateway and handled order flow from cart to checkout to confirmation",
            "Created responsive, user-friendly frontend using Blade, SCSS, and vanilla JS",
            "Implemented admin panel for inventory tracking, order processing, and user management",
            "Ensured full mobile compatibility and optimized load times across devices"
        ],
        role: ["Backend", "Frontend", "UI/UX"]

    },
    {
        id: 5,
        title: "Grand Gate - Company Profile",
        category: ["Company, ", "Profile"],
        description: "Grand Gate is a portfolio website designed to showcase and sell premium gates for large buildings, including commercial, industrial, and residential spaces. Built using Laravel PHP, MySQL, and native HTML/CSS/JS, the platform provides a clean, professional presentation for high-quality gate designs. Customers can browse through categories, view detailed product information, and explore project galleries to find the perfect solution for their building needs. The website is fully responsive, ensuring optimal performance on all devices.",
        img: "",
        date: "22 MAY",
        github: "https://github.com/HassanSalah25/grand-gate",
        link: "https://github.com/HassanSalah25/grand-gate",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/grand-gate/grand-gate.png","assets/imgs/projects/grand-gate/1.png"],
        responsibilities: [
            "Developed multi-category portfolio system using Laravel to manage product showcases",
            "Designed and built custom gallery component to display high-resolution images",
            "Built responsive layouts to ensure proper display on commercial and mobile devices",
            "Created admin interface for uploading products, editing info, and managing sections",
            "Handled SEO optimization including metadata structure and clean URL routing"
        ],
        role: ["Backend", "Frontend"]
    },
    {
        id: 6,
        title: "Web Scraper - Scraper",
        category: ["Scraper", "Python"],
        description: "The Web Scraping project was built using Python and its powerful libraries, such as **BeautifulSoup**, **Scrapy**, and **Requests**, to extract structured data from popular websites like **Alibaba** and **YellowPages**. The project automates the process of collecting valuable information such as product listings, business details, and contact information for further analysis and business use.",
        img: "",
        date: "08 MAY",
        github: null,
        link: null,
        tools: ["Python, ", "BeautifulSoup, ", "Scrapy, ", "Requests, ", "MySQL"],
        images: ["assets/imgs/projects/webscrapping.png"],
        responsibilities: [
            "Built scalable web scrapers using BeautifulSoup, Scrapy, and Requests to extract data from Alibaba and YellowPages",
            "Structured extracted data into clean, analyzable formats (JSON, CSV, and MySQL)",
            "Implemented logic to handle pagination, CAPTCHA challenges, and data validation",
            "Scheduled recurring scraping jobs and created logs for error handling and success tracking",
            "Wrote modular scripts to allow quick adaptation to new websites and data structures"
        ],
        role: ["Python Developer", "Data Engineer"]
    },
    {
        id: 7,
        title: "Passion Clinics - Healthcare Center",
        category: ["Healthcare Center"],
        description: "Passion Clinics is a premier cosmetic surgery center located in Riyadh, Saudi Arabia, offering a comprehensive range of surgical and non-surgical aesthetic procedures. Established in 2022, the clinic specializes in facial cosmetic surgeries, rhinoplasty, gynecomastia treatment, eyelid surgeries, laser skin treatments, injectable aesthetics, scar treatment, non-surgical body contouring, liposuction, breast augmentation, and body lifting procedures. With over 18 years of experience, Passion Clinics utilizes the latest technologies to provide exceptional care and results to clients across the Middle East.",
        img: "",
        date: "22 MAY",
        github: "",
        link: "https://passionclinics.com/",
        tools: ["WordPress", "MySQL", "PHP", "HTML", "CSS", "JS"],
        images: ["assets/imgs/projects/passion/1.png"],
        responsibilities: [
            "Developed a fully responsive WordPress website tailored to medical and cosmetic procedures",
            "Customized booking forms to handle various procedure types and doctor-specific schedules",
            "Integrated service showcase with high-resolution images and SEO-optimized descriptions",
            "Ensured compliance with data protection regulations for sensitive patient inquiries",
            "Optimized performance and page speed for mobile-first experience in Gulf region"
        ],
        role: ["WordPress Developer", "Frontend", "UI/UX"]

    },
    {
        id: 8,
        title: "Masterchef - E-Commerce",
        category: ["E-commerce"],
        description: "An interactive e-commerce platform for high-end culinary tools and kitchen essentials. Developed using Laravel and Vue.js, the platform offers dynamic product filtering, smart recommendations, wishlist functionality, and a responsive UI for smooth mobile and desktop experiences. Designed to enhance user engagement and drive conversions.",
        img: "",
        date: "16 JAN",
        github: null,
        link: null,
        tools: ["Laravel, ", "Vue.JS, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/masterchef/masterchef.png","assets/imgs/projects/masterchef/1.png"],
        responsibilities: [
            "Built a full e-commerce system using Laravel and Vue.js with dynamic product filtering",
            "Integrated wishlist, smart recommendations, and rating systems for better user engagement",
            "Implemented cart and checkout system with coupon codes and dynamic pricing logic",
            "Developed a real-time dashboard for admin to manage products, inventory, and orders",
            "Focused on user behavior tracking for enhancing future marketing and personalization"
        ],
        role: ["Full-Stack Developer", "Vue.js Developer", "Laravel Dev"]

    },
    {
        id: 9,
        title: "Modevia - Register",
        category: ["Healthcare Center"],
        description: "Modevia is a healthcare platform designed to streamline the process of booking appointments for healthcare services with doctors. Built using **Laravel** for the backend, **React.js** for the interactive user interface, and **MySQL** for data storage, the system ensures a smooth and secure experience for both patients and administrators. Patients can register appointments, view doctor availability, and manage their healthcare schedules seamlessly.",
        img: "",
        date: "17 JUN",
        github: null,
        link: "http://test.modevia-clinic.com/",
        tools: ["Laravel, ", "React.js, ", "MySQL, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/modevia/modevia.png","assets/imgs/projects/modevia/1.png"],
        responsibilities: [
            "Developed RESTful APIs with Laravel to manage appointments, services, and doctor schedules",
            "Implemented a React.js frontend for real-time interactions and calendar-based booking UI",
            "Created secure login and session management with roles for patients and admins",
            "Enabled dynamic doctor availability, with filters based on specialty and location",
            "Collaborated with the medical team to align features with real operational flow"
        ],
        role: ["Backend", "Frontend", "React Developer"]

    },
    {
        id: 10,
        title: "AT Store - E-Commerce",
        category: ["E-commerce"],
        description: "A modern e-commerce platform designed for fashion and accessories. Features include a dynamic admin dashboard, discount and coupon system, order management, product customization options, and a sleek storefront optimized for performance and mobile responsiveness.",
        img: "",
        date: "16 JAN",
        github: "https://github.com/HassanSalah25/cottonhousekidswear",
        link: "http://at-wears.com/",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/atstore.png"],
        responsibilities: [
            "Built custom admin dashboard for managing products, discounts, and customer orders",
            "Developed a coupon and offer system with time-sensitive logic and usage limits",
            "Integrated mobile-first design using responsive components and clean UI layouts",
            "Handled full order flow including cart, checkout, payment integration, and confirmation",
            "Added product customization options including variants like size, color, and quantity"
        ],
        role: ["Full-Stack Developer", "Backend", "Frontend"]

    },
    {
        id: 11,
        title: "Ionology - Company Profile",
        category: ["Company, ", "Profile"],
        description: "A futuristic company profile website developed for Ionology, a leader in digital transformation solutions. The site features dynamic scroll animations, comprehensive sections detailing services such as digital transformation, innovation, and geospatial intelligence, as well as team introductions and client testimonials. Fully optimized for search engines to enhance online visibility.",
        img: "",
        date: "05 JUN",
        github: null,
        link: "http://ionology.sa/",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/ionology.png"],
        responsibilities: [
            "Developed a futuristic company profile site with smooth scroll-based animations",
            "Implemented sections for digital transformation, innovation, and geospatial services",
            "Created reusable components for client testimonials, service cards, and team bios",
            "Optimized metadata and page structure for advanced SEO and Google indexing",
            "Ensured accessibility and performance across browsers and mobile devices"
        ],
        role: ["Frontend", "Backend", "UI/UX"]

    },
    {
        id: 12,
        title: "DUKE - E-Commerce",
        category: ["E-commerce"],
        description: "An online store specializing in electrical appliances in Saudi Arabia, offering products like refrigerators, freezers, screens, and air conditioners.",
        img: "",
        date: "01 DEC",
        github: null,
        link: "http://dukeksa.com/",
        tools: ["WordPress, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/duke/duke.png","assets/imgs/projects/duke/1.png"],
        responsibilities: [
            "Created a sleek WordPress storefront optimized for electronics product categories",
            "Customized product pages to highlight specifications, offers, and delivery options",
            "Integrated a multi-category navigation system for appliances like ACs, TVs, and fridges",
            "Ensured Arabic-language support and region-specific UX for Saudi Arabia market",
            "Enhanced performance and minimized plugin bloat for fast load times"
        ],
        role: ["WordPress Developer", "Frontend"]
    },
    {
        id: 13,
        title: "SHAHA - E-commerce Platform",
        category: ["E-commerce"],
        description: "An advanced e-commerce platform for Koolen brand, offering a seamless online shopping experience. The system is tightly integrated with a mobile application and includes synchronized payment gateways, shipping options, and inventory management tailored for the Saudi market.",
        img: "",
        date: "31 DEC",
        github: null,
        link: "https://shaha.com.sa/",
        tools: ["Laravel, ", "Vuejs, ", "MySQL, ", "JavaScript, ", "HTML, ", "CSS"],
        images: ["assets/imgs/projects/shaha/1.png"],
        responsibilities: [
            "Developed a seamless e-commerce platform with Laravel backend and Vue.js frontend integration",
            "Synchronized website with mobile application to maintain shared cart and real-time updates",
            "Integrated local payment gateways and shipping APIs tailored for the Saudi market",
            "Built inventory management logic with real-time stock control and automated notifications",
            "Ensured system scalability and high availability during promotional campaigns"
        ],
        role: ["Backend", "Frontend", "Vue.js Developer"]

    },
    {
        id: 14,
        title: "Koolen - E-commerce Platform",
        category: ["E-commerce"],
        description: "A scalable e-commerce system for Koolen under Al-Muhaidib First Mission. Built with Laravel and React, the platform features product catalogs, order tracking, mobile integration, secure payment processing, and logistics coordination across the Gulf region.",
        img: "",
        date: "31 DEC",
        github: null,
        link: "https://koolen.com.sa/",
        tools: ["Laravel, ", "React, ", "MySQL, ", "JavaScript, ", "HTML, ", "CSS"],
        images: ["assets/imgs/projects/koolen/1.png"],
        responsibilities: [
            "Engineered a scalable Laravel backend for managing products, orders, and logistics flows",
            "Integrated React.js to deliver a high-performance, app-like frontend experience",
            "Implemented secure checkout with payment processing and order tracking systems",
            "Collaborated with Gulf-based logistics partners to ensure real-time delivery syncing",
            "Built custom APIs to support both web and mobile app clients"
        ],
        role: ["Full-Stack Developer", "Backend", "React Developer"]

    },
    {
        id: 15,
        title: "Cordiana - ERP",
        category: ["ERP"],
        description: "A fully integrated ERP system designed to manage HR, inventory, sales, and accounting operations. Built with Laravel, the platform features real-time analytics dashboards, role-based access control, automated workflows, and department-level management. Ideal for mid to large-sized enterprises seeking operational efficiency.",
        img: "",
        date: "28 DEC",
        github: null,
        link: "https://cordiana-sys.com/",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/cordiana.png"],
        responsibilities: [
            "Designed modular architecture to handle HR, accounting, sales, and inventory modules",
            "Implemented dynamic dashboards with real-time analytics and KPI tracking",
            "Built a role-based access control system to secure sensitive operations across departments",
            "Automated workflows for common business operations such as payroll and purchase orders",
            "Handled data integrity, audit logs, and advanced reporting functionalities"
        ],
        role: ["Backend", "System Architect", "ERP Developer"]

    },
    {
        id: 16,
        title: "Nota Aladdin - Accountant",
        category: ["Accounting"],
        description: "A lightweight accounting and invoicing web app tailored for freelancers and small business owners. The platform supports income tracking, expense management, invoice generation, and automated tax calculations with visual income reports and financial summaries.",
        img: "",
        date: "28 DEC",
        github: null,
        link: "https://account.aladdin-eg.com/login",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/aladdin/aladdin-directory.png","assets/imgs/projects/aladdin/2.png"],
        responsibilities: [
            "Built lightweight Laravel-based accounting web app tailored for small business needs",
            "Created modules for income, expense, invoicing, and tax calculation",
            "Implemented dynamic charts and visual financial summaries for user-friendly analysis",
            "Designed simple, clean UI to allow non-technical users to navigate and manage accounts",
            "Secured user data with authentication and input validation best practices"
        ],
        role: ["Backend", "Frontend", "UX Focused Developer"]

    },
    {
        id: 17,
        title: "Octahedron - ERP",
        category: ["ERP"],
        description: "A modular ERP system built for small and medium enterprises. It includes core modules like CRM, project management, accounting, inventory, and warehouse control. Built with a multi-tenant architecture, it enables scalable deployment for multiple clients with isolated data and access control.",
        img: "",
        date: "28 DEC",
        github: null,
        link: "http://octahedron-sols.com/",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/octahedron/octahedron.png","assets/imgs/projects/octahedron/1.png"],
        responsibilities: [
            "Developed a multi-tenant ERP system with isolated data environments for each client",
            "Implemented core modules including CRM, accounting, project management, and inventory",
            "Created scalable deployment pipeline for onboarding new clients with minimal config",
            "Designed admin panel for super-admin and tenant-specific dashboards",
            "Integrated notification system and task workflows between internal modules"
        ],
        role: ["Backend", "Full-Stack", "SaaS Architect"]


    },
    {
        id: 18,
        title: "Paper Jewels - E-Commerce",
        category: ["E-commerce"],
        description: "An elegant Laravel-powered online store for handcrafted paper accessories. The platform features product variations, user wishlists, smooth checkout, and an intuitive admin dashboard. Designed with a clean, minimalist aesthetic and optimized for both desktop and mobile experiences.",
        img: "",
        date: "28 DEC",
        github: null,
        link: null,
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/paper_jewels.png"],
        responsibilities: [
            "Built a Laravel-based online store with minimalist UI for handcrafted accessories",
            "Implemented product variants and wishlist functionality for improved user engagement",
            "Designed and integrated secure cart + checkout flow with order history",
            "Created intuitive admin panel for managing inventory, orders, and customer interactions",
            "Optimized for mobile experience and SEO performance for niche product visibility"
        ],
        role: ["Backend", "Frontend", "UI/UX"]

    },
    {
        id: 19,
        title: "Al Motqd - E-Commerce",
        category: ["E-commerce"],
        description: "A Laravel-based e-commerce platform developed for Al Motqd. It includes product management, secure checkout, order tracking, and an admin panel for full control over inventory and sales. Built to support Arabic localization and optimized for user experience across all devices.",
        img: "",
        date: "28 DEC",
        github: null,
        link: "https://almotqd.shafiqa-directory.com/",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/ALMOTQD/ALMOTQD.png","assets/imgs/projects/ALMOTQD/1.png"],
        responsibilities: [
            "Developed an Arabic-first Laravel e-commerce platform with RTL layout and localization",
            "Built secure checkout flow with order tracking and dynamic delivery status updates",
            "Implemented custom admin panel for managing products, categories, and sales reports",
            "Optimized performance for mobile users and ensured compatibility across major browsers",
            "Handled image optimization and CDN integration for smooth product image delivery"
        ],
        role: ["Backend", "Frontend", "UX"]

    },
    {
        id: 20,
        title: "KMG Castor - E-commerce",
        category: ["E-commerce"],
        description: "An OpenCart-powered e-commerce website for KMG Castor, a supplier of industrial wheels and casters. The platform features advanced cart customization, flexible shipping rules, and seamless payment gateway integration. Designed to meet the needs of B2B and industrial clients with performance and reliability in mind.",
        img: "",
        date: "28 DEC",
        github: null,
        link: "http://kmgcastor.com/",
        tools: ["OpenCart, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/kmg/kmg.png","assets/imgs/projects/kmg/1.png"],
        responsibilities: [
            "Customized OpenCart to fit industrial product types with variable specifications",
            "Implemented cart logic for bulk orders with tiered pricing and dynamic shipping rules",
            "Integrated secure payment gateway and automated invoice generation",
            "Enhanced B2B user experience through simplified reorder flows and product filtering",
            "Performed OpenCart performance tuning and SEO optimization"
        ],
        role: ["OpenCart Developer", "Frontend"]

    },
    {
        id: 21,
        title: "Ragaie - Company Profile",
        category: ["Company, ", "Profile"],
        description: "A professional personal branding website for Ahmed Ragaie, an entrepreneur and strategic marketer. The platform showcases his thoughts, articles, media appearances, and intellectual property, reflecting his expertise in global business and management consulting. Designed with a clean layout and optimized for user engagement and SEO.",
        img: "",
        date: "29 DEC",
        github: null,
        link: "https://ragaie.com",
        tools: ["WordPress, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/ragaie.png"],
        responsibilities: [
            "Developed a professional branding website using WordPress tailored for thought leadership",
            "Designed custom post types to organize articles, media appearances, and IP content",
            "Optimized for search engines using schema markup and clean metadata architecture",
            "Enhanced readability and interaction flow with a minimalist and accessible layout",
            "Implemented a content management system allowing non-tech edits by the client"
        ],
        role: ["WordPress Developer", "UI/UX", "SEO"]

    },
    {
        id: 22,
        title: "Mar Decor - Company Profile",
        category: ["Company, ", "Profile"],
        description: "A sophisticated company profile website for Mar Decor, a premier interior design and finishing company in Egypt. The platform highlights their extensive portfolio, detailing services in decoration, finishes, and gypsum work. Emphasis is placed on visual storytelling through high-quality galleries and mood boards, showcasing their commitment to creativity and elegance. The site is designed to appeal to B2B clients, reflecting Mar Decor's 20+ years of industry experience and over 1,000 completed projects.",
        img: "",
        date: "05 JAN",
        github: null,
        link: "https://new.mar-decor.com/",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/mardecor/mardecor.png","assets/imgs/projects/mardecor/1.png"],
        responsibilities: [
            "Created an elegant Laravel website to present interior design projects and services",
            "Integrated high-quality image galleries and mood boards for immersive storytelling",
            "Built service-based navigation to guide B2B visitors through Mar Decor's offerings",
            "Implemented content sections highlighting project milestones and client testimonials",
            "Ensured full responsiveness with pixel-perfect design across mobile/tablet/desktop"
        ],
        role: ["Backend", "Frontend", "UI/UX Designer"]

    },
    {
        id: 23,
        title: "Corddigital - Company Profile",
        category: ["Company, ", "Profile"],
        description: "A comprehensive company profile website for Cord Digital, a leading advertising and e-marketing agency in Egypt. The platform showcases their extensive range of services, including digital marketing, web and app solutions, graphics and photography, video and multimedia production, music production, and business planning. It features detailed case studies, service breakdowns, and effective lead capture tools. Designed with a modern layout and optimized for fast performance to enhance user experience.",
        img: "",
        date: "05 JAN",
        github: null,
        link: "https://corddigital.com/",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/corddigital/1.png"],
        responsibilities: [
            "Developed a detailed company profile for a full-service media agency using Laravel",
            "Implemented service pages with case studies, multimedia showcases, and team bios",
            "Built dynamic forms for lead generation, tailored to different marketing services",
            "Optimized site structure and performance for quick access across all devices",
            "Integrated blog and resource center for content marketing strategy"
        ],
        role: ["Full-Stack Developer", "Content Integrator", "UI/UX"]

    },
    {
        id: 24,
        title: "Heritage - Medical Tourism Website",
        category: ["Service"],
        description: "A WordPress-based medical tourism platform designed to attract international patients to Egypt. The website showcases a range of high-quality services including fertility treatments, dental care, and cosmetic procedures. It features multilingual support, service details, contact forms, and patient inquiry flows tailored for global outreach.",
        img: "",
        date: "15 MAR",
        github: null,
        link: null,
        tools: ["Wordpress, ", "MySQL, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/heritage/1.png"],
        responsibilities: [
            "Developed a WordPress medical tourism platform targeting international patients",
            "Created multilingual support for Arabic, English, and French users",
            "Integrated inquiry forms and contact flows for service bookings and patient communication",
            "Showcased procedures with high-quality visuals and benefit-focused content",
            "Implemented SEO structure tailored to medical tourism keywords and regions"
        ],
        role: ["WordPress Developer", "Multilingual UX", "SEO"]

    },
    {
        id: 25,
        title: "Cord Art - Digital Art Platform",
        category: ["Digital Art"],
        description: "Cord Art is a specialized digital services platform by Cord Digital, dedicated to delivering high-quality visual and creative content. It offers services in graphic design, photography, video editing, audio production, and UI/UX design. The platform is designed for businesses seeking impactful branding and engaging multimedia content, with a sleek interface and streamlined service request process.",
        img: "",
        date: "31 DEC",
        github: null,
        link: "https://corddigital.com/cord-art/public/",
        tools: ["Laravel, ", "MySQL, ", "JavaScript, ", "HTML, ", "CSS"],
        images: ["assets/imgs/projects/cord-art/1.png"],
        responsibilities: [
            "Developed Laravel-based digital services platform for managing art-related service requests",
            "Built modules for graphic design, video, audio, and UI/UX submissions with custom form logic",
            "Implemented streamlined service request flow to enhance client onboarding experience",
            "Designed an elegant, modern UI layout optimized for creative agencies and media brands",
            "Integrated image and media upload handling with validation and secure storage"
        ],
        role: ["Backend", "Frontend", "UX Designer"]

    },
    {
        id: 26,
        title: "Social Media Web App - Blogging",
        category: ["Blogging, ", "Social"],
        description: "A full-featured social media and blogging platform developed using Laravel. It allows users to create accounts, publish blog posts, interact through comments and likes, and follow other users. The system includes profile management, content moderation, and a responsive UI to ensure a seamless user experience across devices.",
        img: "",
        date: "08 MAY",
        github: null,
        link: null,
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"],
        responsibilities: [
            "Created a full-featured Laravel social blogging system with user accounts and roles",
            "Built post creation, editing, liking, and comment interactions with real-time feedback",
            "Designed profile management module with image upload, bio updates, and follower tracking",
            "Implemented content moderation and admin tools for post and user control",
            "Ensured full responsiveness with dynamic layout adaptations across devices"
        ],
        role: ["Full-Stack", "Backend", "UI/UX"]

    },
    {
        id: 27,
        title: "Short URL Verse - Service",
        category: ["Service"],
        description: "A branded short link generator built with Laravel, designed for businesses and content creators. It offers real-time analytics, click tracking, and custom aliases for professional-looking links. Ideal for marketing campaigns, social sharing, and improving engagement through clean and trackable URLs.",
        img: "",
        date: "28 DEC",
        github: null,
        link: null,
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"],
        responsibilities: [
            "Built a branded link shortener with real-time analytics and custom alias features",
            "Developed click tracking system with IP logging, timestamps, and device info",
            "Created user dashboard for managing links, editing aliases, and viewing stats",
            "Implemented secure redirect logic and QR integration for each short link",
            "Optimized system for fast redirect response and high-availability hosting"
        ],
        role: ["Backend", "Full-Stack", "Analytics Logic"]

    },
    {
        id: 28,
        title: "QR Code Verse - Service",
        category: ["Service"],
        description: "A dynamic QR code generation service built with Laravel. It supports various QR types including URLs, business cards, Wi-Fi access, SMS, and more. Users can customize colors, add logos, and download codes in SVG or PNG formats. Designed for businesses seeking branded, trackable, and high-quality QR solutions.",
        img: "",
        date: "28 DEC",
        github: null,
        link: "https://qrcode.seowolves.net/account/sign-up",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"],
        responsibilities: [
            "Built QR code generator supporting various data types (URLs, Wi-Fi, contacts, SMS, etc.)",
            "Implemented color customization, logo upload, and style themes for branded QR codes",
            "Allowed users to download codes in SVG/PNG with high-quality vector output",
            "Designed intuitive frontend to simplify QR creation for all user levels",
            "Secured user accounts and link tracking for professional usage"
        ],
        role: ["Full-Stack", "Backend", "UX"]

    },
    {
        id: 29,
        title: "V Card Verse - Service",
        category: ["Service"],
        description: "A digital business card builder that allows users to create personalized profiles with contact info, social links, and embedded media. Instantly shareable via QR code or short link, making networking smarter and more efficient for professionals and teams.",
        img: "",
        date: "28 DEC",
        github: null,
        link: "http://vcard.seowolves.net",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"],
        responsibilities: [
            "Developed digital business card builder with shareable profiles via short link or QR",
            "Enabled embedding social links, bio, contact info, and media on profile pages",
            "Built real-time preview and update system for better user experience",
            "Integrated QR code generation tied to each unique vCard link",
            "Ensured mobile-first design for smart sharing in networking events and meetings"
        ],
        role: ["Full-Stack", "Backend", "UX Designer"]

    },
    {
        id: 30,
        title: "Page Builder - Service",
        category: ["Service"],
        description: "A drag-and-drop landing page builder built with Laravel. Users can create fully customized pages using reusable content blocks, with live preview, mobile responsiveness, and a modern, intuitive editing interface. Ideal for marketers, product launches, and one-page websites.",
        img: "",
        date: "28 DEC",
        github: null,
        link: null,
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"],
    },
    {
        id: 31,
        title: "News Blogging - Blogging",
        category: ["Blogging"],
        description: "A dynamic news blogging platform developed with Laravel, designed for publishing articles, managing categories and tags, and supporting multimedia content. Features include an admin panel for content management, user comments, and SEO-friendly structure—ideal for digital magazines, newsrooms, and niche blogs.",
        img: "",
        date: "28 DEC",
        github: null,
        link: null,
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"],
    },
    {
        id: 32,
        title: "Salon Beauty - Service",
        category: ["Service"],
        description: "A customized appointment booking platform for salons and spas. Users can browse available services, view pricing, schedule appointments, and receive real-time SMS confirmations. Admins can manage staff schedules, service categories, and track bookings from a clean backend panel.",
        img: "",
        date: "28 DEC",
        github: null,
        link: null,
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"],
    },
    {
        id: 33,
        title: "German.C - Company Profile",
        category: ["Company, ", "Profile"],
        description: "A corporate profile website developed using OpenCart, showcasing the company’s services, products, and achievements. The platform includes dynamic content sections, contact forms, and a clean layout optimized for both desktop and mobile users—ideal for businesses seeking a solid online presence.",
        img: "",
        date: "28 DEC",
        github: null,
        link: null,
        tools: ["OpenCart, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"],
    },
    {
        id: 34,
        title: "Recruitment Office – عنوان المجد للاستقدام",
        category: ["Service"],
        description: "A recruitment office website built with WordPress, tailored for connecting clients with qualified domestic workers. The platform includes service listings, smart request forms, regional filters by nationality and profession, and a responsive design to support users across devices.",
        img: "",
        date: "28 FEB",
        github: null,
        link: 'https://enwanelmagd.com/',
        tools: ["Wordpress, ", "MySQL, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"],
    },
    {
        id: 35,
        title: "E-Commerce Builder - E-Commerce",
        category: ["E-commerce"],
        description: "A Laravel-based platform that enables users to create and launch their own e-commerce websites. Features include product management, order tracking, customizable storefronts, secure payment integration, and responsive design—ideal for entrepreneurs and small businesses.",
        img: "",
        date: "28 DEC",
        github: null,
        link: null,
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"],
    },
    {
        id: 36,
        title: "Moneyfellow - Service",
        category: ["Service"],
        description: "A Django-powered financial service platform that facilitates group savings and digital money circles. The system allows users to create saving groups, schedule payments, and manage contributions with full transparency and real-time updates.",
        img: "",
        date: "31 DEC",
        github: null,
        link: null,
        tools: ["Django, ", "MySQL, ", "Python, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"]
    }
];

export default projectsData;