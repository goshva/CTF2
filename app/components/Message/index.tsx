import React from 'react';
import styles from './message.module.scss';
import { useTranslations } from "next-intl";

interface props {
  own?: boolean;
}

const Message: React.FC<props> = ({ own }) => {

  const t = useTranslations('translation')

  return (
    <div className={`${styles.message} ${own && styles.own}`}>
      <p>
        {t('chatGreeting')}
      </p>
      <span>16:50</span>
    </div>
  );
};

export default Message;
