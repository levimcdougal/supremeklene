import { Link, useLocation } from "react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/cf7edc6b2291611264e47e12574a30e7e53d7a1c.png";

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Schedule Service" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Supreme Klene Cleaning Solutions"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-[#6B9080] font-semibold"
                    : "text-gray-600 hover:text-[#6B9080]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:+15132621525"
              className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone size={18} />
              <span>(513) 262-1525</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-[#6B9080] font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+15132621525"
                className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Phone size={18} />
                <span>(513) 262-1525</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}