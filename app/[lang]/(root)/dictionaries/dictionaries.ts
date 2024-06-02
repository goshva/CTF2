import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  ru: () => import("./ru.json").then((module) => module.default),
  es: () => import("./es.json").then((module) => module.default),
  zh: () => import("./zh.json").then((module) => module.default),
};

export const getDictionary = async (
  locale: "en" | "ru" | "es" | "zh"
): Promise<any> => {
  if (!dictionaries[locale]) {
    throw new Error(`Locale ${locale} not supported`);
  }
  return dictionaries[locale]();
};
