'use client';
import * as React from 'react';
import { useRef } from 'react';
import styles from './recomendation.module.scss';
import Image from 'next/image';
import LeftArrow from '@/left-arrow.svg';
import RightArrow from '@/right-arrow.svg';
import RecomendationItem from '../RecomendationItem';

const ChatRecomedation = () => {
  const itemsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollBy({
        left: -120, // Регулируйте это значение в зависимости от размера элементов
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollBy({
        left: 120, // Регулируйте это значение в зависимости от размера элементов
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.RecomendationCard}>
      <div className={styles.webTitle}>
        <h2>FRIENDS</h2>
      </div>
      <button className={styles.leftArrow} onClick={scrollLeft}>
        <Image src={LeftArrow} alt="arrow icon" />
      </button>
      <div className={styles.items} ref={itemsRef}>
        <RecomendationItem />
        <RecomendationItem />
        <RecomendationItem />
        <RecomendationItem />
        <RecomendationItem />
        <RecomendationItem />
        <RecomendationItem />
        <RecomendationItem />
        <RecomendationItem />
        <RecomendationItem />
      </div>
      <button className={styles.rightArrow} onClick={scrollRight}>
        <Image src={RightArrow} alt="arrow icon" />
      </button>
    </div>
  );
};

export default ChatRecomedation;
