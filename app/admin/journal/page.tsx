"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Loader2, Image as ImageIcon } from "lucide-react";
import { journalService } from "@/lib/api";

interface Post {
  _id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
}

export default function JournalAdmin() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await journalService.getAllPosts();
      setPosts(data);
    } catch (err) {
      console.error("Failed to load posts", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await journalService.deletePost(id);
        setPosts(posts.filter((p) => p._id !== id));
      } catch (err) {
        alert("Failed to delete post.");
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Journal</h1>
        <div className="flex gap-2">
          <Link
            href="/admin/journal/hero"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
          >
            <ImageIcon size={16} /> Edit Hero
          </Link>
          <Link
            href="/admin/journal/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus size={16} /> New Post
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center p-10">
          <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post._id}>
                <td className="px-6 py-4">{post.title}</td>
                <td className="px-6 py-4">{post.category}</td>
                <td className="px-6 py-4">{post.author}</td>
                <td className="px-6 py-4">
                  {new Date(post.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <Link
                    href={`/admin/journal/${post._id}/edit`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit size={18} />
                  </Link>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
