import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NectarAIWidget from "./components/NectarAIWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shudveta.com'),
  title: {
    default: "Shudveta IT Solutions | AI, Automation & Digital Innovation Experts",
    template: "%s | Shudveta IT Solutions"
  },
  description: "Transform your business with Shudveta IT Solutions. We specialize in AI integration, automation workflows, cloud technologies, Web3 innovations, and intelligent digital products. 50+ projects delivered, 100% client satisfaction.",
  keywords: [
    "AI development",
    "automation solutions",
    "web development",
    "mobile app development",
    "cloud technologies",
    "Web3 development",
    "e-commerce platforms",
    "digital transformation",
    "React development",
    "Next.js development",
    "AI integration",
    "machine learning",
    "intelligent automation",
    "enterprise software",
    "custom software development",
    "Delhi IT solutions",
    "Indian tech company",
    "Shudveta IT Solutions",
    "Dhruvi Mittal",
    "Raghav Sachdev"
  ],
  authors: [{ name: "Shudveta IT Solutions" }],
  creator: "Shudveta IT Solutions",
  publisher: "Shudveta IT Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shudveta.com',
    siteName: 'Shudveta IT Solutions',
    title: 'Shudveta IT Solutions | AI, Automation & Digital Innovation Experts',
    description: 'Transform your business with intelligent digital solutions. AI integration, automation workflows, cloud technologies, and Web3 innovations. 50+ projects delivered.',
    images: [
      {
        url: 'https://shudveta.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Shudveta IT Solutions - AI, Automation & Digital Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shudveta IT Solutions | AI, Automation & Digital Innovation Experts',
    description: 'Transform your business with intelligent digital solutions. AI integration, automation workflows, cloud technologies, and Web3 innovations.',
    images: ['https://shudveta.com/logo.png'],
    creator: '@shudvetasolutions',
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shudveta IT Solutions",
    "url": "https://shudveta.com",
    "logo": "https://shudveta.com/logo.png",
    "description": "Shudveta crafts intelligent, scalable digital products that blend AI, automation, cloud engineering, and immersive experiences to help businesses modernize and thrive.",
    "foundingDate": "2019",
    "founders": [
      {
        "@type": "Person",
        "name": "Dhruvi Mittal",
        "jobTitle": "Creative Director",
        "sameAs": "https://www.linkedin.com/in/dhruvimit06/"
      },
      {
        "@type": "Person",
        "name": "Raghav Sachdev",
        "jobTitle": "Technical Director",
        "sameAs": "https://www.linkedin.com/in/raghavsach-dev/"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "73, Jagriti Enclave Phase-3",
      "addressLocality": "Delhi",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-92112-91306",
      "contactType": "customer service",
      "email": "shudveta@gmail.com"
    },
    "sameAs": [
      "https://www.linkedin.com/in/dhruvimit06/",
      "https://www.linkedin.com/in/raghavsach-dev/"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Web Development",
      "Mobile App Development",
      "Cloud Technologies",
      "Automation",
      "Web3",
      "E-commerce",
      "Digital Transformation"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Shudveta Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Integration & Development",
            "description": "Custom AI solutions, machine learning integration, and intelligent automation systems."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web & Mobile Development",
            "description": "Full-stack web applications and cross-platform mobile apps using modern technologies."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Platforms",
            "description": "Complete e-commerce solutions with payment integration and inventory management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud & DevOps",
            "description": "Cloud-native architectures, CI/CD pipelines, and scalable infrastructure solutions."
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://shudveta.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#002F6C" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <NectarAIWidget />
      </body>
    </html>
  );
}
