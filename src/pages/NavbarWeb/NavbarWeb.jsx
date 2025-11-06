import React, { useState, useRef, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const phoneNumbers = ["+998 99 312 41 00", "+998 77 312 41 00"];


const languages = [
  { code: "en", name: "EN" },
  { code: "ru", name: "RU" },
  { code: "uz", name: "UZ" },
];

const NavbarWeb = () => {
  const { t, i18n } = useTranslation("navbar");
  const [selectedPhone, setSelectedPhone] = useState(phoneNumbers[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isPhoneDropdownOpenMobile, setIsPhoneDropdownOpenMobile] =
    useState(false);
  const [isLanguageDropdownOpenMobile, setIsLanguageDropdownOpenMobile] =
    useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const phoneDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);
  const popupRef = useRef(null);
  const navbarRef = useRef(null);
  const spacerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const togglePhoneDropdown = () => setIsPhoneDropdownOpen((prev) => !prev);
  const toggleLanguageDropdown = () =>
    setIsLanguageDropdownOpen((prev) => !prev);
  const togglePhoneDropdownMobile = () =>
    setIsPhoneDropdownOpenMobile((prev) => !prev);
  const toggleLanguageDropdownMobile = () =>
    setIsLanguageDropdownOpenMobile((prev) => !prev);

  const handlePhoneSelect = (number) => {
    setSelectedPhone(number);
    setIsPhoneDropdownOpen(false);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.code);
    setIsLanguageDropdownOpen(false);
  };
  const handlePhoneSelectMobile = (number) => {
    setSelectedPhone(number);
    setIsPhoneDropdownOpenMobile(false);
  };

  const handleLanguageSelectMobile = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.code);
    setIsLanguageDropdownOpenMobile(false);
  };

  const handleMenuClick = () => {
    setIsPopupOpen((prev) => !prev);
  };

  const handleMenuItemClick = (itemId, route) => {
    if (route) {
      navigate(route);
      setIsPopupOpen(false);
      setHoveredItem(null);
      setIsMobileMenuOpen(false);
    }
  };

  // Enhanced click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        phoneDropdownRef.current &&
        !phoneDropdownRef.current.contains(event.target)
      ) {
        setIsPhoneDropdownOpen(false);
      }
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageDropdownOpen(false);
      }
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
        setHoveredItem(null);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !document.querySelector(".mobile-menu-btn").contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll behavior
  useEffect(() => {
    const navbarHeight = navbarRef.current?.offsetHeight || 80;

    const controlNavbar = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= navbarHeight) {
        setShowNavbar(true);
      } else if (currentScroll > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Update spacer height when navbar size changes
  useEffect(() => {
    const updateSpacerHeight = () => {
      if (navbarRef.current && spacerRef.current) {
        spacerRef.current.style.height = `${navbarRef.current.offsetHeight}px`;
      }
    };

    updateSpacerHeight();
    window.addEventListener("resize", updateSpacerHeight);

    return () => {
      window.removeEventListener("resize", updateSpacerHeight);
    };
  }, []);

  const menuItems = [
    { id: "s09", title: "S09", route: "/car/SOUEAST%20S09" },
    { id: "s07", title: "S07", route: "/car/SOUEAST%20S07" },
    { id: "home", title: t("navbar.home"), route: "/" },
    { id: "about", title: t("navbar.about"), route: "/about" },
    { id: "news", title: "News", route: "/news" },
    { id: "contact", title: t("navbar.contact"), route: "/contact" },
  ];

  const itemContent = {
    s09: {
      image: "/Soueast S09.png",
      details: t("navbar.items.s09.details"),
    },
    s07: {
      image: "/Soueast S07.png",
      logo: "/logo2.png",
      details: t("navbar.items.s07.details"),
    },
    home: {
      image: "/home.jpg",
      details: t("navbar.items.home.details"),
    },
    about: {
      image: "/aboutUs.jpg",
      details: t("navbar.items.about.details"),
    },
    news: {
      image: "/public/home.jpg",
      details: t("navbar.items.news.details"),
    },
    contact: {
      image: "/contact.jpg",
      details: t("navbar.items.contact.details"),
    },
  };

  return (
    <>
      {/* Spacer div to maintain layout space */}
      <div ref={spacerRef} className="w-full" />

      {/* Actual Navbar */}
      <div
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="relative flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 md:py-8 bg-[#141414] text-white font-anton shadow-lg">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn md:hidden text-xl p-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition duration-300"
          >
            <HiOutlineMenu className="text-2xl" />
          </button>

          {/* Desktop Menu Button */}
          <div
            onClick={handleMenuClick}
            className="hidden md:flex cursor-pointer text-[16px] md:text-[20px] px-3 py-2 md:px-5 md:py-3 rounded-lg items-center gap-2 hover:bg-white hover:text-black transition duration-300"
          >
            <HiOutlineMenu className="text-xl md:text-2xl" />
            <Space>{t("navbar.menu")}</Space>
          </div>

          {/* Mobile Logo - shows only on mobile */}
          <div
            className="md:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/logo2.png"
              alt="Logo"
              className="h-2 w-auto" // Optimized for mobile touch targets
            />
          </div>

          {/* Desktop Logo - shows only on desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/logo2.png"
              alt="Logo"
              className="h-6 w-auto" // Larger size for desktop
            />
          </div>

          {/* Right: Language & Phone - Mobile & Desktop Separate Versions */}

          {/* Mobile Version (md:hidden) */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Dropdown */}
            <div className="relative" ref={languageDropdownRef}>
              <div
                onClick={toggleLanguageDropdownMobile}
                className="flex items-center cursor-pointer text-sm px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-300"
              >
                <span className="text-xs">{selectedLanguage.name}</span>
                <FiChevronDown
                  className={`text-xs transition-transform duration-300 ${
                    isLanguageDropdownOpenMobile ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isLanguageDropdownOpenMobile && (
                <div className="absolute right-0 mt-1 w-16 bg-white text-black rounded-lg shadow-lg z-50">
                  {languages
                    .filter((lang) => lang.code !== selectedLanguage.code)
                    .map((lang) => (
                      <div
                        key={lang.code}
                        onClick={() => handleLanguageSelectMobile(lang)}
                        className="px-2 py-1 text-xs hover:bg-[#13d0ad] hover:text-white transition duration-300 cursor-pointer"
                      >
                        {lang.name}
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Mobile Phone Dropdown */}
            <div className="relative" ref={phoneDropdownRef}>
              <div
                onClick={togglePhoneDropdown}
                className="flex items-center cursor-pointer text-sm px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-300"
              >
                <span className="text-xs">Call</span>
                <FiChevronDown
                  className={`text-xs transition-transform duration-300 ${
                    isPhoneDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isPhoneDropdownOpen && (
                <div className="absolute right-0 mt-1 w-40 bg-white text-black rounded-lg shadow-lg z-50">
                  {phoneNumbers
                    .filter((num) => num !== selectedPhone)
                    .map((num) => (
                      <a
                        key={num}
                        href={`tel:${num.replace(/\s+/g, "")}`}
                        onClick={() => handlePhoneSelect(num)}
                        className="px-2 py-1 text-xs hover:bg-[#13d0ad] hover:text-white transition duration-300 cursor-pointer block"
                      >
                        {num}
                      </a>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Version (hidden md:flex) - Original Styling */}
          <div className="hidden md:flex items-center gap-6">
            {/* Language Dropdown - Desktop */}
            <div className="relative" ref={languageDropdownRef}>
              <div
                onClick={toggleLanguageDropdown}
                className="flex items-center gap-2 cursor-pointer text-[20px] px-5 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300"
              >
                <span>{selectedLanguage.name}</span>
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    isLanguageDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white text-black rounded-lg shadow-lg z-50">
                  {languages
                    .filter((lang) => lang.code !== selectedLanguage.code)
                    .map((lang) => (
                      <div
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang)}
                        className="px-4 py-2 hover:bg-[#13d0ad] hover:text-white transition duration-300 cursor-pointer"
                      >
                        {lang.name}
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Phone Dropdown - Desktop */}
            <div className="relative" ref={phoneDropdownRef}>
              <div
                onClick={togglePhoneDropdown}
                className="flex items-center gap-2 cursor-pointer text-[20px] px-5 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300"
              >
                <span>{selectedPhone}</span>
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    isPhoneDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isPhoneDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
                  {phoneNumbers
                    .filter((num) => num !== selectedPhone)
                    .map((num) => (
                      <div
                        key={num}
                        onClick={() => handlePhoneSelect(num)}
                        className="px-4 py-2 hover:bg-[#13d0ad] hover:text-white transition duration-300 cursor-pointer"
                      >
                        {num}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="fixed top-0 left-0 w-full h-full z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === mobileMenuRef.current) {
                setIsMobileMenuOpen(false);
              }
            }}
          >
            {/* Background with gradient animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#0a0a0a] to-black"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col mt-18 items-center justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {/* Menu Items with staggered animation */}
              <div className="w-full max-w-xs space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    onClick={() => handleMenuItemClick(item.id, item.route)}
                    className="relative overflow-hidden"
                  >
                    <div className="py-5 px-6 cursor-pointer bg-black bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-[#f9b233] transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-white group-hover:text-[#f9b233] transition-colors duration-300">
                          {item.title}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400 group-hover:text-[#f9b233] transition-colors duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Hover effect line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-[#f9b233]"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <motion.div
                className="mt-12 text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="text-gray-400 mb-3">Contact us</p>
                <div className="flex justify-center space-x-4">
                  {phoneNumbers.slice(0, 2).map((number, i) => (
                    <a
                      key={i}
                      href={`tel:${number.replace(/\s+/g, "")}`}
                      className="flex items-center space-x-3 px-2 py-3 rounded-full bg-gradient-to-r from-black via-gray-900 to-black border border-[#ffffff] shadow-md"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ffffff]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <span className="text-white font-medium text-sm">
                        {number}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Close Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm border border-gray-800 hover:border-[#f9b233] group"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white group-hover:text-[#f9b233]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup Menu */}
      {isPopupOpen && (
        <div
          ref={popupRef}
          className="fixed top-0 left-0 w-full h-full backdrop-blur-[14px] bg-white/10 flex items-center justify-center z-[100]"
        >
          <div className="bg-white rounded-2xl shadow-2xl w-11/12 md:w-3/4 h-4/5 md:mr-40 flex flex-col md:flex-row relative transition-all duration-500 ease-out">
            {/* Left Menu */}
            <div className="w-full md:w-[33%] p-4 md:p-6 bg-gradient-to-b from-gray-900 to-black text-white rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onClick={() => handleMenuItemClick(item.id, item.route)}
                  className="py-3 cursor-pointer text-lg md:text-[22px] transition-all duration-300 font-medium hover:scale-105 hover:translate-x-2 md:hover:translate-x-4 hover:text-[#ffe72f]"
                >
                  {item.title}
                </div>
              ))}
            </div>

            {/* Right Content */}
            <div className="w-full md:w-[67%] p-4 md:p-6 relative bg-gray-50 rounded-b-xl md:rounded-r-xl overflow-hidden">
              <AnimatePresence mode="wait">
                {hoveredItem && itemContent[hoveredItem] && (
                  <motion.div
                    key={hoveredItem}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 bg-white p-4 md:p-10 rounded-lg shadow-lg flex flex-col"
                  >
                    <p className="text-gray-700 text-base md:text-[20px] mb-4 md:mb-8">
                      {itemContent[hoveredItem].details}
                    </p>
                    <h1
                      className={`absolute top-30 left-130 transform -translate-x-1/2 -translate-y-1/2 text-[80px] md:text-[150px] text-gray-400 font-extrabold z-0 pointer-events-none select-none opacity-20 ${
                        hoveredItem === "s07" || hoveredItem === "s09"
                          ? ""
                          : "hidden"
                      }`}
                    >
                      {hoveredItem.toUpperCase()}
                    </h1>
                    {itemContent[hoveredItem].image && (
                      <div className="flex-grow flex items-center justify-center">
                        <img
                          src={itemContent[hoveredItem].image}
                          alt={t(`navbar.items.${hoveredItem}.details`)}
                          className="max-w-full max-h-48 md:max-h-64 object-contain mb-4 md:mb-10 relative z-10"
                        />
                      </div>
                    )}
                    <div className="text-center mt-auto">
                      <button
                        onClick={() =>
                          handleMenuItemClick(
                            hoveredItem,
                            menuItems.find((m) => m.id === hoveredItem)?.route
                          )
                        }
                        className="bg-black text-white py-2 px-6 mr-100 rounded-full hover:bg-gray-800 transition duration-300 font-medium"
                      >
                        {t("navbar.explore")}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Close */}
            <button
              onClick={() => {
                setIsPopupOpen(false);
                setHoveredItem(null);
              }}
              className="absolute top-1 right-3 text-gray-700 text-2xl hover:text-red-500 transition duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarWeb;
