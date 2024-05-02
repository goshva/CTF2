'use client';

import NavigateSidebar from '@/components/NavigateSidebar';
import styles from './chat.module.scss';
import ChatSidebar from '@/components/ChatSidebar';


function Chat() {
  
  return (
    <div className="container-fluid mt-[20px]">
      <div className="row">
        <div className="col-3">
          <NavigateSidebar/>
        </div>
        <div className="col-2">
          <ChatSidebar />
        </div>
        <div className="col-6">
        <div className={styles.wrapper} style={{height: '580px', borderRadius:'0 15px 15px 0'}}>
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
