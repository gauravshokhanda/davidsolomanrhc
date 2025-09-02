"use client";

import { useState } from "react";
import { Mail, MapPin, Download, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError(
        "Failed to send message. Please try again or contact us directly."
      );
      console.error("Form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-light-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-space-grotesk text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in touch
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              We&apos;d love to hear from you. Reach out with questions, ideas,
              or to start a conversation about resilient communities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-space-grotesk text-2xl font-semibold text-gray-900 mb-6">
                  Contact information
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-royal-green" />
                    <div>
                      <p className="font-medium text-gray-900">
                        General Inquiries
                      </p>
                      <a
                        href="mailto:hello@resilienthumancollective.org"
                        className="text-royal-green hover:underline"
                      >
                        hello@resilienthumancollective.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin size={20} className="text-royal-green" />
                    <div>
                      <p className="font-medium text-gray-900">Network Hub</p>
                      <p className="text-gray-600">
                        Distributed across bioregions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Media Kit */}
              <div className="bg-light-green rounded-xl p-6">
                <h3 className="font-space-grotesk text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Download size={20} className="mr-2" />
                  Media kit
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Logos, brand guidelines, and organizational information for
                  media and partners.
                </p>
                <button className="bg-royal-green text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium text-sm">
                  Download kit
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name *
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

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-green focus:border-royal-green outline-none bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General inquiry</option>
                    <option value="partnership">Partnership opportunity</option>
                    <option value="media">Media request</option>
                    <option value="support">Technical support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help or how you'd like to get involved..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-green focus:border-royal-green outline-none resize-none"
                  />
                </div>

                <div className="text-center space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
                      <span className="text-red-700 font-medium">{error}</span>
                    </div>
                  )}

                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                      <CheckCircle size={20} className="text-green-600" />
                      <span className="text-green-700 font-medium">
                        Thank you! We&apos;ll respond within 24 hours.
                      </span>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-royal-green text-white px-12 py-4 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Sending..." : "Send message"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-light-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space-grotesk text-3xl font-bold text-gray-900 mb-6">
            Prefer to talk?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Schedule a call with our team to discuss partnerships,
            collaborations, or how to bring resilient practices to your
            community.
          </p>
          <button className="bg-velvet-purple text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium">
            Schedule a call
          </button>
        </div>
      </section>
    </div>
  );
}
