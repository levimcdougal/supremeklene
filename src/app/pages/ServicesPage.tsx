import { Home, Building2, Truck, Hammer, Sparkles, Building, CheckCircle, Calendar, Clock } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Keep your home spotless with our comprehensive residential cleaning services.",
    features: [
      "Thorough dusting and vacuuming",
      "Kitchen and bathroom sanitization",
      "Floor mopping and polishing",
      "Window cleaning (interior)",
      "Customized cleaning plans",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional office and commercial space cleaning for businesses of all sizes.",
    features: [
      "Office and workspace cleaning",
      "Restroom sanitization",
      "Break room maintenance",
      "Trash removal and recycling",
      "After-hours availability",
    ],
  },
  {
    icon: Truck,
    title: "Move-In / Move-Out Cleaning",
    description: "Complete deep cleaning for moving transitions, ensuring every corner shines.",
    features: [
      "Comprehensive deep cleaning",
      "Appliance cleaning (inside & out)",
      "Cabinet and drawer cleaning",
      "Baseboard and trim wiping",
      "Ready-to-move-in condition",
    ],
  },
  {
    icon: Hammer,
    title: "Post-Construction Cleaning",
    description: "Remove construction dust and debris with our specialized cleaning service.",
    features: [
      "Dust and debris removal",
      "Window and glass cleaning",
      "Floor scrubbing and polishing",
      "Paint and adhesive removal",
      "Final touch-ups",
    ],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive cleaning service for those hard-to-reach areas and tough grime.",
    features: [
      "Detailed cleaning of all surfaces",
      "Behind and under furniture",
      "Grout and tile scrubbing",
      "Light fixture cleaning",
      "Vent and baseboard cleaning",
    ],
  },
  {
    icon: Building,
    title: "Apartment Turnovers",
    description: "Fast, efficient cleaning for property managers and landlords between tenants.",
    features: [
      "Quick turnover cleaning",
      "Move-out ready condition",
      "Flexible scheduling",
      "Consistent quality",
      "Property manager friendly",
    ],
  },
];

export default function ServicesPage() {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4A8FAE] to-[#1E3A8A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our Cleaning Services</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Professional cleaning solutions tailored to meet your residential and commercial needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F0F9F8] to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#6B9080] rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="text-[#6B9080] flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Frequency Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flexible Service Frequencies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the cleaning schedule that fits your lifestyle and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Daily Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A8FAE] to-[#1E3A8A] rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Daily</h3>
              <p className="text-gray-600 mb-6">
                Perfect for high-traffic commercial spaces and luxury homes
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#6B9080] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">7 days a week</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#6B9080] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Consistent cleanliness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#6B9080] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Priority scheduling</span>
                </li>
              </ul>
            </div>

            {/* Weekly Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B9080] to-[#5A8070] rounded-xl flex items-center justify-center mb-6">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Weekly</h3>
              <p className="text-gray-600 mb-6">
                Ideal for maintaining a fresh and clean environment
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#6B9080] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Same day each week</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#6B9080] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Regular maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#6B9080] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Best value option</span>
                </li>
              </ul>
            </div>

            {/* Bi-Weekly Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A8FAE] to-[#3A7F9E] rounded-xl flex items-center justify-center mb-6">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Bi-Weekly</h3>
              <p className="text-gray-600 mb-6">
                Great balance of cleanliness and affordability
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#6B9080] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Every two weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#6B9080] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Budget-friendly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#6B9080] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Most popular choice</span>
                </li>
              </ul>
            </div>

            {/* Monthly Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] rounded-xl flex items-center justify-center mb-6">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Monthly</h3>
              <p className="text-gray-600 mb-6">
                Perfect for light maintenance and seasonal deep cleans
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#6B9080] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Once per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#6B9080] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Deep cleaning focus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#6B9080] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Flexible scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}