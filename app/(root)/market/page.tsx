'use client'

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import styles from './market.module.scss';
import { Link } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Metadata, NextPage } from 'next';
import index from '@/components/ProductCard';
import { IProduct } from '@/index';
import iconCart from '../../../public/Icons-basket.svg';
import iconPrice from '../../../public/icons-price.svg';
import UserInfo from '@/components/UserInfo';
import MarketHeader from '@/components/MarketHeader';
import fakeData from './fakeData';
import { getFilters } from '@/redux/marketFilterSlice'
import { colorFilter, priceRangeFilter} from '@/lib/utils';
import Item from 'antd/es/list/Item';
import { IFilters } from '@/index';
// import { useGetAllProductsQuery } from '@/redux/api/productsApi';

const metadata: Metadata = {
  title: 'Market',
};

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

      <div className={styles.btnBorder}>
        <button type="button" className={styles.buying}>
          <Image src={iconCart} alt="icon-basket" width={29} height={29} />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};
const MarketPage: NextPage = () => {
  // const { data = [] } = useGetAllProductsQuery();
  const [filters, setFilters] = useState<IFilters>({
    minPrice: 0,
    maxPrice: 2000,
    about15min: false,
    instantly: false,
    colors: [],
  });
  const stateFilters = useSelector(getFilters)

  useEffect(() => {
    setFilters(stateFilters);
  }, [stateFilters]);

  const renderCards = (productsData: IProduct[]) => {
    const cards: JSX.Element[] = productsData.filter((product) => priceRangeFilter(filters.minPrice, filters.maxPrice, product.price))
      .map((product: IProduct, index: number) => (<ProductCard key={index} product={product} />));

    return cards;
  };

  return (
    <section className={styles.mainContainer}>
      <MarketHeader />
      <div className={styles.textCenter}>
        <div className={styles.container}>{renderCards(fakeData)}</div>
      </div>
    </section>
  );
};

export default MarketPage;
