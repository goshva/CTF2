'use client';

import styles from './chat.module.scss';
import ChatSidebar from '@/components/ChatSidebar';
import HomeSidebar from '@/components/HomeSidebar';

function Chat() {
  return (
    <div className="container-fluid mt-[60px]">
      <div className="row">
        <div className="col-2">{/* <HomeSidebar /> */}</div>
        <div className="col-4">
          <div className={styles.wrapper}>
            <ChatSidebar />
            <div className={styles.textCenter}>Choose chat for start!</div>
          </div>
        </div>
        <div className="col-4">
          <div className={styles.friendsBlock}>
            <div className={styles.webTitle}>
              <h2>
                FRIENDS
                <span className={styles.friendsValue}>365</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
