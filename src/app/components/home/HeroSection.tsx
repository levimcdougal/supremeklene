import { Link } from "react-router";
import { Sparkles } from "lucide-react";
import heroImage from "../../../assets/9464837d3220d3904800c55606374734d78cf3d6.png";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#4A8FAE] to-[#1E3A8A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20">
          <Sparkles size={60} className="text-white animate-pulse" />
        </div>
        <div className="absolute bottom-40 left-20">
          <Sparkles size={40} className="text-white animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Professional Residential & Commercial Cleaning You Can Trust
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-white/90">
              Insured & Bonded | Eco-Friendly Options Available
            </p>
            <p className="text-lg mb-8 text-white/80">
              Experience the difference with Cincinnati's most trusted cleaning service. We deliver exceptional results with attention to every detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-[#6B9080] hover:bg-[#5A7D6E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center shadow-lg"
              >
                Schedule Service
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-[#1E3A8A] px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center shadow-lg"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Professional cleaning service"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}