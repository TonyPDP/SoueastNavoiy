import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const cars = [
  {
    name: "SOUEAST S07",
    sloganKey: "slider.cars.S07.slogan",
    colors: [
      {
        nameKey: "slider.cars.S07.colors.0.name",
        code: "#ffffff",
        image: "/Soueast S07 (white).png",
      },
      {
        nameKey: "slider.cars.S07.colors.1.name",
        code: "#777777",
        image: "/Soueast S07 (grey).webp",
      },
      {
        nameKey: "slider.cars.S07.colors.2.name",
        code: "#6060b3",
        image: "/Soueast S07.png",
      },
    ],
  },
  {
    name: "SOUEAST S09",
    sloganKey: "slider.cars.S09.slogan",
    colors: [
      {
        nameKey: "slider.cars.S09.colors.0.name",
        code: "#ffffff",
        image: "/Soueast S09 (white).webp",
      },
      {
        nameKey: "slider.cars.S09.colors.1.name",
        code: "#777777",
        image: "/Soueast S09.png",
      },
      {
        nameKey: "slider.cars.S09.colors.2.name",
        code: "#6060b3",
        image: "/Soueast S09 (blue).webp",
      },
    ],
  },
];

const HeroSlider = () => {
  const { t } = useTranslation("slider");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const navigate = useNavigate();

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) =>
      newDirection === 1
        ? (prev + 1) % cars.length
        : (prev - 1 + cars.length) % cars.length
    );
    setSelectedColorIndex(0); // reset color
  };

  const currentCar = cars[currentIndex];
  const currentImage = currentCar.colors[selectedColorIndex].image;

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Header - Responsive */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6">
        <h1 className="font-cargo text-2xl xs:text-3xl sm:text-[40px] text-[#141414] font-extrabold tracking-widest sm:ml-10 lg:ml-[74px] mb-4 sm:mb-0">
          {t("slider.header")}
        </h1>
        <motion.div
          className="flex font-cargo text-base sm:text-xl font-extrabold text-[#141414] tracking-widest sm:mr-6 lg:mr-25 border-b border-[#141414] h-8 sm:h-10 cursor-pointer"
          onClick={() => navigate("/cars")}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("slider.discoverLink")}
          <span className="flex items-center ml-2 sm:ml-4">
            <GoArrowRight className="mt-1" />
          </span>
        </motion.div>
      </div>

      {/* Background Large Model Name - Responsive */}
      <h1 className="absolute top-[30%] right-10 sm:right-190 left-1/2 transform -translate-x-1/2 text-[90px] xs:text-[120px] sm:text-[180px] md:text-[220px] lg:text-[280px] text-[#f2f2f2] font-extrabold z-0 select-none pointer-events-none">
        {currentCar.name.split(" ")[1]}
      </h1>
      {/* Main Section */}
      <div className="relative w-full h-[70vh] min-h-[500px] sm:h-[80vh]">
        {/* Arrows - Responsive */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-2 xs:left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white border border-black rounded-full p-1 xs:p-2 sm:p-3 hover:text-[#551c3b] hover:border-[#551c3b] transition shadow"
        >
          <GrPrevious className="text-sm xs:text-base" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-2 xs:right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white border border-black rounded-full p-1 xs:p-2 sm:p-3 hover:text-[#551c3b] hover:border-[#551c3b] transition shadow"
        >
          <GrNext className="text-sm xs:text-base" />
        </button>

        {/* Main Car Content */}
        <div className="flex justify-center items-center h-full relative px-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${currentIndex}-${selectedColorIndex}`}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center absolute z-10 w-full max-w-[1200px]"
            >
              <div className="flex flex-col items-center">
                <h2
                  className="font-cargo text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest"
                  style={{
                    color:
                      currentCar.colors[selectedColorIndex].code === "#ffffff"
                        ? "#141414"
                        : currentCar.colors[selectedColorIndex].code,
                  }}
                >
                  {currentCar.name}
                </h2>
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-4 text-gray-700">
                  {t(currentCar.sloganKey)}
                </p>
                <div className="w-full h-[40vh] min-h-[300px] sm:h-[50vh] flex items-center justify-center mt-4">
                  <img
                    src={currentImage}
                    alt={currentCar.name}
                    className="max-w-full max-h-full object-contain px-4"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Color Selector - Responsive */}
        <div className="absolute bottom-6 sm:[bottom:-2.5rem] left-1/2 transform -translate-x-1/2 w-full max-w-[500px] z-10">
          <div className="flex flex-col items-center">
            <div className="flex gap-2 sm:gap-4">
              {currentCar.colors.map((color, index) => (
                <motion.div
                  key={index}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer border-2 ${
                    selectedColorIndex === index
                      ? "border-[#d4c7c7] scale-110"
                      : "border-gray-300"
                  } transition-transform shadow-md`}
                  style={{ backgroundColor: color.code }}
                  title={t(color.nameKey)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedColorIndex(index)}
                />
              ))}
            </div>
            <p className="text-center text-sm sm:text-base md:text-lg mt-2 text-gray-600 font-medium">
              {t(currentCar.colors[selectedColorIndex].nameKey)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
