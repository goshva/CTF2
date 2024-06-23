import { ReactNode } from "react";
import backgroundImage from "../../../../public/background.jpg";
import Image from "next/image";
import Header from "@/components/Header";
import styles from "../../layout.module.scss";
const GunCardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="bgWrap">
        <Image
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          priority
          placeholder="blur"
          quality={100}
        />
      </div>

      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* только эти 2 компонента остаються */}
          {/* тут динамическое */}
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </>
  );
};

export default GunCardLayout;
