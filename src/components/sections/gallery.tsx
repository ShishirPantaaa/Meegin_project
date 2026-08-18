import Image from "next/image";
import type { GalleryImage } from "@/types";

interface GalleryProps {
  images: GalleryImage[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Travel gallery</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Snapshots from Nepal journeys</h2>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <div key={image.src} className="overflow-hidden rounded-4xl bg-slate-100">
            <Image src={image.src} alt={image.alt} width={540} height={380} className="h-70 w-full object-cover transition duration-500 hover:scale-105" />
            <div className="border-t border-slate-200 bg-white px-4 py-4 text-sm text-slate-600">{image.category}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

