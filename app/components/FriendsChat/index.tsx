'use client'

import React, { useState } from 'react';
import styles from './FriendsChat.module.scss';
import FriendsChatItem from '../FriendsChatItem';

const FriendsChat = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.friendsBlock}>
      <div className={styles.webTitle} onClick={toggleVisibility}>
        <h2>
          FRIENDS
          <span className={styles.friendsValue}>365</span>
        </h2>
      </div>
      <div className={`${styles.items} ${isVisible ? styles.visible : styles.hidden}`}>
        <FriendsChatItem />
        <FriendsChatItem />
        <FriendsChatItem />
        <FriendsChatItem />
        <FriendsChatItem />
        <FriendsChatItem />
      </div>
    </div>
  );
}

export default FriendsChat;
