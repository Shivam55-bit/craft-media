export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  gradient: string;
  bg: string;
  number: string;
  heroImage: string;
  fullDescription: string[];
  features: string[];
  benefits: { title: string; description: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "seo",
    title: "SEO",
    shortDescription:
      "In case you're an advertiser or entrepreneur, SEO is a basic piece of any fruitful promoting technique. We boost your Google ranking with Local SEO, Ecommerce SEO, and Enterprise SEO strategies.",
    icon: "Search",
    gradient: "from-emerald-500 to-green-400",
    bg: "from-emerald-500/10 to-green-500/10",
    number: "01",
    heroImage:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&h=600&fit=crop&q=80",
    fullDescription: [
      "Search Engine Optimization (SEO) is a critical component of any successful digital marketing strategy. At Craft Media Hub, we specialize in delivering comprehensive SEO services that help your website rank higher on Google and other search engines.",
      "Our data-driven approach combines technical SEO, on-page optimization, and off-page strategies to ensure sustainable growth in organic traffic. We don't believe in shortcuts — we build your online presence the right way.",
      "Whether you're a local business in Delhi NCR or an enterprise looking to dominate national search results, our team of SEO experts has the knowledge and experience to deliver measurable results.",
    ],
    features: [
      "Local SEO for Delhi NCR businesses",
      "E-Commerce SEO optimization",
      "Enterprise-level SEO strategies",
      "Keyword research & analysis",
      "On-page & technical SEO",
      "Link building & off-page SEO",
      "Monthly SEO reports & analytics",
      "Google My Business optimization",
    ],
    benefits: [
      {
        title: "Higher Google Rankings",
        description:
          "We implement proven strategies that push your website to the top of search results for your target keywords.",
      },
      {
        title: "Increased Organic Traffic",
        description:
          "More visibility means more visitors. Our SEO efforts drive qualified traffic that converts into customers.",
      },
      {
        title: "Better ROI",
        description:
          "SEO provides one of the highest returns on investment compared to other marketing channels.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription:
      "We use a customized approach to make your digital presence powerful over Google. Our services include SMO, PPC and Content Writing that drive real business growth.",
    icon: "TrendingUp",
    gradient: "from-orange-500 to-amber-400",
    bg: "from-orange-500/10 to-amber-500/10",
    number: "02",
    heroImage:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&h=600&fit=crop&q=80",
    fullDescription: [
      "Digital Marketing is the backbone of modern business growth. At Craft Media Hub, we offer comprehensive digital marketing services that cover every aspect of your online presence — from social media to paid advertising.",
      "Our team creates customized strategies based on your business goals, target audience, and industry. We believe every business is unique and deserves a tailored approach to digital marketing.",
      "With our expertise in SMO, PPC, Content Writing, and more, we ensure your brand reaches the right audience at the right time through the right channels.",
    ],
    features: [
      "Social Media Optimization (SMO)",
      "Pay-Per-Click (PPC) advertising",
      "Content Writing & Marketing",
      "Email Marketing campaigns",
      "Brand awareness strategies",
      "Lead generation campaigns",
      "Analytics & performance tracking",
      "Competitor analysis",
    ],
    benefits: [
      {
        title: "Powerful Online Presence",
        description:
          "We make your brand visible across all major digital platforms, ensuring maximum reach and engagement.",
      },
      {
        title: "Targeted Audience Reach",
        description:
          "Our data-driven approach ensures your marketing budget is spent reaching people who are most likely to convert.",
      },
      {
        title: "Measurable Results",
        description:
          "Every campaign comes with detailed analytics and reports so you can see exactly how your investment is performing.",
      },
    ],
  },
  {
    slug: "web-designing",
    title: "Web Designing",
    shortDescription:
      "We create experience with our designs. Professional responsive, dynamic, e-commerce and custom web designing services that leave the first impression on your visitors.",
    icon: "Globe",
    gradient: "from-blue-500 to-cyan-400",
    bg: "from-blue-500/10 to-cyan-500/10",
    number: "03",
    heroImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=600&fit=crop&q=80",
    fullDescription: [
      "Your website is the first impression of your business. At Craft Media Hub, we create stunning, responsive website designs that captivate visitors and convert them into customers.",
      "We specialize in professional website designing services focused on your objectives and business goals. Our designs are not just beautiful — they're strategic, user-friendly, and optimized for performance.",
      "From responsive layouts to dynamic interfaces, e-commerce platforms to custom CMS — we handle every type of web design project with the same level of dedication and excellence.",
    ],
    features: [
      "Responsive website design",
      "Dynamic website design",
      "Custom CMS-based design",
      "Landing page design",
      "UI/UX design",
      "Mobile-first approach",
      "Cross-browser compatibility",
      "SEO-friendly design structure",
    ],
    benefits: [
      {
        title: "First Impression That Lasts",
        description:
          "Our designs create a powerful first impression that builds trust and credibility with your visitors.",
      },
      {
        title: "Higher Conversions",
        description:
          "Strategically designed layouts guide visitors toward your goals — whether it's a purchase, signup, or inquiry.",
      },
      {
        title: "Mobile Responsive",
        description:
          "Every design we create works flawlessly across all devices — desktop, tablet, and mobile.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "We use right coding for development. PHP, Joomla, Drupal, Magento, and Custom web development that saves money, requires easy maintenance, and offers so much more.",
    icon: "Code2",
    gradient: "from-violet-500 to-purple-400",
    bg: "from-violet-500/10 to-purple-500/10",
    number: "04",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop&q=80",
    fullDescription: [
      "Web development is more than just writing code — it's about building scalable, secure, and high-performance web applications that drive business growth. At Craft Media Hub, we use the right technology for the right project.",
      "Our experienced developers work with PHP, Joomla, Drupal, Magento, WordPress, and custom frameworks to deliver solutions that meet your exact requirements. We focus on clean code, fast loading times, and maintainable architecture.",
      "Whether you need a simple business website or a complex web application, our development team has the expertise to deliver on time and within budget.",
    ],
    features: [
      "PHP web development",
      "WordPress development",
      "Custom CMS development",
      "Joomla & Drupal development",
      "API development & integration",
      "Database design & optimization",
      "Performance optimization",
      "Security & maintenance",
    ],
    benefits: [
      {
        title: "Clean & Scalable Code",
        description:
          "We write maintainable code that scales with your business, making future updates easy and cost-effective.",
      },
      {
        title: "Fast & Secure",
        description:
          "Our websites are optimized for speed and built with security best practices to protect your data.",
      },
      {
        title: "Easy Maintenance",
        description:
          "We build with popular, well-supported technologies that make ongoing maintenance simple and affordable.",
      },
    ],
  },
  {
    slug: "ecommerce-web-designing",
    title: "E-Commerce Web Designing",
    shortDescription:
      "E-Commerce designing that generates trust for your clients and fascinates new clients with search engine permeability. We build end-to-end online store experiences.",
    icon: "ShoppingCart",
    gradient: "from-pink-500 to-rose-400",
    bg: "from-pink-500/10 to-rose-500/10",
    number: "05",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&q=80",
    fullDescription: [
      "E-Commerce is booming, and having a professional online store is essential for any retail business. At Craft Media Hub, we design and develop e-commerce websites that not only look great but also drive sales.",
      "Our e-commerce solutions are built with the customer journey in mind. From product discovery to checkout, every step is optimized for maximum conversions. We work with platforms like WooCommerce, Magento, Shopify, and custom solutions.",
      "We ensure your online store is secure, fast, and easy to manage. With features like payment gateway integration, inventory management, and order tracking, we build complete e-commerce ecosystems.",
    ],
    features: [
      "WooCommerce & Magento development",
      "Shopify store design",
      "Payment gateway integration",
      "Product catalog management",
      "Shopping cart optimization",
      "Order & inventory management",
      "Mobile-responsive store design",
      "SEO-optimized product pages",
    ],
    benefits: [
      {
        title: "Increased Sales",
        description:
          "Our conversion-optimized designs help turn visitors into paying customers with intuitive shopping experiences.",
      },
      {
        title: "Trust & Credibility",
        description:
          "Professional e-commerce design builds customer confidence and encourages repeat purchases.",
      },
      {
        title: "Easy Management",
        description:
          "Our admin panels make it simple to manage products, orders, and customers without technical expertise.",
      },
    ],
  },
  {
    slug: "php-development",
    title: "PHP Development",
    shortDescription:
      "PHP web development with a plethora of benefits including user-friendly interfaces, great control, and access to support. We deliver complete solutions that meet your goals.",
    icon: "Smartphone",
    gradient: "from-indigo-500 to-blue-400",
    bg: "from-indigo-500/10 to-blue-500/10",
    number: "06",
    heroImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop&q=80",
    fullDescription: [
      "PHP remains one of the most powerful and widely-used server-side programming languages. At Craft Media Hub, our PHP developers build robust, scalable web applications that power businesses of all sizes.",
      "From custom PHP applications to framework-based development using Laravel, CodeIgniter, and CakePHP — we deliver solutions that are efficient, secure, and tailored to your business needs.",
      "Our PHP development services cover everything from simple websites to complex enterprise applications, CRM systems, and custom admin panels.",
    ],
    features: [
      "Custom PHP application development",
      "Laravel & CodeIgniter development",
      "CRM & ERP development",
      "API development & integration",
      "Database design with MySQL",
      "Admin panel development",
      "Migration & upgrades",
      "Ongoing support & maintenance",
    ],
    benefits: [
      {
        title: "Cost-Effective Solutions",
        description:
          "PHP is open-source, which means lower development costs without compromising on quality or functionality.",
      },
      {
        title: "Flexible & Scalable",
        description:
          "PHP applications can be easily scaled and modified as your business grows and requirements change.",
      },
      {
        title: "Reliable & Secure",
        description:
          "With proper coding standards and security practices, PHP applications are highly reliable and secure.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((s) => s.slug === slug);
}
