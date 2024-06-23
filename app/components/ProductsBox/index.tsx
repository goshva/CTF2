'use client'

import styles from './productBox.module.scss';
import ProductCard from '../ProductCard';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { Link } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { NextPage } from 'next';
import { IProduct } from '@/index';
import fakeData from './fakeData';
import { getFilters } from '@/redux/marketFilterSlice';
import { colorFilter, priceRangeFilter } from '@/lib/utils';
import { IFilters } from '@/index';

const ProductBox = () => {
  const filters = useSelector(getFilters);
  const renderCards = (productsData: IProduct[]) => {
    const cards: JSX.Element[] = productsData.filter((product) => priceRangeFilter(filters.minPrice, filters.maxPrice, product.price))
      .map((product: IProduct, index: number) => (<ProductCard key={index} product={product} />));

    return cards;
  };

  return (
    <div className={styles.container}>{renderCards(fakeData)}</div>
  );
};

export default ProductBox;