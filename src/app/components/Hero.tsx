"use client";

export default function Hero() {
  return (
    <section className="bg-blue-50 h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Compassionate, Evidence-Based Therapy in Los Angeles
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
        Helping you heal from trauma, manage anxiety, and improve relationships.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
        Book a Free Consult
      </button>
    </section>
  );
}
