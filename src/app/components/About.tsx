"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Therapist Photo */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/serena.jpg"
            alt="Dr. Serena Blake"
            width={300}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right: About Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Meet Dr. Serena Blake
          </h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) with 10+ years of experience and over 500 client sessions. She blends evidence-based approaches—
            like Cognitive-Behavioral Therapy and mindful wellness—with compassion, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
