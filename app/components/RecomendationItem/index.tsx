import Image from 'next/image';
import React from 'react';
import styles from './RecomendationItem.module.scss';



const RecomendationItem  = () => {
  return (
    <div className={styles.friendItem}>
        <div className={styles.avatar}>
        <Image
              width={50}
              height={50}
              src="/avatar.png"
              alt="avatar"
            />
        </div>
      <div>User name</div>
      </div>
  );
}

export default RecomendationItem;
