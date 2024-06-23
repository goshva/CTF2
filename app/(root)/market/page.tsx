import React, { useEffect, useState } from 'react';
import styles from './market.module.scss';
import {  Metadata, NextPage } from 'next';
import index from '@/components/ProductCard';
import { IProduct } from '@/index';
import iconCart from '../../../public/Icons-basket.svg';
import iconPrice from '../../../public/icons-price.svg';
import UserInfo from '@/components/UserInfo';
import MarketHeader from '@/components/MarketHeader';
import Item from 'antd/es/list/Item';
import { IFilters } from '@/index';
import ProductBox from '@/components/ProductsBox';
// import { useGetAllProductsQuery } from '@/redux/api/productsApi';

export const metadata: Metadata = {
  title: 'Market',
};



const MarketPage: NextPage = () => {
  return (
    <section className={styles.mainContainer}>
      <MarketHeader />
      <ProductBox />
    </section>
  );
};

export default MarketPage;
