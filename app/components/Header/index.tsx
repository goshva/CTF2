import { FC } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, ShoppingCart } from 'lucide-react';

// иконки роутов
// import HomeIcon from '../../public/home.svg';
import MessageIcon from '../../../public/message.svg';

import logo from '@/logo.svg';
import LanguageChanger from '../LanguageChanger/LanguageChanger';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className="flex ml-5">
        <Link href={'/'}>
          <Image src={logo} alt="logo" width={260} height={30} quality={100} />
        </Link>

        <Link href={'/market'} className={styles.cartLink}>
          <ShoppingCart size={36} />
        </Link>
        {/* <Link href={"/chat"} className={styles.cartLink}>
          <Image
            src={MessageIcon}
            alt="message image"
            width={36}
            height={36}
            quality={100}
          />
        </Link> */}
      </div>
      <div className={styles.globe_icon}>
        {/* <Globe /> */}
        <LanguageChanger />
      </div>
    </header>
  );
};

export default Header;
