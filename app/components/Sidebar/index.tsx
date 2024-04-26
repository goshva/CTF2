'use client';

import { FC, useState } from 'react';
import styles from './sidebar.module.scss';
import profileAvatar from '../../../public/profileAvatar.svg';
import Image from 'next/image';
import accauntIcon from '../../public/Account.svg';
import settingsIcon from '../../public/settings-1.svg';
import plusIcon from '../../public/plus.svg';
import minusIcon from '../../public/minus.svg';
import { Menu } from 'antd';
import type { InputNumberProps } from 'antd';
import { Col, InputNumber, Row, Slider, Space } from 'antd';
import { Button, Flex } from 'antd';
import steamIcon from '../../public/steam-icon.svg';
import Link from 'next/link';


const Sidebar: FC = () => {
  const [iconState, setIconState] = useState('plusIcon');
  const [iconStateSecond, setIconStateSecond] = useState('plusIcon');
  const [pistolState, setPistolState] = useState('plusIcon');

  const [inputValue, setInputValue] = useState(parseFloat('0.000'));


  const onChange: InputNumberProps['onChange'] = (newValue) => {
    setInputValue(newValue as number);
  };

  const toggleIcon = () => {
    setIconState(iconState === 'plusIcon' ? 'minusIcon' : 'plusIcon');
  };

  const toggleIconSecond = () => {
    setIconStateSecond(iconStateSecond === 'plusIcon' ? 'minusIcon' : 'plusIcon');
  };

  const toggleIconPistol = () => {
    setPistolState(pistolState === 'plusIcon' ? 'minusIcon' : 'plusIcon');
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleOpenProfile = () => {
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 1500);
  };

  const [loadings, setLoadings] = useState<boolean[]>([]);

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

  // adding steam button


  return (
    <aside className={styles.sidebar}>
      <div className={styles.profileSection}>
        {!isAuthenticated && (
          <div className={styles.buttonContainer}>
          <Link href='https://countertrade.vit.ooo/v1/auth/steam' style={{textDecoration: 'none'}}>
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
              <Image src={profileAvatar} alt="avatar" />
            </div>
            <section>
              <article className={styles.name_email_content}>
                <h3>Ivan Slinski</h3>
                <div className={styles.line}></div>
                <p>@lockinto</p>
              </article>
              <article className={styles.user_info}>
                <p>Moscow, Russia</p>
                <p className={styles.friends_count}>308 Friends</p>
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
        <div className={styles.select_wrapper}>
          <section className={styles.select_section}>
            <Menu
              style={{ width: 256, background: 'none', border: 'none' }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline">
              <Menu.SubMenu
                style={{ background: '#131d2c', width: '300px', color: 'white' }}
                onTitleClick={toggleIcon}
                title={
                  <span
                    style={{
                      color: 'white',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <span>Тип товара (переименовать)</span>
                    <Image src={iconState === 'plusIcon' ? plusIcon : minusIcon} alt="icon" />
                  </span>
                }>
                <Menu.SubMenu
                  style={{ background: '#243766', width: '300px', color: 'white' }}
                  onTitleClick={toggleIconPistol}
                  title={
                    <span
                      style={{
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <span>Пистолет</span>
                      <Image src={pistolState === 'plusIcon' ? plusIcon : minusIcon} alt="icon" />
                    </span>
                  }>
                  <div className={styles.menuContainer}>
                    <Menu.Item style={{ color: 'white', background: '#5D6EAB' }} eventKey="13">
                      Все пистолеты
                    </Menu.Item>
                    <Menu.Item style={{ color: 'white', background: '#5D6EAB' }} eventKey="14">
                      Five-Seven
                    </Menu.Item>
                    <Menu.Item style={{ color: 'white', background: '#5D6EAB' }} eventKey="15">
                      Glock-18
                    </Menu.Item>
                    <Menu.Item style={{ color: 'white', background: '#5D6EAB' }} eventKey="16">
                      P2000
                    </Menu.Item>
                    <Menu.Item style={{ color: 'white', background: '#5D6EAB' }} eventKey="17">
                      P250
                    </Menu.Item>
                    <Menu.Item style={{ color: 'white', background: '#5D6EAB' }} eventKey="18">
                      R8 Revolver
                    </Menu.Item>
                    <Menu.Item style={{ color: 'white', background: '#5D6EAB' }} eventKey="19">
                      Tec-9
                    </Menu.Item>
                    <Menu.Item style={{ color: 'white', background: '#5D6EAB' }} eventKey="21">
                      CZ75-Auto
                    </Menu.Item>
                    <Menu.Item style={{ color: 'white', background: '#5D6EAB' }} eventKey="22">
                      USP-S
                    </Menu.Item>
                    <Menu.Item style={{ color: 'white', background: '#5D6EAB' }} eventKey="23">
                      Desert Eagle
                    </Menu.Item>
                    <Menu.Item style={{ color: 'white', background: '#5D6EAB' }} eventKey="24">
                      Dual Berettas
                    </Menu.Item>
                  </div>
                </Menu.SubMenu>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="14">
                  Винтовка
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="14">
                  Снайперская винтовка
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="15">
                  Пистолет-пулемет
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="16">
                  Пулемет
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="17">
                  Дробовик
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="18">
                  Нож
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="19">
                  Прочее
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu
                style={{ background: '#131d2c', width: '300px', color: 'white' }}
                key="sub3"
                onTitleClick={toggleIconSecond}
                title={
                  <span
                    style={{
                      color: 'white',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <span>Критерий</span>
                    <Image src={iconStateSecond === 'plusIcon' ? plusIcon : minusIcon} alt="icon" />
                  </span>
                }>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="14">
                  Категория
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="15">
                  Фазы
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="16">
                  Раритетность
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="17">
                  Качество
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </section>
        </div>
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
      </div>
    </aside>
  );
};

export default Sidebar;
