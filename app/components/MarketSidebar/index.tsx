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
// import 'antd/dist/antd.css'; временно удалено
// import { StyleProvider } from '@ant-design/cssinjs';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import { useGetFriendListQuery, useLazyGetFriendListQuery } from '../../redux';
import tgIcon from '@/Telegram.png';
import vcIcon from '@/Vk.png';
import youtubeIcon from '@/youtube.png';
import { useTranslation } from 'react-i18next';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const MarketSidebar: FC = () => {
  const [inputValue, setInputValue] = useState(parseFloat('0.000'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadings, setLoadings] = useState<boolean[]>([]);
  // const [decodedToken, setDecodedToken] = useState<any>('');
  const [loadingCookies, setLoadingCookies] = useState(true);
  const [friendCount, setFriendCount] = useState<any>('');

  const jwtToken = Cookies.get('jwt');
  //@ts-ignore
  const decodedToken: IUser = jwt.decode(jwtToken);
  //@ts-ignore
  const [getFriendsList, { data }] = useLazyGetFriendListQuery(decodedToken?.id);

  const { t } = useTranslation()

  // const jwtToken = Cookies.get('jwt');
  // if (jwtToken) {
  //   const decodedToken: any = jwt.decode(jwtToken);
  //   if (decodedToken) {
  //     const { data, error, isLoading } = useGetFriendListQuery(decodedToken.id);
  //     if (data) {
  //       if (data.friendslist) {
  //         const friendCount = data.friendslist.friends.length;
  //         setFriendCount(friendCount);
  //       }
  //     }
  //   }
  // }

  useEffect(() => {
    if (decodedToken) {
      setIsAuthenticated(true);
    }
    setLoadingCookies(false);
    setLoadingCookies(false);
  }, []);

  useEffect(() => {
    const jwtToken = Cookies.get('jwt');
    if (jwtToken) {
    }
  }, [isAuthenticated]);

  const handleCopy = () => {
    navigator.clipboard.writeText(decodedToken.id);
  };

  const pathname = usePathname();

  // icons
  const [iconStateItem, setIconStateItem] = useState('plusIcon');
  const [iconStateCriterion, setIconStateCriterion] = useState('plusIcon');
  const [pistolIconState, setPistolIconState] = useState('plusIcon');

  // menu border
  const [itemMenuBorder, setItemMenuBorder] = useState(false);
  const [criterionMenuBorder, setCriterionMenuBorder] = useState(false);

  // Border states & guns state потом другые добавлю
  const [pistolMenuBorder, setPistolMenuBorder] = useState(false);

  const onChange: InputNumberProps['onChange'] = (newValue) => {
    setInputValue(newValue as number);
  };

  // открытия менюшек
  const toggleIconItem = () => {
    setIconStateItem(iconStateItem === 'plusIcon' ? 'minusIcon' : 'plusIcon');
    setItemMenuBorder(!itemMenuBorder);
  };

  const toggleIconCriterion = () => {
    setIconStateCriterion(iconStateCriterion === 'plusIcon' ? 'minusIcon' : 'plusIcon');
    setCriterionMenuBorder(!criterionMenuBorder);
  };

  const toggleIconPistol = () => {
    setPistolMenuBorder(!pistolMenuBorder);
    setPistolIconState(pistolIconState === 'plusIcon' ? 'minusIcon' : 'plusIcon');
  };
  // >>>>>>>>>>>>>>>>>>>>>>>>

  const handleOpenProfile = () => {
    window.location.href = 'https://countertrade.vit.ooo/v1/auth/steam';
    //@ts-ignore
    getFriendsList();
  };

  const enterLoading = (index: number) => {
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.middleSide}>
        <div className={styles.select_wrapper}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <section className={styles.select_section}>
              <button onClick={toggleIconItem} className={styles.selectPole}>
                {t('productType')} (переименовать)
                <Image src={iconStateItem === 'plusIcon' ? plusIcon : minusIcon} alt="icon" />
              </button>
              {itemMenuBorder && (
                <div className={styles.menuBorder}>
                  <button onClick={toggleIconPistol} className={styles.menuItem}>
                    {t('pistol')}
                    <Image src={pistolIconState === 'plusIcon' ? plusIcon : minusIcon} alt="icon" />
                  </button>
                  {pistolMenuBorder && (
                    <div className={styles.menuGunBorder}>
                      <button className={styles.menuGunItem}>
                        {t('allPistole')}
                        <Image src={plusIcon} alt="icon" />
                      </button>
                      <button className={styles.menuGunItem}>
                        Five-Seven <Image src={plusIcon} alt="icon" />
                      </button>
                      <button className={styles.menuGunItem}>
                        Glock-18 <Image src={plusIcon} alt="icon" />
                      </button>
                      <button className={styles.menuGunItem}>
                        P2000 <Image src={plusIcon} alt="icon" />
                      </button>
                      <button className={styles.menuGunItem}>
                        P250 <Image src={plusIcon} alt="icon" />
                      </button>
                      <button className={styles.menuGunItem}>
                        R8 Revolver <Image src={plusIcon} alt="icon" />
                      </button>
                      <button className={styles.menuGunItem}>
                        Tec-9
                        <Image src={plusIcon} alt="icon" />
                      </button>
                      <button className={styles.menuGunItem}>
                        CZ75-Auto <Image src={plusIcon} alt="icon" />
                      </button>
                      <button className={styles.menuGunItem}>
                        USP-S <Image src={plusIcon} alt="icon" />
                      </button>
                      <button className={styles.menuGunItem}>
                        Desert Eagle <Image src={plusIcon} alt="icon" />
                      </button>
                      <button className={styles.menuGunItem}>
                        Dual Berettas <Image src={plusIcon} alt="icon" />
                      </button>
                    </div>
                  )}
                  <button className={styles.menuItem}>
                    {t('rifle')}
                    <Image src={plusIcon} alt="icon" />
                  </button>
                  <button className={styles.menuItem}>
                    {t('sniperRifle')}
                    <Image src={plusIcon} alt="icon" />
                  </button>
                  <button className={styles.menuItem}>
                    {t('subGun')}
                    <Image src={plusIcon} alt="icon" />
                  </button>
                  <button className={styles.menuItem}>
                    {t('machineGun')}
                    <Image src={plusIcon} alt="icon" />
                  </button>
                  <button className={styles.menuItem}>
                    {t('shotgun')}
                    <Image src={plusIcon} alt="icon" />
                  </button>
                  <button className={styles.menuItem}>
                    {t('knife')}
                    <Image src={plusIcon} alt="icon" />
                  </button>
                  <button className={styles.menuItem}>
                    {t('other')}
                    <Image src={plusIcon} alt="icon" />
                  </button>
                </div>
              )}
              <button onClick={toggleIconCriterion} className={styles.selectPole}>
                {t('criterion')}
                <Image src={iconStateCriterion === 'plusIcon' ? plusIcon : minusIcon} alt="icon" />
              </button>
              {criterionMenuBorder && (
                <div className={styles.menuBorder}>
                  <button className={styles.menuItem}>{t('category')}</button>
                  <button className={styles.menuItem}>{t('phase')}</button>
                  <button className={styles.menuItem}>{t('rarity')}</button>
                  <button className={styles.menuItem}>{t('quality')}</button>
                </div>
              )}
            </section>
          </div>
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

export default MarketSidebar;
