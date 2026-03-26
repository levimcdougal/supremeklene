import { Shield, Clock, CheckCircle2, Users } from "lucide-react";
import serviceImage from "../../../assets/cb93d3ca787abee2e5335a30da6468b06bd42220.png";

const features = [
  {
    icon: Shield,
    title: "Insured & Bonded",
    description: "Complete peace of mind with full insurance coverage for your property.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable & Detail-Oriented",
    description: "Consistent quality and attention to every detail, every time.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose daily, weekly, bi-weekly, or monthly service plans that fit your lifestyle.",
  },
  {
    icon: Users,
    title: "Trusted by Homes & Businesses",
    description: "Serving Cincinnati's residential and commercial clients with excellence.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F0F9F8] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Supreme Klene
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference of working with Cincinnati's most trusted cleaning service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative">
            <img
              src={serviceImage}
              alt="Professional cleaning services"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#1E3A8A] rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}