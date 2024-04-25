'use client';

import React, { useState } from 'react';
import styles from './chat.module.scss';
import loopIcon from '../../public/loop-chat-icon.svg';
import menuIcon from '../../public/chat-menu.svg';
import Image from 'next/image';

// иконки
import emojiIcon from '../../public/smile-emoji.svg';
import clipIcon from '../../public/clip.svg';
import videoAddIcon from '../../public/video-add.svg';
import fileAddIcon from '../../public/add-file.svg';
import photoAddIcon from '../../public/add-photo.svg';
import drawerIcon from '../../public/drawer.svg';
import avatar from '../../public/avatar.png';

function Chat() {
  const [message, setMessage] = useState('');
  const [openClip, setClip] = useState(false);
  const [openMenu, setMenu] = useState(false);

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
    <div className={styles.wrapper}>
      <nav className={styles.header}>
        <div className={styles.textsItem}>
          <Image width={50} height={50} style={{ borderRadius: '50%' }} src={avatar} alt="avatar" />
          <div className={styles.infoTexts}>
            <span>Root</span>
            <span>20 мин назад</span>
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
      <div className={styles.chat}>
        <div className={styles.message}>
          <p>
            Привет, друг! Мне бы хотелось познакомиться с твоими знакомыми, которые занимаются
            звуком. Мы ищем профессионалов в этой области, и я уверен, что знакомые твои могут нам
            помочь. Если у тебя есть кто-то, кто работает в этой сфере, я бы очень обрадовался, если
            бы ты порекомендовал его или её. Это будет огромной помощью для нас. Спасибо за твоё
            время и поддержку! 2 Также, я бы хотел добавить, что знакомые твои могут быть не только
            профессионалами в области звука, но и людьми, которые знают таких людей. Если у тебя
            есть контакты в этой области, это тоже будет полезно. 2 Я понимаю, что это может быть
            немного неудобно, и я благодарю тебя за твоё время и помощь.
          </p>
          <span>16:50</span>
        </div>
        <div className={`${styles.message} ${styles.own}`}>
          <p>
            Привет, друг! Мне бы хотелось познакомиться с твоими знакомыми, которые занимаются
            звуком. Мы ищем профессионалов в этой области, и я уверен, что знакомые твои могут нам
            помочь. Если у тебя есть кто-то, кто работает в этой сфере, я бы очень обрадовался, если
            бы ты порекомендовал его или её. Это будет огромной помощью для нас. Спасибо за твоё
            время и поддержку! 2 Также, я бы хотел добавить, что знакомые твои могут быть не только
            профессионалами в области звука, но и людьми, которые знают таких людей. Если у тебя
            есть контакты в этой области, это тоже будет полезно. 2 Я понимаю, что это может быть
            немного неудобно, и я благодарю тебя за твоё время и помощь.
          </p>
          <span>16:50</span>
        </div>
        <div className={`${styles.message} ${styles.own}`}>
          <p>
            Привет, друг! Мне бы хотелось познакомиться с твоими знакомыми, которые занимаются
            звуком. Мы ищем профессионалов в этой области, и я уверен, что знакомые твои могут нам
            помочь. Если у тебя есть кто-то, кто работает в этой сфере, я бы очень обрадовался, если
            бы ты порекомендовал его или её. Это будет огромной помощью для нас. Спасибо за твоё
            время и поддержку! 2 Также, я бы хотел добавить, что знакомые твои могут быть не только
            профессионалами в области звука, но и людьми, которые знают таких людей. Если у тебя
            есть контакты в этой области, это тоже будет полезно. 2 Я понимаю, что это может быть
            немного неудобно, и я благодарю тебя за твоё время и помощь.
          </p>
          <span>16:50</span>
        </div>
      </div>
      <section className={styles.input}>
        <div className={styles.inputBorder}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Написать сообщение"
          />
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
            <button onClick={handleSendMessage} className={styles.sendBtn}>
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chat;
