import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Row({ title, items = [] }) {
  const scrollerRef = useRef(null);

  useEffect(() => {
    // no-op; placeholder in case we add effects later
  }, []);

  const scrollBy = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9 * (direction === 'right' ? 1 : -1);
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="relative">
      <h2 className="mb-3 px-4 text-lg font-semibold text-white md:px-6">{title}</h2>
      <div className="group relative">
        <button
          aria-label="Scroll left"
          onClick={() => scrollBy('left')}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition group-hover:opacity-100 hover:bg-black/70"
        >
          <ChevronLeft />
        </button>
        <div
          ref={scrollerRef}
          className="flex gap-3 overflow-x-auto scroll-smooth px-4 pb-2 md:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative h-40 w-64 flex-shrink-0 overflow-hidden rounded-md bg-neutral-800"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-sm font-medium text-white drop-shadow">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <button
          aria-label="Scroll right"
          onClick={() => scrollBy('right')}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition group-hover:opacity-100 hover:bg-black/70"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
