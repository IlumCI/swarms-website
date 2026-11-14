// Plain-text FAQ entries shared by a page's accordion (components/faq-section.tsx)
// and its layout's FAQPage structured data, so the two never drift apart.
export type Faq = {
  question: string
  answer: string
}

export function faqPageJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
