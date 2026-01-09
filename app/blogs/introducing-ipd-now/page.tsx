import type { Metadata } from "next";
import IPDNowBlogClient from "../../components/IPDNowBlogClient";

export const metadata: Metadata = {
  title: "Conceptualising IPD Now: AI-Native, Identity-Driven Healthcare Concept | Shudveta IT Solutions",
  description: "Discover IPD Now, an AI-native healthcare platform concept built around identity, continuous health signals, and agentic AI intelligence. A revolutionary approach to connected healthcare continuity.",
  keywords: [
    "IPD Now",
    "AI healthcare",
    "healthcare platform",
    "ABHA integration",
    "health identity",
    "continuous healthcare",
    "AI agents",
    "healthcare intelligence",
    "digital health",
    "medical data",
    "healthcare innovation",
    "Shudveta healthcare",
    "AI diagnostics",
    "healthcare continuity",
    "preventive healthcare",
    "health data integration"
  ],
  authors: [{ name: "Shudveta Team" }],
  openGraph: {
    title: "Conceptualising IPD Now: AI-Native, Identity-Driven Healthcare Concept",
    description: "IPD Now rethinks healthcare as a continuous, intelligent health journey built around identity, data, and AI. A concept for future-ready healthcare systems.",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'IPD Now - AI-Native Healthcare Platform Concept by Shudveta IT Solutions',
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
    description: 'IPD Now rethinks healthcare as a continuous, intelligent health journey built around identity, data, and AI.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://shudveta.com/blogs/introducing-ipd-now',
  },
  category: 'healthcare',
};

export default function IntroducingIPDNowBlog() {
  return <IPDNowBlogClient />;
}
