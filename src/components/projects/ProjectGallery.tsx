import { useState } from "react";
import type { ProjectImage } from "../../types/project";

interface ProjectGalleryProps {
  images: ProjectImage[];
  featured?: boolean;
}

export default function ProjectGallery({
  images,
  featured = false,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) {
    return null;
  }

  const activeImage = images[activeIndex];

  return (
    <div className="space-y-3">
      {/* Main image frame */}
      <div
        className={`
          relative
          w-full
          overflow-hidden
          rounded-2xl
          border border-white/10
          bg-[#0B192C]/70
          ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}
        `}
      >
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="
            h-full
            w-full
            object-contain
            p-2
            transition-transform
            duration-700
            hover:scale-[1.02]
          "
        />

        {/* subtle overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-linear-to-t
            from-black/20
            via-transparent
            to-white/[0.02]
          "
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`
                relative
                aspect-[16/10]
                overflow-hidden
                rounded-xl
                border
                bg-[#0B192C]/60
                transition-all
                duration-300
                ${
                  activeIndex === index
                    ? "border-[#1E3E62] ring-1 ring-[#1E3E62]/50"
                    : "border-white/10 hover:border-white/20"
                }
              `}
              aria-label={`Show image ${index + 1}`}
            >
              <img
                src={image.src}
                alt=""
                className="h-full w-full object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}