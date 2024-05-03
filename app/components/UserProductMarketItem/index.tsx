import Image from 'next/image';
import styles from './userproductitem.module.scss';
import avatar from '../../../public/avatar.png';
import { ShoppingCart } from 'lucide-react';

function UserProductMarketItem() {
  const random = Math.random();

  const handleAddToCart = () => {
    console.log('add to cart');
  };
  
  return (
    <div className={styles.user}>
      <div className={styles.user__imageFloatWrapper}>
        <Image className={styles.user__image} src={avatar} alt="avatar" />
        <div className={styles.user__float}>
          <div
            className={`${styles.user__online} ${
              random > 0.5 ? styles.user__online_active : ''
            }`}
          ></div>
          <p>{`Float: ${random.toFixed(4)}`}</p>
        </div>
      </div>
      <div className={styles.user__cartWrapper}>
        <p className={styles.user__cost}>{`${4234.3}`} ₽</p>
        <button className={styles.user__buttonCart} onClick={handleAddToCart}>
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
}

export default UserProductMarketItem;
