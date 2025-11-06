import { useState, useEffect, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("hero");
  const [autoPlay, setAutoPlay] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const toggleAutoPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (autoPlay) {
      video.pause();
    } else {
      video.play();
    }
    setAutoPlay(!autoPlay);
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[570px] overflow-hidden">
      {/* Single Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/S07 CG SALING POINT 4K 30S.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="flex flex-col pt-6 sm:pt-10 md:pt-14 h-full px-4 sm:px-8 md:pl-24">
        <h1
          className={`font-hanson text-xl sm:text-2xl md:text-3xl text-white tracking-widest transition-all duration-1000 transform ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          {t("hero.header")}
        </h1>

        <div className="flex flex-col">
          <h1
            className={`font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-4 sm:mt-6 md:mt-10 text-white transition-all duration-1000 transform ${
              showContent
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            S O U E A S T
          </h1>

          <h1
            className={`font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-2 sm:mt-3 md:mt-5 text-white transition-all duration-1000 transform ${
              showContent
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            N a v o i y
          </h1>
        </div>

        <div
          className={`mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <button className="w-[30%] mt-[40%] sm:mt-26 sm:w-48 md:w-56 h-12 sm:h-14 md:h-16 text-black bg-white font-semibold flex items-center justify-center sm:justify-start">
            <p className="text-base sm:text-lg md:text-xl lg:text-[24px] font-Hanson p-1 sm:p-1.5 sm:ml-4">
              {t("hero.testDrive")}
            </p>
            <GoArrowRight className="hidden sm:block mt-1 sm:mt-0 ml-2 sm:ml-4 text-xl sm:text-2xl" />
          </button>

          {/* Play/Pause button */}
          <div
            className="absolute sm:relative bottom-[10%] right-4 sm:top-30 sm:right-auto w-10 h-10 flex items-center justify-center border border-white rotate-45 sm:ml-[0] md:ml-[800px] cursor-pointer transition-transform hover:scale-110 self-end sm:self-auto"
            onClick={toggleAutoPlay}
          >
            <div className="-rotate-45">
              {autoPlay ? (
                <FaPause className="text-white text-sm sm:text-base" />
              ) : (
                <FaPlay className="text-white text-sm sm:text-base" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
