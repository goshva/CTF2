'use client';

import { FC, useState, useEffect } from 'react';
import styles from './sidebarChat.module.scss';
import Image from 'next/image';
import UserChatItem from '../UserChatItem';
import loopIcon from '../../../public/loop-chat-icon.svg';
import { useDispatch } from 'react-redux';
import { setCurrentChatId } from '../../redux';
// import 'antd/dist/antd.css'; временно удалено
// import { StyleProvider } from '@ant-design/cssinjs';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import {socket} from '../../(root)/chat/socket'
import {useGetUserChatsQuery} from '../../redux'


const ChatSidebar: FC = () => {
  const dispatch = useDispatch();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [chats, setChats] = useState<any[]>([])

  const jwtToken = Cookies.get('jwt');
  //@ts-ignore
  const decodedToken: IUser = jwt.decode(jwtToken);
  //@ts-ignore
  const {data} = useGetUserChatsQuery(decodedToken?.id)

  interface sender  {
    id: number,
    name: string,
    UT: string,
    avatar: string,
    about: string,
    registeredAt: Date,
    role: string,
    status: string
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

  const handleChatClick = (chatId: string) => {
    dispatch(setCurrentChatId(chatId));
  };

  useEffect(() => {
    if (data) {
      setChats(chats);

      socket.emit('join room', chats.map((chat: Chat) => chat.id));
      
      const modifiedChats = data.chats.map((chat: Chat) => ({
        chatId: chat.id,
        user: chat.users.find((user: IUser) => user.id !== decodedToken?.id)?.name || 'Unknown',
        avatar: chat.users.find((user: IUser) => user.id !== decodedToken?.id)?.avatar || null,
        lastMessage: chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : null,
        createdAt: chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].createdAt : null
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
          {chats.map((chat, index) => (
            <UserChatItem  
             key={index}
             onClick={()=>handleChatClick(chat.chatId)}
             avatar= {chat.avatar}
             createdAt = {chat.createdAt}
             chatId={chat.chatId}
             chatName={chat.user} 
             userTag = {chat.userTag}
             lastMessage = {chat.lastMessage} />
          ))}
          </div>
      </div>
    </aside>
  );
};

export default ChatSidebar;
