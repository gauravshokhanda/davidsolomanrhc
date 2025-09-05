"use client";

import { useEffect, useState } from "react";
import { Calendar, User, Search } from "lucide-react";
import Image from "next/image";
import { journalService } from "@/lib/api";

interface Hero {
  title: string;
  subtitle: string;
  imageUrl: string;
}

interface Post {
  _id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  imageUrl?: string;
}

export default function Journal() {
  const categories = ["All", "Community", "Land", "Learning"];
  const [hero, setHero] = useState<Hero | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const badgeColors = [
    "bg-blue-100 text-blue-700",
    "bg-green-100 text-green-700",
    "bg-purple-100 text-purple-700",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heroData = await journalService.getHero();
        const postsData = await journalService.getAllPosts();
        console.log("heroData", heroData);
        setHero(heroData);
        setPosts(postsData);
      } catch (err) {
        console.error("Failed to fetch journal data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading Journal...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* ✅ Dynamic Hero Section */}
      {hero && (
        <section className="relative h-96 overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_Image_URL}${hero.imageUrl}`}
            alt="Journal Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h1 className="font-space-grotesk text-5xl lg:text-6xl font-bold text-white mb-6">
                {hero.title}
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8">
                {hero.subtitle}
              </p>

              {/* Search + Filter UI (not connected yet) */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <div className="flex-1 relative">
                  <Search
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
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
      )}

      {/* ✅ Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space-grotesk text-3xl font-bold text-gray-900 mb-12">
            Featured articles
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {posts
              .filter((post) => post.featured)
              .map((post, index) => {
                const badgeColors = [
                  "bg-blue-100 text-blue-700",
                  "bg-green-100 text-green-700",
                  "bg-purple-100 text-purple-700",
                ];

                return (
                  <article
                    key={post._id}
                    className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-all duration-300 group"
                  >
                    {post.imageUrl && (
                      <img
                        src={`${process.env.NEXT_PUBLIC_Image_URL}${post.imageUrl}`}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded mb-4"
                      />
                    )}

                    <div className="flex items-center justify-between mb-4">
                      {/* ✅ index-based color rotation */}
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full ${
                          badgeColors[index % badgeColors.length]
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.readTime}
                      </span>
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
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      </section>

      {/* ✅ All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space-grotesk text-3xl font-bold text-gray-900 mb-12">
            All articles
          </h2>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <article
                key={post._id}
                className="bg-white rounded-xl p-8 hover:shadow-md transition-all duration-300 group"
              >
                {/* Top meta row */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div className="flex items-center space-x-4">
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full ${
                        badgeColors[index % badgeColors.length]
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-space-grotesk text-xl font-semibold text-gray-900 mb-3 group-hover:text-royal-green transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>

          {/* RSS & JSON Feeds */}
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <h3 className="font-space-grotesk text-xl font-semibold text-gray-900 mb-4">
              Subscribe to our feeds
            </h3>
            <div className="flex justify-center space-x-4">
              <a
                href="/feed.xml"
                className="text-royal-green hover:underline font-medium"
              >
                RSS Feed
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="/feed.json"
                className="text-royal-green hover:underline font-medium"
              >
                JSON Feed
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
