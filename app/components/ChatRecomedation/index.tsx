'use client';
import * as React from 'react';
import styles from './recomendation.module.scss';
import Image from 'next/image';
import LeftArrow from '@/left-arrow.svg';
import RightArrow from '@/right-arrow.svg';

const ChatRecomedation =() => {

  return (
        <div className={styles.RecomendationCard}>
        <div className={styles.webTitle}>
            <h2>FRIENDS</h2>
          </div>
          <button className={styles.leftArrow}>
            <Image src={LeftArrow} alt="arrow icon" />
          </button>
          <button className={styles.rightArrow}>
            <Image src={RightArrow} alt="arrow icon" />
          </button>
        </div>
  );
};

export default ChatRecomedation;
