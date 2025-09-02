import { Users, Leaf, BookOpen } from 'lucide-react';

export default function ThreePillars() {
  const pillars = [
    {
      icon: <Users size={48} className="text-royal-green" />,
      title: 'Community',
      description: 'Organizing and governance templates that help groups make decisions, manage resources, and build lasting relationships.',
    },
    {
      icon: <Leaf size={48} className="text-royal-green" />,
      title: 'Land',
      description: 'Regenerative design, building, and energy prototypes that demonstrate practical paths to ecological restoration.',
    },
    {
      icon: <BookOpen size={48} className="text-royal-green" />,
      title: 'Learning',
      description: 'Skills development, courses, and field visits that transfer knowledge for resilient living practices.',
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
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-light-green rounded-2xl group-hover:scale-105 transition-transform duration-300">
                  {pillar.icon}
                </div>
              </div>
              <h3 className="font-space-grotesk text-2xl font-semibold text-gray-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}