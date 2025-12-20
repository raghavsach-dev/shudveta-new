"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../portfolio/portfolio.css";

export default function BlogsPageClient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const blogs = [
    {
      id: 'introducing-zynced',
      title: "Introducing ZyncedAI: A Multi-Agent, Debate-Driven AI Built for Real Thinking",
      category: "Artificial Intelligence",
      excerpt: "ZyncedAI is a reasoning-first AI platform that uses multiple AI agents with defined roles to analyze user queries through structured debate and discussion.",
      image: "/introducingzynced.png",
      author: "Shudveta Team",
      date: "Dec 2024",
      readTime: "12 min read",
      tags: ["AI", "Multi-Agent", "Debate", "Reasoning", "Technology"]
    }
  ];

  // Add structured data for blogs page
  useEffect(() => {
    const blogsStructuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Shudveta IT Solutions Blog",
      "description": "Insights, tutorials, and industry trends from our team of technology experts on AI, automation, and digital innovation.",
      "url": "https://shudveta.com/blogs",
      "publisher": {
        "@type": "Organization",
        "name": "Shudveta IT Solutions",
        "url": "https://shudveta.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://shudveta.com/logo.png"
        }
      },
      "blogPost": blogs.map((blog, index) => ({
        "@type": "BlogPosting",
        "@id": `https://shudveta.com/blogs/${blog.id}#blogpost`,
        "headline": blog.title,
        "description": blog.excerpt,
        "image": `https://shudveta.com${blog.image}`,
        "datePublished": "2024-12-21T00:00:00+00:00",
        "dateModified": "2024-12-21T00:00:00+00:00",
        "author": {
          "@type": "Organization",
          "name": blog.author,
          "url": "https://shudveta.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Shudveta IT Solutions",
          "logo": {
            "@type": "ImageObject",
            "url": "https://shudveta.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://shudveta.com/blogs/${blog.id}`
        },
        "articleSection": blog.category,
        "keywords": blog.tags.join(", "),
        "url": `https://shudveta.com/blogs/${blog.id}`,
        "timeRequired": `PT${blog.readTime.split(' ')[0]}M`
      })),
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
            "name": "Blogs",
            "item": "https://shudveta.com/blogs"
          }
        ]
      }
    };

    // Add structured data script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(blogsStructuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]:not([data-organization]):not([data-homepage]):not([data-contact]):not([data-portfolio])');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Blogs Background Section */}
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

        {/* Blogs Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight mt-12 sm:mt-16 md:mt-20 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Blogs
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Insights, tutorials, and industry trends from our team of technology experts.
              Stay updated with the latest developments in software development and digital innovation.
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

      {/* Blogs Grid */}
      <section className="relative bg-gray-50 py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Blog Post */}
            <div className="portfolio-card group">
              <div className="h-48 sm:h-56 relative overflow-hidden flex-shrink-0 w-full">
                <Image
                  src="/introducingzynced.png"
                  alt="ZyncedAI - Multi-Agent Debate-Driven AI Platform - Innovative AI technology for structured reasoning and debate-based analysis"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="portfolio-card-content">
                <div className="portfolio-card-text">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center flex-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200/60">
                      Artificial Intelligence
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Introducing ZyncedAI: A Multi-Agent, Debate-Driven AI Built for Real Thinking</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">ZyncedAI is a reasoning-first AI platform that uses multiple AI agents with defined roles to analyze user queries through structured debate and discussion.</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span>Shudveta Team</span>
                    <span>•</span>
                    <span>Dec 2024</span>
                    <span>•</span>
                    <span>12 min read</span>
                  </div>
                </div>
                <Link href="/blogs/introducing-zynced" className="w-full portfolio-button mt-auto inline-block text-center text-sm sm:text-base">
                  Read More
                </Link>
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
