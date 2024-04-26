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
// import 'antd/dist/antd.css'; временно удалено
// import { StyleProvider } from '@ant-design/cssinjs';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import { useGetFriendListQuery } from '../../redux';

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
  const [iconState, setIconState] = useState('plusIcon');
  const [iconStateSecond, setIconStateSecond] = useState('plusIcon');
  const [inputValue, setInputValue] = useState(parseFloat('0.000'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const [decodedToken, setDecodedToken] = useState<any>('');
  const [loadingCookies, setLoadingCookies] = useState(true);
  const [friendCount, setFriendCount] = useState<any>('');

  const jwtToken = Cookies.get('jwt');
  if (jwtToken) {
    const decodedToken: any = jwt.decode(jwtToken);
    if (decodedToken) {
      const { data, error, isLoading } = useGetFriendListQuery(decodedToken.id);
      if (data) {
        if (data.friendslist) {
          const friendCount = data.friendslist.friends.length;
          setFriendCount(friendCount);
        }
      }
    }
  }

  useEffect(() => {
    if (jwtToken) {
      const decodedToken = jwt.decode(jwtToken);
      setDecodedToken(decodedToken);
      console.log(decodedToken);
      setIsAuthenticated(true);
    }
    setLoadingCookies(false);
  }, []);

  const pathname = usePathname();

  // guns state потом другые добавлю
  const [pistolState, setPistolState] = useState('plusIcon');

  // menu border
  const [menuBorder, setMenuBorder] = useState(false);

  const onChange: InputNumberProps['onChange'] = (newValue) => {
    setInputValue(newValue as number);
  };

  const toggleIcon = () => {
    setIconState(iconState === 'plusIcon' ? 'minusIcon' : 'plusIcon');
    setMenuBorder(!menuBorder);
  };

  const toggleIconSecond = () => {
    setIconStateSecond(iconStateSecond === 'plusIcon' ? 'minusIcon' : 'plusIcon');
  };

  const toggleIconPistol = () => {
    setPistolState(pistolState === 'plusIcon' ? 'minusIcon' : 'plusIcon');
  };

  const handleOpenProfile = () => {
    window.location.href = 'https://countertrade.vit.ooo/v1/auth/steam';
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 1500);
  };

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

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
                <div className={styles.line}></div>
                <p>{decodedToken.id}</p>
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
                  </div>
                </div>
              </footer>
            </section>
          </>
        )}
      </div>

      <div className={styles.middleSide}>
        {pathname === '/' && (
          <div className={styles.select_wrapper}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <section className={styles.select_section}>
                <button onClick={toggleIcon} className={styles.selectPole}>
                  Тип товара (переименовать)
                  <Image src={pistolState === 'plusIcon' ? plusIcon : minusIcon} alt="icon" />
                </button>
                {menuBorder && (
                  <div className={styles.menuBorder}>
                    <button className={styles.menuItem}>Пистолет</button>
                    <button className={styles.menuItem}>Винтовка</button>
                    <button className={styles.menuItem}>Снайперская винтовка</button>
                    <button className={styles.menuItem}>Пистолет-пулемет</button>
                    <button className={styles.menuItem}>Пулемет</button>
                    <button className={styles.menuItem}>Дробовик</button>
                    <button className={styles.menuItem}>Нож</button>
                    <button className={styles.menuItem}>Прочее</button>
                  </div>
                )}
                <button onClick={toggleIconSecond} className={styles.selectPole}>
                  Критерий
                  <Image src={pistolState === 'plusIcon' ? plusIcon : minusIcon} alt="icon" />
                </button>
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
