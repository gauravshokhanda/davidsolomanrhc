"use client";

import { useEffect, useState } from "react";
import { journalService } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function EditHero() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    fetchHero();
  }, []);

  const fetchHero = async () => {
    const data = await journalService.getHero();
    if (data) {
      setTitle(data.title);
      setSubtitle(data.subtitle);

      // ✅ Show existing image from backend
      if (data.imageUrl) {
        setImagePreview(`${process.env.NEXT_PUBLIC_Image_URL}${data.imageUrl}`);
      }
    }
  };

  const handleImageChange = (file: File | null) => {
    setImage(file);
    if (file) {
      // ✅ Show local preview for new image
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    if (image) formData.append("image", image);

    await journalService.updateHero(formData);
    alert("Hero updated successfully!");
     router.push("/admin/journal");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Journal Hero</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Subtitle</label>
          <textarea
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image</label>
          <input
            type="file"
            onChange={(e) => handleImageChange(e.target.files?.[0] || null)}
          />

          {/* ✅ Preview Section */}
          {imagePreview && (
            <div className="mt-3">
              <img
                src={imagePreview}
                alt="Hero Preview"
                className="w-full max-w-md rounded border"
              />
            </div>
          )}
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save Changes
        </button>
      </form>
    </div>
  );
}
