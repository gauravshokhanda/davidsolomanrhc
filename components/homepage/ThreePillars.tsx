import { Users, Leaf, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function ThreePillars() {
  const pillars = [
    {
      icon: <Users size={48} className="text-white" />,
      title: 'Community',
      description: 'Organizing and governance templates that help groups make decisions, manage resources, and build lasting relationships.',
      backgroundImage: '/threepillars/Community.png',
    },
    {
      icon: <Leaf size={48} className="text-white" />,
      title: 'Land',
      description: 'Regenerative design, building, and energy prototypes that demonstrate practical paths to ecological restoration.',
      backgroundImage: '/threepillars/Land.png',
    },
    {
      icon: <BookOpen size={48} className="text-white" />,
      title: 'Learning',
      description: 'Skills development, courses, and field visits that transfer knowledge for resilient living practices.',
      backgroundImage: '/threepillars/Learning.png',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What we do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We focus on three interconnected areas that create the foundation for thriving communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center group relative overflow-hidden rounded-2xl h-96">
              {/* Background Image */}
              <Image
                src={pillar.backgroundImage}
                alt={pillar.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl group-hover:bg-white/30 transition-colors duration-300">
                    {pillar.icon}
                  </div>
                </div>
                <h3 className="font-space-grotesk text-2xl font-semibold text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}