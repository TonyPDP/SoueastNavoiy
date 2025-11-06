import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("contact");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [messageText, setMessageText] = useState("");

  const BOT_TOKEN = "8189862030:AAGulKGYdW33mSYdeHM2GgqZp4NPDCp2DWM";
  const CHAT_ID = "-1002685465587";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Remove spaces from phone number
    const cleanedPhone = phone.replace(/\s+/g, "");

    // Validate Uzbek phone number format: +998 followed by 9 digits
    const isValidPhone = /^\+998\d{9}$/.test(cleanedPhone);
    if (!isValidPhone) {
      alert(
        t("contactUs.invalidPhone")
      );
      return;
    }

    const text = `🧾 Yangi murojaat:\n\n👤 Ism: ${name}\n📞 Raqam: ${cleanedPhone}\n📝 Xabar: ${messageText}`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    });

    alert(t("contactUs.successMessage"));
    setName("");
    setPhone("");
    setMessageText("");
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white font-anton px-8 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl mb-10 text-center border-b pb-4 border-[#13d0ad]">
          {t("contactUs.title")}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm tracking-wide">
              {t("contactUs.form.nameLabel")}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#13d0ad] tracking-wider"
              placeholder={t("contactUs.form.namePlaceholder")}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 text-sm tracking-wide">
              {t("contactUs.form.phoneLabel")}
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#13d0ad] tracking-wider"
              placeholder={t("contactUs.form.phonePlaceholder")}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm tracking-wide">
              {t("contactUs.form.messageLabel")}
            </label>
            <textarea
              id="message"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              required
              rows="5"
              className="px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#13d0ad]"
              placeholder={t("contactUs.form.messagePlaceholder")}
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-[#13d0ad] text-black font-semibold py-3 rounded-md hover:bg-[#10b89c] transition duration-300 tracking-wider"
          >
            {t("contactUs.form.submitButton")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
