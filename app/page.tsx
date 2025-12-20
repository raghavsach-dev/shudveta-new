import type { Metadata } from "next";
import HomePageClient from "./components/HomePageClient";

export const metadata: Metadata = {
  title: "AI, Automation & Digital Innovation Experts | Shudveta IT Solutions",
  description: "Transform your business with Shudveta IT Solutions. Expert AI integration, automation workflows, cloud technologies, and Web3 innovations. 50+ successful projects delivered with 100% client satisfaction.",
  keywords: [
    "AI development company",
    "automation solutions",
    "digital transformation",
    "web development Delhi",
    "mobile app development",
    "cloud technologies",
    "Web3 development",
    "e-commerce platforms",
    "intelligent automation",
    "custom software development",
    "Shudveta IT Solutions",
    "AI integration experts",
    "enterprise software",
    "tech innovation Delhi"
  ],
  openGraph: {
    title: "AI, Automation & Digital Innovation Experts | Shudveta IT Solutions",
    description: "Transform your business with intelligent digital solutions. AI integration, automation workflows, and cutting-edge technology. 50+ projects delivered.",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Shudveta IT Solutions - AI, Automation & Digital Innovation',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI, Automation & Digital Innovation Experts | Shudveta IT Solutions',
    description: 'Transform your business with intelligent digital solutions. AI integration, automation workflows, and cutting-edge technology.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://shudveta.com',
  },
};

export default function Home() {
  return <HomePageClient />;
}
