import Link from 'next/link';
import { MessageCircle, Hand, Home } from 'lucide-react';

export default function WaysToJoin() {
  const ways = [
    {
      icon: <MessageCircle size={32} className="text-white" />,
      title: 'Connect',
      description: 'Join our network and connect with like-minded people in your area.',
      action: 'Find your circle',
      href: '/join',
      bgColor: 'bg-royal-green',
    },
    {
      icon: <Hand size={32} className="text-white" />,
      title: 'Contribute',
      description: 'Share your skills, knowledge, and resources with the community.',
      action: 'Start contributing',
      href: '/join',
      bgColor: 'bg-velvet-purple',
    },
    {
      icon: <Home size={32} className="text-white" />,
      title: 'Host a Circle',
      description: 'Organize gatherings and workshops in your local community.',
      action: 'Become a host',
      href: '/join',
      bgColor: 'bg-gray-800',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ways to join
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're just starting or ready to lead, there's a place for you in our network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <div key={index} className={`${way.bgColor} rounded-xl p-8 text-white group hover:scale-105 transition-all duration-300`}>
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-300">
                  {way.icon}
                </div>
                
                <h3 className="font-space-grotesk text-2xl font-semibold mb-4">
                  {way.title}
                </h3>
                
                <p className="text-white/90 leading-relaxed mb-6">
                  {way.description}
                </p>
              </div>
              
              <Link
                href={way.href}
                className="inline-flex items-center text-white border-2 border-white/50 hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                {way.action}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}