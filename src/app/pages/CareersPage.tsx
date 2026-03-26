import { Briefcase, Heart, TrendingUp, DollarSign, Clock, Users, Phone, Mail, MessageSquare } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "We offer competitive wages that reflect your skills and experience.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Choose schedules that work for you - full-time or part-time opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Opportunities for advancement and professional development.",
  },
  {
    icon: Heart,
    title: "Supportive Team",
    description: "Join a friendly, professional team that values your contributions.",
  },
];

export default function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4A8FAE] to-[#1E3A8A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <Briefcase size={40} />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-2xl max-w-3xl mx-auto">
            Be part of Cincinnati's premier cleaning service and make a difference in people's lives
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Supreme Klene?</h2>
            <p className="text-xl text-gray-600">We invest in our team because they're our greatest asset</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-[#F0F9F8] to-white hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#6B9080] rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] text-white rounded-2xl p-8 text-center">
            <Users size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Looking for Passionate Cleaners</h3>
            <p className="text-lg">
              Whether you're experienced or just starting out, we provide training and support to help you succeed. Join a team that values quality, integrity, and excellent customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us to Apply */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9F8] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
            <p className="text-xl text-gray-600">
              Get in touch with us to start your career with Supreme Klene
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Call Us */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
                <a
                  href="tel:+15132621525"
                  className="text-lg text-[#4A8FAE] hover:text-[#1E3A8A] transition-colors"
                >
                  (513) 262-1525
                </a>
                <p className="text-sm text-gray-600 mt-2">Mon-Fri, 8am-6pm</p>
              </div>

              {/* Email Us */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4A8FAE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
                <a
                  href="mailto:klenesupreme23@gmail.com"
                  className="text-lg text-[#4A8FAE] hover:text-[#1E3A8A] transition-colors whitespace-nowrap"
                >
                  klenesupreme23@gmail.com
                </a>
                <p className="text-sm text-gray-600 mt-2">We'll respond within 24 hours</p>
              </div>

              {/* Text Us */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6B9080] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Text Us</h3>
                <a
                  href="sms:+15132621525"
                  className="text-lg text-[#4A8FAE] hover:text-[#1E3A8A] transition-colors"
                >
                  (513) 262-1525
                </a>
                <p className="text-sm text-gray-600 mt-2">Quick response guaranteed</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-br from-[#F0F9F8] to-white rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">What to Include</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#6B9080] mr-2">•</span>
                  <span>Your full name and contact information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B9080] mr-2">•</span>
                  <span>Your availability (Full-time, Part-time, Weekends, or Flexible)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B9080] mr-2">•</span>
                  <span>Any relevant experience (no experience? No problem! We'll help you get started)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}