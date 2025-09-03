import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Gatherings() {
  const upcomingEvents = [
    {
      title: 'Community Resilience Orientation',
      date: 'Jan 15, 2025',
      time: '7:00 PM EST',
      location: 'Online',
      type: 'Orientation',
      spots: '25 spots available',
    },
    {
      title: 'Bioregional Mapping Workshop',
      date: 'Jan 22, 2025',
      time: '2:00 PM PST',
      location: 'Portland, OR',
      type: 'Workshop',
      spots: '12 spots available',
    },
    {
      title: 'Monthly Network Circle',
      date: 'Feb 1, 2025',
      time: '6:00 PM EST',
      location: 'Online',
      type: 'Circle',
      spots: 'Open to all',
    },
  ];

  const pastRecaps = [
    {
      title: 'November Harvest Gathering',
      date: 'Nov 2024',
      summary: 'Community members shared seasonal practices and planned winter projects.',
      participants: '45 participants',
    },
    {
      title: 'Regenerative Building Workshop',
      date: 'Oct 2024',
      summary: 'Hands-on learning about natural building materials and techniques.',
      participants: '18 participants',
    },
    {
      title: 'Governance Design Lab',
      date: 'Sep 2024',
      summary: 'Collaborative session developing new models for community decision-making.',
      participants: '32 participants',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="/gatherings/Hero.png"
          alt="Gatherings Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="font-space-grotesk text-5xl lg:text-6xl font-bold text-white mb-6">
              Gatherings
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Join our community through orientations, workshops, and regular circles 
              that build connections and share knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-gray-900">
              Upcoming events
            </h2>
            <button className="bg-velvet-purple text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium">
              View calendar
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-light-green rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    event.type === 'Orientation' ? 'bg-blue-100 text-blue-700' :
                    event.type === 'Workshop' ? 'bg-green-100 text-green-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {event.type}
                  </span>
                  <span className="text-sm text-green-600 font-medium">{event.spots}</span>
                </div>
                
                <h3 className="font-space-grotesk text-xl font-semibold text-gray-900 mb-4">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <button className="w-full bg-royal-green text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orientation Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space-grotesk text-3xl font-bold text-gray-900 mb-6">
            New to our community?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Join our monthly orientation to learn about our work, meet other members, 
            and discover how you can get involved.
          </p>
          <button className="bg-velvet-purple text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium">
            Sign up for orientation
          </button>
        </div>
      </section>

      {/* Past Gatherings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Recent gatherings
          </h2>
          
          <div className="space-y-8">
            {pastRecaps.map((recap, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-8 hover:border-royal-green transition-colors duration-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div>
                    <h3 className="font-space-grotesk text-xl font-semibold text-gray-900 mb-2">
                      {recap.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{recap.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>{recap.participants}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {recap.summary}
                    </p>
                    <button className="text-royal-green hover:underline font-medium">
                      Read full recap
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}