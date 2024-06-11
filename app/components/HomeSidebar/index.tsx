'use client';

import { FC, useState, useEffect } from 'react';
import styles from './sidebar.module.scss';
import profileAvatar from '../../../public/profile.svg';
import Image from 'next/image';
import accauntIcon from '../../../public/Account.svg';
import settingsIcon from '../../../public/settings-1.svg';
import plusIcon from '../../../public/plus.svg';
import minusIcon from '../../../public/minus.svg';
import { Badge, Menu } from 'antd';
import type { InputNumberProps } from 'antd';
import { Col, InputNumber, Row, Slider, Space } from 'antd';
import { Button, Flex } from 'antd';
import steamIcon from '../../../public/steam-icon.svg';
import type { MenuProps } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import avatar from '../../../public/avatar.png';
import UserChatItem from '../UserChatItem';
import loopIcon from '../../../public/loop-chat-icon.svg';
import copy from '../../../public/copy.svg';
import LogOutIcon from '../../../public/logout.svg';
import tgIcon from '@/Telegram.png';
import vcIcon from '@/Vk.png';
import youtubeIcon from '@/youtube.png';

// new icons
import homeIcon from '../../../public/home-new-icon.svg';
import profileIcon from '../../../public/profile-new-icon.svg';
import messengerIcon from '../../../public/messenger-new-icon.svg';
import bookMarkIcon from '../../../public/bookmark-new-icon.svg';

const HomeSidebar: FC = () => {
  const path = usePathname();

  console.log('path', path);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.middleSide}>
        <div className={styles.home_sideBar}>
          <div className={styles.webTitle}>
            <h2>WEBSITE BAR</h2>
          </div>
          <nav className={styles.router_section}>
            <ul className={styles.links}>
              {path == '/' ? (
                <Link href="/">
                  <li
                    style={{ backgroundColor: '#161918', color: '#0F629A' }}
                    className={styles.link}>
                    <Image src={homeIcon} alt="homeIcon" />
                    Home
                  </li>
                </Link>
              ) : (
                <Link href="/">
                  <li className={styles.link}>
                    <Image src={homeIcon} alt="homeIcon" />
                    Home
                  </li>
                </Link>
              )}
              {path === '/profile' ? (
                <Link href="/profile">
                  <li
                    style={{ backgroundColor: '#161918', color: '#0F629A' }}
                    className={styles.link}>
                    <Image src={profileIcon} alt="profileIcon" />
                    Profile
                  </li>
                </Link>
              ) : (
                <Link href="/profile">
                  <li className={styles.link}>
                    <Image src={profileIcon} alt="profileIcon" />
                    Profile
                  </li>
                </Link>
              )}
              {path === '/chat' ? (
                <Link href="/chat">
                  <li
                    style={{ backgroundColor: '#161918', color: '#0F629A' }}
                    className={styles.link}>
                    <Image src={messengerIcon} alt="messengerIcon" />
                    Messenger
                  </li>
                </Link>
              ) : (
                <Link href="/chat">
                  <li className={styles.link}>
                    <Image src={messengerIcon} alt="messengerIcon" />
                    Messenger
                  </li>
                </Link>
              )}

              {path === '/favorites' ? (
                <Link href="/favorites">
                  <li
                    style={{ backgroundColor: '#161918', color: '#0F629A' }}
                    className={styles.link}>
                    <Image src={bookMarkIcon} alt="bookMarkIcon" />
                    BookMark
                  </li>
                </Link>
              ) : (
                <Link href="/favorites">
                  <li className={styles.link}>
                    <Image src={bookMarkIcon} alt="bookMarkIcon" />
                    BookMark
                  </li>
                </Link>
              )}
            </ul>
          </nav>
        </div>
        <footer className={styles.downFilter}>
          <h1>FILTER</h1>
        </footer>
      </div>
    </aside>
  );
};

export default HomeSidebar;
