import { Heart, Users, Leaf, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Support() {
  const stewardCircles = [
    'Bioregional Stewards',
    'Learning Circle Facilitators',
    'Technology Commons',
    'Land & Ecology Advisors',
    'Community Organizing Network',
    'Regenerative Design Collective',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="/support/Hero.png"
          alt="Support Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="font-space-grotesk text-5xl lg:text-6xl font-bold text-white mb-6">
              Fuel the work
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Support the work of connecting people, places, and skills for 
              resilient communities everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* One-time */}
            <div className="bg-light-green rounded-2xl p-8 text-center">
              <Heart size={48} className="mx-auto text-royal-green mb-6" />
              <h3 className="font-space-grotesk text-2xl font-semibold text-gray-900 mb-4">
                One-time contribution
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Make a single donation to support our current projects and ongoing work.
              </p>
              <button className="bg-royal-green text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium w-full">
                Give now
              </button>
            </div>

            {/* Monthly */}
            <div className="bg-light-purple rounded-2xl p-8 text-center">
              <Users size={48} className="mx-auto text-velvet-purple mb-6" />
              <h3 className="font-space-grotesk text-2xl font-semibold text-gray-900 mb-4">
                Monthly support
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Become a sustaining member with recurring contributions that help us plan ahead.
              </p>
              <button className="bg-velvet-purple text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium w-full">
                Subscribe
              </button>
            </div>
          </div>

          {/* Impact Message */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Your support helps us maintain our network infrastructure, develop 
              open-source tools, and provide resources to communities working on 
              resilience projects worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Steward Circles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Steward circles
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Community members who provide ongoing guidance and support for our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stewardCircles.map((circle, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-royal-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf size={24} className="text-white" />
                </div>
                <h3 className="font-space-grotesk font-semibold text-gray-900">
                  {circle}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Kind Support */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space-grotesk text-3xl font-bold text-gray-900 mb-6">
            Other ways to contribute
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We welcome in-kind contributions including professional services, 
            equipment, meeting spaces, and specialized expertise.
          </p>
          <div className="bg-light-green rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Mail size={24} className="text-royal-green" />
              <span className="font-space-grotesk text-xl font-semibold text-gray-900">
                Get in touch
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Contact us to discuss how your skills, resources, or space could support our work.
            </p>
            <a
              href="mailto:support@resilienthumancollective.org"
              className="bg-royal-green text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium inline-block"
            >
              Email us about in-kind support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}