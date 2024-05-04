'use client';

import { FC, useState, useEffect } from 'react';
import styles from './sidebarChat.module.scss';
import Image from 'next/image';
import UserChatItem from '../UserChatItem';
import loopIcon from '../../../public/loop-chat-icon.svg';
import { useSelector } from 'react-redux';
// import 'antd/dist/antd.css'; временно удалено
// import { StyleProvider } from '@ant-design/cssinjs';
import { socket } from '../../(root)/chat/socket';
import { useGetUserChatsQuery } from '../../redux';
import Link from 'next/link';
import steamIcon from '@/steam-icon.svg';
import tgIcon from '@/Telegram.png';
import vcIcon from '@/Vk.png';
import youtubeIcon from '@/youtube.png';

const ChatSidebar: FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [chats, setChats] = useState<any[]>([]);

  //@ts-ignore
  const decodedToken = useSelector((state) => state.auth.decodedToken);
  //@ts-ignore
  const { data, isLoading } = useGetUserChatsQuery(decodedToken?.id);

  interface sender {
    id: number;
    name: string;
    UT: string;
    avatar: string;
    about: string;
    registeredAt: Date;
    role: string;
    status: string;
  }

  interface Message {
    id: number;
    text: string;
    senderId: number;
    chatId: string;
    sender: sender;
    createdAt: Date;
  }

  interface IUser {
    id: number;
    name: string;
    UT: string | null;
    avatar: string;
  }

  interface Chat {
    id: string;
    users: IUser[];
    messages: Message[];
  }

  useEffect(() => {
    if (data) {
      socket.emit(
        'join room',
        data.chats.map((chat: Chat) => chat.id),
      );

      const modifiedChats = data.chats.map((chat: Chat) => ({
        chatId: chat.id,
        user: chat.users.find((user: IUser) => user.id !== decodedToken?.id)?.name || 'Unknown',
        avatar: chat.users.find((user: IUser) => user.id !== decodedToken?.id)?.avatar || null,
        lastMessage: chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : null,
        createdAt:
          chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].createdAt : null,
      }));
      setChats(modifiedChats);
    }
  }, [data]);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.middleSide}>
        <div className={styles.chatSelect}>
          <div className={styles.findUser}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Image src={loopIcon} alt="loop" />
              <input type="text" placeholder="Найти" />
            </div>
            <div className={styles.downLine}></div>
          </div>
          {isLoading ? (
            <div className={styles.textCenter}>Loading...</div>
          ) : (
            chats.map((chat, index) => (
              <Link href={`/chat/${chat.chatId}`} key={index}>
                <UserChatItem
                  avatar={chat.avatar}
                  createdAt={chat.createdAt}
                  chatId={chat.chatId}
                  chatName={chat.user}
                  userTag={chat.userTag}
                  lastMessage={chat.lastMessage}
                />
              </Link>
            ))
          )}
        </div>
        <footer className={styles.footer}>
          <article className={styles.webpage_text}>
            <span>@2024 COUNTER.TRADE.ru</span>
          </article>
          <section className={styles.links}>
            <div className={styles.social_icons}>
              <Image src={steamIcon} alt="steamIcon" />
              <Image src={tgIcon} alt="tgIcon" />
              <Image src={vcIcon} alt="vcIcon" />
              <Image src={youtubeIcon} alt="youtubeIcon" />
            </div>
            <ul className={styles.routes_footer}>
              <Link href="#!">Связаться с нами</Link>
              <Link href="#!">Правила</Link>
              <Link href="#!">Условия</Link>
            </ul>
          </section>
        </footer>
      </div>
    </aside>
  );
};

export default ChatSidebar;
