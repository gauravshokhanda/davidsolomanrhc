"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { slideService } from "@/lib/api";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function EditSlide() {
  const router = useRouter();
  const params = useParams();
  const slideId = params?.id as string;

  const [caption, setCaption] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [existingImage, setExistingImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch slide details
  useEffect(() => {
    const fetchSlide = async () => {
      try {
        const slide = await slideService.getSlideById(slideId);
        setCaption(slide.caption || "");
        setLink(slide.link || "");
        setExistingImage(slide.imageUrl);
      } catch (err: any) {
        setError("Failed to load slide");
      }
    };
    if (slideId) fetchSlide();
  }, [slideId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();
      if (image) formData.append("image", image); 
      formData.append("caption", caption);
      formData.append("link", link);

      await slideService.updateSlide(slideId, formData);

      setLoading(false);
      router.push("/admin/slides");
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Failed to update slide");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Edit Slide</h1>
        <Link
          href="/admin/slides"
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Slides
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Caption
          </label>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Link (optional)
          </label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="https://example.com"
          />
        </div>

        {/* Show existing image */}
        {existingImage && (
          <div className="mb-4">
            <p className="text-gray-700 text-sm mb-2">Current Image:</p>
            <img
              src={`${process.env.NEXT_PUBLIC_Image_URL}${existingImage}`}
              alt="Current slide"
              className="w-64 h-40 object-cover rounded border"
            />
          </div>
        )}

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Replace Image (optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-500"
          />
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
          >
            {loading ? (
              <>
                <span className="animate-spin mr-2">⌛</span>
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
