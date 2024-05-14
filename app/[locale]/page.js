import { Link } from "../../navigation";
import { useTranslations } from "next-intl";
import LanguageChanger from "../components/LanguageChanger/LanguageChanger";
import HomeLayout from "../(root)/layout";
import Sidebar from "../components/Sidebar/index";
import HomePage from "@/(root)/(home)/page";

export default function Home({ params: { locale } }) {
  const t = useTranslations();

  return (
    <>
      <LanguageChanger />
      <HomeLayout />
    </>
  );
}
