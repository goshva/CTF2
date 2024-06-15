import styles from '../chat.module.scss';
import ChatRecomedation from '@/components/ChatRecomedation';
import Balance from '@/components/Balance';
import FriendsChat from '@/components/FriendsChat';
import ChatWindow from '@/components/ChatWindow/page';
import { Metadata } from 'next';

export const metadata: Metadata ={
  title:"Messages"
}

function Chat() {
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
          <div className='col-10'>
            <ChatWindow/>
          </div>
          <div className="col-2">
          <FriendsChat/>
        </div>
        </div>
    </div>
  );
}

export default Chat;
