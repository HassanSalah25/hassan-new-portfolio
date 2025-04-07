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
        images: ["assets/imgs/projects/aladdin/aladdin-directory.png", "assets/imgs/projects/aladdin/1.png"]
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
        images: ["assets/imgs/projects/neo/neo.png","assets/imgs/projects/neo/1.png"]
    },
    {
        id: 2,
        title: "Shoaa - Healthcare",
        category: ["Healthcare Center"],
        description: "Shoaa is a healthcare center website developed using WordPress, providing an efficient and user-friendly platform for patients to register appointments for various healthcare services with doctors. The website integrates customized WordPress features to streamline the appointment booking process while maintaining a clean and responsive design for optimal user experience on all devices.",
        img: "",
        date: "22 MAY",
        github: null,
        link: "https://shoaamc.com/",
        tools: ["WordPress, ", "PHP, ", "MySQL, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/shoaa/shoaa.png","assets/imgs/projects/shoaa/1.png"]
    },
    {
        id: 3,
        title: "Cotton House Kidswear - E-Commerce",
        category: ["E-commerce"],
        description: "CottonHouseKidsWear is an e-commerce website that sells custom clothing for all ages and genders. The platform is designed to offer an easy-to-use shopping experience, allowing customers to browse various categories of clothes, view product details, and purchase customized clothing items. Customers can select sizes, colors, and styles based on their preferences. The website is built using Laravel PHP, MySQL, and other modern web technologies to ensure high performance, security, and scalability. The front-end is clean and user-friendly, with responsive design ensuring that the site functions well on both mobile and desktop devices.",
        img: "",
        date: "16 JAN",
        github: "https://github.com/HassanSalah25/cottonhousekidswear",
        link: "https://github.com/HassanSalah25/cottonhousekidswear",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/ct/ct.png","assets/imgs/projects/ct/1.png"]
    },
    {
        id: 4,
        title: "Grand Gate - Company Profile",
        category: ["Company, ", "Profile"],
        description: "Grand Gate is a portfolio website designed to showcase and sell premium gates for large buildings, including commercial, industrial, and residential spaces. Built using Laravel PHP, MySQL, and native HTML/CSS/JS, the platform provides a clean, professional presentation for high-quality gate designs. Customers can browse through categories, view detailed product information, and explore project galleries to find the perfect solution for their building needs. The website is fully responsive, ensuring optimal performance on all devices.",
        img: "",
        date: "22 MAY",
        github: "https://github.com/HassanSalah25/grand-gate",
        link: "https://github.com/HassanSalah25/grand-gate",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/grand-gate/grand-gate.png","assets/imgs/projects/grand-gate/1.png"]
    },
    {
        id: 7,
        title: "Web Scraper - Scraper",
        category: ["Scraper", "Python"],
        description: "The Web Scraping project was built using Python and its powerful libraries, such as **BeautifulSoup**, **Scrapy**, and **Requests**, to extract structured data from popular websites like **Alibaba** and **YellowPages**. The project automates the process of collecting valuable information such as product listings, business details, and contact information for further analysis and business use.",
        img: "",
        date: "08 MAY",
        github: null,
        link: null,
        tools: ["Python, ", "BeautifulSoup, ", "Scrapy, ", "Requests, ", "MySQL"],
        images: ["assets/imgs/projects/webscrapping.png"]
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
        images: ["assets/imgs/projects/modevia/modevia.png","assets/imgs/projects/modevia/1.png"]
    },
    {
        id: 3,
        title: "AT Store - E-Commerce",
        category: ["E-commerce"],
        description: "A stylish, efficient store tailored for fashion and accessories. Includes a dynamic admin panel, discount system, order tracking, and full product customization.",
        img: "",
        date: "16 JAN",
        github: "https://github.com/HassanSalah25/cottonhousekidswear",
        link: "https://github.com/HassanSalah25/cottonhousekidswear",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/atstore.png"]
    },
    {
        id: 3,
        title: "Masterchef - E-Commerce",
        category: ["E-commerce"],
        description: "A sleek e-commerce store for culinary tools and home kitchen items. Built for speed and user engagement, with advanced filtering and smart recommendations.",
        img: "",
        date: "16 JAN",
        github: null,
        link: null,
        tools: ["Laravel, ", "Vue.JS, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/masterchef/masterchef.png","assets/imgs/projects/masterchef/1.png"]
    },
    {
        id: 8,
        title: "Ionology - Company Profile",
        category: ["Company, ", "Profile"],
        description: "A futuristic brand profile website built with scroll animations, content sections for services, team, and client testimonials. Fully SEO-optimized.",
        img: "",
        date: "05 JUN",
        github: null,
        link: "http://ionology.sa/",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/ionology.png"]
    },
    {
        id: 10,
        title: "DUKE - E-Commerce",
        category: ["E-commerce"],
        description: "A stylish fashion website showcasing premium men's clothing. Developed with custom theme edits, mega menus, and performance optimization for global reach.",
        img: "",
        date: "01 DEC",
        github: null,
        link: "http://dukeksa.com/",
        tools: ["WordPress, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/duke/duke.png","assets/imgs/projects/duke/1.png"]
    },
    {
        id: 27,
        title: "SHAHA - E-commerce Platform",
        category: ["E-commerce"],
        description: "An e-commerce platform for Koolen, integrated with a mobile application, sharing the same payment gateways and shipment methods.",
        img: "",
        date: "31 DEC",
        github: null,
        link: "https://shaha.com.sa/",
        tools: ["Laravel", "Vuejs", "MySQL", "JavaScript", "HTML", "CSS"],
        images: ["assets/imgs/projects/shaha/1.png"]
    },
    {
        id: 11,
        title: "Cordiana - ERP",
        category: ["ERP"],
        description: "Full-scale ERP system tailored for HR, inventory, sales, and accounting. Includes real-time dashboards, role-based access, and multi-department workflows.",
        img: "",
        date: "28 DEC",
        github: null,
        link: "https://cordiana-sys.com/",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/cordiana.png"]
    },
    {
        id: 12,
        title: "Nota Aladdin - Accountant",
        category: ["Accounting"],
        description: "A lightweight financial tracking and invoicing app for freelancers and small business owners. Includes automated tax calculations and income reports.",
        img: "",
        date: "28 DEC",
        github: null,
        link: "https://account.aladdin-eg.com/login",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/aladdin/aladdin-directory.png","assets/imgs/projects/aladdin/2.png"]
    },
    {
        id: 13,
        title: "Octahedron - ERP",
        category: ["ERP"],
        description: "Modular ERP designed for SMEs. Supports CRM, project management, accounting, and warehouse control with multi-tenant architecture.",
        img: "",
        date: "28 DEC",
        github: null,
        link: "http://octahedron-sols.com/",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/octahedron/octahedron.png","assets/imgs/projects/octahedron/1.png"]
    },
    {
        id: 14,
        title: "Paper Jewels - E-Commerce",
        category: ["E-commerce"],
        description: "An elegant online store for handcrafted paper accessories. Features include product variations, wishlists, and seamless checkout. Designed with a minimalist aesthetic and excellent mobile support.",
        img: "",
        date: "28 DEC",
        github: null,
        link: null,
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/paper_jewels.png"]
    },
    {
        id: 21,
        title: "Al Motqd - E-Commerce",
        category: ["E-commerce"],
        description: "An e-commerce platform built with Laravel.",
        img: "",
        date: "28 DEC",
        github: null,
        link: "https://almotqd.shafiqa-directory.com/",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/ALMOTQD/ALMOTQD.png","assets/imgs/projects/ALMOTQD/1.png"]
    },
    {
        id: 22,
        title: "KMG Castor - E-commerce",
        category: ["E-commerce"],
        description: "Customized payment gateway integration for a heavy-duty wheels and casters supplier. Enhanced with cart customization and shipping rule flexibility.",
        img: "",
        date: "28 DEC",
        github: null,
        link: "http://kmgcastor.com/",
        tools: ["OpenCart, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/kmg/kmg.png","assets/imgs/projects/kmg/1.png"]
    },
    {
        id: 25,
        title: "Ragaie - Company Profile",
        category: ["Company, ", "Profile"],
        description: "A structured company profile platform focused on showcasing industrial projects, certificates, and service portfolios. Designed for B2B appeal.",
        img: "",
        date: "29 DEC",
        github: null,
        link: "https://ragaie.com",
        tools: ["WordPress, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/ragaie.png"]
    },
    {
        id: 29,
        title: "Mar Decor - Company Profile",
        category: ["Company, ", "Profile"],
        description: "A creative company profile for an interior design brand. Focus on visuals, galleries, mood boards, and showcasing projects.",
        img: "",
        date: "05 JAN",
        github: null,
        link: "https://new.mar-decor.com/",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/mardecor/mardecor.png","assets/imgs/projects/mardecor/1.png"]
    },
    {
        id: 28,
        title: "Corddigital - Company Profile",
        category: ["Company, ", "Profile"],
        description: "A digital marketing company site with case studies, service breakdowns, and lead capture tools. Modern layout and fast performance.",
        img: "",
        date: "05 JAN",
        github: null,
        link: "https://corddigital.com/",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/corddigital/1.png"]
    },
    {
        id: 6,
        title: "Social Media Web App - Blogging",
        category: ["Blogging, ", "Social"],
        description: "A social media and blogging platform built with Laravel.",
        img: "",
        date: "08 MAY",
        github: null,
        link: null,
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"]
    },
    {
        id: 15,
        title: "Short URL Verse - Service",
        category: ["Service"],
        description: "A branded short link generator with analytics tracking. Great for marketers and content creators who need clean links and campaign insights.",
        img: "",
        date: "28 DEC",
        github: null,
        link: null,
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"]
    },
    {
        id: 16,
        title: "QR Code Verse - Service",
        category: ["Service"],
        description: "Smart QR code generator with support for links, business cards, SMS, and more. Outputs SVG and PNG formats with customization options.",
        img: "",
        date: "28 DEC",
        github: null,
        link: "https://qrcode.seowolves.net/account/sign-up",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"]
    },
    {
        id: 17,
        title: "V Card Verse - Service",
        category: ["Service"],
        description: "A digital business card generator where users can build profiles and instantly share via QR or short link.",
        img: "",
        date: "28 DEC",
        github: null,
        link: "http://vcard.seowolves.net",
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"]
    },
    {
        id: 18,
        title: "Page Builder - Service",
        category: ["Service"],
        description: "Drag-and-drop page builder for custom landing pages. Includes reusable blocks, real-time previews, and a sleek editor interface.",
        img: "",
        date: "28 DEC",
        github: null,
        link: null,
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"]
    },
    {
        id: 19,
        title: "News Blogging - Blogging",
        category: ["Blogging"],
        description: "A news blogging platform built with Laravel.",
        img: "",
        date: "28 DEC",
        github: null,
        link: null,
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"]
    },
    {
        id: 20,
        title: "Salon Beauty - Service",
        category: ["Service"],
        description: "A tailored booking platform for salons and spas. Users can view service categories, book appointments, and receive SMS confirmations.",
        img: "",
        date: "28 DEC",
        github: null,
        link: null,
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"]
    },
    {
        id: 23,
        title: "German.C - Company Profile",
        category: ["Company, ", "Profile"],
        description: "A company profile website built with OpenCart.",
        img: "",
        date: "28 DEC",
        github: null,
        link: null,
        tools: ["OpenCart, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"]
    },
    {
        id: 26,
        title: "Heritage - Medical Tourism Website",
        category: ["Service"],
        description: "Medical services platform targeting international patients seeking fertility, dental, and cosmetic procedures in Egypt.",
        img: "",
        date: "15 MAR",
        github: null,
        link: null,
        tools: ["Wordpress, ", "MySQL, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/heritage/1.png"]
    },
    {
        id: 26,
        title: "Recruitment Office – عنوان المجد للاستقدام",
        category: ["Service"],
        description: "A website for a recruitment office connecting clients with domestic workers, featuring request forms, service listings, and regional filters.",
        img: "",
        date: "28 FEB",
        github: null,
        link: 'https://enwanelmagd.com/',
        tools: ["Wordpress, ", "MySQL, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"]
    },
    {
        id: 24,
        title: "E-Commerce Builder - E-Commerce",
        category: ["E-commerce"],
        description: "An e-commerce platform builder built with Laravel.",
        img: "",
        date: "28 DEC",
        github: null,
        link: null,
        tools: ["Laravel, ", "MySQL, ", "PHP, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"]
    },
    {
        id: 26,
        title: "Moneyfellow - Service",
        category: ["Service"],
        description: "A financial service platform built with Django.",
        img: "",
        date: "31 DEC",
        github: null,
        link: null,
        tools: ["Django, ", "MySQL, ", "Python, ", "HTML, ", "CSS, ", "JS"],
        images: ["assets/imgs/projects/gohar.png"]
    }
];

export default projectsData;