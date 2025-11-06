import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="bg-black text-white px-4 sm:px-6 lg:px-8 pt-12 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <img
              src="/logo2.png"
              alt="SOUEAST MOTOR Logo"
              className="w-60 h-auto mb-6"
              loading="lazy"
            />
            <h2 className="text-2xl font-semibold mb-4">
              {t("footer.contactTitle")}
            </h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>{t("footer.infoLine")}</li>
              <li className="text-lg text-white font-semibold flex items-center gap-2">
                <a
                  href="tel:+998993124100"
                  className="hover:text-orange-500 transition-colors"
                >
                  +998 (99) 3124100
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <nav className="flex flex-wrap justify-center gap-6 text-sm mb-6 md:mb-0">
            <a
              href="/contact"
              className="hover:text-orange-500 transition-colors"
              aria-label="Contact page"
            >
              {t("footer.nav.contact")}
            </a>
            <a
              href="/contact"
              className="hover:text-orange-500 transition-colors"
              aria-label="Privacy policy"
            >
              {t("footer.nav.privacy")}
            </a>
            <a
              href="/contact"
              className="hover:text-orange-500 transition-colors"
              aria-label="Settings"
            >
              {t("footer.nav.settings")}
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <a
              className="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/soueastnavoiy_/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram />
            </a>

            <a
              href="https://t.me/+efM_O8A6I_ZmYzUy"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="Visit our Telegram channel"
            >
              <FaTelegramPlane />
            </a>

            <a
              className="text-gray-400 cursor-default"
              aria-label="YouTube channel coming soon"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-600 border-t border-gray-800 pt-6 mt-6">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
