'use client';

import NavigateSidebar from '@/components/NavigateSidebar';
import styles from './chat.module.scss';
import ChatSidebar from '@/components/ChatSidebar';
import HomeSidebar from '@/components/HomeSidebar';


function Chat() {
  
  return (
    <div className="container-fluid mt-[20px]">
      <div className="row">
      <div className="col-4">     
        </div>
        <div className="col-4">  
        <ChatSidebar/>
        <div className={styles.wrapper}>
          <div className={styles.textCenter}>
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
