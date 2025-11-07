export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-10 text-gray-400">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-sm md:grid-cols-4 md:px-6">
        <div className="space-y-3">
          <div className="text-white">Browse</div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">TV Shows</a></li>
            <li><a href="#" className="hover:underline">Movies</a></li>
            <li><a href="#" className="hover:underline">Originals</a></li>
            <li><a href="#" className="hover:underline">New & Popular</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <div className="text-white">Help</div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Account</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Investor Relations</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <div className="text-white">Contact</div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Media Center</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <div className="text-white">Language</div>
          <select className="w-full rounded bg-white/10 p-2 text-white">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
          </select>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-6 text-xs text-gray-500 md:px-6">
        © {new Date().getFullYear()} FLIX — A Netflix-inspired UI demo.
      </div>
    </footer>
  );
}
