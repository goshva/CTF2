'use client';

import NavigateSidebar from '@/components/NavigateSidebar';
import styles from './chat.module.scss';
import ChatSidebar from '@/components/ChatSidebar';
import HomeSidebar from '@/components/HomeSidebar';
import { useTranslations } from 'next-intl';


function Chat() {

  const t = useTranslations()

  return (
    <div className="container-fluid mt-[20px]">
      <div className="row">
        <div className="col-3">
          <HomeSidebar />
        </div>
        <div className="col-9">
          <ChatSidebar />
          <div className={styles.wrapper} style={{ borderRadius: '0 15px 15px 0' }}>
            <div className={styles.textCenter}>
              <div>{t('selectChat')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
