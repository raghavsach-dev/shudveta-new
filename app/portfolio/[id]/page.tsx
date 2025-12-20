import Image from "next/image";
import Link from "next/link";
import "../portfolio.css";
import MobileMenu from "./MobileMenu";

const PROJECTS = [
  {
    id: 1,
    title: "Lubeck Elevators Website",
    category: "Corporate Website",
    description:
      "A fully responsive and visually refined corporate website designed to represent Lubeck Elevators' brand identity and product portfolio.",
    longDescription:
      "This comprehensive corporate website showcases Lubeck Elevators' extensive range of elevator solutions, maintenance services, and industry expertise. Built with modern web technologies, the site features an intuitive navigation system, interactive product galleries, and comprehensive service information. The design emphasizes professionalism and trust, crucial for a company in the elevator industry.",
    image: "/elevators.png",
    features: [
      "Responsive design for all devices",
      "Interactive product catalog",
      "Service inquiry forms",
      "SEO optimization",
      "Fast loading performance",
      "Professional branding"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    year: "2024"
  },
  {
    id: 2,
    title: "Lubeck Exports Platform",
    category: "E-commerce Platform",
    description:
      "A comprehensive full-stack e-commerce solution developed to digitize Lubeck Exports' product catalog and sales operations.",
    longDescription:
      "This advanced e-commerce platform transforms Lubeck Exports' traditional sales process into a modern, digital experience. The platform includes comprehensive product catalog management, secure payment processing, inventory tracking, and customer relationship management. Built with scalability in mind, it handles high-volume transactions while providing an exceptional user experience.",
    image: "/exports.png",
    features: [
      "Full e-commerce functionality",
      "Secure payment processing",
      "Inventory management",
      "Customer portal",
      "Admin dashboard",
      "Mobile responsive"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
    year: "2024"
  },
  {
    id: 3,
    title: "Smart Ethnics Platform",
    category: "Fashion E-commerce",
    description:
      "A modern, full-featured online shopping platform built for Smart Ethnics to showcase and sell their apparel collection seamlessly.",
    longDescription:
      "Smart Ethnics required a sophisticated e-commerce platform that could effectively showcase their premium ethnic wear collection. The platform features advanced product visualization, size recommendations, styling guides, and seamless checkout processes. Special attention was given to cultural sensitivity and traditional design elements while maintaining modern usability standards.",
    image: "/ethnic.png",
    features: [
      "Advanced product filtering",
      "Size and style recommendations",
      "High-quality image galleries",
      "Secure checkout",
      "Customer reviews",
      "Fashion-focused UI/UX"
    ],
    technologies: ["Next.js", "Sanity CMS", "Stripe", "Vercel", "Tailwind CSS"],
    year: "2024"
  }
];

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id.toString() }));
}

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectId = Number(id);

  if (!projectId || Number.isNaN(projectId)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Invalid Project ID</h1>
          <p className="text-gray-600 mb-8">The project ID is not valid.</p>
          <a
            href="/portfolio"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  const project = PROJECTS.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <a
            href="/portfolio"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <section className="relative h-[40vh] sm:h-[50vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.4),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]"></div>
        </div>

        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-purple-400/25 rounded-full blur-lg animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-400/15 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-10 w-28 h-28 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-pink-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>

        <div className="absolute top-16 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-32 right-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce delay-300 opacity-70"></div>
        <div className="absolute bottom-24 left-1/6 w-1 h-1 bg-indigo-300 rounded-full animate-bounce delay-700 opacity-50"></div>
        <div className="absolute bottom-16 right-1/6 w-0.5 h-0.5 bg-cyan-300 rounded-full animate-bounce delay-1000 opacity-80"></div>
        <div className="absolute top-1/4 left-3/4 w-1 h-1 bg-pink-300 rounded-full animate-bounce delay-500 opacity-60"></div>
        <div className="absolute top-3/4 right-1/5 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-bounce delay-800 opacity-70"></div>
        <div className="absolute top-2/3 left-1/5 w-0.5 h-0.5 bg-yellow-300 rounded-full animate-bounce delay-600 opacity-75"></div>
        <div className="absolute bottom-1/4 right-3/4 w-1 h-1 bg-orange-300 rounded-full animate-bounce delay-400 opacity-65"></div>

        <div className="absolute top-40 left-16 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-sm animate-pulse delay-200 opacity-30"></div>
        <div className="absolute bottom-40 right-24 w-20 h-20 bg-gradient-to-r from-indigo-400 to-pink-500 rounded-full blur-md animate-pulse delay-900 opacity-25"></div>
        <div className="absolute top-2/3 right-16 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm animate-pulse delay-1400 opacity-35"></div>

        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight mt-12 sm:mt-16 md:mt-20 px-2">
              <a
                href={
                  project.id === 1
                    ? "https://lubeckelevators.com"
                    : project.id === 2
                    ? "https://lubeckexports.com"
                    : project.id === 3
                    ? "https://smartethnics.com"
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 hover:text-blue-200 transition-colors duration-300 group flex-wrap justify-center"
              >
                <span className="break-words">{project.title}</span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              {project.id === 1
                ? "The Lubeck Elevators Website, developed by Shudveta IT Solutions, was built using Next.js and Tailwind CSS, with media hosted and optimized via Cloudinary. Designed for speed, responsiveness, and elegance, it delivers a professional digital presence that highlights Lubeck's engineering excellence and modern identity."
                : project.id === 2
                ? "The Lubeck Exports E-commerce Platform, developed by Shudveta IT Solutions, was built using Next.js, Tailwind CSS, and Firebase, with real-time stock integration via third-party APIs. Designed for automation, scalability, and seamless user experience, it delivers a modern digital marketplace that streamlines export operations and maximizes business efficiency."
                : project.id === 3
                ? "The Smart Ethnics E-commerce Platform, developed by Shudveta IT Solutions, was built using Next.js, Tailwind CSS, and Firebase, with secure payment integration via Razorpay. Designed for performance, security, and seamless user experience, it delivers a complete online store that transforms apparel business operations into a digital-first marketplace."
                : `${project.category} • ${project.year}`
              }
            </p>
          </div>
        </div>
      </section>

      <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 md:h-28">
            <div className="flex-shrink-0">
              <Link href="/" className="block hover:opacity-80 transition-opacity duration-200">
                <Image src="/logo.png" alt="Shudveta Logo" width={360} height={180} className="h-12 sm:h-16 md:h-24 w-auto" />
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-6 md:ml-10 flex items-center space-x-3 md:space-x-4">
                <Link
                  href="/"
                  className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
                <Link
                  href="/#behind-shudveta"
                  className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About
                </Link>
                <Link
                  href="/portfolio"
                  className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200"
                >
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
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 text-white hover:text-gray-300 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </Link>
              </div>
            </div>

            <MobileMenu />
          </div>
        </nav>
      </header>

      <section className="relative bg-white py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                className="w-full h-auto object-cover"
                priority
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="relative bg-white py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="blog-content">
              {projectId === 1 ? (
                <>
                  {/* Lubeck Elevators Content */}
                  {/* Introduction */}
                  <div className="blog-intro mb-8 sm:mb-12">
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 font-medium px-2">
                      The Lubeck Elevators Website was developed by Shudveta IT Solutions to establish a modern digital identity for the brand while maintaining reliability, performance, and accessibility.
                    </p>
                  </div>

                  {/* Tech Stack Section */}
                  <div className="blog-section mb-16">
                    <div className="section-header mb-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="icon-wrapper">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <h3 className="section-title">Tech Stack Overview</h3>
                      </div>
                      <div className="section-divider"></div>
                    </div>

                    <div className="tech-stack-grid">
                      <div className="tech-item">
                        <div className="tech-label">Frontend:</div>
                        <div className="tech-value">React.js, Tailwind CSS</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Backend:</div>
                        <div className="tech-value">Node.js with Express</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Hosting & CDN:</div>
                        <div className="tech-value">Cloudflare</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Database:</div>
                        <div className="tech-value">Airtable (minimal dynamic storage)</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Integrations:</div>
                        <div className="tech-value">Cloudinary for image optimization</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Version Control:</div>
                        <div className="tech-value">Git + GitHub Actions</div>
                      </div>
                    </div>
                  </div>

                  {/* Development Approach Section */}
                  <div className="blog-section mb-16">
                    <div className="section-header mb-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="icon-wrapper">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="section-title">Development Approach</h3>
                      </div>
                      <div className="section-divider"></div>
                    </div>

                    <div className="approach-content space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        We followed a component-driven development model using React, structuring the entire UI into reusable and scalable sections. Tailwind CSS handled the design system — enabling a responsive, minimal layout while keeping performance lean.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        All assets were optimized using Cloudinary to ensure the site maintained sub-second load times, even on mobile.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The backend was handled with Express.js, serving API endpoints for contact forms, admin messages, and dynamic content updates. Using Firebase Firestore, we avoided full server dependencies and achieved real-time data updates with minimal overhead.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Deployment was managed through Vercel, which automated version rollouts and integrated seamlessly with GitHub commits. Cloudflare was configured for DNS, SSL, and CDN caching to enhance global load speed and security.
                      </p>
                    </div>
                  </div>

                  {/* Core Features Section */}
                  <div className="blog-section mb-16">
                    <div className="section-header mb-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="icon-wrapper">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="section-title">Core Features Implemented</h3>
                      </div>
                      <div className="section-divider"></div>
                    </div>

                    <div className="features-list space-y-4">
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">Responsive UI/UX:</span> Designed to scale across all screen sizes with adaptive layouts.
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">Optimized Media Delivery:</span> Dynamic image resizing via Cloudinary.
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">Secure Form Handling:</span> Firebase-backed contact forms with spam protection.
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">SEO Optimization:</span> Meta tag configuration, structured data, and pre-rendered routes.
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">Performance Focus:</span> Lighthouse score of 95+ across devices.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Outcome Section */}
                  <div className="blog-section mb-16">
                    <div className="section-header mb-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="icon-wrapper">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="section-title">Outcome</h3>
                      </div>
                      <div className="section-divider"></div>
                    </div>

                    <div className="outcome-content space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        The final product was a lightweight, production-grade website that embodies Lubeck's precision-driven brand identity. With seamless navigation, fast loading, and rock-solid uptime, it became a digital showcase of the company's engineering expertise.
                      </p>

                      <div className="results-card">
                        <h5 className="results-title">Results:</h5>
                        <div className="results-list">
                          <div className="result-item">
                            <div className="result-bullet"></div>
                            <span>70% reduction in load time compared to legacy templates.</span>
                          </div>
                          <div className="result-item">
                            <div className="result-bullet"></div>
                            <span>Near-instant content rendering (&lt;800ms on mobile).</span>
                          </div>
                          <div className="result-item">
                            <div className="result-bullet"></div>
                            <span>Fully automated deployments through GitHub → Vercel CI/CD pipeline.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary Section */}
                  <div className="summary-card">
                    <div className="summary-header">
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h3 className="summary-title">In Summary</h3>
                      </div>
                    </div>
                    <div className="summary-content">
                      <div className="summary-item">
                        <span className="summary-label">Built with:</span>
                        <span className="summary-value">React.js, Tailwind CSS, Node.js, Firebase, Vercel, Cloudflare</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Focus:</span>
                        <span className="summary-value">Speed, Scalability, Modern UI, and Real-time Form Handling</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : projectId === 2 ? (
                <>
                  {/* Lubeck Exports Content */}
                  {/* Introduction */}
                  <div className="blog-intro mb-12">
                    <p className="text-xl leading-relaxed text-gray-700 font-medium">
                      The Lubeck Exports E-commerce Platform was developed by Shudveta IT Solutions to digitize the company's export catalog and streamline their product management operations. The objective was to build a fast, secure, and dynamic e-commerce system with real-time stock updates and full admin control — replacing manual data handling with a modern, automated workflow.
                    </p>
                  </div>

                  {/* Tech Stack Section */}
                  <div className="blog-section mb-16">
                    <div className="section-header mb-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="icon-wrapper">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <h3 className="section-title">Tech Stack Overview</h3>
                      </div>
                      <div className="section-divider"></div>
                    </div>

                    <div className="tech-stack-grid">
                      <div className="tech-item">
                        <div className="tech-label">Frontend:</div>
                        <div className="tech-value">Next.js, Tailwind CSS</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Backend:</div>
                        <div className="tech-value">Node.js, Express.js</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Database:</div>
                        <div className="tech-value">Firebase Firestore</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Integrations:</div>
                        <div className="tech-value">Third-Party Stock Listing API</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Media Handling:</div>
                        <div className="tech-value">Cloudinary</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Hosting & Deployment:</div>
                        <div className="tech-value">Vercel</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Version Control:</div>
                        <div className="tech-value">Git + GitHub</div>
                      </div>
                    </div>
                  </div>

                  {/* Development Approach Section */}
                  <div className="blog-section mb-16">
                    <div className="section-header mb-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="icon-wrapper">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="section-title">Development Approach</h3>
                      </div>
                      <div className="section-divider"></div>
                    </div>

                    <div className="approach-content space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        The platform was designed as a modular full-stack application, with Next.js handling server-side rendering for faster initial load and better SEO. Tailwind CSS ensured a sleek, responsive interface adaptable across all devices.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        A custom admin panel was developed for product, stock, and order management, giving the Lubeck team complete control over inventory and content. Real-time updates were powered by Firebase Firestore, ensuring that product data stayed perfectly in sync without manual refresh or re-deployment.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The integration of third-party stock APIs automated the product availability system — enabling the platform to fetch and update inventory dynamically. Media assets were served via Cloudinary, providing optimized image delivery for performance and bandwidth efficiency.
                      </p>
                    </div>
                  </div>

                  {/* Core Features Section */}
                  <div className="blog-section mb-16">
                    <div className="section-header mb-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="icon-wrapper">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="section-title">Core Features Implemented</h3>
                      </div>
                      <div className="section-divider"></div>
                    </div>

                    <div className="features-list space-y-4">
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">Dynamic Product Management:</span> Admin-driven product addition, update, and deletion.
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">Real-time Inventory Sync:</span> Live data integration via external APIs.
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">Optimized Media Delivery:</span> Handled through Cloudinary CDN.
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">Secure Admin Access:</span> Firebase Authentication for data control.
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">SEO-Friendly Architecture:</span> SSR-enabled Next.js pages for better discoverability.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Outcome Section */}
                  <div className="blog-section mb-16">
                    <div className="section-header mb-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="icon-wrapper">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="section-title">Outcome</h3>
                      </div>
                      <div className="section-divider"></div>
                    </div>

                    <div className="outcome-content space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        The platform delivered a seamless, production-grade e-commerce experience — replacing outdated manual processes with an intelligent, automated system. Lubeck's export operations became faster, more accurate, and easier to manage through a single centralized panel.
                      </p>

                      <div className="results-card">
                        <h5 className="results-title">Result Highlights:</h5>
                        <div className="results-list">
                          <div className="result-item">
                            <div className="result-bullet"></div>
                            <span>Fully automated stock updates via third-party APIs</span>
                          </div>
                          <div className="result-item">
                            <div className="result-bullet"></div>
                            <span>90% reduction in manual data entry</span>
                          </div>
                          <div className="result-item">
                            <div className="result-bullet"></div>
                            <span>Load time under 1.2 seconds on average</span>
                          </div>
                          <div className="result-item">
                            <div className="result-bullet"></div>
                            <span>Stable CI/CD deployment pipeline via Vercel</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary Section */}
                  <div className="summary-card">
                    <div className="summary-header">
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h3 className="summary-title">In Summary</h3>
                      </div>
                    </div>
                    <div className="summary-content">
                      <div className="summary-item">
                        <span className="summary-label">Built with:</span>
                        <span className="summary-value">Next.js, Tailwind CSS, Node.js, Firebase, Cloudinary</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Focus:</span>
                        <span className="summary-value">Automation, Scalability, Real-time Data Sync, and Modern UI</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : projectId === 3 ? (
                <>
                  {/* Smart Ethnics Content */}
                  {/* Introduction */}
                  <div className="blog-intro mb-12">
                    <p className="text-xl leading-relaxed text-gray-700 font-medium">
                      The Smart Ethnics E-commerce Platform was developed by Shudveta IT Solutions to help the brand establish a digital presence for its apparel business and manage sales operations efficiently. The goal was to create a complete online store — fast, secure, and fully manageable through a dedicated admin dashboard, built to handle everything from product updates to payments seamlessly.
                    </p>
                  </div>

                  {/* Tech Stack Section */}
                  <div className="blog-section mb-16">
                    <div className="section-header mb-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="icon-wrapper">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <h3 className="section-title">Tech Stack Overview</h3>
                      </div>
                      <div className="section-divider"></div>
                    </div>

                    <div className="tech-stack-grid">
                      <div className="tech-item">
                        <div className="tech-label">Frontend:</div>
                        <div className="tech-value">Next.js, Tailwind CSS</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Backend:</div>
                        <div className="tech-value">Node.js, Express.js</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Database:</div>
                        <div className="tech-value">Firebase Firestore</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Payment Integration:</div>
                        <div className="tech-value">Razorpay</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Media Handling:</div>
                        <div className="tech-value">Cloudinary</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Hosting & Deployment:</div>
                        <div className="tech-value">Vercel</div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-label">Version Control:</div>
                        <div className="tech-value">Git + GitHub</div>
                      </div>
                    </div>
                  </div>

                  {/* Development Approach Section */}
                  <div className="blog-section mb-16">
                    <div className="section-header mb-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="icon-wrapper">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="section-title">Development Approach</h3>
                      </div>
                      <div className="section-divider"></div>
                    </div>

                    <div className="approach-content space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        We built the platform on Next.js for performance and SEO benefits, ensuring server-side rendering and lightning-fast page loads. Tailwind CSS gave the front end a clean, responsive design that looks elegant across all screen sizes.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        A custom admin panel was developed to allow real-time control over product listings, orders, and user management. The platform supports secure online payments through Razorpay, offering customers smooth checkout experiences while keeping transactions encrypted and safe.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        To ensure performance and reliability, media content was hosted and optimized via Cloudinary, while Firebase Firestore handled real-time product and order data. The system was deployed on Vercel for scalability, backed by automated build pipelines for zero-downtime updates.
                      </p>
                    </div>
                  </div>

                  {/* Core Features Section */}
                  <div className="blog-section mb-16">
                    <div className="section-header mb-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="icon-wrapper">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="section-title">Core Features Implemented</h3>
                      </div>
                      <div className="section-divider"></div>
                    </div>

                    <div className="features-list space-y-4">
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">Custom Admin Dashboard:</span> Product, user, and order management.
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">Razorpay Integration:</span> Secure, seamless online payments.
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">Responsive UI/UX:</span> Optimized for desktop and mobile.
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">Real-time Database:</span> Dynamic product updates via Firebase Firestore.
                        </div>
                      </div>
                      <div className="feature-item">
                        <div className="feature-bullet"></div>
                        <div className="feature-content">
                          <span className="feature-label">Optimized Assets:</span> Cloudinary for fast image delivery.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Outcome Section */}
                  <div className="blog-section mb-16">
                    <div className="section-header mb-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="icon-wrapper">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="section-title">Outcome</h3>
                      </div>
                      <div className="section-divider"></div>
                    </div>

                    <div className="outcome-content space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        The result was a fully functional e-commerce system that transformed Smart Ethnics' operations into a digital-first business. With complete control over inventory, secure payments, and an elegant shopping interface, the platform elevated the brand's presence and made management effortless.
                      </p>

                      <div className="results-card">
                        <h5 className="results-title">Result Highlights:</h5>
                        <div className="results-list">
                          <div className="result-item">
                            <div className="result-bullet"></div>
                            <span>100% dynamic product control through admin panel</span>
                          </div>
                          <div className="result-item">
                            <div className="result-bullet"></div>
                            <span>Secure payment infrastructure via Razorpay</span>
                          </div>
                          <div className="result-item">
                            <div className="result-bullet"></div>
                            <span>High performance with &lt;1.3s load time</span>
                          </div>
                          <div className="result-item">
                            <div className="result-bullet"></div>
                            <span>Responsive, mobile-first design</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary Section */}
                  <div className="summary-card">
                    <div className="summary-header">
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h3 className="summary-title">In Summary</h3>
                      </div>
                    </div>
                    <div className="summary-content">
                      <div className="summary-item">
                        <span className="summary-label">Built with:</span>
                        <span className="summary-value">Next.js, Tailwind CSS, Node.js, Firebase, Cloudinary, Razorpay</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-label">Focus:</span>
                        <span className="summary-value">Secure Payments, Real-time Data, Responsive Design, and Performance</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600">Content coming soon...</p>
                </div>
              )}
            </div>

            <div className="text-center mt-12">
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg hover:opacity-90 transition-colors duration-300 font-medium"
                style={{ backgroundColor: '#002F6C' }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

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
