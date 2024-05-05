'use client';

import { FC, useState, useEffect } from 'react';
import styles from './sidebarChat.module.scss';

const NavigateSidebar = () => {

 

  return (
    <aside className={styles.sidebar}>
      <div className={styles.middleSide}>
          <div className={styles.chatSelect}>
          <h1 className={styles.routes}>Home</h1><br/>
          <h1 className={styles.routes}>Explore</h1><br/>
          <h1 className={styles.routes}>Notifications</h1><br/>
          <h1 className={styles.routes}>Messages</h1><br/>
          <h1 className={styles.routes}>Bookmarks</h1><br/>
          <h1 className={styles.routes}>Home</h1><br/>
          </div>
      </div>
    </aside>
  );
};

export default NavigateSidebar;
