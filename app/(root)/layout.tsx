import { ReactNode } from 'react';
import Image from 'next/image';
import styles from './layout.module.scss';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import News from '@/components/News';

import backgroundImage from '@/main-bg.png';
import UserInfo from '@/components/UserInfo';

// import { StyleProvider } from '@ant-design/cssinjs';

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
        />
      </div>
      {/* <div className={styles.center}> */}
      <div className={styles.wrapper}>
        <Header />
        <News />
        <UserInfo />

        <main className={styles.main}>{children}</main>
      </div>
      {/* </div> */}
    </>
  );
};

export default HomeLayout;
