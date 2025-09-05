"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Trash2, Edit, Loader2,Eye } from "lucide-react";
import { slideService } from "@/lib/api";

interface Slide {
  _id: string;
  imageUrl: string;
  caption?: string;
  link?: string;
}

export default function SlidesAdmin() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchSlides = async () => {
    try {
      setLoading(true);
      const response = await slideService.getAllSlides();
      setSlides(response);
      setError("");
    } catch (err: any) {
      console.error("Failed to fetch slides:", err);
      setError("Failed to load slides. Please try again later.");
      setSlides([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this slide?")) {
      try {
        await slideService.deleteSlide(id);
        setSlides(slides.filter((slide) => slide._id !== id));
      } catch (err) {
        console.error("Failed to delete slide:", err);
        alert("Failed to delete slide. Please try again.");
      }
    }
  };

  const filteredSlides = slides.filter(
    (slide) =>
      slide.caption?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slide.link?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Slides</h1>
          <p className="mt-1 text-sm text-gray-600">Manage homepage slides</p>
        </div>
        <Link
          href="/admin/slides/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          New Slide
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search slides..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            <span className="ml-2 text-gray-600">Loading slides...</span>
          </div>
        ) : error ? (
          <div className="p-8 text-center text-red-500">
            <p>{error}</p>
            <button
              onClick={fetchSlides}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Caption
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Link
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSlides.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No slides found
                    </td>
                  </tr>
                ) : (
                  filteredSlides.map((slide) => (
                    <tr key={slide._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={`${process.env.NEXT_PUBLIC_Image_URL}${slide.imageUrl}`}
                          alt={slide.caption}
                          className="h-16 w-32 object-cover rounded"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {slide.caption || "—"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 underline">
                        {slide.link || "—"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <Link
                            href={`/admin/slides/${slide._id}`}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Eye className="h-5 w-5" />
                          </Link>
                          <Link
                            href={`/admin/slides/${slide._id}/edit`}
                            className="text-amber-600 hover:text-amber-900"
                          >
                            <Edit className="h-5 w-5" />
                          </Link>
                          <button
                            onClick={() => handleDelete(slide._id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
