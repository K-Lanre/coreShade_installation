import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";

const heroSlides = [
  { image: "/slideHero/slide1.jfif" },
  { image: "/slideHero/slide2.jfif" },
  { image: "/slideHero/slide3.jfif" },
  { image: "/slideHero/slide4.jfif" },
  { image: "/slideHero/slide5.jfif" },
  { image: "/slideHero/slide6.jfif" },
];

export default function HeroSlider() {
  const totalSlides = heroSlides.length;
  const tripleSlides = [...heroSlides, ...heroSlides, ...heroSlides];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: false,
    startIndex: totalSlides,
  });
  const [selectedIndex, setSelectedIndex] = useState(totalSlides);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    const snap = emblaApi.selectedScrollSnap();
    setSelectedIndex(snap);

    if (snap < totalSlides) {
      emblaApi.scrollTo(snap + totalSlides, false);
    } else if (snap >= totalSlides * 2) {
      emblaApi.scrollTo(snap - totalSlides, false);
    }
  }, [emblaApi, totalSlides]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const id = window.setInterval(() => emblaApi.scrollNext(), 4500);
    return () => window.clearInterval(id);
  }, [emblaApi]);

  return (
    <div className="lg:col-span-7 min-w-0 w-full pb-8 lg:pb-0 relative z-0">
      <div ref={emblaRef} className="overflow-hidden w-full cursor-grab active:cursor-grabbing">
        <div className="flex items-center gap-4 sm:gap-5">
          {tripleSlides.map((item, index) => {
            const isActive = index === selectedIndex;

            return (
              <Link
                to="/portfolio"
                key={`${index}`}
                className={`relative flex-shrink-0 overflow-hidden rounded-[1.7rem] bg-petal dark:bg-brand-muted transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isActive
                    ? "w-[290px] sm:w-[330px] lg:w-[350px] h-[420px] sm:h-[450px] lg:h-[440px] opacity-100 shadow-xl"
                    : "w-[150px] sm:w-[170px] lg:w-[185px] h-[340px] sm:h-[360px] lg:h-[370px] opacity-40"
                }`}
              >
                <img
                  src={item.image}
                  alt="Coreshade Installation Project Slide"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
