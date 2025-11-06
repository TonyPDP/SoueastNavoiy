import React from "react";

const FeaturesSection = () => {
  const data = {
    airPurifierImage: "/ImgSlide/S07/21.webp",
    airPurifierImage2: "/ImgSlide/S07/22.webp",
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 px-5 md:px-16 justify-around py-10 bg-[#70faf4]">
      <div className="text-center md:text-left max-w-sm">
        <img
          src={data.airPurifierImage}
          className="rounded w-full"
          alt="Air Purifier 1"
        />
        <h1 className="text-[#494848] text-[20px] font-bold mt-4">
          Havo tozalash tizimi va CN95 filtrlar
        </h1>
        <p className="text-[#494848] text-[13px] mt-2">
          Ventilyatsiya tizimi zararli zarrachalardan filtratsiya qilish va
          havoni tozalashni ta'minlaydi
        </p>
      </div>
      <div className="text-center md:text-left max-w-sm">
        <img
          src={data.airPurifierImage2}
          className="rounded w-full"
          alt="Air Purifier 2"
        />
        <h1 className="text-[#494848] text-[20px] font-bold mt-4">
          Havo tozalash tizimi va CN95 filtrlar
        </h1>
        <p className="text-[#494848] text-[13px] mt-2">
          Ventilyatsiya tizimi zararli zarrachalardan filtratsiya qilish va
          havoni tozalashni ta'minlaydi
        </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
