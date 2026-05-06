import Link from "next/link";
import { Phone, Globe, Menu, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-healthco-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-6 py-2">
          <a href="tel:1-855-672-2788" className="flex items-center gap-1.5 hover:text-healthco-yellow transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>1-855-HEALTHCO-88</span>
          </a>
          <button className="flex items-center gap-1.5 hover:text-healthco-yellow transition-colors">
            <Globe className="w-3.5 h-3.5" />
            <span>EN</span>
          </button>
          <Link href="#" className="hover:text-healthco-yellow transition-colors">
            Log in
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-healthco-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-healthco-dark">HealthCo</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {["Shop Plans", "Member Resources", "For Brokers & Providers", "About Us"].map((item) => (
              <button
                key={item}
                className="flex items-center gap-1 text-sm font-medium text-healthco-dark hover:text-healthco-blue transition-colors"
              >
                {item}
                <ChevronDown className="w-4 h-4" />
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-healthco-blue hover:underline"
            >
              Find a Doctor
            </Link>
          </div>

          <button className="lg:hidden p-2">
            <Menu className="w-6 h-6 text-healthco-dark" />
          </button>
        </div>
      </nav>
    </header>
  );
}
