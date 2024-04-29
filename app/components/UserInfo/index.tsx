'use client';

import { FC, useState, useEffect } from 'react';
import styles from './sidebar.module.scss';
import Image from 'next/image';
import accauntIcon from '../../../public/Account.svg';
import settingsIcon from '../../../public/settings-1.svg';
import { Button, Flex } from 'antd';
import steamIcon from '../../../public/steam-icon.svg';
import Link from 'next/link';
import copy from '../../../public/copy.svg';
import LogOutIcon from '../../../public/logout.svg';
// import 'antd/dist/antd.css'; временно удалено
// import { StyleProvider } from '@ant-design/cssinjs';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import { useGetFriendListQuery, useLazyGetFriendListQuery } from '../../redux';
import { useSelector } from 'react-redux';



const UserInfo: FC = () => {
  const [inputValue, setInputValue] = useState(parseFloat('0.000'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadings, setLoadings] = useState<boolean[]>([]);
  // const [decodedToken, setDecodedToken] = useState<any>('');
  const [loadingCookies, setLoadingCookies] = useState(true);
  const [friendCount, setFriendCount] = useState<any>('');

  //@ts-ignore
  const decodedToken = useSelector(state => state.auth.decodedToken);


  //@ts-ignore
  const [getFriendsList, { data }] = useLazyGetFriendListQuery(decodedToken?.id);

  useEffect(() => {
    if (decodedToken) {
      setIsAuthenticated(true);
    }
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
                <Image src={copy} onClick={handleCopy} alt="account icon" className='cursor-pointer'/>
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
    </aside>
  );
};

export default UserInfo;
