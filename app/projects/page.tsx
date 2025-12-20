"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our portfolio of innovative solutions across AI, Web3, mobile, and enterprise applications.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter/Sort Options */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">All Projects</button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">AI & ML</button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Web3</button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Mobile</button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Enterprise</button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                  <div className="text-white text-center">
                    <div className="text-5xl mb-2">{project.image}</div>
                    <div className="font-semibold">{project.category}</div>
                  </div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' ? 'bg-green-500 text-white' :
                    project.status === 'Completed' ? 'bg-blue-500 text-white' :
                    project.status === 'Beta' ? 'bg-orange-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  <button className={`w-full bg-gradient-to-r ${project.buttonGradient} text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Statistics</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                <div className="text-gray-600">Live Applications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <a href="/" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
              ← Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
