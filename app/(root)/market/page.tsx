import React from 'react';
import Image from 'next/image';
import styles from './market.module.scss';

import { NextPage } from 'next';



//Пример data для карточек продуктов
const products = [
    {
        image: '/anubis.png',
        alt: 'Product 1',
        name: 'AK-47 | Легион Анубиса (Закалённое в боях)',
        price: '454,98 ₽',
        sellers: [
        {
            image: '/box.svg',
            alt: '',
            count: 16,
        },
        ],
    }
];

    const ProductCard: React.FC<{ product: typeof products[0] }> = ({ product }) => {
    return (
        <div className={styles.card}>
        <div className={styles.titleCard}>
          <Image src={product.image} alt={product.alt} width={200} height={200} />
          <div className={styles.title}>
            <h3>{product.name}</h3>
          </div>
        </div>
  
        <div className={styles.botCard}>
          <div className={styles.price}>
            <p>{product.price}</p>
          </div>
  
          <div className={styles.sellers}>
            {product.sellers.map((seller, index) => (
              <div key={index} className={styles.seller}>
                    <Image src={seller.image} alt={seller.alt} width={20} height={20} />
                    <p>{seller.count}</p>
                </div>
                
              
            ))}
          </div>
  
          <div className={styles.link}>
            {/* <Link href="/market" className={styles.cartLink}>
                <ShoppingCart size={14} />
            </Link> */}
          </div>
        </div>
      </div>
    );
    };
const MarketPage: NextPage = () => {
    const renderCards = () => {
        const cards: JSX.Element[] = [];
        for (let i = 0; i < 20; i++) {
        cards.push(<ProductCard key={i} product={products[i % products.length]} />);
        }
        return cards;
    };

    return (
        <div className={styles.container}>
        {renderCards()}
        </div>
    );
};

export default MarketPage;