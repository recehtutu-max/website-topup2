"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const MOCK_SLIDES = [
  {
    id: 1,
    title: 'PUBG Mobile',
    subtitle: 'Get your UC and dominate the battleground!',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1600&auto=format&fit=crop',
    gradient: 'from-black/70 via-black/30 to-transparent',
  },
  {
    id: 2,
    title: 'Honor of Kings',
    subtitle: 'Join the battle and become a legend.',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1600&auto=format&fit=crop',
    gradient: 'from-black/70 via-black/30 to-transparent',
  },
  {
    id: 3,
    title: 'Free Fire',
    subtitle: 'Top up diamonds and survive to the end!',
    image: 'https://images.unsplash.com/photo-1614030638541-61f2238cfaea?q=80&w=1600&auto=format&fit=crop',
    gradient: 'from-black/70 via-black/30 to-transparent',
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden bg-background py-6 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Carousel Viewport */}
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex">
            {MOCK_SLIDES.map((slide) => (
              <div
                key={slide.id}
                className="relative flex-[0_0_100%] min-w-0"
              >
                {/* Fixed aspect ratio container */}
                <div className="relative w-full h-[200px] sm:h-[280px] md:h-[360px] lg:h-[420px] overflow-hidden rounded-2xl bg-zinc-900">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={slide.id === 1}
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />

                  {/* Text Content */}
                  <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-xl">
                      {slide.title}
                    </h2>
                    <p className="mt-3 max-w-md text-sm sm:text-base md:text-lg text-zinc-200 drop-shadow">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {MOCK_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => scrollTo(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === selectedIndex
                            ? 'w-6 bg-primary'
                            : 'w-2 bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev/Next Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-lg backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-lg backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
