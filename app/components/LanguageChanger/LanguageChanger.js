"use client";

import { useRouter, usePathname } from "../../../navigation";
import { useState } from "react";

import { useTranslations } from "next-intl";

export default function LanguageChanger({ locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState();

  const t = useTranslations();

  const handleChange = (e) => {
    const newLocale = e.target.value;
    setCurrentLocale(newLocale);
    router.push(pathname, { locale: newLocale });
  };

  console.log("language:", currentLocale);

  return (
    <>
      <select value={currentLocale} onChange={handleChange}>
        <option>Language</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="es">Español</option>
        <option value="zh">中文</option>
      </select>
      <p> {t("rifle")}</p>
    </>
  );
}
