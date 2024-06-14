'use client';

import React from 'react';
import styles from './notifications.module.scss';
import Notification from '@/components/Notification';
import HomeSidebar from '@/components/HomeSidebar';

function Notifications() {
  return (
    <div className="container-fluid mt-[20px]">
      <div className="row">
        <div className="col-3">
          <HomeSidebar />
        </div>
        <div className="col-8">
          <div className={styles.wrapper}>
            <div className={styles.chat}>
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
