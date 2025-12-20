import type { Metadata } from "next";
import ZyncedBlogClient from "../../components/ZyncedBlogClient";

export const metadata: Metadata = {
  title: "Introducing ZyncedAI: Multi-Agent Debate-Driven AI for Real Thinking | Shudveta IT Solutions",
  description: "Discover ZyncedAI, a revolutionary multi-agent AI platform that uses structured debate and discussion to analyze complex problems. Built by Shudveta IT Solutions for serious decision-makers who value clarity and reasoning.",
  keywords: [
    "ZyncedAI",
    "multi-agent AI",
    "debate-driven AI",
    "artificial intelligence",
    "structured reasoning",
    "AI platform",
    "machine learning",
    "decision making",
    "AI agents",
    "reasoning AI",
    "intelligent automation",
    "Shudveta AI",
    "debate AI",
    "thinking AI",
    "AI innovation"
  ],
  authors: [{ name: "Shudveta Team" }],
  openGraph: {
    title: "Introducing ZyncedAI: Multi-Agent Debate-Driven AI for Real Thinking",
    description: "ZyncedAI uses multiple AI agents with defined roles to analyze user queries through structured debate and discussion, providing clearer insights than traditional AI chatbots.",
    images: [
      {
        url: '/introducingzynced.png',
        width: 1200,
        height: 630,
        alt: 'ZyncedAI - Multi-Agent Debate-Driven AI Platform for Structured Reasoning',
      },
    ],
    type: 'article',
    publishedTime: '2024-12-21T00:00:00.000Z',
    modifiedTime: '2024-12-21T00:00:00.000Z',
    authors: ['Shudveta IT Solutions'],
    section: 'Artificial Intelligence',
    tags: ['AI', 'Multi-Agent', 'Debate', 'Reasoning', 'Technology']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introducing ZyncedAI: Multi-Agent Debate-Driven AI for Real Thinking',
    description: 'ZyncedAI uses structured debate between AI agents to provide clearer, more reasoned insights than traditional AI chatbots.',
    images: ['/introducingzynced.png'],
  },
  alternates: {
    canonical: 'https://shudveta.com/blogs/introducing-zynced',
  },
  category: 'technology',
};

export default function IntroducingZyncedBlog() {
  return <ZyncedBlogClient />;
}
