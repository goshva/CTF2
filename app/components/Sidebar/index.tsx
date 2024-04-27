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

const Sidebar: FC = () => {
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
    window.location.href = 'https://countertrade.vit.ooo/v1/auth/steam';
    //@ts-ignore
    getFriendsList();
  };

  const logout = () => {
    Cookies.remove('jwt');
    setIsAuthenticated(false);
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

  if (loadingCookies) {
    return (
      <aside className={styles.sidebar}>
        <div className={styles.profileSection}>
          <div className={styles.buttonContainer}>
            <Button
              onClick={handleOpenProfile}
              className={styles.steam_btn}
              type="primary"
              loading={loadings[0]}
              onClickCapture={() => enterLoading(0)}>
              <Image src={steamIcon} alt="steam icon" />
              Lodaing...
            </Button>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.profileSection}>
        {!isAuthenticated && (
          <div className={styles.buttonContainer}>
            <Link
              href="https://countertrade.vit.ooo/v1/auth/steam"
              style={{ textDecoration: 'none' }}>
              <Button
                onClick={handleOpenProfile}
                className={styles.steam_btn}
                type="primary"
                loading={loadings[0]}
                onClickCapture={() => enterLoading(0)}>
                <Image src={steamIcon} alt="steam icon" />
                Click me!
              </Button>
            </Link>
          </div>
        )}
        {isAuthenticated && (
          <>
            <div className={styles.avatar}>
              <Image
                src={decodedToken.photos[1] == '' ? '' : decodedToken.photos[1].value}
                alt="avatar"
                width={80}
                height={80}
                style={{ borderRadius: '50%' }}
              />
            </div>
            <section>
              <article className={styles.name_email_content}>
                <h3>
                  {decodedToken
                    ? decodedToken.displayName.length > 12
                      ? decodedToken.displayName.slice(0, 12) + '...'
                      : decodedToken.displayName
                    : '<div>Username</div>'}
                </h3>
                <div>
                  <h3>ID:</h3>
                </div>
                <Image src={copy} onClick={handleCopy} alt="account icon" />
              </article>
              <article className={styles.user_info}>
                <p>Moscow, Russia</p>
                <p className={styles.friends_count}>{friendCount}Friends</p>
              </article>
              <article className={styles.desc}>
                <p>
                  Status: Не бойся противника, который практикует 10,000 ударов. Бойся того, кто
                  практикует один удар 10,000 раз.
                </p>
              </article>
              <footer className={styles.downContnet}>
                <div className={styles.links}>
                  <h3>INVENTORY</h3>
                  <h3>STEAM</h3>
                  <h3>MY LINKS</h3>
                  <h3>WRITE</h3>
                  <div className={styles.icons}>
                    <Image src={accauntIcon} alt="accaunt icon" />
                    <Image src={settingsIcon} alt="setting icon" />
                    <Image onClick={logout} src={LogOutIcon} alt="setting icon" />
                  </div>
                </div>
              </footer>
            </section>
          </>
        )}
      </div>

      <div className={styles.middleSide}>
        {pathname === '/market' && (
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
                      <Image
                        src={pistolIconState === 'plusIcon' ? plusIcon : minusIcon}
                        alt="icon"
                      />
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
                  <Image
                    src={iconStateCriterion === 'plusIcon' ? plusIcon : minusIcon}
                    alt="icon"
                  />
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
        )}

        {pathname === '/chat' && (
          <div className={styles.chatSelect}>
            <div className={styles.findUser}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Image src={loopIcon} alt="loop" />
                <input type="text" placeholder="Найти" />
              </div>
              <div className={styles.downLine}></div>
            </div>
            <UserChatItem />
            <UserChatItem />
            <UserChatItem />
            <UserChatItem />
            <UserChatItem />
            <UserChatItem />
            <UserChatItem />
            <UserChatItem />
            <UserChatItem />
          </div>
        )}

        {pathname === '/' && (
          <div className={styles.float}>
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
              {/* <h2 className={styles.valueText}>{inputValue}</h2> */}
              <h2 className={styles.valueText}>1.000</h2>
            </div>
          </div>
        )}
      </div>

      {/* {pathname === '/chat' && <div>hello</div>} */}
    </aside>
  );
};

export default Sidebar;
