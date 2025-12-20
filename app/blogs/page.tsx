import type { Metadata } from "next";
import BlogsPageClient from "../components/BlogsPageClient";

export default function Blogs() {
  return <BlogsPageClient />;
}

export const metadata: Metadata = {
  title: "Blog | AI, Technology & Innovation Insights | Shudveta IT Solutions",
  description: "Stay updated with the latest insights on AI, automation, Web3, and digital innovation. Read expert articles from Shudveta IT Solutions.",
  keywords: [
    "AI blog",
    "automation blog",
    "digital transformation articles",
    "Web3 insights",
    "cloud engineering trends",
    "tech blog India",
    "Shudveta blog",
    "artificial intelligence news",
    "software development articles",
    "innovation blog",
    "technology trends",
    "AI development insights"
  ],
  openGraph: {
    title: "Blog | AI, Technology & Innovation Insights | Shudveta IT Solutions",
    description: "Explore articles and insights on AI, automation, and the future of digital innovation from Shudveta IT Solutions.",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Shudveta IT Solutions Blog - AI, Automation & Digital Innovation Insights',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | AI, Technology & Innovation Insights | Shudveta IT Solutions',
    description: 'Explore articles and insights on AI, automation, and the future of digital innovation from Shudveta IT Solutions.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://shudveta.com/blogs',
  },
};