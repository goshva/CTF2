'use client';

import styles from './chat.module.scss';
import ChatSidebar from '@/components/ChatSidebar';


function Chat() {
  
  return (
    <div className="container-fluid mt-[20px]">
      <div className="row">
        <div className="col-3">
          <ChatSidebar />
        </div>
        <div className="col-8">
        <div className={styles.wrapper} style={{height: '600px' }}>
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
