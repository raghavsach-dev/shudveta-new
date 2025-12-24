"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../portfolio/portfolio.css";

export default function PortfolioPageClient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const projects = [
    {
      id: 1,
      title: "Smart Automation Platform",
      category: "AI-Powered Solutions",
      description: "Revolutionary AI-driven automation solutions that streamline business processes and boost productivity by up to 300%.",
      longDescription: "This comprehensive automation platform leverages cutting-edge machine learning algorithms to analyze business workflows and identify optimization opportunities. The system integrates seamlessly with existing tools and provides real-time insights to drive continuous improvement.",
      image: "🚀",
      gradient: "from-blue-500 to-purple-600",
      buttonGradient: "from-blue-600 to-purple-600",
      tags: ["AI/ML", "Automation", "Cloud", "Python", "TensorFlow"],
      status: "Completed",
      year: "2024"
    },
    {
      id: 2,
      title: "Decentralized Marketplace",
      category: "Web3 Innovation",
      description: "Next-generation blockchain-based marketplace with smart contracts and decentralized finance features.",
      longDescription: "A pioneering decentralized marketplace built on Ethereum blockchain, featuring NFT trading, DeFi lending, and smart contract automation. The platform ensures trustless transactions and provides users with complete control over their digital assets.",
      image: "🌐",
      gradient: "from-green-500 to-teal-600",
      buttonGradient: "from-green-600 to-teal-600",
      tags: ["Web3", "Blockchain", "DeFi", "Ethereum", "Smart Contracts"],
      status: "Live",
      year: "2024"
    },
    {
      id: 3,
      title: "Cross-Platform App Suite",
      category: "Mobile Excellence",
      description: "Comprehensive mobile application ecosystem with seamless user experience across all platforms.",
      longDescription: "A unified mobile app suite that provides consistent experiences across iOS, Android, and web platforms. Features include real-time synchronization, offline capabilities, and advanced analytics for user engagement optimization.",
      image: "📱",
      gradient: "from-purple-500 to-pink-600",
      buttonGradient: "from-purple-600 to-pink-600",
      tags: ["React Native", "iOS", "Android", "Firebase", "Analytics"],
      status: "Completed",
      year: "2024"
    },
    {
      id: 4,
      title: "FSK Foil Products Website",
      category: "Industrial Solutions",
      description: "Specialized website for Foil-Scrim-Kraft (FSK) products used in insulation industry, featuring comprehensive product information and industry applications.",
      longDescription: "A specialized website focused on Foil-Scrim-Kraft (FSK) products, which are materials commonly used in the insulation industry. FSK is a laminated composite, usually made from an aluminum foil layer, fiberglass scrim for reinforcement, and a layer of natural kraft paper. Its primary role is to act as a durable, fire-resistant facing for insulation blankets and duct wraps. Essentially, it helps cover the insulation and serves as an excellent vapor retarder to improve energy efficiency.",
      image: "🏭",
      gradient: "from-gray-500 to-slate-600",
      buttonGradient: "from-gray-600 to-slate-600",
      tags: ["Industrial", "Manufacturing", "Insulation", "FSK", "Energy Efficiency"],
      status: "Completed",
      year: "2024"
    },
    {
      id: 5,
      title: "Ridezo Transportation Platform",
      category: "Transportation Solutions",
      description: "Comprehensive transportation platform offering pre-booked, reliable rides for daily commuting, office travel, city rides, family trips, and outstation travel with transparent pricing.",
      longDescription: "Goridezo.com is a website for Ridezo, which is a service offering pre-booked, reliable transportation. They focus on making daily commuting stress-free, especially for office goers, but also cover city rides, family trips, and outstation travel. They offer transparent pricing with options like weekly/monthly office subscriptions or per-km city ride fares. Basically, it's a ride service for both planned and on-demand travel with professional drivers.",
      image: "🚗",
      gradient: "from-blue-500 to-cyan-600",
      buttonGradient: "from-blue-600 to-cyan-600",
      tags: ["Transportation", "Ride Service", "Subscription", "Mobile App", "GPS Tracking"],
      status: "Completed",
      year: "2024"
    },
    {
      id: 6,
      title: "IoT Smart Home Hub",
      category: "IoT Solutions",
      description: "Intelligent home automation system with voice control and energy optimization features.",
      longDescription: "An advanced IoT platform that connects and manages all smart home devices through a centralized hub. Features include voice-activated controls, energy consumption monitoring, and predictive maintenance alerts.",
      image: "🏠",
      gradient: "from-orange-500 to-red-600",
      buttonGradient: "from-orange-600 to-red-600",
      tags: ["IoT", "Smart Home", "Voice Control", "Energy", "MQTT"],
      status: "In Development",
      year: "2024"
    },
    {
      id: 7,
      title: "E-Learning Platform",
      category: "EdTech Innovation",
      description: "Interactive online learning platform with AI-powered personalized curriculum recommendations.",
      longDescription: "A comprehensive e-learning platform that uses machine learning to adapt content based on student performance and learning patterns. Features include interactive quizzes, progress tracking, and collaborative learning tools.",
      image: "🎓",
      gradient: "from-indigo-500 to-blue-600",
      buttonGradient: "from-indigo-600 to-blue-600",
      tags: ["EdTech", "AI", "Personalization", "React", "Node.js"],
      status: "Completed",
      year: "2023"
    },
    {
      id: 8,
      title: "Financial Analytics Dashboard",
      category: "FinTech Solutions",
      description: "Real-time financial data visualization and analysis platform for investment decisions.",
      longDescription: "A sophisticated financial analytics dashboard that aggregates data from multiple sources to provide comprehensive market insights. Features include predictive modeling, risk assessment, and automated reporting.",
      image: "📊",
      gradient: "from-emerald-500 to-cyan-600",
      buttonGradient: "from-emerald-600 to-cyan-600",
      tags: ["FinTech", "Analytics", "Data Viz", "Python", "D3.js"],
      status: "Live",
      year: "2023"
    },
    {
      id: 9,
      title: "AR Shopping Experience",
      category: "AR/VR Innovation",
      description: "Augmented reality shopping application with virtual try-on and product visualization.",
      longDescription: "An immersive shopping experience that uses AR technology to allow customers to virtually try on clothes, visualize furniture in their space, and interact with products in 3D before making purchase decisions.",
      image: "🛍️",
      gradient: "from-rose-500 to-pink-600",
      buttonGradient: "from-rose-600 to-pink-600",
      tags: ["AR", "E-commerce", "3D", "Unity", "iOS"],
      status: "Beta",
      year: "2024"
    },
    {
      id: 10,
      title: "Healthcare Management System",
      category: "HealthTech Solutions",
      description: "Comprehensive healthcare management platform with patient monitoring and telemedicine features.",
      longDescription: "A complete healthcare ecosystem that integrates patient records, appointment scheduling, telemedicine consultations, and real-time health monitoring. Ensures HIPAA compliance and provides seamless care coordination.",
      image: "🏥",
      gradient: "from-teal-500 to-green-600",
      buttonGradient: "from-teal-600 to-green-600",
      tags: ["HealthTech", "HIPAA", "Telemedicine", "React", "PostgreSQL"],
      status: "Live",
      year: "2023"
    },
    {
      id: 11,
      title: "Supply Chain Optimizer",
      category: "Logistics Solutions",
      description: "AI-powered supply chain optimization platform reducing costs by 25% and improving delivery times.",
      longDescription: "An intelligent supply chain management system that uses predictive analytics to optimize inventory levels, route planning, and demand forecasting. Integrates with existing ERP systems for seamless operations.",
      image: "🚛",
      gradient: "from-amber-500 to-orange-600",
      buttonGradient: "from-amber-600 to-orange-600",
      tags: ["Logistics", "AI", "Optimization", "Supply Chain", "ERP"],
      status: "Completed",
      year: "2023"
    }
  ];

  // Add structured data for portfolio page
  useEffect(() => {
    const portfolioStructuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Shudveta IT Solutions Portfolio",
      "description": "Explore our portfolio of successful AI integration, automation, e-commerce, and digital transformation projects.",
      "url": "https://shudveta.com/portfolio",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Shudveta Projects",
        "numberOfItems": 5,
        "itemListElement": projects.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description,
            "url": `https://shudveta.com/portfolio/${project.id}`,
            "creator": {
              "@type": "Organization",
              "name": "Shudveta IT Solutions"
            },
            "dateCreated": `${project.year}-01-01`,
            "keywords": project.tags.join(", ")
          }
        }))
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://shudveta.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Portfolio",
            "item": "https://shudveta.com/portfolio"
          }
        ]
      }
    };

    // Add structured data script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(portfolioStructuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]:not([data-organization]):not([data-homepage]):not([data-contact])');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Portfolio Background Section */}
      <section className="relative h-[40vh] sm:h-[50vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Enhanced Background Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.4),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]"></div>
        </div>

        {/* Blur Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-purple-400/25 rounded-full blur-lg animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-400/15 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-10 w-28 h-28 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-pink-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-emerald-400/25 rounded-full blur-lg animate-pulse delay-1200"></div>

        {/* Floating Particles */}
        <div className="absolute top-16 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-32 right-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce delay-300 opacity-70"></div>
        <div className="absolute bottom-24 left-1/6 w-1 h-1 bg-indigo-300 rounded-full animate-bounce delay-700 opacity-50"></div>
        <div className="absolute bottom-16 right-1/6 w-0.5 h-0.5 bg-cyan-300 rounded-full animate-bounce delay-1000 opacity-80"></div>
        <div className="absolute top-1/4 left-3/4 w-1 h-1 bg-pink-300 rounded-full animate-bounce delay-500 opacity-60"></div>
        <div className="absolute top-3/4 right-1/5 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-bounce delay-800 opacity-70"></div>
        <div className="absolute top-2/3 left-1/5 w-0.5 h-0.5 bg-yellow-300 rounded-full animate-bounce delay-600 opacity-75"></div>
        <div className="absolute bottom-1/4 right-3/4 w-1 h-1 bg-orange-300 rounded-full animate-bounce delay-400 opacity-65"></div>

        {/* Glowing Orbs */}
        <div className="absolute top-40 left-16 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-sm animate-pulse delay-200 opacity-30"></div>
        <div className="absolute bottom-40 right-24 w-20 h-20 bg-gradient-to-r from-indigo-400 to-pink-500 rounded-full blur-md animate-pulse delay-900 opacity-25"></div>
        <div className="absolute top-2/3 right-16 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm animate-pulse delay-1400 opacity-35"></div>

        {/* Portfolio Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight mt-12 sm:mt-16 md:mt-20 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Portfolio
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover our innovative solutions across AI, Web3, mobile, and enterprise applications.
              Each project represents our commitment to excellence and technological innovation.
            </motion.p>
          </div>
        </div>

      </section>

      {/* Header - Overlay on Hero */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 md:h-28">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block hover:opacity-80 transition-opacity duration-200">
                <Image
                  src="/logo.png"
                  alt="Shudveta IT Solutions - AI, Automation & Digital Innovation Experts"
                  width={360}
                  height={180}
                  className="h-12 sm:h-16 md:h-24 w-auto"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-6 md:ml-10 flex items-center space-x-3 md:space-x-4">
                <Link href="/" className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
                <Link
                  href="/#behind-shudveta"
                  className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200 cursor-pointer"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About
                </Link>
                <Link href="/portfolio" className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Portfolio
                </Link>
                <Link href="/blogs" className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Blogs
                </Link>
                <Link href="/contact" className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gray-300 p-1.5 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-4 pb-4 border-t border-white/20"
            >
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
                <Link href="/#behind-shudveta" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About
                </Link>
                <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Portfolio
                </Link>
                <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Blogs
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Projects Grid */}
      <section className="relative bg-gray-50 py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Project 1 - Lubeck Elevators Website */}
            <div className="portfolio-card group">
              <div className="h-48 sm:h-56 relative overflow-hidden flex-shrink-0 w-full">
                <Image
                  src="/elevators.png"
                  alt="Lubeck Elevators corporate website - Professional elevator manufacturing company website built with Next.js and Tailwind CSS by Shudveta IT Solutions"
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="portfolio-card-content">
                <div className="portfolio-card-text">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Lubeck Elevators Website</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">A fully responsive and visually refined corporate website designed to represent Lubeck Elevators' brand identity and product portfolio.</p>
                </div>
                <Link href="/portfolio/1" className="w-full portfolio-button mt-auto inline-block text-center text-sm sm:text-base">
                  Read More
                </Link>
              </div>
            </div>

            {/* Project 2 - Lubeck Exports Platform */}
            <div className="portfolio-card group">
              <div className="h-48 sm:h-56 relative overflow-hidden flex-shrink-0 w-full">
                <Image
                  src="/exports.png"
                  alt="Lubeck Exports e-commerce platform - Full-stack B2B export platform built with Next.js, Firebase, and real-time inventory sync by Shudveta IT Solutions"
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="portfolio-card-content">
                <div className="portfolio-card-text">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Lubeck Exports Platform</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">A comprehensive full-stack e-commerce solution developed to digitize Lubeck Exports' product catalog and sales operations.</p>
                </div>
                <Link href="/portfolio/2" className="w-full portfolio-button mt-auto inline-block text-center text-sm sm:text-base">
                  Read More
                </Link>
              </div>
            </div>

            {/* Project 3 - Smart Ethnics Platform */}
            <div className="portfolio-card group">
              <div className="h-48 sm:h-56 relative overflow-hidden flex-shrink-0 w-full">
                <Image
                  src="/ethnic.png"
                  alt="Smart Ethnics e-commerce platform - Fashion and ethnic wear online shopping platform with custom admin dashboard built by Shudveta IT Solutions"
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="portfolio-card-content">
                <div className="portfolio-card-text">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Smart Ethnics Platform</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">A modern, full-featured online shopping platform built for Smart Ethnics to showcase and sell their apparel collection seamlessly.</p>
                </div>
                <Link href="/portfolio/3" className="w-full portfolio-button mt-auto inline-block text-center text-sm sm:text-base">
                  Read More
                </Link>
              </div>
            </div>

            {/* Project 4 - FSK Foil Products Website */}
            <div className="portfolio-card group">
              <div className="h-48 sm:h-56 relative overflow-hidden flex-shrink-0 w-full">
                <Image
                  src="/fskfoil.png"
                  alt="FSK Foil Products Website - Specialized website for Foil-Scrim-Kraft products used in insulation industry built by Shudveta IT Solutions"
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="portfolio-card-content">
                <div className="portfolio-card-text">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">FSK Foil Products Website</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">That website is focused on Foil-Scrim-Kraft (FSK) products, which are materials commonly used in the insulation industry.</p>
                </div>
                <a href="https://fsk-foil.pages.dev" target="_blank" rel="noopener noreferrer" className="w-full portfolio-button mt-auto inline-block text-center text-sm sm:text-base">
                  View Website
                </a>
              </div>
            </div>

            {/* Project 5 - Ridezo Transportation Platform */}
            <div className="portfolio-card group">
              <div className="h-48 sm:h-56 relative overflow-hidden flex-shrink-0 w-full">
                <Image
                  src="/ridezo.png"
                  alt="Ridezo Transportation Platform - Pre-booked reliable transportation service for daily commuting, office travel, and outstation trips built by Shudveta IT Solutions"
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="portfolio-card-content">
                <div className="portfolio-card-text">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Ridezo Transportation Platform</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">Goridezo.com is a website for Ridezo, offering pre-booked, reliable transportation for daily commuting and travel needs.</p>
                </div>
                <a href="https://goridezo.com" target="_blank" rel="noopener noreferrer" className="w-full portfolio-button mt-auto inline-block text-center text-sm sm:text-base">
                  View Website
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-lg sm:text-xl font-bold mb-3">Shudveta IT Solutions</h3>
              <p className="text-gray-300 mb-4 text-xs sm:text-sm leading-relaxed">
                We specialize in delivering innovative digital products and automation systems
                that empower businesses to grow and adapt in a rapidly evolving digital world.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-200">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">Home</a></li>
                <li><a href="/portfolio" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">Portfolio</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">About Us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-200">Contact</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <div>
                  <p className="font-medium text-gray-300 mb-1">Address</p>
                  <p className="text-gray-400 leading-relaxed">
                    73, Jagriti Enclave Phase-3<br />
                    Delhi, India<br />
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-300 mb-1">Support</p>
                  <p className="text-gray-400">
                    <a href="mailto:shudveta@gmail.com" className="hover:text-white transition-colors duration-300">shudveta@gmail.com</a><br />
                    <a href="tel:+919211291306" className="hover:text-white transition-colors duration-300">+91 92112 91306</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-6 flex justify-center items-center">
            <div className="text-gray-400 text-xs">
              © 2024 Shudveta IT Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
