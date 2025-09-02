"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: "",
    experience: "",
    location: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed");
        alert(
          "There was an error submitting your application. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error submitting your application. Please try again."
      );
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-light-green flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <CheckCircle size={64} className="mx-auto text-green-600 mb-6" />
            <h1 className="font-space-grotesk text-3xl font-bold text-gray-900 mb-4">
              Thank you for joining!
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We&apos;ve received your information and will be in touch within
              48 hours. In the meantime, you&apos;ll receive our welcome packet
              with next steps.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-royal-green hover:underline font-medium"
            >
              Submit another application
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <section className="h-64 bg-light-green">
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="w-24 h-24 bg-royal-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <p className="text-lg font-medium">Join Header Image</p>
            <p className="text-sm">People connecting and collaborating</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-space-grotesk text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Join our network
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Help us build resilient communities. Share your skills, learn from
              others, and contribute to meaningful change in your area.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-gray-50 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-green focus:border-royal-green outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-green focus:border-royal-green outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-green focus:border-royal-green outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Location (City, State/Province)
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-green focus:border-royal-green outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="interests"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Areas of Interest
              </label>
              <select
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-green focus:border-royal-green outline-none bg-white"
              >
                <option value="">Select your primary interest</option>
                <option value="community">Community Organizing</option>
                <option value="land">Land & Ecology</option>
                <option value="learning">Learning & Skills</option>
                <option value="governance">Governance & Decision Making</option>
                <option value="technology">Appropriate Technology</option>
                <option value="economics">Community Economics</option>
                <option value="all">All of the above</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Relevant Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your background, skills, or experience related to community resilience..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-green focus:border-royal-green outline-none resize-none"
              />
            </div>

            <div>
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                placeholder="Anything else you'd like us to know? Questions about getting involved?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-green focus:border-royal-green outline-none resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-royal-green text-white px-12 py-4 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium text-lg"
              >
                Submit Application
              </button>
              <p className="text-sm text-gray-500 mt-4">
                We&apos;ll respond within 48 hours with next steps.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
