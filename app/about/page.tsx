import Link from "next/link";
import { CheckCircle, Target, Users, Globe, ArrowRight } from "lucide-react";

export default function About() {
  const principles = [
    "We believe everyone deserves access to healthy communities and environments.",
    "We prioritize practical solutions that can be implemented today.",
    "We work with nature rather than against it.",
    "We value traditional wisdom alongside innovative approaches.",
    "We practice inclusive decision-making and shared leadership.",
    "We measure success by community wellbeing and ecological health.",
  ];

  const faqs = [
    {
      question: "What makes Resilient Human Collective different?",
      answer:
        "We focus on practical, implementable solutions rather than theoretical frameworks. Our work is rooted in real communities working on actual projects.",
    },
    {
      question: "How do you make decisions as an organization?",
      answer:
        "We use consensus-based processes adapted from successful community organizing models. All major decisions involve input from affected community members.",
    },
    {
      question: "Do you work internationally?",
      answer:
        "While many of our pilot sites are North America-based, our resources and approaches are designed to be adaptable across different bioregions and cultures.",
    },
    {
      question: "How can I get involved if there's no local group?",
      answer:
        "Start by joining our network online, then consider hosting a local circle or organizing a field visit to an existing pilot site.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-light-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-space-grotesk text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About our network
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              We&apos;re building a practical infrastructure for communities to
              thrive within planetary boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We exist to help communities develop the skills, systems, and
                relationships needed for long-term resilience. This means
                creating places where both people and ecosystems can flourish.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our approach combines traditional wisdom with innovative
                practices, always testing solutions in real communities before
                sharing them widely.
              </p>
              <div className="flex items-center space-x-4">
                <Target size={24} className="text-royal-green" />
                <span className="font-medium text-gray-900">
                  Practical. Tested. Scalable.
                </span>
              </div>
            </div>

            <div className="aspect-square bg-light-green rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Globe size={80} className="mx-auto mb-4 text-royal-green" />
                <p className="text-lg font-medium">Mission Image</p>
                <p className="text-sm">Community working together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We work at the intersection of community organizing, ecological
              design, and skill sharing to create lasting change.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-royal-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-gray-900 mb-4">
                Start Local
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every resilient system begins with strong local relationships
                and understanding of place-based needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-velvet-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-gray-900 mb-4">
                Test & Learn
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We prototype solutions in real communities, document what works,
                and share knowledge across the network.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-gray-900 mb-4">
                Scale Wisely
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Proven practices are adapted and shared while respecting local
                context and community autonomy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our principles
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                These values guide how we work and what we prioritize.
              </p>
            </div>

            <div className="space-y-6">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-light-green rounded-xl"
                >
                  <CheckCircle
                    size={24}
                    className="text-royal-green mt-1 flex-shrink-0"
                  />
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Decide */}
      <section className="py-20 bg-light-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              How we decide
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We use transparent, participatory processes that prioritize
              community input and ecological considerations. Major decisions go
              through community consultation, and we publish our reasoning
              publicly.
            </p>
            <Link
              href="/governance"
              className="bg-velvet-purple text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium inline-flex items-center space-x-2"
            >
              <span>Read our governance model</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="font-space-grotesk text-xl font-semibold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
