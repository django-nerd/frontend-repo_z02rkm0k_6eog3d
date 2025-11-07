import { Play, Info } from 'lucide-react';

const fallbackImage =
  'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=2067&auto=format&fit=crop';

export default function HeroBanner() {
  return (
    <section className="relative h-[70vh] w-full">
      <img
        src={fallbackImage}
        alt="Featured show backdrop"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 py-10 md:px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">
            Tonight's Feature
          </h1>
          <p className="mt-4 text-base text-gray-200 md:text-lg">
            Dive into a world of drama, mystery, and unforgettable characters.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded bg-white px-5 py-2.5 font-semibold text-black hover:bg-gray-200">
              <Play size={20} />
              Play
            </button>
            <button className="inline-flex items-center gap-2 rounded bg-white/20 px-5 py-2.5 font-semibold text-white backdrop-blur hover:bg-white/30">
              <Info size={20} />
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
