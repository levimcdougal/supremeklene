import { Home, Building2, Truck, Hammer, Sparkles, Building } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Keep your home spotless with our thorough residential cleaning services.",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional office and commercial space cleaning for businesses of all sizes.",
  },
  {
    icon: Truck,
    title: "Move-In / Move-Out Cleans",
    description: "Complete deep cleaning for moving transitions, ensuring every corner shines.",
  },
  {
    icon: Hammer,
    title: "Post-Construction Cleaning",
    description: "Remove construction dust and debris with our specialized cleaning service.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive cleaning service for those hard-to-reach areas and tough grime.",
  },
  {
    icon: Building,
    title: "Apartment Turnovers",
    description: "Fast, efficient cleaning for property managers and landlords between tenants.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional cleaning solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-[#6B9080]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#6B9080] transition-colors">
                <service.icon className="text-[#6B9080] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}