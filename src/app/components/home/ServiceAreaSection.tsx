import { MapPin } from "lucide-react";

export default function ServiceAreaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <MapPin className="text-white" size={40} />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-4">Service Area</h2>
          <p className="text-2xl mb-6">Proudly Serving Cincinnati, OH & Surrounding Areas</p>
          
          <div className="max-w-3xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1650174258722-a9af05b1b548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5jaW5uYXRpJTIwb2hpbyUyMHNreWxpbmV8ZW58MXx8fHwxNzc0MTAwNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cincinnati skyline"
              className="w-full h-64 object-cover rounded-2xl shadow-2xl mb-8"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {["Cincinnati", "Mason", "West Chester", "Blue Ash", "Hyde Park", "Oakley", "Anderson Township", "Montgomery"].map((area) => (
              <div key={area} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                <p className="font-semibold">{area}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg opacity-90">
            Don't see your area listed? Contact us - we may still be able to help!
          </p>
        </div>
      </div>
    </section>
  );
}