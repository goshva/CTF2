'use client';

import classNames from 'classnames';
import { FC, useState, useEffect } from 'react';
import styles from './marketSidebar.module.scss';
import profileAvatar from '../../../public/profile.svg';
import Image from 'next/image';
import accauntIcon from '../../../public/Account.svg';
import settingsIcon from '../../../public/settings-1.svg';
import plusIcon from '../../../public/plus.svg';
import minusIcon from '../../../public/minus.svg';
import { Badge, Menu } from 'antd';
import type { InputNumberProps } from 'antd';
import { Col, Row, Input, InputNumber, Slider, Space, Checkbox } from 'antd';
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
import checkedIcon from '@/checked-icon.svg'

// new icons
import homeIcon from '../../../public/home-new-icon.svg';
import profileIcon from '../../../public/profile-new-icon.svg';
import messengerIcon from '../../../public/messenger-new-icon.svg';
import bookMarkIcon from '../../../public/bookmark-new-icon.svg';

const MarketSidebar: FC = () => {
  const path = usePathname();

  const onChange = (value: number | number[]) => {
    console.log('onChange: ', value);
  };

  const onChangeComplete = (value: number | number[]) => {
    console.log('onChangeComplete: ', value);
  };

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
        <div className={styles.filterContainer}>
          <div className={styles.filterTitle}>
            <h3>FILTER</h3>
          </div>
          <div className={styles.filters}>
            <div className={styles.filterBox}>

              <div className={styles.bigInputBox}>
                <Input variant="borderless" className={classNames(styles.filterInput, styles.priceInput)} placeholder="Price" />
              </div>

              <div className={styles.sliderInputsBox}>
                <Input className={classNames(styles.filterInput, styles.antInputNumber)} />
                <b>-</b>
                <Input className={classNames(styles.filterInput, styles.antInputNumber)} />
              </div>

              <div className={styles.sliderBox}>
                <Slider
                  range
                  step={1}
                  defaultValue={[0, 50]}
                  onChange={onChange}
                  onChangeComplete={onChangeComplete}
                />
              </div>

              <div className={styles.bigInputBox}>
                <Input variant="borderless" className={classNames(styles.filterInput, styles.priceInput)} placeholder="Delivery speed" />
              </div>

              <div className={styles.checkboxContainer}>
                <label htmlFor="instantly" className={styles.customCheckbox}>
                  <input name="instantly" type="checkbox" id="instantly" className={styles.hiddenCheckbox} />
                  <div className={styles.checkbox}>
                    <Image className={styles.checkedIcon} src={checkedIcon} alt='checkedIcon'/>
                  </div>
                  <span>Instantly</span>
                </label>
                <label htmlFor="delayed" className={styles.customCheckbox}>
                  <input name="delayed" type="checkbox" id="delayed" className={styles.hiddenCheckbox} />
                  <div className={styles.checkbox}>
                    <Image className={styles.checkedIcon} src={checkedIcon} alt='checkedIcon' />
                  </div>
                  <span>About 15 min.</span>
                </label>
              </div>

              <div className={styles.bigInputBox}>
                <div id="colorList" className={styles.colorList}>
                  <span className={styles.btnName}>Color</span>
                  <span className={styles.plusSymbol}>+</span>
                </div>
              </div>

              <div className={styles.bigInputBox}>
                <div id="colorList" className={styles.colorList}>
                  <span className={styles.btnName}>Color</span>
                  <span className={styles.plusSymbol}>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MarketSidebar;
