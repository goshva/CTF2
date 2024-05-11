'use client';

import React, { useEffect, useState, FormEvent, useRef } from 'react';
import styles from '../chat.module.scss';
import loopIcon from '../../../../public/loop-chat-icon.svg';
import menuIcon from '../../../../public/chat-menu.svg';
import Image from 'next/image';

// иконки
import emojiIcon from '../../../../public/smile-emoji.svg';
import clipIcon from '../../../../public/clip.svg';
import videoAddIcon from '../../../../public/video-add.svg';
import fileAddIcon from '../../../../public/add-file.svg';
import photoAddIcon from '../../../../public/add-photo.svg';
import drawerIcon from '../../../../public/drawer.svg';
import avatar from '../../../../public/avatar.png';
import Message from '@/components/Message';
import ChatSidebar from '@/components/ChatSidebar';
import { useSelector } from 'react-redux';
import { socket } from '../socket';
import { useParams } from 'next/navigation';
import { useGetChatMessagesQuery } from '@/redux';
import NavigateSidebar from '@/components/NavigateSidebar';
import HomeSidebar from '@/components/HomeSidebar';


function Chat() {
  const chatRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState('');
  const [openClip, setClip] = useState(false);
  const [openMenu, setMenu] = useState(false);
  const [AllMessages, setAllMessages] = useState<Message[]>([]);

  interface User {
    id: string;
    name: string;
    UT: string;
    avatar: string;
    about: string;
    registeredAt: Date;
    role: string;
    status: string;
  }

  //@ts-ignore
  const decodedToken = useSelector(state => state.auth.decodedToken);

  const params = useParams()
  const chatId = String(params.id)
  const {data, isLoading} = useGetChatMessagesQuery(chatId)
  const otherUsers = data?.users.filter((user : User) => user.id !== decodedToken.id);

  useEffect(() => {
    if (data && data.messages) {
      setAllMessages(data.messages)
    }
  }, [data]);

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


  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== '') {
      socket.emit('message', {
        text: message,
        senderId: decodedToken.id,
        chatId: params.id,
      });
      setMessage('');
    }
  };

  
  const handleCreateNewChat = () => {
    const friendId = prompt('Enter friendId');
    socket.emit('create chat', {
      user1Id: decodedToken.id,
      user2Id: friendId,
  });
}

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [AllMessages]);

  useEffect(() => {
    socket.on('message', (data) => {
      setAllMessages((prevMessages) => [...prevMessages, data]); 
    });
  
    socket.on('error', (data) => {
      alert(JSON.stringify(data));
    });
  
    return () => {
      socket.off('message');
      socket.off('error');
    };
  }, [socket]);


  const handleOpenMenu = () => {
    setMenu(!openMenu);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  const handleOpenClip = () => {
    setClip(!openClip);
  };

  const handleCloseClip = () => {
    setClip(false);
  };

  // send message
  const handleSendMessage = () => {
    setMessage('');
  };

  return (
    <div className="container-fluid mt-[20px]">
      <div className="row">
        <div className="col-3">
          <HomeSidebar/>
        </div>
        <div className="col-9">
        <ChatSidebar />
        {isLoading ? (
           <div className={styles.wrapper}>
           <div className={styles.textCenter}>
             <div>Loading...</div>
           </div>
           </div>
        ) : (
      <div className={styles.wrapper}>
      <nav className={styles.header}>
        <div className={styles.textsItem}>
          <Image width={50} height={50} style={{ borderRadius: '50%' }} src={otherUsers[0].avatar} alt="avatar" />
          <div className={styles.infoTexts}>
            <span>
              <strong>{otherUsers[0].name}</strong>
            </span>
            <p>ID:{otherUsers[0].id}</p>
          </div>
        </div>
        <div className={styles.iconsItem}>
          <Image src={loopIcon} alt="loop icon" />
          <button className={styles.blockBtn}>Block</button>
          <Image onClick={handleOpenMenu} src={menuIcon} alt="menu icon" />
          {openMenu && (
            <div className={styles.chatMenu}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Image onClick={handleCloseMenu} src={drawerIcon} alt="white clip" />
                <h2 onClick={handleCloseMenu}>Очистить диалог</h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Image onClick={handleCloseMenu} src={clipIcon} alt="white clip" />
                <h2 onClick={handleCloseMenu}>Очистить диалог</h2>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className={styles.chat} ref={chatRef}>
      {AllMessages.map((msg, index) => (
              <Message 
              key={index} 
              messageValue={msg.text}
              userName={msg.sender.name} 
              own={msg.senderId === decodedToken?.id}
              createdAt = {msg.createdAt}/>
            ))}
      </div>
      <section className={styles.input}>
        <div className={styles.inputBorder}>
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSend(e)}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Написать сообщение"
          />
          </form>
          <div className={styles.inputIcons}>
            {openClip && (
              <div className={styles.addSomethingSection}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Image onClick={handleCloseClip} src={photoAddIcon} alt="photo add icon" />
                  <h2 onClick={handleCloseClip}>Добавить фото</h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Image onClick={handleCloseClip} src={fileAddIcon} alt="file add icon" />
                  <h2 onClick={handleCloseClip}>Добавить файл</h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Image onClick={handleCloseClip} src={videoAddIcon} alt="video add icon" />
                  <h2 onClick={handleCloseClip}>Добавить видео</h2>
                </div>
              </div>
            )}
            <Image onClick={handleOpenClip} src={clipIcon} alt="clipIcon" />
            <Image src={emojiIcon} alt="emoji icon" />
            <button onClick={(e) => handleSend(e)} className={styles.sendBtn}>
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
    )}
    </div>
        </div>
      </div>
  );
}

export default Chat;
