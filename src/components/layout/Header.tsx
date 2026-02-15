import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-void/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold tracking-widest uppercase text-sm">
          LCS <span className="text-electric">/</span> Upgrade
        </Link>
        <Link
          to="/discovery"
          className="text-xs font-bold uppercase tracking-widest hover:text-electric transition-colors"
        >
          Aplikuj
        </Link>
      </div>
    </nav>
  );
}
