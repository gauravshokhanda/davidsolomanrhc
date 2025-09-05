"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { journalService } from "@/lib/api";

export default function EditPost() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Community");
  const [excerpt, setExcerpt] = useState("");
  const [author, setAuthor] = useState("");
  const [readTime, setReadTime] = useState("");
  const [featured, setFeatured] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const data = await journalService.getPostById(id as string);
      setTitle(data.title);
      setCategory(data.category);
      setExcerpt(data.excerpt);
      setAuthor(data.author);
      setReadTime(data.readTime);
      setFeatured(data.featured);
    } catch (err) {
      console.error("Failed to fetch post", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("excerpt", excerpt);
    formData.append("author", author);
    formData.append("readTime", readTime);
    formData.append("featured", String(featured));
    if (image) formData.append("image", image);

    try {
      await journalService.updatePost(id as string, formData);
      router.push("/admin/journal");
    } catch (err) {
      console.error("Failed to update post", err);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Journal Post</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-6 space-y-4"
      >
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select
          className="w-full border px-3 py-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Community</option>
          <option>Land</option>
          <option>Learning</option>
        </select>
        <textarea
          className="w-full border px-3 py-2 rounded"
          placeholder="Excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
        />
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Read Time (e.g. 5 min read)"
          value={readTime}
          onChange={(e) => setReadTime(e.target.value)}
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          Featured?
        </label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Update Post
        </button>
      </form>
    </div>
  );
}
