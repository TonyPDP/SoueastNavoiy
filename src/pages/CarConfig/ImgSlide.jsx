import React, { useRef, useState } from "react";
import Information from "./Information";
import FeaturesSection from "./FeaturesSection";
import { useTranslation } from "react-i18next";

// Data for Southeast S07
const s07Data = {
  features1: [
    {
      title: "Kristalli Radiator panjara",
      description:
        "Radiator panjarasining futuristik dizayni nigohni o'ziga tortadi",
      image: "/ImgSlide/1.webp",
    },
    {
      title: "LED old va orqa yoritish chiziqlari",
      description:
        "Yorug'lik nuridan yo'lni yoritib, kechikkanlar uchun yo'l ochib beradi – zamonaviy go'zallikning namunasi, shahar jozibasidan ilhomlangan.",
      image: "/ImgSlide/2.webp",
    },
    {
      title: "20-dyuymli g'ildirak disklari",
      description: "20 dyuymli engil qotishmali alyuminiy disklar",
      image: "/ImgSlide/3.webp",
    },
    {
      title: "Panoramali tom",
      description:
        "62 dyuymli keng panoramik lyuk Osmon go'zalligi bilan zavqlaning.",
      image: "/ImgSlide/4.webp",
    },
    {
      title: "Poroqlar va salomlashish yoritgichlari",
      description:
        "Tantanali tuyg'u, kelajakni kutishga va yo'lingizni yoritishga tayyor",
      image: "/ImgSlide/5.webp",
    },
  ],
  features2: [
    {
      title: "Keng salon",
      description:
        "2720 mm g'ildirak bazasi bilan avtomobil, kattaligi bilan ta'sir qiladigan va haydashdan ajoyib zavq baxsh etadigan.",
      image: "/ImgSlide/S07/1.webp",
    },
    {
      title: "12,3 dyuymli markaziy boshqaruv paneli",
      description:
        "Haydovchiga mo'ljallangan yuqori texnologiyali boshqaruv paneli, takomillashtirilgan korunuvchanlik va ilg'or texnologiyalar bilan.",
      image: "/ImgSlide/S07/2.webp",
    },
    {
      title: "Qulay yoritish",
      description:
        "Ichki yoritishning 6 xil rangli tizimi salon ichida noyob muhit yaratadi. Yuqori konsol yoritilishi saqlash joyini yoritadi, ikkinchi qatorning pastki yoritilishi esa avtomobilga kirish va otirish va tushishni.",
      image: "/ImgSlide/S07/3.webp",
    },
    {
      title: "Ko‘p funktsiyali o‘rindiq",
      description:
        "Detallardan ilhomlangan harakatlilik. Haydovchining o'rindiqlarini maksimal qulaylik uchun 6 pog'onali sozlam",
      image: "/ImgSlide/S07/4.webp",
    },
  ],
  features5: [
    {
      title: "Ikki zonali ovozli boshqaruv",
      description:
        "S07 har bir so'zingizni tushunadi. Ingliz, arab, ispan, rus, portugal va boshqa tillarni qo'llab-quvvatlash, haydovchi va yo'lovchi zonalarida buyruqlarni aniq tanib olish imkonini beradi",
      image: "/ImgSlide/S5 (1).webp",
    },
    {
      title: "8 ta Sony dinamikasi, ajoyib ovoz bilan",
      description:
        "8 ta yuqori sifatli Sony dinamikasi bilan jihozlangan avtomobil haqiqiy uy kinoteatriga aylanadi",
      image: "/ImgSlide/S5 (2).webp",
    },
    {
      title: "3 zonali iqlim nazorati",
      description:
        "Har bir o‘rindiqni qulay haroratga sozlash imkoniyati. Haydovchi va yo‘lovchi uchun standart iqlim boshqaruvi tugmalari bilan birga, orqa o‘rindiqlardagi iqlimni sozlash uchun sensorli ekran mavjud",
      image: "/ImgSlide/S5 (3).webp",
    },
    {
      title: "Simsiz quvvatlash",
      description:
        "Telefoningizni ortiqcha simlarsiz tez zaryadlash, ko'proq qulaylik uchun",
      image: "/ImgSlide/S5 (4).webp",
    },
  ],
  video: "/S07 CG SALING POINT 4K 30S.mp4",
  backgroundImage: "/ImgSlide/S07/background.webp",
  airPurifierImage: "/ImgSlide/S07/21.webp",
  airPurifierImage2: "/ImgSlide/S07/22.webp",
  performanceImage: "/ImgSlide/S07/background2.webp",
  dualImages: ["/ImgSlide/p4.webp", "/ImgSlide/p5.webp"],
  galleryImages: [
    "/ImgSlide/S07/31.webp",
    "/ImgSlide/S07/32.webp",
    "/ImgSlide/S07/33.webp",
  ],
};

// Sample data for Southeast S09 (replace with actual S09 data)
const s09Data = {
  features1: [
    {
      title: "Yangi estetika kontseptsiyasi",
      description: "Premium uslub va zamonaviy aerodinamik dizayn",
      image: "/ImgSlide/S09/1.webp",
    },
    {
      title: "U shaklidagi radiator panjarasi",
      description:
        "Yangi tarmoq dizayni: U-shaklidagi forma, dinamik va barqaror",
      image: "/ImgSlide/S09/2.webp",
    },
    {
      title: "Jozibali optika",
      description:
        "LED chiroqlari va U-shaklidagi kunduzgi yoritish chiroqlari",
      image: "/ImgSlide/S09/3.webp",
    },
    {
      title: "Sony stereo (8 dinamik)",
      description: "Musiqadan rohatlaning",
      image: "/ImgSlide/S09/4.webp",
    },
    {
      title: "Keng ichki salon",
      description:
        "3 ta buklanadigan qatorlarda 5+2 o'rindiq va oilaning barcha ehtiyojlari uchun 1130 litr bagaj",
      image: "/ImgSlide/S09/5.webp",
    },
  ],

  features2: [
    {
      title: "Ko'p funksiyali ergonomik o'rindiq",
      description:
        "Asosiy haydovchi o'rindig'i 8 yo'nalishda sozlanadi va elektr bel suyagi yordami mavjud. O'rindiq xotirasi foydalanuvchining eng qulay holatini eslab qoladi.",
      image: "/ImgSlide/10.jpg",
    },
    {
      title: "Boss tugmasi va ventilyatsiyali o'rindiq",
      description:
        "Yovlovchi o'rindig'i bir tugma bilan sozlanadi. Ventilyatsiya va isitish funksiyalari yuqori darajadagi qulaylikni ta'minlaydi.",
      image: "/ImgSlide/11.jpg",
    },
    {
      title: "CarPlay va Android Auto",
      description:
        "iOS va Android tizimlari bilan mos. Bitta tugma orqali smartfoningizni osongina avtomobilning infotainment tizimiga ulashing.",
      image: "/ImgSlide/12.jpg",
    },
    {
      title: "Oson ochiladigan elektr bagaj eshigi",
      description:
        "Yengil oyoq harakati bilan bagaj avtomatik tarzda ochiladi. Qo'lsiz boshqaruv — maksimal qulaylik uchun.",
      image: "/ImgSlide/13.jpg",
    },
  ],
  features5: [
    {
      title: "Multimediya boshqaruv paneli va displey",
      description:
        "15,6 dyuymli Panel ekrani va Full HD multimedia tizimli 10,25 dyuymli markaziy ekran sayohat va ko‘ngilochar ma'lumotlarni ko‘rsatadi.",
      image: "/ImgSlide/S5 (1).webp",
    },
    {
      title: "Qualcomm Snapdragon 8155 protsessori",
      description:
        "Aqlli avtomobil, Snapdragon 8155 protsessori yordamida super yadro bilan qo‘llab-quvvatlanadi. Sizning telefoningiz multimedia tizimiga aylanishi mumkin. Avtomobil iOS va Android tizimlari bilan to‘liq mos keladi.",
      image: "/ImgSlide/S5 (2).webp",
    },
    {
      title: "Elektr vitesni almashtirish",
      description: "Haydovchi viteslarni juda oson o'zgartirishi mumkin",
      image: "/ImgSlide/S5 (3).webp",
    },
    {
      title: "Simsiz quvvatlash",
      description: "Mobil qurilma uchun shamollatiladigan simsiz quvvatlash",
      image: "/ImgSlide/S5 (4).webp",
    },
  ],
  video:
    "/ImgSlide/S09/S09,_Your_Soul_Knight_SOUEAST_Global_1080p,_h264,_youtube.mp4",
  backgroundImage: "/ImgSlide/S09/background.webp",
  airPurifierImage: "/ImgSlide/S09/31.webp",
  airPurifierImage2: "/ImgSlide/S09/32.webp",
  performanceImage: "/ImgSlide/S09/background2.webp",
  dualImages: ["/ImgSlide/S09/41.webp", "/ImgSlide/S09/42.webp"],
  galleryImages: [
    "/ImgSlide/S09/51.webp",
    "/ImgSlide/S09/52.webp",
    "/ImgSlide/S09/53.webp",
  ],
};

// Map car models to their data
const carDataMap = {
  s07: s07Data,
  s09: s09Data,
};

const ImgSlide = ({ carModel = "s07" }) => {
  const data = carDataMap[carModel] || s07Data;
  const [activeIndex1, setActiveIndex1] = useState(2);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const videoRef = useRef(null);
  const { t } = useTranslation("ImgSlide");

  return (
    <>
      {/* Section 1 - Header and Video */}
      <div>
        <div className="bg-[#494848] py-4 md:py-10 px-4 md:px-0">
          <p className="md:ml-20 text-white font-normal text-sm md:text-[17px] mb-4 md:mb-10 text-center md:text-left">
            {t("s07.section1.subtitle")}
          </p>
          <h1 className="md:ml-20 text-white text-2xl md:text-4xl font-bold mb-2 text-center md:text-left">
            {t("s07.section1.title1")}
          </h1>
          <h1 className="md:ml-20 text-white text-2xl md:text-4xl font-bold text-center md:text-left">
            {t("s07.section1.title2")}
          </h1>
        </div>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover z-[-1]"
        >
          <source src={data.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Section 2 - Features 1 */}
      <div className="bg-[#494848] p-4 md:p-15 text-white">
        <div className="w-full">
          <img
            src={data.features1[activeIndex1]?.image}
            alt={data.features1[activeIndex1]?.title}
            className="w-full h-auto rounded mt-4 md:mt-10"
          />
        </div>

        <div className="flex justify-center">
          <div className="flex overflow-x-auto whitespace-nowrap py-3 hide-scrollbar text-xs md:text-sm mt-3 mb-2 md:mt-5 md:mb-3 mx-2 md:mx-10 gap-4 md:gap-8">
            {data.features1.map((feature, index) => (
              <button
                key={index}
                className={`px-4 py-2 transition-all cursor-pointer min-w-max flex-shrink-0 ${
                  index === activeIndex1
                    ? "font-semibold border-b-2 border-[#f9b233] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setActiveIndex1(index)}
              >
                {t(`${carModel}.section2.features1.${index}.title`)}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center text-gray-300 mt-2 text-xs md:text-sm border-t border-gray-600 pt-2 px-2">
          {t(`${carModel}.section2.features1.${activeIndex1}.description`)}
        </div>
      </div>

      {/* Section 3 - Background and Title */}
      <div className="px-4 md:px-0">
        <div>
          <p className="md:ml-20 text-[#494848] font-normal my-4 md:my-10 text-center md:text-left">
            {t(`${carModel}.section3.subtitle`)}
          </p>
          <h1 className="md:ml-20 text-[#494848] text-2xl md:text-5xl font-bold mb-2 text-center md:text-left">
            {t(`${carModel}.section3.title1`)}
          </h1>
          <h1 className="md:ml-20 text-[#494848] text-2xl md:text-5xl font-bold mb-4 md:mb-10 text-center md:text-left">
            {t(`${carModel}.section3.title2`)}
          </h1>
        </div>
        <img src={data.backgroundImage} alt="" className="w-full" />
      </div>

      {/* Section 4 - Features 2 */}
      <div className="bg-[#70faf4] p-4 md:p-15 text-white">
        <div className="w-full">
          <img
            src={data.features2[activeIndex2]?.image}
            alt={data.features2[activeIndex2]?.title}
            className="w-full h-auto rounded mt-4 md:mt-10"
          />
        </div>

        <div className="flex justify-center">
          <div className="flex overflow-x-auto whitespace-nowrap py-3 hide-scrollbar text-xs md:text-sm mt-3 mb-2 md:mt-5 md:mb-3 mx-2 md:mx-10 gap-4 md:gap-8">
            {data.features2.map((feature, index) => (
              <button
                key={index}
                className={`px-4 py-2 transition-all cursor-pointer min-w-max flex-shrink-0 ${
                  index === activeIndex2
                    ? "font-bold border-b-2 border-[#f9b233] text-[#494848]"
                    : "text-[#494848]/80 font-medium hover:text-[#494848]"
                }`}
                onClick={() => setActiveIndex2(index)}
              >
                {t(`${carModel}.section4.features2.${index}.title`)}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center text-[#494848] font-medium mt-2 text-xs md:text-sm border-t border-gray-600 pt-2 px-2">
          {t(`${carModel}.section4.features2.${activeIndex2}.description`)}
        </div>
      </div>

      {/* Section 5 - Features 5 */}
      <div className="bg-[#70faf4] p-4 md:pl-15 md:pb-15 md:pr-15 text-white">
        <div className="w-full">
          <img
            src={data.features5[activeIndex3]?.image}
            alt={data.features5[activeIndex3]?.title}
            className="w-full h-auto rounded"
          />
        </div>

        <div className="flex justify-center">
          <div className="flex overflow-x-auto whitespace-nowrap py-3 hide-scrollbar text-xs md:text-sm mt-3 mb-2 md:mt-5 md:mb-3 mx-2 md:mx-10 gap-4 md:gap-8">
            {data.features5.map((feature, index) => (
              <button
                key={index}
                className={`px-4 py-2 transition-all cursor-pointer min-w-max flex-shrink-0 ${
                  index === activeIndex3
                    ? "font-bold border-b-2 border-[#f9b233] text-[#494848]"
                    : "text-[#494848]/80 font-medium hover:text-[#494848]"
                }`}
                onClick={() => setActiveIndex3(index)}
              >
                {t(`${carModel}.section5.features5.${index}.title`)}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center text-[#494848] font-medium mt-2 text-xs md:text-sm border-t border-gray-600 pt-2 px-2">
          {t(`${carModel}.section5.features5.${activeIndex3}.description`)}
        </div>
      </div>

      {/* Section 6 */}
      <div className="flex flex-col md:flex-row gap-5 px-4 md:px-15 justify-around py-6 md:py-10 bg-[#70faf4]">
        <div className="mb-6 md:mb-0">
          <img src={data.airPurifierImage} className="w-full rounded" alt="" />
          <h1 className="text-[#494848] text-base md:text-[20px] font-bold mt-2 md:mt-4">
            {t(`${carModel}.section6.airPurifierTitle`)}
          </h1>
          <p className="text-[#494848] text-xs md:text-[13px]">
            {t(`${carModel}.section6.airPurifierDescription`)}
          </p>
        </div>
        <div>
          <img src={data.airPurifierImage2} className="w-full rounded" alt="" />
          <h1 className="text-[#494848] text-base md:text-[20px] font-bold mt-2 md:mt-4">
            {t(`${carModel}.section6.airPurifierTitle2`)}
          </h1>
          <p className="text-[#494848] text-xs md:text-[13px]">
            {t(`${carModel}.section6.airPurifierDescription2`)}
          </p>
        </div>
      </div>

      {/* Section 7 */}
      <div className="px-4 md:px-0">
        <div>
          <p className="md:ml-20 text-[#494848] font-normal my-4 md:my-10 text-center md:text-left">
            {t(`${carModel}.section7.subtitle`)}
          </p>
          <h1 className="md:ml-20 text-[#494848] text-2xl md:text-5xl font-bold mb-2 text-center md:text-left">
            {t(`${carModel}.section7.title1`)}
          </h1>
          <h1 className="md:ml-20 text-[#494848] text-2xl md:text-5xl font-bold mb-4 md:mb-10 text-center md:text-left">
            {t(`${carModel}.section7.title2`)}
          </h1>
        </div>
        <img src={data.performanceImage} alt="" className="w-full" />
      </div>

      {/* Section 8 */}
      <div className="px-4 md:px-15 py-6 md:py-10 flex flex-col md:flex-row gap-5 justify-center">
        {data.dualImages.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full md:w-1/2 h-auto rounded"
            alt=""
          />
        ))}
      </div>

      {/* Section 9 - Background and Title */}
      <div className="bg-[#70faf4] py-6 md:py-10 px-4 md:px-0">
        <div>
          <p className="md:ml-20 text-[#494848] font-normal mb-3 md:mb-5 text-center md:text-left">
            {t(`${carModel}.section9.subtitle`)}
          </p>
          <h1 className="md:ml-20 text-[#494848] text-2xl md:text-5xl font-bold mb-2 text-center md:text-left">
            {t(`${carModel}.section9.title1`)}
          </h1>
          <h1 className="md:ml-20 text-[#494848] text-2xl md:text-5xl font-bold mb-6 md:mb-10 text-center md:text-left">
            {t(`${carModel}.section9.title2`)}
          </h1>

          <div className="flex flex-col gap-4 px-2 md:px-20">
            <div className="w-full">
              <img
                src={data.galleryImages[0]}
                alt="Main visual"
                className="w-full h-auto object-cover rounded"
              />
            </div>

            <div className="w-full grid grid-cols-2 gap-4">
              <img
                src={data.galleryImages[1]}
                alt="Secondary visual 1"
                className="w-full h-auto object-cover rounded"
              />
              <img
                src={data.galleryImages[2]}
                alt="Secondary visual 2"
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 10 - Informations */}
      <Information carModel={carModel} />

      {/* Add this to your CSS or in a style tag for scrollbar hiding */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default ImgSlide;
