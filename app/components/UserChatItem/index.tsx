import { Badge } from 'antd';
import Image from 'next/image';
import React from 'react';
import styles from './user-item.module.scss';


interface UserChatItemProps {
  chatId: string;
  chatName: string;
  userTag: string | null;
  lastMessage: string | null;
  createdAt: string;
  avatar: string;
}


const UserChatItem: React.FC<UserChatItemProps> = (props) => {
  return (
    <div className={styles.userItem}>
      <div className={styles.item}>
        <Image src={props.avatar} alt="avatar" width={60} height={60}/>
        <div className={styles.userText}>
          <span>{props.chatName}</span>
          <p>
            {props.lastMessage}
          </p>
        </div>
      </div>
      <span className={styles.sendedAt}>{props.createdAt}</span>
      <div style={{ position: 'absolute', right: '14px', top: '35px' }}>
        <Badge style={{ border: 'none' }} color="#00B2FF" count={0} />
      </div>
      <div className={styles.downLine}></div>
    </div>
  );
}

export default UserChatItem;
