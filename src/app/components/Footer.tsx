import { Link } from "react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-20 lg:gap-32">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-center">Quick Links</h3>
            <div className="flex flex-col gap-4">
              {/* First row: Home, About, Contact */}
              <div className="flex gap-8 justify-center">
                <Link to="/" className="text-gray-300 hover:text-[#4A8FAE] transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-gray-300 hover:text-[#4A8FAE] transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-gray-300 hover:text-[#4A8FAE] transition-colors">
                  Schedule Service
                </Link>
              </div>
              {/* Second row: Services, Careers */}
              <div className="flex gap-8 justify-center">
                <Link to="/services" className="text-gray-300 hover:text-[#4A8FAE] transition-colors">
                  Services
                </Link>
                <Link to="/careers" className="text-gray-300 hover:text-[#4A8FAE] transition-colors">
                  Careers
                </Link>
              </div>
            </div>
          </div>

          {/* Schedule Service Button */}
          <div className="flex items-center md:items-start md:pt-8">
            <Link
              to="/contact"
              className="inline-block bg-[#4A8FAE] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#5a9fbe] transition-colors"
            >
              Schedule Service
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-center md:text-left">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-[#4A8FAE] mt-1 flex-shrink-0" />
                <a href="tel:+15132621525" className="text-gray-300 hover:text-[#4A8FAE] transition-colors">
                  (513) 262-1525
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-[#4A8FAE] mt-1 flex-shrink-0" />
                <a href="mailto:klenesupreme23@gmail.com" className="text-gray-300 hover:text-[#4A8FAE] transition-colors">
                  klenesupreme23@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-[#4A8FAE] mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Cincinnati, OH<br />& Surrounding Areas
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 pb-2">
          <p className="text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} Supreme Klene. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}