import Image from 'next/image';
import React from 'react';
import styles from './FriendsChatItem.module.scss';
import messageIcon from '../../../public/message.svg';



const FriendsChatItem  = () => {
  return (
    <div className={styles.friendItem}>
      <div className={styles.item}>
        <div>
      <Image
              width={50}
              height={50}
              src="/avatar.png"
              alt="avatar"
            />
        </div>
      <div>User name</div>
      <div><Image src={messageIcon} alt="messageIcon" /></div>
      </div>
    </div>

  );
}

export default FriendsChatItem;
