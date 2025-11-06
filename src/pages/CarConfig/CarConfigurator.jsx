import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Color options for S07
export const colorOptionsS07 = [
  {
    nameKey: "infocars.colors.s07.ashBrown",
    colorCode: "#A69B97",
    topImage: "/CarConfigurator/s07/ash-brown-top.webp",
    sideImage: "/CarConfigurator/s07/ash-brown-side.webp",
  },
  {
    nameKey: "infocars.colors.s07.black",
    colorCode: "#000000",
    topImage: "/CarConfigurator/s07/black-top.webp",
    sideImage: "/CarConfigurator/s07/black-side.webp",
  },
  {
    nameKey: "infocars.colors.s07.white",
    colorCode: "#f4f4f4",
    topImage: "/CarConfigurator/s07/white-top.webp",
    sideImage: "/CarConfigurator/s07/white-side.webp",
  },
  {
    nameKey: "infocars.colors.s07.blue",
    colorCode: "#1F3A93",
    topImage: "/CarConfigurator/s07/blue-top.webp",
    sideImage: "/CarConfigurator/s07/blue-side.webp",
  },
  {
    nameKey: "infocars.colors.s07.skyBlue",
    colorCode: "#87CEEB",
    topImage: "/CarConfigurator/s07/skyblue-top.webp",
    sideImage: "/CarConfigurator/s07/skyblue-side.webp",
  },
  {
    nameKey: "infocars.colors.s07.pearlWhite",
    colorCode: "#F8F6F0",
    topImage: "/CarConfigurator/s07/pearl-white-top.webp",
    sideImage: "/CarConfigurator/s07/pearl-white-side.webp",
  },
  {
    nameKey: "infocars.colors.s07.phantomGray",
    colorCode: "#A7AEB0",
    topImage: "/CarConfigurator/s07/phantom-gray-top.webp",
    sideImage: "/CarConfigurator/s07/phantom-gray-side.webp",
  },
];

// Color options for S09
export const colorOptionsS09 = [
  {
    nameKey: "infocars.colors.s09.moonGray",
    colorCode: "#c2c5cc",
    topImage: "/CarConfigurator/s09/moongray-top.webp",
    sideImage: "/CarConfigurator/s09/moongray-side.webp",
  },
  {
    nameKey: "infocars.colors.s09.mountainGreen",
    colorCode: "#6D8C6F",
    topImage: "/CarConfigurator/s09/mountaingreen-top.webp",
    sideImage: "/CarConfigurator/s09/mountaingreen-side.webp",
  },
  {
    nameKey: "infocars.colors.s09.oceanBlue",
    colorCode: "#1F3A93",
    topImage: "/CarConfigurator/s09/oceanblue-top.webp",
    sideImage: "/CarConfigurator/s09/oceanblue-side.webp",
  },
  {
    nameKey: "infocars.colors.s09.phantomGray",
    colorCode: "#777777",
    topImage: "/CarConfigurator/s09/phantomgray-top.webp",
    sideImage: "/CarConfigurator/s09/phantomgray-side.webp",
  },
  {
    nameKey: "infocars.colors.s09.starlitBlack",
    colorCode: "#000000",
    topImage: "/CarConfigurator/s09/starlitblack-top.webp",
    sideImage: "/CarConfigurator/s09/starlitblack-side.webp",
  },
  {
    nameKey: "infocars.colors.s09.white",
    colorCode: "#FFFAFA",
    topImage: "/CarConfigurator/s09/white-top.webp",
    sideImage: "/CarConfigurator/s09/white-side.webp",
  },
];

const CarConfigurator = ({ colorOptions, title }) => {
  const { t } = useTranslation("infocars");
  const [selected, setSelected] = useState(colorOptions[0]);

  return (
    <div className="max-w-8xl mx-auto p-4 sm:p-6 mt-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center sm:text-left">
        {title}
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Top View - Visible on all screens */}
        <div className="w-full md:w-1/2 p-2 sm:p-4 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300">
          <div className="w-full h-[300px] sm:h-[400px] overflow-hidden flex items-center justify-center">
            <motion.img
              src={selected.topImage || "/CarConfigurator/fallback-top.webp"}
              alt={t("infocars.topViewAlt")}
              className="max-w-full max-h-full object-contain"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Color Picker - Mobile version above image */}
          <div className="md:hidden mt-4">
            <div className="flex flex-wrap justify-center gap-3">
              {colorOptions.map((option, index) => (
                <motion.div
                  key={index}
                  onClick={() => setSelected(option)}
                  className={`w-10 h-10 rounded-full cursor-pointer border-3 shadow-md ${
                    selected.nameKey === option.nameKey
                      ? "border-none"
                      : "border-none"
                  }`}
                  style={{ backgroundColor: option.colorCode }}
                  title={t(option.nameKey)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </div>

            {/* Selected Color Label */}
            <p className="mt-3 text-center text-lg text-gray-700 font-semibold">
              {t(selected.nameKey)}
            </p>
          </div>
        </div>

        {/* Side View - Hidden on mobile, visible on medium+ */}
        <div className="hidden md:block w-full md:w-1/2 p-4 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300">
          <div className="w-full h-[500px] overflow-hidden flex items-center justify-center">
            <motion.img
              src={selected.sideImage || "/CarConfigurator/fallback-side.webp"}
              alt={t("infocars.sideViewAlt")}
              className="max-w-full max-h-full object-contain"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Color Picker - Desktop version below images */}
      <div className="hidden md:block mt-6">
        <div className="flex flex-wrap justify-center gap-4">
          {colorOptions.map((option, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(option)}
              className={`w-10 h-10 rounded-full cursor-pointer border-3 shadow-md ${
                selected.nameKey === option.nameKey
                  ? "border-[#f9b233]"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: option.colorCode }}
              title={t(option.nameKey)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>

        {/* Selected Color Label */}
        <p className="mt-4 text-center text-lg text-gray-700 font-semibold">
          {t(selected.nameKey)}
        </p>
      </div>
    </div>
  );
};

export default CarConfigurator;
