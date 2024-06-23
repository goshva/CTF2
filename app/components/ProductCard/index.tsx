"use client"

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import styles from './card.module.scss';
import Link from 'next/link';
import { IProduct } from '@/index';
import iconCart from '../../../public/Icons-basket.svg';
import iconPrice from '../../../public/icons-price.svg';
import { addProduct } from '@/redux/cartSlice'

const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (productItem: IProduct) => {
    dispatch(addProduct(productItem));
  }

  return (
    <div className={styles.card}>
      <div>
        <Link href={`/market/${product.id}`}>
          <Image
            className={styles.productImg}
            src={product.image}
            alt={product.alt}
            width={200}
            height={200}
          />
        </Link>
      </div>

      <div className={styles.title}>
        <h3>{product.name}</h3>
      </div>
      <div className={styles.price}>
        <span>{product.price}</span>
        <Image src={iconPrice} alt="iconPrice" width={20} height={20} />
      </div>

      <div className={styles.btnBorder}>
        <button onClick={() => handleAddToCart(product)} type="button" className={styles.buying}>
          <Image src={iconCart} alt="icon-basket" width={29} height={29} />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
