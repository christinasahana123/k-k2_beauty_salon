import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const branchReviewUrls = {
  Adyar: "https://search.google.com/local/writereview?placeid=ChIJzYV6zcJnUjoRXaImcAn3JGU",
  "Besant Nagar": "https://search.google.com/local/writereview?placeid=ChIJf78qo4pnUjoRI2qw-o2GEF8",
  Nungambakkam: "https://search.google.com/local/writereview?placeid=ChIJFdvrnmhmUjoRDYxt-1IG7Jk",
};

const navLinks = [
  { label: "Salon Location", to: "/locations" as const },
  { label: "Price", to: "/pricing" as const },
  { label: "Bridal", to: "/bridal" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Contact Us", to: "/contact" as const },
];

const services = [
  { label: "Haircare", to: "/haircare" as const },
  { label: "Skincare", to: "/skincare" as const },
  { label: "Bodycare", to: "/bodycare" as const },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileFeedback, setMobileFeedback] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center group shrink-0">
          <img src={logo} alt="K&K2 Beauty Salon" className="h-12 md:h-14 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
              Our Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
              <div className="luxe-card p-2 bg-card">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-4 py-2.5 rounded-lg text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          {/* Feedback Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors py-2 cursor-pointer">
              Feedback <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px]">
              <div className="luxe-card p-2 bg-card">
                {Object.entries(branchReviewUrls).map(([branch, url]) => (
                  <a
                    key={branch}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="block px-4 py-2.5 rounded-lg text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors font-medium"
                  >
                    {branch}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-secondary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-up">
          <div className="px-4 py-4 space-y-1">
            <button
              onClick={() => setMobileServices(!mobileServices)}
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-foreground hover:bg-secondary"
            >
              <span className="font-medium">Our Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServices ? "rotate-180" : ""}`} />
            </button>
            {mobileServices && (
              <div className="pl-6 space-y-1">
                {services.map((s) => (
                  <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 rounded-lg text-foreground hover:bg-secondary font-medium"
              >
                {l.label}
              </Link>
            ))}
            {/* Feedback Mobile Menu */}
            <div>
              <button
                onClick={() => setMobileFeedback(!mobileFeedback)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-foreground hover:bg-secondary"
              >
                <span className="font-medium">Feedback</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileFeedback ? "rotate-180" : ""}`} />
              </button>
              {mobileFeedback && (
                <div className="pl-6 space-y-1">
                  {Object.entries(branchReviewUrls).map(([branch, url]) => (
                    <a
                      key={branch}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary font-medium"
                    >
                      {branch}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}