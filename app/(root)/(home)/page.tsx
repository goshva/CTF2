import { Metadata, NextPage } from 'next';
import styles from './home.module.scss';
import News from '@/components/News';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Home',
};

const HomePage: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className="flex flex-col">
        <News />
        <HomeContent />
      </div>
    </div>
  );
};

export default HomePage;
