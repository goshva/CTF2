'use client';

import { FC, useState, useEffect } from 'react';
import styles from './sidebarChat.module.scss';
import { useTranslation } from 'react-i18next';

const NavigateSidebar = () => {

  const { t } = useTranslation()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.middleSide}>
        <div className={styles.chatSelect}>
          <h1 className={styles.routes}>{t('home')}</h1><br />
          <h1 className={styles.routes}>{t('explore')}</h1><br />
          <h1 className={styles.routes}>{t('notifications')}</h1><br />
          <h1 className={styles.routes}>{t('messages')}</h1><br />
          <h1 className={styles.routes}>{t('bookmarks')}</h1><br />
          <h1 className={styles.routes}>{t('home')}</h1><br />
        </div>
      </div>
    </aside>
  );
};

export default NavigateSidebar;
