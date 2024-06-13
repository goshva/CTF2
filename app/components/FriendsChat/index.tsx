import React from 'react';
import styles from './FriendsChat.module.scss';
import FriendsChatItem from '../FriendsChatItem';




const FriendsChat  = () => {
  return (
    <div className={styles.friendsBlock}>
            <div className={styles.webTitle}>
              <h2>
                FRIENDS
                <span className={styles.friendsValue}>365</span>
              </h2>
            </div>
            <div className={styles.items}>
            <FriendsChatItem/>
            <FriendsChatItem/>
            <FriendsChatItem/>
            <FriendsChatItem/>
            <FriendsChatItem/>
            <FriendsChatItem/>
            </div>
          </div>

  );
}

export default FriendsChat;
