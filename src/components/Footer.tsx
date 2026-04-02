import Link from "next/link";

const footerSections = [
  {
    title: "Plans",
    links: [
      { label: "Individual & Family", url: "#" },
      { label: "Medicare Advantage", url: "#" },
      { label: "Employer Plans", url: "#" },
      { label: "Shop Plans", url: "#" },
    ],
  },
  {
    title: "Members",
    links: [
      { label: "Find a Doctor", url: "#" },
      { label: "Log In", url: "#" },
      { label: "Pay My Bill", url: "#" },
      { label: "FAQ", url: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Oscar", url: "#" },
      { label: "Careers", url: "#" },
      { label: "Press", url: "#" },
      { label: "Blog", url: "#" },
    ],
  },
  {
    title: "Brokers & Providers",
    links: [
      { label: "For Brokers", url: "#" },
      { label: "For Providers", url: "#" },
      { label: "Provider Portal", url: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-oscar-forest text-oscar-ivory overflow-hidden">
      {/* Subtle organic decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-oscar-sage/5 blob -translate-y-1/2 translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-oscar-terracotta rounded-full transition-transform duration-500 group-hover:scale-110" />
                <span className="relative flex items-center justify-center w-full h-full text-white font-display text-lg">
                  O
                </span>
              </div>
              <span className="text-2xl font-display">Oscar</span>
            </Link>

            {/* Social links as minimal text */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
              {["Facebook", "YouTube", "Twitter", "Instagram"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="text-oscar-ivory/30 hover:text-oscar-gold transition-colors duration-300 text-xs font-medium uppercase tracking-wider"
                >
                  {name}
                </a>
              ))}
            </div>

            <div className="space-y-1">
              <p className="text-oscar-ivory/30 text-xs uppercase tracking-wider font-semibold">
                Need help?
              </p>
              <a
                href="tel:1-855-672-2788"
                className="text-oscar-ivory/60 hover:text-oscar-gold transition-colors duration-300 text-sm block"
              >
                1-855-OSCAR-88
              </a>
              <p className="text-oscar-ivory/30 text-xs">Mon–Fri, 8am–8pm ET</p>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-sm text-oscar-ivory/40 mb-5">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className="text-sm text-oscar-ivory/60 hover:text-oscar-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar with refined divider */}
        <div className="border-t border-oscar-ivory/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-oscar-ivory/30 tracking-wide">
            &copy; {new Date().getFullYear()} Oscar Health, Inc. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-oscar-ivory/30">
            {["Terms of Use", "Privacy Policy", "Accessibility", "Cookie Preferences"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-oscar-gold transition-colors duration-300"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
