import React from 'react';
import styles from './notification.module.scss';
import PostPhoto from '@/first.png';
import Image from 'next/image';

const Notification = () => {
  return (
    <div className={styles.message}>
      <div className={styles.content}>
        <div>
          <strong>@Username</strong> liked your post <span>19h ago</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={PostPhoto} height={100} width={100} alt='post-photo'/>
      </div>
    </div>
  );
};

export default Notification;
