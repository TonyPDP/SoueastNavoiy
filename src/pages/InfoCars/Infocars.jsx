import React, { useState } from "react";
import { Image } from "antd";
import { useParams } from "react-router-dom";
import CarConfigurator from "../CarConfig/CarConfigurator";
import { colorOptionsS07, colorOptionsS09 } from "../CarConfig/CarConfigurator";
import ImgSlide from "../CarConfig/ImgSlide";
import { useTranslation } from "react-i18next";

// Model-specific data
const carData = {
  "SOUEAST S07": {
    carModel: "s07",
    specifications: [
      "Range: 715 km (NEDC)",
      "0-100 km/h: 3.9s",
      "Battery: 85.4 kWh Blade Battery",
      "Fast charging: 30% to 80% in 25 min",
    ],
    features: [
      "Intelligent Driving Assist",
      "5G Connectivity",
      "Nappa Leather Seats",
      "Heated/Ventilated Front Seats",
    ],
  },
  "SOUEAST S09": {
    carModel: "s09",
    specifications: [
      "Range: 800 km (NEDC)",
      "0-100 km/h: 3.5s",
      "Battery: 90 kWh Blade Battery",
      "Fast charging: 30% to 80% in 20 min",
    ],
    features: [
      "Advanced Driver Assistance System",
      "5G Connectivity with OTA Updates",
      "Premium Leather Seats",
      "Heated/Ventilated Front and Rear Seats",
    ],
  },
};

const Infocars = () => {
  const { carName } = useParams();
  const decodedName = decodeURIComponent(carName);
  const { t } = useTranslation("infocars");

  // Static car images for gallery
  const cars = [
    { id: 2, name: "SOUEAST S07", image: "/Soueast S07.png" },
    { id: 3, name: "SOUEAST S07", image: "/Soueast S07 (white).png" },
    { id: 4, name: "SOUEAST S07", image: "/Soueast S07 (grey).webp" },
    { id: 7, name: "SOUEAST S07", image: "/Soueast S07 (black).webp" },
    { id: 5, name: "SOUEAST S09", image: "/Soueast S09 (blue).webp" },
    { id: 6, name: "SOUEAST S09", image: "/Soueast S09 (white).webp" },
    { id: 8, name: "SOUEAST S09", image: "/Soueast S09 (black).webp" },
    { id: 1, name: "SOUEAST S09", image: "/Soueast S09 (gray).webp" },
  ];

  const matchedCars = cars.filter((c) => c.name === decodedName);
  const images = matchedCars.map((c) => c.image);
  const car = matchedCars[0];

  const [mainImage, setMainImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (img, index) => {
    setMainImage(img);
    setActiveIndex(index);
  };

  if (!car || !carData[decodedName]) {
    return <h1 className="text-center p-6 text-xl">Car not found</h1>;
  }

  const { carModel, specifications, features } = carData[decodedName];

  return (
    <div className="max-w-8xl my-10">
      <div className="flex flex-col lg:flex-row gap-10 mx-10">
        {/* Image Gallery */}
        <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-2/3">
          <div className="w-full lg:w-3/4 overflow-hidden flex items-center justify-center min-h-[300px]">
            <Image.PreviewGroup>
              <Image
                alt="Main car display"
                src={mainImage}
                width={600}
                height={400}
                className="object-contain mb-30"
                preview={{ maskClassName: "rounded-xl" }}
              />
            </Image.PreviewGroup>
          </div>

          <div className="w-full lg:w-1/4">
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[450px] p-1">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => handleThumbnailClick(img, i)}
                  className={`border-2 rounded-lg cursor-pointer p-1 min-w-[80px] transition-all ${
                    activeIndex === i
                      ? "border-blue-500 scale-105"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/3 p-6 rounded-xl shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{car.name}</h1>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                {t("infocars.specifications")}
              </h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                {decodedName === "SOUEAST S07" && (
                  <>
                    <li>• {t("infocars.cars.s07.specifications.0")}</li>
                    <li>• {t("infocars.cars.s07.specifications.1")}</li>
                    <li>• {t("infocars.cars.s07.specifications.2")}</li>
                    <li>• {t("infocars.cars.s07.specifications.3")}</li>
                    <li>• {t("infocars.cars.s07.specifications.4")}</li>
                  </>
                )}

                {decodedName === "SOUEAST S09" && (
                  <>
                    <li>• {t("infocars.cars.s09.specifications.0")}</li>
                    <li>{t("infocars.cars.s09.specifications.1")}</li>
                    <li>• {t("infocars.cars.s09.specifications.2")}</li>
                    <li>• {t("infocars.cars.s09.specifications.3")}</li>
                    <li>{t("infocars.cars.s09.specifications.4")}</li>
                  </>
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                {t("infocars.features")}
              </h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                {decodedName === "SOUEAST S07" && (
                  <>
                    <li>• {t("infocars.cars.s07.features.0")}</li>
                    <li>• {t("infocars.cars.s07.features.1")}</li>
                    <li>• {t("infocars.cars.s07.features.2")}</li>
                    <li>• {t("infocars.cars.s07.features.3")}</li>
                    <li>• {t("infocars.cars.s07.features.4")}</li>
                  </>
                )}

                {decodedName === "SOUEAST S09" && (
                  <>
                    <li>• {t("infocars.cars.s09.features.0")}</li>
                    <li>• {t("infocars.cars.s09.features.1")}</li>
                    <li>• {t("infocars.cars.s09.features.2")}</li>
                    <li>• {t("infocars.cars.s09.features.3")}</li>
                    <li>• {t("infocars.cars.s09.features.4")}</li>
                  </>
                )}
              </ul>
            </div>

            <div className="pt-2">
              <button className="mt-4 bg-[#24163a] text-white py-2 px-6 rounded-lg hover:bg-[#362356] transition-colors">
                {t("infocars.scheduleTestDrive")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Car Configurator */}
      {decodedName === "SOUEAST S07" && (
        <CarConfigurator
          colorOptions={colorOptionsS07}
          title="Configure Your S07"
        />
      )}
      {decodedName === "SOUEAST S09" && (
        <CarConfigurator
          colorOptions={colorOptionsS09}
          title="Configure Your S09"
        />
      )}

      {/* ImgSlide with dynamic carModel */}
      <ImgSlide carModel={carModel} />
    </div>
  );
};

export default Infocars;
