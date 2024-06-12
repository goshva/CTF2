import { ReactNode } from 'react';
import Image from 'next/image';
import styles from './layout.module.scss';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import News from '@/components/News';

// import backgroundImage from '@/main-bg.png';
import backgroundImage from '../../public/background.jpg';
import UserInfo from '@/components/UserInfo';
import HomeSidebar from '@/components/HomeSidebar';

// import { StyleProvider } from '@ant-design/cssinjs';

const HomeLayout = ({ children }: { children: ReactNode }) => {
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
          <div className={styles.left_section}>
            <UserInfo />
            <HomeSidebar />
          </div>

          {/* тут динамическое */}
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
