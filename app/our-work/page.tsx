import { Map, Beaker, BookOpen, Users, Target, Lightbulb } from 'lucide-react';
import Image from 'next/image';

export default function OurWork() {
  const programs = [
    {
      icon: <Map size={40} className="text-royal-green" />,
      title: 'Network Map',
      description: 'An interactive platform connecting regenerative projects, skilled practitioners, and resource-sharing opportunities across bioregions.',
      status: 'Active',
      impact: '150+ communities mapped',
      image: '/work/network.png',
    },
    {
      icon: <Beaker size={40} className="text-velvet-purple" />,
      title: 'Field Labs',
      description: 'Real-world testing sites for regenerative technologies, community governance models, and sustainable systems.',
      status: 'Expanding',
      impact: '8 pilot sites operational',
      image: '/work/finelabs.png',
    },
    {
      icon: <BookOpen size={40} className="text-gray-700" />,
      title: 'Learning Library',
      description: 'Curated resources, workshops, and mentorship programs that transfer practical skills for resilient living.',
      status: 'Growing',
      impact: '500+ resources shared',
      image: '/work/librarylearing.png',
    },
  ];

  const partners = [
    'Transition Towns Network',
    'Permaculture Research Institute',
    'Community Land Trust Coalition',
    'Appropriate Technology Collective',
    'Bioregional Centers Network',
    'Regenerative Organic Alliance',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="/work/hero.png"
          alt="Our Work Hero"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="font-space-grotesk text-5xl lg:text-6xl font-bold text-white mb-6">
              Our work
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Practical programs that help communities develop resilience through 
              collaboration, innovation, and skill sharing.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each program addresses a different aspect of community resilience while 
              working together as an integrated system.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-light-green rounded-xl">
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="font-space-grotesk text-2xl font-semibold text-gray-900">
                        {program.title}
                      </h3>
                      <div className="flex items-center space-x-3 mt-2">
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          program.status === 'Active' ? 'bg-green-100 text-green-700' :
                          program.status === 'Expanding' ? 'bg-blue-100 text-blue-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {program.status}
                        </span>
                        <span className="text-sm text-gray-500">{program.impact}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {program.description}
                  </p>
                  
                  <button className="bg-royal-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium">
                    Learn more
                  </button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src={program.image}
                      alt={`${program.title} in action`}
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Snapshots */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Impact snapshots
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Measuring what matters: community wellbeing and ecological health.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-space-grotesk font-bold text-royal-green mb-2">150+</div>
              <div className="text-sm text-gray-600">Communities Connected</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-space-grotesk font-bold text-velvet-purple mb-2">500+</div>
              <div className="text-sm text-gray-600">Resources Shared</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-space-grotesk font-bold text-royal-green mb-2">25+</div>
              <div className="text-sm text-gray-600">Active Projects</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-space-grotesk font-bold text-velvet-purple mb-2">8</div>
              <div className="text-sm text-gray-600">Bioregions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Partners & allies
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We collaborate with organizations sharing our commitment to community resilience.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-xl hover:border-royal-green transition-colors duration-200">
                <div className="font-medium text-gray-700">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}