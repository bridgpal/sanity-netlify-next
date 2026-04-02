import Link from "next/link";
import { Phone, Globe, Menu, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Top bar — thin, refined */}
      <div className="bg-oscar-forest text-oscar-ivory/80 text-xs tracking-widest uppercase">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-end gap-8 py-2">
          <a
            href="tel:1-855-672-2788"
            className="flex items-center gap-1.5 hover:text-oscar-gold transition-colors duration-300"
          >
            <Phone className="w-3 h-3" />
            <span>1-855-Oscar-88</span>
          </a>
          <button className="flex items-center gap-1.5 hover:text-oscar-gold transition-colors duration-300">
            <Globe className="w-3 h-3" />
            <span>EN</span>
          </button>
          <Link
            href="#"
            className="hover:text-oscar-gold transition-colors duration-300"
          >
            Log in
          </Link>
        </div>
      </div>

      {/* Main nav — warm ivory with bottom border */}
      <nav className="bg-oscar-ivory/95 backdrop-blur-md border-b border-oscar-forest/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo mark */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-oscar-terracotta rounded-full transition-transform duration-500 group-hover:scale-110" />
                <span className="relative flex items-center justify-center w-full h-full text-white font-display text-lg">
                  O
                </span>
              </div>
              <span className="text-2xl font-display text-oscar-forest tracking-tight">
                Oscar
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {[
                "Shop Plans",
                "Member Resources",
                "For Brokers & Providers",
                "About Us",
              ].map((item) => (
                <button
                  key={item}
                  className="flex items-center gap-1 text-sm font-medium text-oscar-forest/70 hover:text-oscar-terracotta transition-colors duration-300 tracking-wide"
                >
                  {item}
                  <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="#"
                className="text-sm font-semibold text-oscar-terracotta border-b-2 border-oscar-terracotta/0 hover:border-oscar-terracotta transition-all duration-300 tracking-wide"
              >
                Find a Doctor
              </Link>
            </div>

            <button className="lg:hidden p-2">
              <Menu className="w-6 h-6 text-oscar-forest" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
