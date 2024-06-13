import Image from 'next/image';
import React from 'react';
import styles from './user-item.module.scss';




const UserChatItem = () => {
  return (
    <div className={styles.userItem}>
      <div className={styles.item}>
        <Image src='/avatar.png' alt="avatar" width={60} height={60}/>
      </div>
    </div>
  );
}

export default UserChatItem;
