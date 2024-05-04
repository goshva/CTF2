'use client';

import styles from './marketproduct.module.scss';

import productImage from './mock/Ak47-anubis.png';
import personIcon from '../../../../public/person.svg';

import Image from 'next/image';
import { ShoppingCart, Eye } from 'lucide-react';
import { FC } from 'react';

import { ICatalogProductPage } from '@/components';

const PRODUCT_DATA = {
  title: 'AK-47 | Легион Анубиса (Закалённое в боях)',
  subtitle: 'AK-47 | Legion of Anubis (Battle-Scarred)',
  category: 'Обычный',
  wear: 'BS - Закаленное в боях',
};

const MarketProductPage: FC<ICatalogProductPage> = ({ params }) => {
  const handleConnectSalesman = () => {
    console.log('connect salesman');
  };

  const handleAddCart = () => {
    console.log('add cart');
  };

  const handleViewInGame = () => {
    console.log('view in game');
  };

  return (
    <div className={styles.product}>
      <div className={styles.product__imageButtonsWrapper}>
        <div className={styles.product__imageWrapper}>
          <Image src={productImage} alt="product" />
        </div>
        <div className={styles.product__buttonsWrapper}>
          <button className={styles.product__buttonSalesman} onClick={handleConnectSalesman}>
            <Image src={personIcon} alt="person" />
            Связь с продавцом
          </button>
          <button className={styles.product__buttonCart} onClick={handleAddCart}>
            <ShoppingCart size={20} />
            Добавить в корзину
          </button>
        </div>
      </div>
      <div className={styles.product__infoWrapper}>
        <div className={styles.product__info}>
          <h3 className={styles.product__title}>{PRODUCT_DATA.title}</h3>
          <h4 className={styles.product__subtitle}>{PRODUCT_DATA.subtitle}</h4>
          <div className={styles.product__descriptionWrapper}>
            <div className={styles.product__category}>
              <p>Категория</p>
              <h4>{PRODUCT_DATA.category}</h4>
            </div>
            <div className={styles.product__wear}>
              <p>Износ</p>
              <h4>{PRODUCT_DATA.wear}</h4>
            </div>
          </div>
        </div>
        <button className={styles.product__buttonViewInGame} onClick={handleViewInGame}>
          <Eye size={20} /> Осмотреть в игре
        </button>
      </div>
    </div>
  );
};

export default MarketProductPage;
