import ChatRecomedation from '@/components/ChatRecomedation';
import styles from './chat.module.scss';
import ChatSidebar from '@/components/ChatSidebar';
import Balance from '@/components/Balance';
import { Metadata } from 'next';
import FriendsChat from '@/components/FriendsChat';
import Cart from '@/components/Cart';


export const metadata: Metadata ={
  title:"Messages"
}
function Chat() {
  return (
    <div className={styles.container}>
      <div className="row">
          <div className="col-9">
            <ChatRecomedation />
          </div>
          <div className={`${styles.cart} col-3`}>
            <Cart />
          </div>
        </div>
      <div className="row">
        <div className="col-8">
          <div className={styles.wrapper}>
            <ChatSidebar />
            <div className={styles.textCenter}>Choose chat for start!</div>
          </div>
        </div>
        <div className="col-4">
          <FriendsChat/>
        </div>
      </div>
    </div>
  );
}

export default Chat;