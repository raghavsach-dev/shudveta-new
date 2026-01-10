import type { Metadata } from "next";
import IPDNowBlogClient from "../../components/IPDNowBlogClient";

export const metadata: Metadata = {
  title: "Conceptualising IPD Now: AI-Native, Identity-Driven Healthcare Concept | Shudveta IT Solutions",
  description: "Discover IPD Now and Healio, an AI-native healthcare platform concept with a multimodal health AI interface. Built around identity, agentic intelligence, and healthcare continuity.",
  keywords: [
    "IPD Now",
    "Healio",
    "AI healthcare",
    "multimodal health AI",
    "agentic AI",
    "health chatbot",
    "ABHA integration",
    "health identity",
    "emergency medical advice",
    "medicine identification",
    "digital health",
    "healthcare innovation",
    "Shudveta healthcare",
    "healthcare continuity",
    "preventive healthcare",
    "health data integration"
  ],
  authors: [{ name: "Shudveta Team" }],
  openGraph: {
    title: "Conceptualising IPD Now: AI-Native Healthcare with Healio AI Interface",
    description: "IPD Now rethinks healthcare as a continuous journey with Healio, a multimodal health AI interface. A concept for future-ready, identity-driven healthcare systems.",
    images: [
      {
        url: '/ipdnowlogo.png',
        width: 1200,
        height: 630,
        alt: 'IPD Now & Healio - AI-Native Healthcare Platform Concept by Shudveta IT Solutions',
      },
    ],
    type: 'article',
    publishedTime: '2024-12-21T00:00:00.000Z',
    modifiedTime: '2024-12-21T00:00:00.000Z',
    authors: ['Shudveta IT Solutions'],
    section: 'Healthcare Technology',
    tags: ['Healthcare', 'AI', 'ABHA', 'Identity', 'Digital Health']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conceptualising IPD Now: AI-Native, Identity-Driven Healthcare Concept',
    description: 'IPD Now rethinks healthcare as a continuous journey with Healio, a multimodal health AI interface.',
    images: ['/ipdnowlogo.png'],
  },
  alternates: {
    canonical: 'https://shudveta.com/blogs/introducing-ipd-now',
  },
  category: 'healthcare',
};

export default function IntroducingIPDNowBlog() {
  return <IPDNowBlogClient />;
}
