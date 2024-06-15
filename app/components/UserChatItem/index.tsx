import Image from 'next/image';
import React from 'react';
import styles from './user-item.module.scss';



interface UserChatItemProps {
  chatId: string;
  avatar: string;
}

const UserChatItem: React.FC<UserChatItemProps> = (props) => {
  return (
    <div className={styles.userItem}>
      <div className={styles.item}>
        <Image src={props.avatar} alt="avatar" width={60} height={60}/>
      </div>
    </div>
  );
}

export default UserChatItem;
