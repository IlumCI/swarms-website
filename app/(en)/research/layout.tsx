import type { Metadata } from "next"
import { siteConfig } from "@/app/metadata"
import { faqPageJsonLd } from "@/lib/faq"
import { researchFaqs } from "@/lib/research-faqs"

const title = "Swarms Research: Agent Simulations, Multi-Agent Post Training and Harness Engineering"
const description =
  "Research from the Swarms team across agent simulations, multi-agent post training (MAPT) and multi-agent harness engineering, with the AgentRearrange, RouteHub and GraphWorkflow papers."
const url = "https://www.swarms.ai/research"

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "swarms research",
    "agent simulations",
    "multi-agent post training",
    "MAPT",
    "multi-agent harness engineering",
    "agentrearrange paper",
    "routehub paper",
    "llm gateway",
    "graphworkflow paper",
    "graph execution engine",
    "multi-agent systems",
    "agent orchestration",
  ],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/seo_image.jpg",
        width: 1200,
        height: 630,
        alt: title,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@swarms_corp",
    site: "@swarms_corp",
    images: [
      {
        url: "/seo_image.jpg",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url,
  image: `${siteConfig.url}/seo_image.jpg`,
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ScholarlyArticle",
        position: 1,
        name: "AgentRearrange: Simplifying Multi-Agent Workflow Orchestration",
        url: "https://github.com/The-Swarm-Corporation/AgentRearrange-Paper/blob/main/paper.pdf",
      },
      {
        "@type": "ScholarlyArticle",
        position: 2,
        name: "RouteHub: A Low-Overhead, SDK-Native LLM Gateway for Agentic Workloads",
        url: "https://github.com/The-Swarm-Corporation/RouteHub/blob/main/docs/routehub.pdf",
      },
      {
        "@type": "ScholarlyArticle",
        position: 3,
        name: "GraphWorkflow: A Low-Overhead Compile-Once Graph Execution Engine for Multi-Agent Systems",
        url: "https://github.com/The-Swarm-Corporation/GraphWorkflow-Paper/blob/main/main.pdf",
      },
    ],
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Research", item: url },
  ],
}

const faqJsonLd = faqPageJsonLd(researchFaqs)

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  )
}
