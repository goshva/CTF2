import React from 'react';
import styles from './message.module.scss';

interface props {
  own?: boolean;
}

const Message: React.FC<props> = ({ own }) => {
  return (
    <div className={`${styles.message} ${own && styles.own}`}>
      <p>
        Привет, друг! Мне бы хотелось познакомиться с твоими знакомыми, которые занимаются звуком.
        Мы ищем профессионалов в этой области, и я уверен, что знакомые твои могут нам помочь. Если
        у тебя есть кто-то, кто работает в этой сфере, я бы очень обрадовался, если бы ты
      </p><br/>
      <span>16:50</span>
    </div>
  );
};

export default Message;
