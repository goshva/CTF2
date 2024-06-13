import ChatRecomedation from '@/components/ChatRecomedation';
import styles from './chat.module.scss';
import ChatSidebar from '@/components/ChatSidebar';
import Balance from '@/components/Balance';
import { Metadata } from 'next';
import FriendsChat from '@/components/FriendsChat';


export const metadata: Metadata ={
  title:"Messages"
}
export default async function Chat() {
  return (
    <div className={styles.container}>
      <div className="row">
          <div className="col-10">
            <ChatRecomedation />
          </div>
          <div className="col-2">
            <Balance />
          </div>
        </div>
      <div className="row">
        <div className="col-10">
          <div className={styles.wrapper}>
            <ChatSidebar />
            <div className={styles.textCenter}>Choose chat for start!</div>
          </div>
        </div>
        <div className="col-2">
          <FriendsChat/>
        </div>
      </div>
    </div>
  );
}

