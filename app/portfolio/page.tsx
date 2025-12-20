import type { Metadata } from "next";
import PortfolioPageClient from "../components/PortfolioPageClient";

export default function Portfolio() {
  return <PortfolioPageClient />;
}

export const metadata: Metadata = {
  title: "Portfolio | Our AI, Automation & Digital Innovation Projects | Shudveta IT Solutions",
  description: "Explore our portfolio of successful AI integration, automation, e-commerce, and digital transformation projects. 50+ completed projects including Lubeck Elevators, Lubeck Exports, and Smart Ethnics.",
  keywords: [
    "portfolio",
    "case studies",
    "AI projects",
    "automation solutions",
    "e-commerce platforms",
    "web development projects",
    "digital transformation",
    "Shudveta portfolio",
    "Lubeck Elevators",
    "Lubeck Exports",
    "Smart Ethnics",
    "project showcase",
    "development case studies"
  ],
  openGraph: {
    title: "Portfolio | Our AI, Automation & Digital Innovation Projects | Shudveta IT Solutions",
    description: "Explore our portfolio of successful AI integration, automation, e-commerce, and digital transformation projects. 50+ completed projects with measurable results.",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Shudveta IT Solutions Portfolio - AI, Automation & Digital Innovation Projects',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Our AI, Automation & Digital Innovation Projects | Shudveta IT Solutions',
    description: 'Explore our portfolio of successful AI integration, automation, e-commerce, and digital transformation projects.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://shudveta.com/portfolio',
  },
};

