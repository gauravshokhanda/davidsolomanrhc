import { Calendar, User, Search, Filter } from 'lucide-react';

export default function Journal() {
  const categories = ['All', 'Community', 'Land', 'Learning'];
  
  const posts = [
    {
      category: 'Community',
      title: 'Building Consensus: Lessons from Rural Organizing',
      excerpt: 'How small communities are developing new approaches to collective decision-making that honor both efficiency and inclusion.',
      author: 'Sarah Chen',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      featured: true,
    },
    {
      category: 'Land',
      title: 'Regenerative Energy Systems for Community Resilience',
      excerpt: 'Practical approaches to local energy independence using renewable technologies and community ownership models.',
      author: 'Marcus Rivera',
      date: 'Dec 12, 2024',
      readTime: '8 min read',
      featured: true,
    },
    {
      category: 'Learning',
      title: 'Skills for the Future: Traditional Knowledge Meets Innovation',
      excerpt: 'How ancient wisdom and modern techniques combine for sustainable practices in contemporary communities.',
      author: 'Jordan Kim',
      date: 'Dec 8, 2024',
      readTime: '6 min read',
      featured: false,
    },
    {
      category: 'Community',
      title: 'Creating Inclusive Spaces: Design for All Ages and Abilities',
      excerpt: 'Universal design principles that make community spaces welcoming and accessible for everyone.',
      author: 'Alex Thompson',
      date: 'Dec 5, 2024',
      readTime: '7 min read',
      featured: false,
    },
    {
      category: 'Land',
      title: 'Water Wisdom: Community-Scale Watershed Management',
      excerpt: 'Local strategies for water conservation, restoration, and stewardship in different bioregions.',
      author: 'River Martinez',
      date: 'Dec 1, 2024',
      readTime: '9 min read',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-light-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-space-grotesk text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Journal
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Stories, insights, and updates from our network of resilient communities.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-green focus:border-royal-green outline-none"
                />
              </div>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-green focus:border-royal-green outline-none bg-white">
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space-grotesk text-3xl font-bold text-gray-900 mb-12">
            Featured articles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {posts.filter(post => post.featured).map((post, index) => (
              <article key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    post.category === 'Community' ? 'bg-blue-100 text-blue-700' :
                    post.category === 'Land' ? 'bg-green-100 text-green-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="font-space-grotesk text-2xl font-semibold text-gray-900 mb-4 group-hover:text-royal-green transition-colors duration-200">
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
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space-grotesk text-3xl font-bold text-gray-900 mb-12">
            All articles
          </h2>
          
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl p-8 hover:shadow-md transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      post.category === 'Community' ? 'bg-blue-100 text-blue-700' :
                      post.category === 'Land' ? 'bg-green-100 text-green-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-space-grotesk text-xl font-semibold text-gray-900 mb-3 group-hover:text-royal-green transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>

          {/* RSS & JSON Feeds */}
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <h3 className="font-space-grotesk text-xl font-semibold text-gray-900 mb-4">
              Subscribe to our feeds
            </h3>
            <div className="flex justify-center space-x-4">
              <a href="/feed.xml" className="text-royal-green hover:underline font-medium">
                RSS Feed
              </a>
              <span className="text-gray-300">•</span>
              <a href="/feed.json" className="text-royal-green hover:underline font-medium">
                JSON Feed
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}