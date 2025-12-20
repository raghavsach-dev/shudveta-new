"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../portfolio/portfolio.css";

export default function ZyncedBlogClient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add structured data for the blog post
  useEffect(() => {
    const blogPostStructuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Introducing ZyncedAI: A Multi-Agent, Debate-Driven AI Built for Real Thinking",
      "description": "ZyncedAI is a reasoning-first AI platform that uses multiple AI agents with defined roles to analyze user queries through structured debate and discussion.",
      "image": "https://shudveta.com/introducingzynced.png",
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
        "@id": "https://shudveta.com/blogs/introducing-zynced"
      },
      "articleSection": "Artificial Intelligence",
      "keywords": ["AI", "Multi-Agent", "Debate", "Reasoning", "Technology"],
      "url": "https://shudveta.com/blogs/introducing-zynced",
      "timeRequired": "PT12M",
      "wordCount": 1200,
      "about": [
        {
          "@type": "Thing",
          "name": "Artificial Intelligence"
        },
        {
          "@type": "Thing",
          "name": "Multi-Agent Systems"
        },
        {
          "@type": "Thing",
          "name": "Structured Reasoning"
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
            "name": "Introducing ZyncedAI",
            "item": "https://shudveta.com/blogs/introducing-zynced"
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
                  About
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
              <span className="font-medium">Artificial Intelligence</span>
              <span>•</span>
              <time>December 20, 2024</time>
              <span>•</span>
              <span>12 min read</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Introducing ZyncedAI: A Multi-Agent, Debate-Driven AI Built for Real Thinking
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Artificial intelligence today is fast, conversational, and everywhere. But most AI chat systems share a fundamental limitation: they produce confident answers without challenging assumptions, testing ideas, or exposing trade-offs.
            </p>
          </header>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">

            {/* Lead Quote */}
            <div className="text-center my-8 py-4">
              <p className="text-gray-700 font-medium text-lg italic">
                ZyncedAI was built to solve this exact problem.
              </p>
            </div>

            {/* Section: What is ZyncedAI */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">
              What Is ZyncedAI?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              ZyncedAI is a reasoning-first AI platform that uses multiple AI agents with defined roles to analyze user queries.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Depending on the selected mode, these agents either:
            </p>

            <div className="space-y-2 mb-8">
              <div className="flex items-start">
                <span className="text-gray-900 mr-2 mt-1.5 text-xs">•</span>
                <span className="text-gray-900 leading-relaxed">Briefly discuss a query internally to refine a single, well-reasoned response, or</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-900 mr-2 mt-1.5 text-xs">•</span>
                <span className="text-gray-900 leading-relaxed">Engage in deeper, structured debate where arguments evolve over multiple rounds.</span>
              </div>
            </div>

            <blockquote className="border-l-4 border-gray-400 pl-6 py-2 my-8 italic text-gray-900">
              <p>
                "ZyncedAI is designed to think <em>with</em> the user, not <em>for</em> the user."
              </p>
            </blockquote>

            {/* Section: Core Innovation */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">
              Core Innovation: Multi-Agent Debate
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              At the heart of ZyncedAI is a structured multi-agent system. Each agent performs a specific cognitive role:
            </p>

            <div className="space-y-2 mb-6">
              <p><span className="font-semibold text-gray-900">Researcher:</span> <span className="text-gray-700">Grounds the discussion with factual context and relevant information</span></p>
              <p><span className="font-semibold text-gray-900">Analyst:</span> <span className="text-gray-700">Examines implications, comparisons, and trade-offs</span></p>
              <p><span className="font-semibold text-gray-900">Critic:</span> <span className="text-gray-700">Challenges assumptions, highlights risks, and pressure-tests conclusions</span></p>
              <p><span className="font-semibold text-gray-900">Synthesizer:</span> <span className="text-gray-700">Combines validated insights into a coherent outcome when needed</span></p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              These agents do not operate in isolation. They challenge and refine each other's outputs before a response reaches the user.
            </p>

            <p className="text-gray-700 font-medium italic my-6">
              This debate-first architecture is the primary USP of ZyncedAI.
            </p>

            {/* Section: Reasoning Modes */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">
              Understanding ZyncedAI's Reasoning Modes
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              ZyncedAI offers multiple interaction modes, each designed for a specific depth of thinking.
            </p>

            {/* Quick Mode */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Mode</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              For fast, straightforward interactions.
            </p>
            <div className="space-y-1 mb-6">
              <div className="flex items-start">
                <span className="text-gray-900 mr-2 mt-1.5 text-xs">•</span>
                <span className="text-gray-700 leading-relaxed">Fast responses</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-900 mr-2 mt-1.5 text-xs">•</span>
                <span className="text-gray-700 leading-relaxed">Minimal reasoning overhead</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-900 mr-2 mt-1.5 text-xs">•</span>
                <span className="text-gray-700 leading-relaxed">Best for straightforward questions</span>
              </div>
            </div>

            {/* Thinking Mode */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">Thinking Mode</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              For balanced depth and efficiency.
            </p>
            <div className="space-y-1 mb-6">
              <div className="flex items-start">
                <span className="text-gray-900 mr-2 mt-1.5 text-xs">•</span>
                <span className="text-gray-700 leading-relaxed">Agents discuss the query internally</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-900 mr-2 mt-1.5 text-xs">•</span>
                <span className="text-gray-700 leading-relaxed">The debate happens behind the scenes</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-900 mr-2 mt-1.5 text-xs">•</span>
                <span className="text-gray-700 leading-relaxed">User receives a refined, structured response</span>
              </div>
            </div>

            {/* Group Discussion Mode */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">Group Discussion (GD) Mode</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              For deep analysis and evolving reasoning.
            </p>
            <div className="space-y-1 mb-6">
              <div className="flex items-start">
                <span className="text-gray-900 mr-2 mt-1.5 text-xs">•</span>
                <span className="text-gray-700 leading-relaxed">Agents actively debate each other</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-900 mr-2 mt-1.5 text-xs">•</span>
                <span className="text-gray-700 leading-relaxed">Arguments evolve across multiple rounds</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-900 mr-2 mt-1.5 text-xs">•</span>
                <span className="text-gray-700 leading-relaxed">Disagreements are sustained and visible</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-900 mr-2 mt-1.5 text-xs">•</span>
                <span className="text-gray-700 leading-relaxed">Reasoning improves iteratively</span>
              </div>
            </div>

            {/* Section: Visible Reasoning */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">
              Visible and Traceable Reasoning
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              ZyncedAI does not hide its intelligence behind generic responses. Depending on the mode, users can see which agent is contributing, structured sections like Findings and Risk Flags, and explicit challenges from the Critic agent.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              This makes reasoning transparent and auditable.
            </p>

            {/* Section: Designed to Disagree */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">
              Designed to Disagree by Default
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              ZyncedAI is intentionally designed to agree less than typical AI chatbots. The Critic agent pushes back on confident claims, exposes blind spots, and surfaces uncomfortable questions.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8 font-medium">
              Disagreement is not a failure state. It is a core mechanism for better thinking.
            </p>

            {/* Section: Agent Targeting */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">
              Agent Targeting Without Shallow Usage
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Users cannot disable agents to avoid criticism. However, ZyncedAI allows direct agent targeting (e.g., @Critic) for focused scrutiny while preserving debate integrity.
            </p>

            {/* Section: Semantic Memory */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">
              Semantic Memory Built Around Meaning
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              ZyncedAI uses semantic, vector-based memory instead of storing raw chat logs. This enables remembering preferences, maintaining conversation continuity, and adapting reasoning without storing exact messages.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Key principles include persistent but user-controlled memory, personalized private conversations, and automatic anonymization of public outputs.
            </p>

            <blockquote className="border-l-4 border-gray-300 pl-4 py-2 my-6 italic text-gray-700">
              <p>"The goal is clarity without surveillance."</p>
            </blockquote>

            {/* Section: Additional Features */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">
              Additional Features
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Temporary Chat Mode</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              For users who don't want conversations to persist. No long-term memory is stored, and context is discarded after each session.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Image Generation Support</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              AI-powered image generation for creating visuals from prompts, exploring creative concepts, and supporting ideation.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Routines for Consistent Thinking</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Supports regular reflection, repeated analysis workflows, and habitual review of decisions and ideas.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Optional 18+ Reasoning Mode</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              For mature discussions on power dynamics, relationships, and high-stakes decisions, with strict boundaries enforced.
            </p>

            <blockquote className="border-l-4 border-gray-300 pl-4 py-2 my-6 italic text-gray-700">
              <p>"The purpose is intellectual honesty, not shock value."</p>
            </blockquote>

            {/* Section: Target Audience */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">
              Built for Serious Users
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              ZyncedAI serves founders, operators, students, and individuals making important decisions. It is not designed for entertainment or casual browsing.
            </p>

            {/* Section: Design Philosophy */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">
              Deliberate, Distraction-Free Design
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              ZyncedAI avoids engagement loops, social feeds, and validation mechanics. The interface is calm, minimal, and focused purely on thinking.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8 font-medium">
              ZyncedAI is a reasoning environment, not a content platform.
            </p>

            {/* Section: Try ZyncedAI */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">
              Try ZyncedAI
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              ZyncedAI is available to use directly on the web. No installation required.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Visit{' '}
              <a
                href="https://zynced.chat"
                className="inline-flex items-center space-x-2 px-1 py-1 text-gray-900 hover:text-blue-700 font-semibold uppercase tracking-wide transition-all duration-300 group border-b-2 border-transparent hover:border-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>ZYNCED.CHAT</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              {' '}to begin exploring multi-agent reasoning and debate-driven intelligence.
            </p>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-16">
              Why ZyncedAI Exists
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Most AI systems optimize for speed and agreement. ZyncedAI optimizes for judgment and reasoning quality.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              By embedding debate directly into the reasoning process, ZyncedAI helps users think more clearly, challenge assumptions, and make better decisions.
            </p>

            <blockquote className="border-l-4 border-gray-300 pl-4 py-2 my-6 italic text-gray-700">
              <p>
                "ZyncedAI does not aim to sound confident.<br />
                It aims to earn confidence through debate."
              </p>
            </blockquote>
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
                <li><a href="/" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">Home</a></li>
                <li><a href="/portfolio" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">Portfolio</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">About Us</a></li>
                <li><a href="/blogs" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">Blogs</a></li>
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
