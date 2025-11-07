import { useEffect, useState } from 'react';
import { Search, Bell, User } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-extrabold tracking-tight text-red-600 select-none">
            FLIX
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm text-gray-200">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">TV Shows</a>
            <a href="#" className="hover:text-white">Movies</a>
            <a href="#" className="hover:text-white">New & Popular</a>
            <a href="#" className="hover:text-white">My List</a>
          </nav>
        </div>

        <div className="flex items-center gap-4 text-gray-200">
          <button aria-label="Search" className="p-2 hover:text-white">
            <Search size={20} />
          </button>
          <button aria-label="Notifications" className="p-2 hover:text-white">
            <Bell size={20} />
          </button>
          <button className="flex items-center gap-2 rounded bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20">
            <User size={18} />
            <span className="hidden sm:inline">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
}
