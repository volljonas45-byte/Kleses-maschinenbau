import Image from "next/image";

type GalleryGridProps = {
  images: string[];
  className?: string;
};

export default function GalleryGrid({ images, className = "" }: GalleryGridProps) {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ${className}`}
    >
      {images.map((src, i) => (
        <div
          key={src}
          className={`group relative overflow-hidden bg-ink ${
            i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
          }`}
        >
          <Image
            src={src}
            alt={`KELES Maschinenbau – Einblick ${i + 1}`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/15 transition-colors" />
        </div>
      ))}
    </div>
  );
}
