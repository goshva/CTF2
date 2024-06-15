import React from 'react';
import Image from 'next/image';
import styles from './market.module.scss';
import { Link } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Metadata, NextPage } from 'next';
import index from '@/components/ProductCard';
import MarketSidebar from '@/components/MarketSidebar';
import { IProduct } from '@/index';
import iconCart from '../../../public/Icons-basket.svg';
import iconPrice from '../../../public/icons-price.svg';
import UserInfo from '@/components/UserInfo';
import MarketHeader from '@/components/MarketHeader';
import fakeData from './fakeData';

export const metadata: Metadata = {
  title: 'Market',
};

//Пример data для карточек продуктов
const products = [
  {
    image: '/anubis.png',
    alt: 'Product 1',
    name: 'AK-47',
    price: '454,98',
    sellers: [
      {
        image: '/box.svg',
        alt: '',
        count: 16,
      },
    ],
  },
];

const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className={styles.card}>
      <div>
        <Image
          className={styles.productImg}
          src={product.image}
          alt={product.alt}
          width={200}
          height={200}
        />
      </div>

      <div className={styles.title}>
        <h3>{product.name}</h3>
      </div>

      <div className={styles.price}>
        <span>{product.price}</span>
        <Image src={iconPrice} alt="iconPrice" width={20} height={20} />
      </div>

      <button type="button" className={styles.buying}>
        <Image src={iconCart} alt="icon-basket" width={29} height={29} />
        <p>Add to cart</p>
      </button>
    </div>
  );
};
const MarketPage: NextPage = () => {
  const renderCards = (data: IProduct[]) => {
    const cards: JSX.Element[] = data.map((product: IProduct, index: number) => (<ProductCard key={index} product={product} />));

    return cards;
  };

  return (
    <div className={styles.mainContainer}>
      <div className="flex">
        <div className={styles.aside}>
        </div>
        <section className="">
          <MarketHeader />
          <div className={styles.textCenter}>
            <div className={styles.container}>{renderCards(fakeData)}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MarketPage;
