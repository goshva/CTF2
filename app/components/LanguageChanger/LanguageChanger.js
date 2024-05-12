"use client";

import { useRouter, usePathname } from "../../../navigation";
import { useState } from "react";
import Image from "next/image";
import enFlag from "../../public/enFlag.png";
import ruFlag from "../../public/ru.png";
import esFlag from "../../public/es.png";
import zhFlag from "../../public/zh.png";

export default function LanguageChanger({ locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState(locale);

  const handleChange = (newLocale) => {
    setCurrentLocale(newLocale);
    router.push(pathname, { locale: newLocale });
  };

  console.log("language:", currentLocale);

  return (
    <div>
      <Image
        src={enFlag}
        width={20}
        heigh={15}
        alt="English"
        style={{ cursor: "pointer" }}
        onClick={() => handleChange("en")}
      />
      <Image
        src={ruFlag}
        width={20}
        heigh={15}
        alt="Русский"
        style={{ cursor: "pointer" }}
        onClick={() => handleChange("ru")}
      />
      <Image
        src={esFlag}
        width={20}
        heigh={15}
        alt="Español"
        style={{ cursor: "pointer" }}
        onClick={() => handleChange("es")}
      />
      <Image
        src={zhFlag}
        width={20}
        heigh={15}
        alt="中文"
        style={{ cursor: "pointer" }}
        onClick={() => handleChange("zh")}
      />
    </div>
  );
}
