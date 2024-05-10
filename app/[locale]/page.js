import { Link } from "../../navigation";
import { useTranslations } from "next-intl";
import LanguageChanger from "../components/LanguageChanger/LanguageChanger";
import HomeLayout from "../(root)/layout";

export default function Home({ params: { locale } }) {
  const t = useTranslations();

  const userName = "David";

  return (
    <>
      <LanguageChanger />
      <HomeLayout />
    </>
  );
}
