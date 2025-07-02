"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes — all virtual sessions are conducted via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require a 24-hour notice for cancellations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">FAQ</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between w-full text-left text-lg font-medium text-gray-700 hover:text-gray-900"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
