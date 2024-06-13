import React from 'react';
import styles from './message.module.scss';
import Image from 'next/image';

interface MessageProps {
  own?: boolean;
}

const Message: React.FC<MessageProps> = ({ own = false }) => {
  return (
    <div className={`${styles.message} ${own ? styles.own : styles.theirs}`}>
      {own ? (
        <>
          <Image width={50} height={50} src="/avatar.png" alt="avatar" />
          <p>Lorem Ipsum is simply dummy text of the printing and </p>
        </>
      ) : (
        <>
          <Image width={50} height={50} src="/avatar.png" alt="avatar" />
          <p>Lorem Ipsum is simply dummy text of the printing and </p>
        </>
      )}
    </div>
  );
};

export default Message;
