import { useState } from "react";
import kitchenBefore from "../../../assets/b236782b13032c3daa24c8f1db2d38f70306b301.png";
import kitchenAfter from "../../../assets/78e6bed4ab0333fb8c8de4ac90404ef422d9b646.png";
import bathroomBefore from "../../../assets/185e6f532960eaf76c7d56e1b27ab1340e5efd84.png";
import bathroomAfter from "../../../assets/61cbdc77bea8e4296df1dba352549e4240920b4f.png";
import bedroomBefore from "../../../assets/257e5a865e2258498cc9d09da68b102eaa3dd345.png";
import bedroomAfter from "../../../assets/1550c22820f1d8ed452078e68bf1ad1e01a6ab4a.png";
import fridgeBefore from "../../../assets/5e9437af7d19c38532a43f38fe8268eee6bbf60b.png";
import fridgeAfter from "../../../assets/d6f381d1d70676e75e546974b6782dcfad338c0b.png";
import ovenBefore from "../../../assets/1be45468255696274c765fc62ab1e89209da26eb.png";
import ovenAfter from "../../../assets/c6b9f1d7cfe6ef38dfb1ef79048542ee9287c878.png";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const beforeAfterItems = [
  {
    before: kitchenBefore,
    after: kitchenAfter,
    title: "Kitchen Deep Clean",
    rotate: false,
  },
  {
    before: bathroomBefore,
    after: bathroomAfter,
    title: "Bathroom Transformation",
    rotate: false,
  },
  {
    before: bedroomBefore,
    after: bedroomAfter,
    title: "Bedroom Refresh",
    rotate: true,
  },
  {
    before: fridgeBefore,
    after: fridgeAfter,
    title: "Refrigerator Deep Clean",
    rotate: false,
  },
  {
    before: ovenBefore,
    after: ovenAfter,
    title: "Stove & Oven Cleaning",
    rotate: false,
  },
];

export default function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Before & After Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the transformative power of our professional cleaning services
          </p>
        </div>

        <div className="mb-8 flex justify-center gap-2 sm:gap-4 flex-wrap">
          {beforeAfterItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                activeIndex === index
                  ? "bg-[#6B9080] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          <div className="relative group flex justify-center items-center overflow-hidden rounded-xl">
            <div className="absolute top-4 left-4 sm:top-12 sm:left-12 bg-red-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold z-10 text-sm sm:text-base">
              Before
            </div>
            <ImageWithFallback
              src={beforeAfterItems[activeIndex].before}
              alt="Before cleaning"
              className={`shadow-lg rounded-xl ${
                beforeAfterItems[activeIndex].rotate
                  ? "w-full h-64 object-cover sm:h-96 md:h-auto md:w-auto md:max-h-[500px] md:-rotate-90"
                  : "w-full h-64 sm:h-96 object-cover"
              }`}
            />
          </div>
          <div className="relative group flex justify-center items-center overflow-hidden rounded-xl">
            <div className="absolute top-4 left-4 sm:top-12 sm:left-12 bg-green-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold z-10 text-sm sm:text-base">
              After
            </div>
            <ImageWithFallback
              src={beforeAfterItems[activeIndex].after}
              alt="After cleaning"
              className={`shadow-lg rounded-xl ${
                beforeAfterItems[activeIndex].rotate
                  ? "w-full h-64 object-cover sm:h-96 md:h-auto md:w-auto md:max-h-[500px] md:-rotate-90"
                  : "w-full h-64 sm:h-96 object-cover"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}