'use client';

import clsx from 'clsx';
import { FC, useState, useEffect, ChangeEvent } from 'react';
import styles from './sidebar.module.scss';
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
import checkedIcon from '@/checked-icon.svg';


// new icons
import homeIcon from '../../../public/home-new-icon.svg';
import profileIcon from '../../../public/profile-new-icon.svg';
import messengerIcon from '../../../public/messenger-new-icon.svg';
import bookMarkIcon from '../../../public/bookmark-new-icon.svg';

const MarketSidebar: FC = () => {
  const path = usePathname();
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 2000,
    about15min: false,
    instantly: false,
    colors: [],
  })


  const isMarket = (): boolean => path === '/market'

  const onChangeStart = (value: number[]) => {
    const [min, max] = Array.isArray(value) ? value : [value, value];


    setFilters((prevFilters: typeof filters) => ({
      ...prevFilters,
      minPrice: min,
      maxPrice: max,
    }))
  };

  /* const onChangeComplete = (value: number | number[]) => {
    const maxPrice = Array.isArray(value) ? value[0] : value;
    setFilters((prevFilters: typeof filters) => ({
      ...prevFilters,
      maxPrice: maxPrice,
    }))
  };
 */
  const onChangeInputStart = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilters((prevFilters: typeof filters) => ({
      ...prevFilters,
      minPrice: Number(value),
    }));
  };

  const onChangeInputComplete = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilters((prevFilters: typeof filters) => ({
      ...prevFilters,
      maxPrice: Number(value),
    }));
  };

  const checkedAbout = (event: ChangeEvent<HTMLInputElement>) => {
    const checkedValue = event.target.checked;
    setFilters((prevFilters: typeof filters) => ({
      ...prevFilters,
      about15min: checkedValue,
    }))
  };

  const checkedInstantly = (event: ChangeEvent<HTMLInputElement>) => {
    const checkedValue = event.target.checked;
    setFilters((prevFilters: typeof filters) => ({
      ...prevFilters,
      instantly: checkedValue,
    }))
  };

  console.log(filters);

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
          <div className={clsx(
            styles.filterTitle,
            !isMarket() && styles.filterTitle__disabled
          )}>
            <h3>FILTER</h3>
          </div>
          <form className={clsx(
            styles.filters,
            isMarket() && styles.filters__active
          )}>
            <div className={styles.filterBox}>

              <div className={styles.bigInputBox}>
                <Input variant="borderless" className={clsx(styles.filterInput, styles.priceInput)} placeholder="Price" />
              </div>

              <div className={styles.sliderInputsBox}>
                <Input value={filters.minPrice} onChange={onChangeInputStart} className={clsx(styles.filterInput, styles.antInputNumber)} />
                <b>-</b>
                <Input value={filters.maxPrice} onChange={onChangeInputComplete} className={clsx(styles.filterInput, styles.antInputNumber)} />
              </div>

              <div className={styles.sliderBox}>
                <Slider
                  range
                  step={1}
                  min={50}
                  max={2000}
                  defaultValue={[2000, 2000]}
                  onChange={onChangeStart}
                  value={[filters.minPrice, filters.maxPrice]}
                />
              </div>

              <div className={styles.bigInputBox}>
                <Input variant="borderless" className={clsx(styles.filterInput, styles.priceInput)} placeholder="Delivery speed" />
              </div>

              <div className={styles.checkboxContainer}>
                <label htmlFor="instantly" className={styles.customCheckbox}>
                  <input checked={filters.instantly} onChange={checkedInstantly} name="instantly" type="checkbox" id="instantly" className={styles.hiddenCheckbox} />
                  <div className={styles.checkbox}>
                    <Image className={styles.checkedIcon} src={checkedIcon} alt='checkedIcon' />
                  </div>
                  <span>Instantly</span>
                </label>
                <label htmlFor="delayed" className={styles.customCheckbox}>
                  <input checked={filters.about15min} onChange={checkedAbout} name="delayed" type="checkbox" id="delayed" className={styles.hiddenCheckbox} />
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
                  <span className={styles.btnName}>Rarity</span>
                  <span className={styles.plusSymbol}>+</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default MarketSidebar;
