"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useRef } from "react";

type EscortScene = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

type EscortScenesCarouselProps = {
  scenes: EscortScene[];
};

export function EscortScenesCarousel({ scenes }: EscortScenesCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const distance = Math.max(320, scroller.clientWidth * 0.82);
    scroller.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="mt-10">
      <div
        ref={scrollerRef}
        className="flex snap-x gap-5 overflow-x-auto pb-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {scenes.map((scene) => (
          <article
            key={scene.title}
            className="group min-w-[82vw] snap-start overflow-hidden rounded-xl border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card sm:min-w-[360px] lg:min-w-[390px]"
          >
            <Image
              src={scene.image}
              alt={scene.alt}
              width={1536}
              height={1024}
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="p-5 sm:p-6">
              <h3 className="font-sora text-xl font-semibold text-foreground">{scene.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{scene.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-3 flex justify-center gap-3">
        <button
          type="button"
          aria-label="Scroll escort scenes left"
          onClick={() => scroll(-1)}
          className="flex size-11 items-center justify-center rounded-full border border-line bg-white text-foreground shadow-soft transition hover:border-primary/25 hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 active:scale-95"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Scroll escort scenes right"
          onClick={() => scroll(1)}
          className="flex size-11 items-center justify-center rounded-full border border-line bg-white text-foreground shadow-soft transition hover:border-primary/25 hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 active:scale-95"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
