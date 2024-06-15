import React from 'react';
import styles from './message.module.scss';
import Image from 'next/image';

interface MessageProps {
  messageValue: string;
  own?: boolean;
  avatar: string;
}

const Message: React.FC<MessageProps> = ({ messageValue, own = false, avatar  }) => {
  return (
    <div className={`${styles.message} ${own ? styles.own : styles.theirs}`}>
      {own ? (
        <>
          <Image className={styles.avatar} width={50} height={50} src={avatar} alt="avatar" />
          <p>{messageValue}</p>
        </>
      ) : (
        <>
          <Image className={styles.avatar} width={50} height={50} src={avatar} alt="avatar" />
          <p>{messageValue}</p>
        </>
      )}
    </div>
  );
};

export default Message;
