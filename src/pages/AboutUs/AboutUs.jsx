import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// Reusable animated section component
const AnimatedSection = ({ children, direction = "left", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px", once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const AboutUs = () => {
  const { t } = useTranslation("about");
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });
  const statsControls = useAnimation();

  // Hero banner animations
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const logoControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (isHeroInView) {
      const sequence = async () => {
        await logoControls.start("visible");
        await textControls.start("visible");
      };
      sequence();
    }
  }, [isHeroInView, logoControls, textControls]);

  useEffect(() => {
    if (statsInView) {
      statsControls.start("visible");
    }
  }, [statsControls, statsInView]);

  // Animation variants
  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-cover bg-center h-[500px] md:h-[570px] flex items-center justify-center"
        style={{ backgroundImage: "url('/AboutUs/banner_pc.jpg')" }}
      >
        <div className="bg-opacity-60 p-8 md:p-16 rounded-2xl text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl text-[#13d0ad] font-bold tracking-widest">
            {t("aboutUs.section1.subtitle")}
          </h1>
          <p className="text-gray-200 mt-6 text-lg md:text-xl font-normal leading-relaxed">
            {t("aboutUs.subtitle")}
          </p>
        </div>
      </motion.div>

      {/* Main Content with Animated Sections */}
      <div className="container mx-auto px-6 py-24">
        {/* Section 1 */}
        <AnimatedSection direction="left">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-40">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block text-[#13d0ad] bg-[#13d0ad]/10 px-4 py-1 rounded-full text-sm font-semibold">
                {t("aboutUs.section1.subtitle")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("aboutUs.section1.title")}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {t("aboutUs.section1.text")}
              </p>
              <div className="flex gap-4 mt-6">
                <button className="bg-[#13d0ad] hover:bg-[#0fb89a] text-black font-bold py-2 px-6 rounded-full transition-all cursor-pointer">
                  {t("aboutUs.learnMore")}
                </button>
                <button
                  className="border border-gray-700 hover:border-[#13d0ad] text-gray-300 font-bold py-2 px-6 rounded-full transition-all cursor-pointer"
                  onClick={() => (window.location.href = "/contact")}
                >
                  {t("aboutUs.contactUs")}
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#13d0ad] rounded-xl blur-lg opacity-20"></div>
              <motion.img
                src="/AboutUs/photo_2025-07-17_11-32-19.jpg"
                alt={t("aboutUs.section1.title")}
                className="w-full rounded-xl relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Section 2 */}
        <AnimatedSection direction="right" delay={0.2}>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-40">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block text-[#13d0ad] bg-[#13d0ad]/10 px-4 py-1 rounded-full text-sm font-semibold">
                {t("aboutUs.section2.subtitle")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("aboutUs.section2.title")}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {t("aboutUs.section2.text")}
              </p>
              <ul className="mt-6 space-y-3">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-[#13d0ad] flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-black"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-300">
                      {t(`aboutUs.section2.listItem${item}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#13d0ad] rounded-xl blur-lg opacity-20"></div>
              <motion.img
                src="/AboutUs/Slide4.jpg"
                alt={t("aboutUs.section2.title")}
                className="w-full rounded-xl relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Section 3 */}
        <AnimatedSection direction="left" delay={0.4}>
          <div className="flex flex-col md:flex-row items-center gap-12 mb-40">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block text-[#13d0ad] bg-[#13d0ad]/10 px-4 py-1 rounded-full text-sm font-semibold">
                {t("aboutUs.section3.subtitle")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("aboutUs.section3.title")}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {t("aboutUs.section3.text")}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="mr-3 text-[#13d0ad]">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-gray-300">
                      {t(`aboutUs.section3.feature${item}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#13d0ad] rounded-xl blur-lg opacity-20"></div>
              <motion.img
                src="/AboutUs/Slide3.jpg"
                alt={t("aboutUs.section3.title")}
                className="w-full rounded-xl relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Section 4 */}
        <AnimatedSection direction="right" delay={0.6}>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block text-[#13d0ad] bg-[#13d0ad]/10 px-4 py-1 rounded-full text-sm font-semibold">
                {t("aboutUs.section4.subtitle")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("aboutUs.section4.title")}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {t("aboutUs.section4.text")}
              </p>
              <div className="mt-8 p-6 bg-[#151515] rounded-xl border border-[#252525]">
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-[#13d0ad] flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">+998 99 312 41 00</h4>
                    <p className="text-[#13d0ad]">soueastnavoiy@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#13d0ad] rounded-xl blur-lg opacity-20"></div>
              <motion.img
                src="/AboutUs/photo_2025-07-17_11-33-21.jpg"
                alt={t("aboutUs.section4.title")}
                className="w-full rounded-xl relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutUs;
