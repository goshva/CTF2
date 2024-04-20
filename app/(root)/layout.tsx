import { ReactNode } from "react";
import Image from "next/image";
import styles from "./layout.module.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";

import backgroundImage from "@/main-bg.png";
import ProfileBadge from "@/components/ProfileBadge";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="bgWrap">
        <Image
          src={backgroundImage}
          alt="background Image"
          fill
          priority
          placeholder="blur"
          quality={100}
          objectFit="cover"
        />
      </div>
      <Header />
      <div className={styles.wrapper}>
        <ProfileBadge />
        <Sidebar />
        <News />
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
