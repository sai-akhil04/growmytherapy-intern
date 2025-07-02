"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agreed: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, type, value } = target;

    const updatedValue =
      type === "checkbox" && target instanceof HTMLInputElement
        ? target.checked
        : value;

    setForm((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    if (!form.time.trim()) newErrors.time = "Preferred time is required";
    if (!form.agreed) newErrors.agreed = "You must agree to be contacted";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // TODO: Add API call here
    }
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Contact
      </h2>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        {[
          { label: "Name", name: "name", type: "text", required: true },
          { label: "Phone", name: "phone", type: "text", required: true },
          { label: "Email", name: "email", type: "email", required: true },
          {
            label: "Preferred time to reach you",
            name: "time",
            type: "text",
            required: true,
          },
        ].map(({ label, name, type, required }) => (
          <div key={name}>
            <label className="block text-gray-700 font-medium mb-1">
              {label} {required && "*"}
            </label>
            <input
              type={type}
              name={name}
              value={(form as any)[name]}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            {errors[name] && (
              <p className="text-red-500 text-sm">{errors[name]}</p>
            )}
          </div>
        ))}

        {/* Message Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            What brings you here? *
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded px-3 py-2"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        {/* Agreement Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreed"
            checked={form.agreed}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">I agree to be contacted *</label>
        </div>
        {errors.agreed && (
          <p className="text-red-500 text-sm">{errors.agreed}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
