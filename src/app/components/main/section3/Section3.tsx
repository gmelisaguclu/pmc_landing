"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "01",
    question:
      "What is PreMarketCap, and how can it benefit my investment strategy?",
    answer:
      "PreMarketCap is a comprehensive market data platform that provides real-time information and analytics for pre-market trading. It can benefit your investment strategy by offering early insights into market trends and potential opportunities before the regular trading session begins.",
  },
  {
    id: "02",
    question: "What type of data does PreMarketCap provide?",
    answer:
      "PreMarketCap provides detailed pre-market trading data including price movements, volume analysis, market sentiment indicators, and historical trends for various financial instruments.",
  },
  {
    id: "03",
    question: "Is the information on PreMarketCap updated in real-time?",
    answer:
      "Yes, PreMarketCap offers real-time data updates to ensure you have access to the most current market information for making informed investment decisions.",
  },
  {
    id: "04",
    question: "How can PreMarketCap help me identify investment opportunities?",
    answer:
      "PreMarketCap helps identify investment opportunities through comprehensive market analysis tools, trend indicators, and early market movement data before regular trading hours.",
  },
  {
    id: "05",
    question: "Is PreMarketCap suitable for beginners?",
    answer:
      "Yes, PreMarketCap is designed to be user-friendly for both beginners and experienced traders, offering intuitive interfaces and educational resources to help users understand market data.",
  },
];

export default function FAQAccordion() {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-black text-white mt-40">
      <h2 className="text-4xl font-bold mb-8 text-center">FAQ's</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="border-b border-zinc-800 py-2"
          >
            <AccordionTrigger className="flex justify-between items-center py-4 hover:no-underline">
              <div className="flex gap-4 items-center">
                <span className="text-sm opacity-60">{faq.id}</span>
                <span className="text-base font-normal">{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-12 text-zinc-400">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
