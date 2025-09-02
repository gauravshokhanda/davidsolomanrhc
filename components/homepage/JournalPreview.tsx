import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function JournalPreview() {
  const posts = [
    {
      category: 'Community',
      title: 'Building Consensus: Lessons from Rural Organizing',
      excerpt: 'How small communities are developing new approaches to collective decision-making.',
      author: 'Sarah Chen',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
    },
    {
      category: 'Land',
      title: 'Regenerative Energy Systems for Community Resilience',
      excerpt: 'Practical approaches to local energy independence using renewable technologies.',
      author: 'Marcus Rivera',
      date: 'Dec 12, 2024',
      readTime: '8 min read',
    },
    {
      category: 'Learning',
      title: 'Skills for the Future: Traditional Knowledge Meets Innovation',
      excerpt: 'How ancient wisdom and modern techniques combine for sustainable practices.',
      author: 'Jordan Kim',
      date: 'Dec 8, 2024',
      readTime: '6 min read',
    },
  ];

  return (
    <section className="py-20 bg-light-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="font-space-grotesk text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest from the Journal
            </h2>
            <p className="text-xl text-gray-600">
              Stories, insights, and updates from our network.
            </p>
          </div>
          
          <Link
            href="/journal"
            className="hidden lg:flex bg-royal-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-medium items-center space-x-2"
          >
            <span>View all</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-velvet-purple bg-light-purple px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              
              <h3 className="font-space-grotesk text-xl font-semibold text-gray-900 mb-3 group-hover:text-royal-green transition-colors duration-200">
                {post.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User size={14} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
            <h3 className="font-space-grotesk text-2xl font-semibold text-gray-900 mb-4">
              Stay updated
            </h3>
            <p className="text-gray-600 mb-6">
              Get our weekly digest of community stories, practical guides, and upcoming gatherings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-green focus:border-royal-green outline-none"
              />
              <button className="bg-royal-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="text-center mt-8 lg:hidden">
          <Link
            href="/journal"
            className="bg-royal-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-medium inline-flex items-center space-x-2"
          >
            <span>View all articles</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}