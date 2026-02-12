import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import StructuredData from '@/components/StructuredData';
import "./globals.css";


const inter = Inter({
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Roushan Kumar | Gen AI Engineer - LLM Systems & RAG Specialist",
  description: "Gen AI Engineer with 6+ years of experience specializing in LLM systems, RAG applications, and AI/ML solutions. Built production RAG systems, fine-tuned models achieving 96%+ F1-score, and delivered measurable business impact.",
  keywords: ["Gen AI Engineer", "AI Engineer", "LLM Systems", "RAG", "LangChain", "Machine Learning", "Data Science", "GPT-4", "Transformers", "PyTorch", "Mumbai", "AI Consultant"],
  authors: [{ name: "Roushan Kumar" }],
  creator: "Roushan Kumar",
  metadataBase: new URL('https://itsrkumar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://itsrkumar.com',
    title: "Roushan Kumar | Gen AI Engineer - LLM Systems & RAG Specialist",
    description: "Gen AI Engineer with 6+ years of experience specializing in LLM systems, RAG applications, and AI/ML solutions. Built production RAG systems and delivered measurable business impact.",
    siteName: "Roushan Kumar Portfolio",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Roushan Kumar - Gen AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Roushan Kumar | Gen AI Engineer",
    description: "Gen AI Engineer specializing in LLM systems, RAG, and AI/ML solutions. 6+ years experience building production AI applications.",
    images: ['/og-image.png'],
    creator: '@itsrkumar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.variable} ${spaceGrotesk.variable}`}
        suppressHydrationWarning
      >
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  );
}