"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function HomePageClient() {
  const { scrollYProgress } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Structured data for the homepage and featured projects
  // Add structured data to head
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://shudveta.com/#website",
          "url": "https://shudveta.com",
          "name": "Shudveta IT Solutions",
          "description": "AI, Automation & Digital Innovation Experts. We craft intelligent, scalable digital products that blend AI, automation, cloud engineering, and immersive experiences.",
          "publisher": {
            "@id": "https://shudveta.com/#organization"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://shudveta.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          ],
          "inLanguage": "en-US"
        },
        {
          "@type": "WebPage",
          "@id": "https://shudveta.com/#webpage",
          "url": "https://shudveta.com",
          "name": "AI, Automation & Digital Innovation Experts | Shudveta IT Solutions",
          "isPartOf": {
            "@id": "https://shudveta.com/#website"
          },
          "about": {
            "@id": "https://shudveta.com/#organization"
          },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "@id": "https://shudveta.com/#primaryimage",
            "inLanguage": "en-US",
            "url": "https://shudveta.com/logo.png",
            "contentUrl": "https://shudveta.com/logo.png",
            "width": 1200,
            "height": 630,
            "caption": "Shudveta IT Solutions - AI, Automation & Digital Innovation Experts"
          },
          "datePublished": "2019-01-01T00:00:00+00:00",
          "dateModified": "2024-12-21T00:00:00+00:00",
          "description": "Transform your business with Shudveta IT Solutions. Expert AI integration, automation workflows, cloud technologies, and Web3 innovations. 50+ projects delivered with 100% client satisfaction.",
          "breadcrumb": {
            "@id": "https://shudveta.com/#breadcrumb"
          },
          "inLanguage": "en-US",
          "potentialAction": [
            {
              "@type": "ReadAction",
              "target": ["https://shudveta.com"]
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://shudveta.com/#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home"
            }
          ]
        },
        {
          "@type": "SoftwareApplication",
          "name": "ZyncedAI",
          "description": "A multi-agent, debate-driven AI platform that uses structured reasoning to analyze complex problems instead of providing single answers.",
          "url": "https://zynced.chat",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "creator": {
            "@id": "https://shudveta.com/#organization"
          }
        }
      ]
    };

    // Add structured data script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero Section - Full Screen Background */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
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

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mt-6 sm:mt-10 mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm font-medium text-blue-200 mr-2">🚀</span>
              <span className="text-xs sm:text-sm font-medium text-white">Future-Ready Technology Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              Transforming Ideas Into
              <motion.span
                className="block bg-clip-text text-transparent mt-2"
                animate={{
                  backgroundImage: [
                    'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
                    'linear-gradient(45deg, #10b981, #f59e0b, #ef4444)',
                    'linear-gradient(45deg, #ec4899, #3b82f6, #8b5cf6)',
                    'linear-gradient(45deg, #06b6d4, #10b981, #f59e0b)',
                    'linear-gradient(45deg, #ef4444, #ec4899, #3b82f6)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Digital Reality
              </motion.span>
          </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              We craft intelligent, scalable solutions in web development, AI integration,
              cloud technologies, automation workflows, and Web3 innovations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="group bg-white text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25 w-full sm:w-auto">
                  <span className="flex items-center justify-center">
                    Get a Quote
                    <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>

              <Link href="/portfolio" className="w-full sm:w-auto">
                <button className="group border-2 border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
                  <span className="flex items-center justify-center">
                    View Our Work
                    <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>

            {/* Stats/Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center mb-12 sm:mb-16 px-4">
              <div className="text-white/80">
                <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm">Projects Delivered</div>
              </div>
              <div className="text-white/80">
                <div className="text-xl sm:text-2xl font-bold text-white">5+</div>
                <div className="text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="text-white/80">
                <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                <div className="text-xs sm:text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Behind Shudveta Section */}
      <section id="behind-shudveta" className="relative bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#002F6C' }}>Behind Shudveta</h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#002F6C' }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Image */}
            <div className="order-2 md:order-1">
              <div className="relative group">
                {/* Outer Border Frame */}
                <div className="absolute -inset-1 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" style={{ backgroundColor: '#002F6C' }}></div>

                {/* Image Container */}
                <div className="relative rounded-lg overflow-hidden shadow-2xl border-4" style={{ borderColor: '#002F6C' }}>
                  {/* Subtle Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 z-10 pointer-events-none"></div>

                  <Image
                    src="/uss.jpg"
                    alt="Dhruvi Mittal and Raghav Sachdev - Founders of Shudveta IT Solutions, leading AI and automation experts in Delhi"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={true}
                  />

                  {/* Decorative Corner Accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 rounded-tl-lg" style={{ borderColor: '#002F6C', opacity: 0.3 }}></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 rounded-br-lg" style={{ borderColor: '#002F6C', opacity: 0.3 }}></div>
                </div>

                {/* Shadow Effect */}
                <div className="absolute -inset-2 rounded-xl bg-gray-200 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 md:order-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6" style={{ color: '#002F6C' }}>Meet Our Founders</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p className="text-base sm:text-lg">
                  Shudveta was founded by a team of passionate technologists and visionaries who recognized the need for intelligent, scalable solutions in today's rapidly evolving digital landscape.
                </p>
                <p>
                  The creative force of Shudveta, <span style={{ color: '#002F6C', fontWeight: '600' }}>Dhruvi Mittal</span> blends logic with imagination. With a deep passion for technology and design, she focuses on creating experiences that feel intuitive, purposeful, and human. Her calm precision and forward-thinking mindset shape the foundation of every project Shudveta delivers.
                </p>
                <p>
                  The technical powerhouse of Shudveta, <span style={{ color: '#002F6C', fontWeight: '600' }}>Raghav Sachdev</span> turns bold ideas into seamless realities. His expertise in AI, automation, and full-stack development drives the agency's innovation. With a relentless curiosity for building smarter systems, he ensures every solution reflects Shudveta's spirit of intelligence and integrity.
                </p>
                <p>
                  Together, they create a dynamic duo that brings together creativity, technical expertise, and a commitment to delivering exceptional results.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="https://www.linkedin.com/in/dhruvimit06/" target="_blank" rel="noopener noreferrer" className="group relative bg-transparent border-2 border-gray-300 text-gray-700 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center overflow-hidden w-full">
                  <svg className="absolute left-3 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-center">Dhruvi Mittal</span>
                  <svg className="absolute right-3 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a href="https://www.linkedin.com/in/raghavsach-dev/" target="_blank" rel="noopener noreferrer" className="group relative bg-transparent border-2 border-gray-300 text-gray-700 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center overflow-hidden w-full">
                  <svg className="absolute left-3 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-center">Raghav Sachdev</span>
                  <svg className="absolute right-3 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header - Overlay on Hero */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-28">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block hover:opacity-80 transition-opacity duration-200">
            <Image
                  src="/logo.png"
                  alt="Shudveta IT Solutions - AI, Automation & Digital Innovation Experts"
                  width={360}
                  height={180}
                  className="h-16 md:h-24 w-auto"
                />
              </a>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-6 md:ml-10 flex items-center space-x-3 md:space-x-4">
                <a href="#home" className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
          </a>
          <a
                  href="#behind-shudveta"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('behind-shudveta');
                    if (element) {
                      const startPosition = window.pageYOffset || document.documentElement.scrollTop;
                      const rect = element.getBoundingClientRect();
                      const targetPosition = rect.top + startPosition - 100;
                      const distance = targetPosition - startPosition;
                      const duration = 800;
                      let start: number | null = null;
                      function step(timestamp: number) {
                        if (!start) start = timestamp;
                        const progress = timestamp - start;
                        const progressPercent = Math.min(progress / duration, 1);
                        const ease = 0.5 - Math.cos(progressPercent * Math.PI) / 2;
                        const currentPosition = startPosition + distance * ease;
                        window.scrollTo(0, currentPosition);
                        if (progress < duration) {
                          requestAnimationFrame(step);
                        }
                      }
                      requestAnimationFrame(step);
                    }
                  }}
                  className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200 cursor-pointer"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About
                </a>
                <a href="/portfolio" className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Portfolio
                </a>
                <a href="/blogs" className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Blogs
                </a>
                <a href="/contact" className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </a>
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
                <Link href="#home" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
                <a
                  href="#behind-shudveta"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const element = document.getElementById('behind-shudveta');
                    if (element) {
                      const startPosition = window.pageYOffset || document.documentElement.scrollTop;
                      const rect = element.getBoundingClientRect();
                      const targetPosition = rect.top + startPosition - 100;
                      const distance = targetPosition - startPosition;
                      const duration = 800;
                      let start: number | null = null;
                      function step(timestamp: number) {
                        if (!start) start = timestamp;
                        const progress = timestamp - start;
                        const progressPercent = Math.min(progress / duration, 1);
                        const ease = 0.5 - Math.cos(progressPercent * Math.PI) / 2;
                        const currentPosition = startPosition + distance * ease;
                        window.scrollTo(0, currentPosition);
                        if (progress < duration) {
                          requestAnimationFrame(step);
                        }
                      }
                      requestAnimationFrame(step);
                    }
                  }}
                  className="flex items-center gap-2 text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About
                </a>
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

      {/* Featured Projects Section */}
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#002F6C' }}>Featured Projects</h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#002F6C' }}></div>
          </div>

          <div className="space-y-0">
            {/* Project 1 - Lubeck Elevators Website */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[3/2]">
                    <Image
                      src="/elevators.png"
                      alt="Lubeck Elevators corporate website - Professional elevator manufacturing company website built with Next.js and Tailwind CSS by Shudveta IT Solutions"
                      width={800}
                      height={600}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={true}
                      quality={90}
                      unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4" style={{ color: '#002F6C' }}>Lubeck Elevators Website</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">A fully responsive and visually refined corporate website designed to represent Lubeck Elevators' brand identity and product portfolio. The site highlights their services, quality standards, and technical expertise through a clean UI, smooth transitions, and an intuitive layout. Built with performance and aesthetics in mind, it delivers a professional digital presence that strengthens client trust and brand credibility, while ensuring seamless accessibility across all devices.</p>
                <div className="flex flex-wrap justify-between w-full gap-2">
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-yellow-50 text-yellow-700 text-sm font-medium rounded-xl border border-yellow-200/60 hover:bg-yellow-100 hover:border-yellow-300 hover:text-yellow-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 opacity-60"></div>
                    Luxury
                  </span>
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-emerald-50 text-emerald-600 text-sm font-medium rounded-xl border border-emerald-200/60 hover:bg-emerald-100 hover:border-emerald-300 hover:text-emerald-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 opacity-60"></div>
                    Engineering
                  </span>
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-xl border border-blue-200/60 hover:bg-blue-100 hover:border-blue-300 hover:text-blue-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-60"></div>
                    Modernization
                  </span>
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-green-50 text-green-600 text-sm font-medium rounded-xl border border-green-200/60 hover:bg-green-100 hover:border-green-300 hover:text-green-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 opacity-60"></div>
                    Corporate
                  </span>
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-purple-50 text-purple-600 text-sm font-medium rounded-xl border border-purple-200/60 hover:bg-purple-100 hover:border-purple-300 hover:text-purple-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 opacity-60"></div>
                    Responsive
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/portfolio/1" className="group relative flex-1 bg-transparent border-2 border-gray-300 text-gray-700 px-4 py-2.5 sm:py-3 rounded-lg font-medium text-xs sm:text-sm hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center" style={{ backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#002F6C'; e.currentTarget.style.borderColor = '#002F6C'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#d1d5db'; }}>
                    <span>Read More</span>
                    <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a href="https://lubeckelevators.com/" target="_blank" rel="noopener noreferrer" className="group relative flex-1 bg-transparent border-2 border-gray-300 text-gray-700 px-4 py-2.5 sm:py-3 rounded-lg font-medium text-xs sm:text-sm hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center block" style={{ backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#002F6C'; e.currentTarget.style.borderColor = '#002F6C'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#d1d5db'; }}>
                    <span>View Website</span>
                    <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 - Lubeck Exports E-commerce Platform */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[3/2]">
                    <Image
                      src="/exports.png"
                      alt="Lubeck Exports e-commerce platform - Full-stack B2B export platform built with Next.js, Firebase, and real-time inventory sync by Shudveta IT Solutions"
                      width={800}
                      height={600}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      quality={90}
                      unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4" style={{ color: '#002F6C' }}>Lubeck Exports Platform</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">A comprehensive full-stack e-commerce solution developed to digitize Lubeck Exports' product catalog and sales operations. The platform features a custom admin panel for product and order management, along with third-party API integration for live stock updates and real-time data synchronization. Designed for speed, security, and scalability, it streamlines inventory handling, enhances customer experience, and brings complete automation to the company's export workflow.</p>
                <div className="flex flex-wrap justify-between w-full gap-2">
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-xl border border-blue-200/60 hover:bg-blue-100 hover:border-blue-300 hover:text-blue-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-60"></div>
                    E-commerce
                  </span>
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-green-50 text-green-600 text-sm font-medium rounded-xl border border-green-200/60 hover:bg-green-100 hover:border-green-300 hover:text-green-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 opacity-60"></div>
                    Textiles
                  </span>
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-purple-50 text-purple-600 text-sm font-medium rounded-xl border border-purple-200/60 hover:bg-purple-100 hover:border-purple-300 hover:text-purple-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 opacity-60"></div>
                    Export
                  </span>
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-xl border border-indigo-200/60 hover:bg-indigo-100 hover:border-indigo-300 hover:text-indigo-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 opacity-60"></div>
                    Full-Stack
                  </span>
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-red-50 text-red-600 text-sm font-medium rounded-xl border border-red-200/60 hover:bg-red-100 hover:border-red-300 hover:text-red-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 opacity-60"></div>
                    Scalable
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/portfolio/2" className="group relative flex-1 bg-transparent border-2 border-gray-300 text-gray-700 px-4 py-2.5 sm:py-3 rounded-lg font-medium text-xs sm:text-sm hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center" style={{ backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#002F6C'; e.currentTarget.style.borderColor = '#002F6C'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#d1d5db'; }}>
                    <span>Read More</span>
                    <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a href="https://lubeckexports.com/" target="_blank" rel="noopener noreferrer" className="group relative flex-1 bg-transparent border-2 border-gray-300 text-gray-700 px-4 py-2.5 sm:py-3 rounded-lg font-medium text-xs sm:text-sm hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center block" style={{ backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#002F6C'; e.currentTarget.style.borderColor = '#002F6C'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#d1d5db'; }}>
                    <span>View Website</span>
                    <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 - Smart Ethnics E-commerce Platform */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[3/2]">
                    <Image
                      src="/ethnic.png"
                      alt="Smart Ethnics e-commerce platform - Fashion and ethnic wear online shopping platform with custom admin dashboard built by Shudveta IT Solutions"
                      width={800}
                      height={600}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      quality={90}
                      unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4" style={{ color: '#002F6C' }}>Smart Ethnics Platform</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">A modern, full-featured online shopping platform built for Smart Ethnics to showcase and sell their apparel collection seamlessly. The system includes a custom admin panel for managing products, orders, and customers, paired with a secure payment gateway for smooth and reliable transactions. Designed with a clean, responsive UI and optimized backend architecture, it delivers a fast, user-friendly, and professional shopping experience that reflects the brand's elegance and authenticity.</p>
                <div className="flex flex-wrap justify-between w-full gap-2">
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-orange-50 text-orange-600 text-sm font-medium rounded-xl border border-orange-200/60 hover:bg-orange-100 hover:border-orange-300 hover:text-orange-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 opacity-60"></div>
                    Ethnic Wear
                  </span>
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-red-50 text-red-600 text-sm font-medium rounded-xl border border-red-200/60 hover:bg-red-100 hover:border-red-300 hover:text-red-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 opacity-60"></div>
                    Fashion
                  </span>
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-yellow-50 text-yellow-600 text-sm font-medium rounded-xl border border-yellow-200/60 hover:bg-yellow-100 hover:border-yellow-300 hover:text-yellow-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 opacity-60"></div>
                    Traditional
                  </span>
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-xl border border-blue-200/60 hover:bg-blue-100 hover:border-blue-300 hover:text-blue-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-60"></div>
                    E-commerce
                  </span>
                  <span className="inline-flex items-center justify-center flex-1 px-2 py-2 bg-green-50 text-green-600 text-sm font-medium rounded-xl border border-green-200/60 hover:bg-green-100 hover:border-green-300 hover:text-green-800 transition-all duration-300 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 opacity-60"></div>
                    Responsive
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://smartethnics.com/" target="_blank" rel="noopener noreferrer" className="group relative flex-1 bg-transparent border-2 border-gray-300 text-gray-700 px-4 py-2.5 sm:py-3 rounded-lg font-medium text-xs sm:text-sm hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center block" style={{ backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#002F6C'; e.currentTarget.style.borderColor = '#002F6C'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#d1d5db'; }}>
                    <span>View Website</span>
                    <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16 px-4">
            <a href="/portfolio" className="group relative inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-white border-2 text-gray-900 font-semibold text-base sm:text-lg rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">View All Projects</span>
              <svg className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:text-white transition-all duration-300 relative z-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ backgroundColor: '#002F6C' }}></div>
            </a>
          </div>
        </div>
      </section>

      {/* What We Build With Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#002F6C' }}>
              What We Build With
            </h2>
            <div className="w-24 h-1 mx-auto mb-10 rounded-full" style={{ backgroundColor: '#002F6C' }}></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive tech stack empowers us to create innovative solutions across modern web technologies,
              AI integrations, cloud platforms, and automation systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Frontend Development */}
            <div className="group bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 p-8 rounded-2xl border border-blue-200/50 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <svg className="w-10 h-10 mr-4 text-blue-600 group-hover:text-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute -inset-1 bg-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-800 transition-colors duration-300">Frontend Development</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Core Technologies:</div>
                    <div className="text-gray-600">HTML5, CSS3, JavaScript (ES6+), TypeScript</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Frameworks & Libraries:</div>
                    <div className="text-gray-600">React.js, Next.js, React Native</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">UI/UX Libraries:</div>
                    <div className="text-gray-600">Tailwind CSS, Chakra UI, Material UI</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Design & Animation:</div>
                    <div className="text-gray-600">Responsive Design, Media Queries, Lottie Animations</div>
                    <div className="text-gray-600 mt-1">Google Fonts, Custom Typography, Motion UI</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Development */}
            <div className="group bg-gradient-to-br from-green-50 via-green-100 to-green-50 p-8 rounded-2xl border border-green-200/50 hover:border-green-300 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <svg className="w-10 h-10 mr-4 text-green-600 group-hover:text-green-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="absolute -inset-1 bg-green-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-800 transition-colors duration-300">Backend Development</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Server Technologies:</div>
                    <div className="text-gray-600">Node.js, Express.js, FastAPI (Python)</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">API Development:</div>
                    <div className="text-gray-600">RESTful APIs, Webhooks</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Authentication:</div>
                    <div className="text-gray-600">JWT, Firebase Auth, Secure Systems</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Server Features:</div>
                    <div className="text-gray-600">API Rate Limiting, Routing, Middleware</div>
                    <div className="text-gray-600 mt-1">File Handling & Cloud Storage Integrations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Databases & Cloud */}
            <div className="group bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 p-8 rounded-2xl border border-purple-200/50 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <svg className="w-10 h-10 mr-4 text-purple-600 group-hover:text-purple-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <div className="absolute -inset-1 bg-purple-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-800 transition-colors duration-300">Databases & Cloud</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Database Solutions:</div>
                    <div className="text-gray-600">MongoDB, Firebase Firestore, Supabase</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Cloud Platforms:</div>
                    <div className="text-gray-600">Google Cloud Platform (GCP), Cloudflare, Vercel, Koyeb</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">DevOps & Deployment:</div>
                    <div className="text-gray-600">Docker (Containerization), GitHub Actions (CI/CD)</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Media & Hosting:</div>
                    <div className="text-gray-600">Cloudinary (Media Management), Firebase Hosting</div>
                    <div className="text-gray-600 mt-1">DNS Management, SSL Setup, Email Configuration</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI, Automation & Machine Learning */}
            <div className="group bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 p-8 rounded-2xl border border-orange-200/50 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <svg className="w-10 h-10 mr-4 text-orange-600 group-hover:text-orange-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <div className="absolute -inset-1 bg-orange-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-800 transition-colors duration-300">AI & Automation</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">AI APIs:</div>
                    <div className="text-gray-600">OpenAI API, Gemini API, Hugging Face API</div>
                    <div className="text-gray-600 mt-1">Gemini Pro Vision, Hugging Face Spaces</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Voice & Speech:</div>
                    <div className="text-gray-600">ElevenLabs, Azure Speech, Google Cloud TTS/STT</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Workflow Automation:</div>
                    <div className="text-gray-600">Cron Jobs, Node-cron, Workflow Automations</div>
                    <div className="text-gray-600 mt-1">Airtable Automations, Typeform, Zapier, Tally Integrations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chatbots & Voice Systems */}
            <div className="group bg-gradient-to-br from-red-50 via-red-100 to-red-50 p-8 rounded-2xl border border-red-200/50 hover:border-red-300 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <svg className="w-10 h-10 mr-4 text-red-600 group-hover:text-red-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div className="absolute -inset-1 bg-red-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-800 transition-colors duration-300">Chatbots & Voice</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">AI Chat Systems:</div>
                    <div className="text-gray-600">Real-time AI Chatbots (Text, Voice, Video)</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Communication APIs:</div>
                    <div className="text-gray-600">WhatsApp API, Twilio, SendGrid</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">AI Assistants:</div>
                    <div className="text-gray-600">AI Assistants Integration (STT + TTS pipelines)</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Performance:</div>
                    <div className="text-gray-600">Sub-second latency conversational systems</div>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce & Payments */}
            <div className="group bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 p-8 rounded-2xl border border-yellow-200/50 hover:border-yellow-300 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <svg className="w-10 h-10 mr-4 text-yellow-600 group-hover:text-yellow-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <div className="absolute -inset-1 bg-yellow-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-800 transition-colors duration-300">E-commerce & Payments</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Payment Integration:</div>
                    <div className="text-gray-600">Payment Gateway Integration</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Admin Systems:</div>
                    <div className="text-gray-600">Admin Panels for Product & Order Management</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Inventory & Sync:</div>
                    <div className="text-gray-600">Stock Sync with Third-Party APIs</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Checkout Systems:</div>
                    <div className="text-gray-600">Secure Checkout Systems, Live Order Tracking</div>
                  </div>
                </div>
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

      {/* Custom Scrollbar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="relative">
          {/* Scrollbar Track */}
          <motion.div
            className="w-1 h-32 bg-gradient-to-b from-transparent via-gray-600 to-transparent rounded-full opacity-30"
            whileHover={{ opacity: 0.6 }}
          />

          {/* Scrollbar Thumb */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-8 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, 96]) // 128px (h-32) - 32px (h-8) = 96px
            }}
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)"
            }}
          >
            {/* Animated particles */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(59, 130, 246, 0.5)",
                  "0 0 15px rgba(139, 92, 246, 0.8)",
                  "0 0 5px rgba(236, 72, 153, 0.6)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
