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
import {
  Bell,
  Hash,
  Home,
  Mail,
  ScrollText,
  Search,
  SlidersHorizontal,
  User,
  Users,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
// import 'antd/dist/antd.css'; временно удалено
// import { StyleProvider } from '@ant-design/cssinjs';

type MenuItem = Required<MenuProps>['items'][number];

const HomeSidebar: FC = () => {
  const [inputValue, setInputValue] = useState(parseFloat('0.000'));

  // icons
  const onChange: InputNumberProps['onChange'] = (newValue) => {
    setInputValue(newValue as number);
  };

  const t = useTranslations()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.middleSide}>
        <div className={styles.home_sideBar}>
          <div className={styles.findPost_input}>
            <Search color="#e5e5e5" className={styles.searchIcon} />
            <input type="text" placeholder="Найти пост" />
          </div>
          <ul className={styles.routes_section}>
            <li className={styles.route}>
              <Home />
              <Link href="/">{t('home')}</Link>
            </li>
            <li className={styles.route}>
              <Bell />
              <Link href="/notifications">{t('notifications')}</Link>
            </li>
            <li className={styles.route}>
              <Mail />
              <Link href="/chat">{t('messages')}</Link>
            </li>
            <li className={styles.route}>
              <SlidersHorizontal />
              <Link href="/filters">{t('filters')}</Link>
            </li>
          </ul>
        </div>
        {/* <div className={styles.float}>
          <div className={styles.float_content}>
            <h2>Float</h2>
            <h2 className={styles.valueText}>{inputValue.toFixed(3)}</h2>
            <Col span={8}>
              <Slider
                min={0.0}
                max={1000}
                onChange={onChange}
                value={typeof inputValue === 'number' ? inputValue : 0}
                step={0.01}
              />
            </Col>
            <h2 className={styles.valueText}>1.000</h2>
          </div>
        </div> */}
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
              <Link href="#!">{t('contactUs')}</Link>
              <Link href="#!">{t('rules')}</Link>
              <Link href="#!">{t('terms')}</Link>
            </ul>
          </section>
        </footer>
      </div>
    </aside>
  );
};

export default HomeSidebar;
