"use client";

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Services Offered
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        {/* Anxiety & Stress Management */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <img
            src="/images/anxiety.jpg"
            alt="Anxiety and stress"
            className="rounded-md mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Anxiety & Stress Management
          </h3>
          <p className="text-gray-600 text-sm">
            Learn evidence-based techniques to calm your mind, build resilience,
            and regain emotional control in a safe and supportive environment.
          </p>
        </div>

        {/* Relationship Counseling */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <img
            src="/images/relationship.jpg"
            alt="Relationship therapy"
            className="rounded-md mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Relationship Counseling
          </h3>
          <p className="text-gray-600 text-sm">
            Improve communication, rebuild trust, and strengthen emotional
            connection with professional couples therapy and support.
          </p>
        </div>

        {/* Trauma Recovery */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <img
            src="/images/trauma.jpg"
            alt="Trauma recovery"
            className="rounded-md mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Trauma Recovery
          </h3>
          <p className="text-gray-600 text-sm">
            Heal from past trauma using mindfulness, CBT, and somatic tools. Find
            clarity, safety, and renewed strength in your healing journey.
          </p>
        </div>
      </div>
    </section>
  );
}
