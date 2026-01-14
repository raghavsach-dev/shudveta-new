"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../portfolio/portfolio.css";

export default function IPDNowBlogClient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add structured data for the blog post
  useEffect(() => {
    const blogPostStructuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Conceptualising IPD Now: An AI-Native, Identity-Driven Healthcare Concept Built for Continuity",
      "description": "Discover IPD Now and Healio, an AI-native healthcare platform concept built around identity, continuous health signals, and multimodal agentic AI intelligence.",
      "image": "https://shudveta.com/ipdnowlogo.png",
      "datePublished": "2024-12-21T00:00:00+00:00",
      "dateModified": "2024-12-21T00:00:00+00:00",
      "author": {
        "@type": "Organization",
        "name": "Shudveta IT Solutions",
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
        "@id": "https://shudveta.com/blogs/introducing-ipd-now"
      },
      "articleSection": "Healthcare Technology",
      "keywords": ["Healthcare", "AI", "Healio", "multimodal AI", "ABHA", "Identity", "Digital Health", "IPD Now"],
      "url": "https://shudveta.com/blogs/introducing-ipd-now",
      "timeRequired": "PT8M",
      "wordCount": 800,
      "about": [
        {
          "@type": "Thing",
          "name": "Healthcare Technology"
        },
        {
          "@type": "Thing",
          "name": "Artificial Intelligence"
        },
        {
          "@type": "Thing",
          "name": "Digital Health"
        }
      ],
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Conceptualising IPD Now",
            "item": "https://shudveta.com/blogs/introducing-ipd-now"
          }
        ]
      }
    };

    // Add structured data script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(blogPostStructuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]:not([data-organization]):not([data-homepage]):not([data-contact]):not([data-portfolio]):not([data-blogs])');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-6 md:ml-10 flex items-center space-x-3 md:space-x-4">
                <Link href="/" className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
                <Link href="/about" className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About
                </Link>
                <Link href="/portfolio" className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Portfolio
                </Link>
                <Link href="/blogs" className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Blogs
                </Link>
                <Link href="/contact" className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gray-300 p-2 rounded-md transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/20 backdrop-blur-md rounded-lg mt-2 overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About Us
                </Link>
                <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Portfolio
                </Link>
                <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Blogs
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Blog Content Section */}
      <section className="relative bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Article Header */}
          <header className="mb-12">
            <div className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
              <span className="font-medium">Healthcare Technology</span>
              <span>•</span>
              <time>December 20, 2024</time>
              <span>•</span>
              <span>8 min read</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Conceptualising IPD Now: An AI-Native, Identity-Driven Healthcare Concept Built for Continuity
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Healthcare technology today is digital, connected, and increasingly data-rich. Yet most systems still operate in fragments—tests live in one place, fitness data in another, medical history somewhere else, and intelligence is often added as an afterthought.
            </p>
          </header>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            {/* Introduction */}
            <p className="text-gray-700 leading-relaxed mb-6">
              IPD Now rethinks healthcare not as a series of hospital events, but as a continuous, intelligent health journey built around identity, data, and AI&mdash;where interaction, understanding, and guidance happen in real time.
            </p>

            {/* Section: What is IPD Now */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">What Is IPD Now?</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                IPD Now is a concept-level healthcare platform focused on connected health intelligence, not hospital logistics.
              </p>
              <p className="text-gray-700 leading-relaxed">It does not deal with:</p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Hospital admissions</li>
                <li>Bed management or visibility</li>
                <li>Wards or physical infrastructure</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Instead, IPD Now is designed as a digital healthcare continuity layer that connects identity, diagnostics, fitness data, and AI-driven insights into a single evolving health view&mdash;accessible through a conversational AI interface.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-8 italic text-blue-900 bg-blue-50">
                <p>&ldquo;IPD Now is designed to understand health continuously, not episodically.&rdquo;</p>
              </blockquote>
            </div>

            {/* Section: Core Foundation */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">The Core Foundation: ABHA-Linked Health Identity</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">At the center of IPD Now is ABHA integration.</p>
              <p className="text-gray-700 leading-relaxed">
                The concept is built around a single, verified health identity that anchors all health-related data over time.
              </p>
              <p className="text-gray-700 leading-relaxed">This enables:</p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Unified medical records across services</li>
                <li>Seamless access to past reports and tests</li>
                <li>Reduced duplication and data loss</li>
                <li>Long-term continuity independent of location or provider</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">Health data stays connected because identity stays constant.</p>
            </div>

            {/* AI-Native Intelligence Section */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">Core Innovation: AI-Native, Agentic Healthcare Intelligence</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                IPD Now is imagined as an AI-native system, not a traditional platform with AI added later.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At its core is an agentic AI architecture, where multiple AI agents work together instead of a single passive model.
              </p>
              <p className="text-gray-700 leading-relaxed">Each agent focuses on a specific responsibility, such as:</p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Monitoring health signals and changes</li>
                <li>Analyzing patterns across records and reports</li>
                <li>Interpreting diagnostic and fitness data</li>
                <li>Summarizing insights for clarity and action</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These agents collaborate, validate signals, and refine outputs before insights are surfaced. This agent-based intelligence is the primary conceptual USP of IPD Now.
              </p>
            </div>

            {/* Healio Section */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">Healio: The Multimodal Health AI Interface</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                This intelligence layer is surfaced to users through Healio, the primary health AI chatbot within IPD Now.
              </p>
              <p className="text-gray-700 leading-relaxed">Healio supports:</p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Text-based chat</li>
                <li>Voice calls</li>
                <li>Video calls</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Healio allows users to interact with the system in natural, real-world scenarios, not just through forms or dashboards.
              </p>
              <p className="text-gray-700 leading-relaxed">Using video input, Healio can:</p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Detect and identify medicines shown in front of the camera</li>
                <li>Provide contextual guidance based on recognized medication</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">In urgent situations, Healio can:</p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Offer first-level emergency advice</li>
                <li>Identify critical symptoms</li>
                <li>Report the nearest hospital or medical facility to the user</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">Healio is designed to guide decision-making, not replace clinical care.</p>
            </div>

            {/* Continuous Health Signals Section */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">Continuous Health Signals, Not Isolated Events</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">IPD Now treats health as a timeline, not a set of disconnected moments.</p>
              <p className="text-gray-700 leading-relaxed">
                The concept includes fitness and lifestyle data integration, allowing the system to understand:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Long-term activity patterns</li>
                <li>Recovery trends</li>
                <li>Preventive health indicators</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This context improves diagnostic interpretation and helps shift healthcare from reactive responses to proactive understanding.
              </p>
            </div>

            {/* Test Booking and Diagnostics Section */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">Test Booking and Diagnostic Intelligence</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Diagnostics are a major source of healthcare truth.</p>
              <p className="text-gray-700 leading-relaxed">
                IPD Now includes test booking and diagnostic integration as a native part of the concept, enabling:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Centralized access to test reports</li>
                <li>AI-assisted interpretation of results</li>
                <li>Better correlation between symptoms, tests, and historical data</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">Reports are not just stored—they are understood and contextualized over time.</p>
            </div>

            {/* Design Philosophy Section */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">Designed for Insight, Not Interface Noise</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                IPD Now is conceptualized with a calm, purpose-driven design philosophy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Insights are surfaced only when they matter.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No unnecessary alerts. No cognitive overload.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Healthcare intelligence should be:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Quiet</li>
                <li>Precise</li>
                <li>Reliable</li>
              </ul>
            </div>

            {/* Why IPD Now Exists Section */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">Why IPD Now Exists</h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Most healthcare systems optimize for storage and workflows.</p>
              <p className="text-gray-700 leading-relaxed">IPD Now optimizes for understanding and continuity.</p>
              <p className="text-gray-700 leading-relaxed">
                By embedding:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>ABHA-linked identity</li>
                <li>Agentic AI intelligence</li>
                <li>A multimodal health AI interface through Healio</li>
                <li>Diagnostics and continuous health signals</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                IPD Now aims to help healthcare systems think more clearly, act earlier, and support better outcomes.
              </p>
              <blockquote className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 my-8 italic text-blue-900 text-center">
                <p>&ldquo;IPD Now does not aim to manage hospitals.<br />It aims to understand health.&rdquo;</p>
              </blockquote>
            </div>

            <div className="text-center mt-12 pb-12">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg hover:opacity-90 transition-colors duration-300 font-medium"
                style={{ backgroundColor: '#002F6C' }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blogs
              </Link>
            </div>
          </article>
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
                <li><Link href="/" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">Home</Link></li>
                <li><Link href="/portfolio" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">Portfolio</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">About Us</Link></li>
                <li><Link href="/blogs" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">Blogs</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">Contact</Link></li>
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
                    Delhi<br />
                    India
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-300 mb-1">Email</p>
                  <p className="text-gray-400">shudveta@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium text-gray-300 mb-1">Phone</p>
                  <p className="text-gray-400">+91 92112 91306</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

