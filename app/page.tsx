"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Hero Section - Full Screen Background */}
      <section className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="text-sm font-medium text-blue-200 mr-2">🚀</span>
              <span className="text-sm font-medium text-white">Future-Ready Technology Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transforming Ideas Into
              <span
                className="block relative"
                style={{
                  background: 'linear-gradient(45deg, #60a5fa, #a855f7, #6366f1, #3b82f6)',
                  backgroundSize: '200% 200%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  animation: 'gradientFlow 3s ease infinite'
                }}
              >
                Digital Reality
              </span>
          </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              We craft intelligent, scalable solutions in web development, AI integration,
              cloud technologies, automation workflows, and Web3 innovations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25">
                <span className="flex items-center">
                  Start Your Project
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center">
                  View Our Work
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats/Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="text-white/80">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>
              <div className="text-white/80">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-white/80">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm">Client Satisfaction</div>
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

      {/* Header - Overlay on Hero */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            {/* Logo */}
            <div className="flex-shrink-0">
            <Image
                src="/logo.png"
                alt="Shudveta Logo"
                width={360}
                height={180}
                className="h-24 w-auto"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  Home
                </a>
                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  About
                </a>
                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  Services
                </a>
                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white hover:text-gray-300 p-2 transition-colors duration-200">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
