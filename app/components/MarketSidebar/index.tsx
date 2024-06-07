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
  const baseUrl = process.env.BASE_URL
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
    window.location.href = `${baseUrl}/v1/auth/steam`;
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
                Тип товара (переименовать)
                <Image src={iconStateItem === 'plusIcon' ? plusIcon : minusIcon} alt="icon" />
              </button>
              {itemMenuBorder && (
                <div className={styles.menuBorder}>
                  <button onClick={toggleIconPistol} className={styles.menuItem}>
                    Пистолет
                    <Image src={pistolIconState === 'plusIcon' ? plusIcon : minusIcon} alt="icon" />
                  </button>
                  {pistolMenuBorder && (
                    <div className={styles.menuGunBorder}>
                      <button className={styles.menuGunItem}>
                        Все пистолеты
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
                    Винтовка
                    <Image src={plusIcon} alt="icon" />
                  </button>
                  <button className={styles.menuItem}>
                    Снайперская винтовка
                    <Image src={plusIcon} alt="icon" />
                  </button>
                  <button className={styles.menuItem}>
                    Пистолет-пулемет
                    <Image src={plusIcon} alt="icon" />
                  </button>
                  <button className={styles.menuItem}>
                    Пулемет
                    <Image src={plusIcon} alt="icon" />
                  </button>
                  <button className={styles.menuItem}>
                    Дробовик
                    <Image src={plusIcon} alt="icon" />
                  </button>
                  <button className={styles.menuItem}>
                    Нож
                    <Image src={plusIcon} alt="icon" />
                  </button>
                  <button className={styles.menuItem}>
                    Прочее
                    <Image src={plusIcon} alt="icon" />
                  </button>
                </div>
              )}
              <button onClick={toggleIconCriterion} className={styles.selectPole}>
                Критерий
                <Image src={iconStateCriterion === 'plusIcon' ? plusIcon : minusIcon} alt="icon" />
              </button>
              {criterionMenuBorder && (
                <div className={styles.menuBorder}>
                  <button className={styles.menuItem}>Категория</button>
                  <button className={styles.menuItem}>Фазы</button>
                  <button className={styles.menuItem}>Раритетность</button>
                  <button className={styles.menuItem}>Качество</button>
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

export default MarketSidebar;
