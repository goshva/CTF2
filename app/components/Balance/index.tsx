'use client';
import * as React from 'react';
import styles from './balance.module.scss';

const Balance = () => {
  return (
        <div className={styles.balanceCard}>
        <div className={styles.webTitle}>
          <div>
            <h2>Balance</h2>
            </div>
             <div>14.256 ₽</div>
          </div>
        </div>
  );
};

export default Balance;
