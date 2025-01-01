"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-36 bg-black text-white py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16">FAQ's</h1>

        <div className="border-y border-zinc-800 md:border">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="relative">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-stretch text-left hover:bg-zinc-900/50 transition-colors border-b border-zinc-800 last:border-b-0"
              >
                {/* Number cell */}
                <div className="w-16 py-6 px-3 border-r border-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-500 text-sm font-medium">
                    {faq.id}
                  </span>
                </div>

                {/* Question cell */}
                <div className="flex-1 py-6 px-6 flex items-center ">
                  <span className="text-base ">{faq.question}</span>
                </div>

                {/* Plus icon cell */}
                <div className="w-16 py-6 px-3 flex items-center justify-center border-l border-zinc-800 max-md:hidden">
                  <Plus
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ease-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="py-4 px-6 text-zinc-400 border-b border-zinc-800 ml-16 text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
