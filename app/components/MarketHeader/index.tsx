'use client'

import styles from './marketHeader.module.scss';
import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Cart from '../Cart/index';

const MarketHeader: FC = () => {

  return (
    <section className={styles.mainContainer}>
      <nav className={styles.navBox}>
        <ul className={styles.marketNav}>
          <div className={clsx(styles.linkBorder, styles.linkBorder__active)}>
            <li className={clsx(styles.navItem, styles.navItem__active)}>
              <Link href="#">Market</Link>
            </li>
          </div>
          <div className={styles.linkBorder}>
            <li className={styles.navItem}>
              <Link href="#">Sell skin</Link>
            </li>
          </div>
          <div className={styles.linkBorder}>
            <li className={styles.navItem}>
              <Link href="#">Story</Link>
            </li>
          </div>
        </ul>
      </nav>
      <Cart />
    </section>
  );
};

export default MarketHeader;
