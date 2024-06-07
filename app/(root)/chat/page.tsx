'use client';

import styles from './chat.module.scss';
import ChatSidebar from '@/components/ChatSidebar';


function Chat() {
  
  return (
    <div className="container-fluid mt-[20px]">
      <div className="row">
      <div className="col-4">     
        </div>
        <div className="col-4">  
        <div className={styles.wrapper}>
        <ChatSidebar/>
          <div className={styles.textCenter}>
            Choose chat for start!
          </div>
          </div>
        </div>
        <div className="col-4">     
        <div className={styles.friendsBlock}>
        <div className={styles.friendsText}>
          <strong>FRIENDS</strong>
          <span className={styles.friendsValue}>365</span>
          </div>
              <div className={styles.downLine}></div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Chat;
