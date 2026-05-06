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
      { label: "About HealthCo", url: "#" },
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
    <footer className="bg-healthco-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-healthco-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold">HealthCo</span>
            </Link>
            <div className="flex gap-4 mb-6">
              {["Facebook", "YouTube", "Twitter", "Instagram"].map((name) => (
                <a key={name} href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider">
                  {name}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              Need help?
              <br />
              <a href="tel:1-855-672-2788" className="hover:text-white transition-colors">
                1-855-HEALTHCO-88
              </a>
              <br />
              <span className="text-xs">Mon–Fri, 8am–8pm ET</span>
            </p>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HealthCo Health, Inc. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Accessibility
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
