// components/Message.js
import React from 'react';
import styles from './message.module.scss';

interface MessageProps {
  messageValue: string;
  userName: string;
  createdAt: Date;
  own?: boolean;
}

const Message: React.FC<MessageProps> = ({ messageValue, userName, createdAt, own = false }) => {
  return (
    <div className={`${styles.message} ${own && styles.own}`}>
      <h1>
        <strong>{userName}</strong>
      </h1>
      <p>{messageValue}</p>
      <br />
      <span>{createdAt.toLocaleString()}</span>
    </div>
  );
};

export default Message;
