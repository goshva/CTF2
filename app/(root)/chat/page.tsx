'use client';

import NavigateSidebar from '@/components/NavigateSidebar';
import styles from './chat.module.scss';
import ChatSidebar from '@/components/ChatSidebar';
import HomeSidebar from '@/components/HomeSidebar';


function Chat() {
  
  return (
    <div className="container-fluid mt-[20px]">
      <div className="row">
      <div className="col-3">
          <HomeSidebar/>
        </div>
        <div className="col-9">
          <ChatSidebar />
        <div className={styles.wrapper} style={{borderRadius:'0 15px 15px 0'}}>
          <div className={styles.textCenter}>
            <div>Select chat for start</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
