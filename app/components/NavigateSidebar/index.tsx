'use client';

import { FC, useState, useEffect } from 'react';
import styles from './sidebarChat.module.scss';
import { useTranslations } from 'next-intl';

const NavigateSidebar = () => {

  const t = useTranslations()

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
