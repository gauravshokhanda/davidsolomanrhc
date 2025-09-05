"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { slideService } from "@/lib/api";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

interface Slide {
  _id: string;
  imageUrl: string;
  caption?: string;
  link?: string;
}

export default function ViewSlide() {
  const params = useParams();
  const router = useRouter();
  const slideId = params?.id as string;

  const [slide, setSlide] = useState<Slide | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSlide = async () => {
      try {
        const data = await slideService.getSlideById(slideId);
        setSlide(data);
      } catch (err: any) {
        console.error("Failed to fetch slide:", err);
        setError("Failed to load slide");
      } finally {
        setLoading(false);
      }
    };

    if (slideId) fetchSlide();
  }, [slideId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <span className="ml-2 text-gray-600">Loading slide...</span>
      </div>
    );
  }

  if (error || !slide) {
    return (
      <div className="p-8 text-center text-red-500">
        <p>{error || "Slide not found"}</p>
        <button
          onClick={() => router.push("/admin/slides")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Slides
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Slide Details</h1>
        <Link
          href="/admin/slides"
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Slides
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <img
            src={`${process.env.NEXT_PUBLIC_Image_URL}${slide.imageUrl}`}
            alt={slide.caption}
            className="w-full max-w-2xl rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Caption</h2>
            <p className="text-gray-900">{slide.caption || "—"}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">Link</h2>
            {slide.link ? (
              <a
                href={slide.link}
                target="_blank"
                className="text-blue-600 underline"
              >
                {slide.link}
              </a>
            ) : (
              <p className="text-gray-500">—</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
