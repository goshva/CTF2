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
      3
        </div>
        <div className="col-4">  
        <ChatSidebar/>
        <div className={styles.wrapper}>
          <div className={styles.textCenter}>
          </div>
          </div>
        </div>
        <div className="col-4">     
      3
        </div>
      </div>
    </div>
  );
}

export default Chat;
