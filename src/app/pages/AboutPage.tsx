import { Shield, Heart, Award, Users } from "lucide-react";
import logoImage from "../../assets/2b756b04a76957124c6d3fe7e48673588f1dfd1e.png";

const values = [
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "We are fully insured and bonded, providing you with complete peace of mind.",
  },
  {
    icon: Heart,
    title: "Customer Focused",
    description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "Meticulous attention to detail in every cleaning job, no matter the size.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Trained, background-checked professionals who treat your space with respect.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4A8FAE] to-[#1E3A8A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">About Supreme Klene</h1>
              <p className="text-xl leading-relaxed">
                Your trusted partner for professional residential and commercial cleaning services in Cincinnati, OH and surrounding areas.
              </p>
            </div>
            <div className="relative">
              <img
                src={logoImage}
                alt="Supreme Klene Logo"
                className="w-full h-96 object-contain rounded-2xl shadow-2xl bg-white p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Supreme Klene was founded with a simple yet powerful mission: to provide exceptional cleaning services that transform spaces and exceed expectations. As the CEO and founder, I recognized a need in our community for a cleaning service that combines professionalism, reliability, and meticulous attention to detail.
            </p>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              What started as a passion for creating clean, healthy environments has grown into a trusted cleaning company serving homes and businesses throughout the Cincinnati area. We believe that a clean space is more than just aesthetics, it's about creating environments where people can thrive, work productively, and feel truly comfortable.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Every member of our team shares this commitment to excellence. We're not just cleaning, we're building lasting relationships with our clients and contributing to the well-being of our community, one spotless space at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9F8] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To deliver superior cleaning services that enhance the quality of life for our clients while maintaining the highest standards of professionalism, integrity, and environmental responsibility. We strive to be the most trusted and reliable cleaning company in Cincinnati, building long-term relationships through consistent excellence and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-[#F0F9F8] to-white hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#6B9080] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}