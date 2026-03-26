import { useEffect } from "react";
import { MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => a.q.push(ar);
      const d = (C as Window).document;
      C.Cal = C.Cal || function (...args: any[]) {
        const cal = C.Cal;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const s = d.createElement("script");
          s.src = A;
          d.head.appendChild(s);
          cal.loaded = true;
        }
        if (args[0] === L) {
          const api = (...a: any[]) => p(api, a);
          const ns = args[1];
          (api as any).q = (api as any).q || [];
          if (typeof ns === "string") {
            cal.ns[ns] = cal.ns[ns] || api;
            p(cal.ns[ns], args);
            p(cal, ["initNamespace", ns]);
          } else p(cal, args);
          return;
        }
        p(cal, args);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", "book-a-cleaning", { origin: "https://app.cal.com" });
    Cal.ns["book-a-cleaning"]("inline", {
      elementOrSelector: "#my-cal-inline-book-a-cleaning",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "supremeklene/book-a-cleaning",
    });
    Cal.ns["book-a-cleaning"]("ui", {
      cssVarsPerTheme: { light: { "cal-brand": "#6F8F7A" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4A8FAE] to-[#1E3A8A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Schedule Your Service</h1>
          <p className="text-2xl max-w-3xl mx-auto">
            Ready to experience the Supreme Klene difference? Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cal.com Booking */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Schedule Online</h2>
              <p className="text-xl text-gray-600">
                Pick a date and time that works for you
              </p>
            </div>
            <div
              id="my-cal-inline-book-a-cleaning"
              style={{ width: "100%", height: "700px", overflow: "scroll" }}
            />
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#F0F9F8] to-white rounded-xl">
              <div className="w-14 h-14 bg-[#6B9080] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Service Area</p>
                <p className="text-xl font-semibold text-gray-900">Cincinnati, OH</p>
                <p className="text-gray-600">& Surrounding Areas</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#F0F9F8] to-white rounded-xl">
              <div className="w-14 h-14 bg-[#6B9080] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Business Hours</p>
                <p className="text-gray-900">Monday - Friday: 8am - 6pm</p>
                <p className="text-gray-900">Saturday: 9am - 4pm</p>
                <p className="text-gray-900">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}