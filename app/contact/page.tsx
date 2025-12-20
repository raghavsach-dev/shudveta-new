import type { Metadata } from "next";
import ContactPageClient from "../components/ContactPageClient";

export default function Contact() {
  return <ContactPageClient />;
}

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote for AI & Automation Solutions | Shudveta IT Solutions",
  description: "Ready to transform your business? Contact Shudveta IT Solutions for expert AI integration, automation workflows, and digital innovation. Get a free consultation and quote today.",
  keywords: [
    "contact Shudveta IT Solutions",
    "get a quote",
    "AI development consultation",
    "automation solutions contact",
    "web development quote",
    "digital transformation contact",
    "Shudveta contact",
    "Delhi IT company contact",
    "project inquiry",
    "consultation booking"
  ],
  openGraph: {
    title: "Contact Us | Get a Quote for AI & Automation Solutions | Shudveta IT Solutions",
    description: "Ready to transform your business? Contact Shudveta IT Solutions for expert AI integration, automation workflows, and digital innovation. Get a free consultation and quote today.",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact Shudveta IT Solutions - AI, Automation & Digital Innovation Experts',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Get a Quote for AI & Automation Solutions | Shudveta IT Solutions',
    description: 'Ready to transform your business? Contact Shudveta IT Solutions for expert AI integration, automation workflows, and digital innovation.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://shudveta.com/contact',
  },
};