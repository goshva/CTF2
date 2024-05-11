'use client'

import { FC, useState, useEffect } from "react";
import styles from "./sidebar.module.scss";
import profileAvatar from "../../../public/profile.svg";
import Image from "next/image";
import accauntIcon from "../../../public/Account.svg";
import settingsIcon from "../../../public/settings-1.svg";
import plusIcon from "../../../public/plus.svg";
import minusIcon from "../../../public/minus.svg";
import { Badge, Menu } from "antd";
import type { InputNumberProps } from "antd";
import { Col, InputNumber, Row, Slider, Space } from "antd";
import { Button, Flex } from "antd";
import steamIcon from "../../../public/steam-icon.svg";
import type { MenuProps } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import avatar from "../../../public/avatar.png";
import UserChatItem from "../UserChatItem";
import loopIcon from "../../../public/loop-chat-icon.svg";
// import 'antd/dist/antd.css'; временно удалено
// import { StyleProvider } from '@ant-design/cssinjs';
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import { useGetFriendListQuery } from "../../redux";
import { useTranslations } from "next-intl";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
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
  const [iconState, setIconState] = useState("plusIcon");
  const [iconStateSecond, setIconStateSecond] = useState("plusIcon");
  const [inputValue, setInputValue] = useState(parseFloat("0.000"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const [decodedToken, setDecodedToken] = useState<any>("");
  const [loadingCookies, setLoadingCookies] = useState(true);
  const [friendCount, setFriendCount] = useState<any>("");

  const t = useTranslations()

  const jwtToken = Cookies.get("jwt");
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
  const [pistolState, setPistolState] = useState("plusIcon");

  const onChange: InputNumberProps["onChange"] = (newValue) => {
    setInputValue(newValue as number);
  };

  const toggleIcon = () => {
    setIconState(iconState === "plusIcon" ? "minusIcon" : "plusIcon");
  };

  const toggleIconSecond = () => {
    setIconStateSecond(
      iconStateSecond === "plusIcon" ? "minusIcon" : "plusIcon"
    );
  };

  const toggleIconPistol = () => {
    setPistolState(pistolState === "plusIcon" ? "minusIcon" : "plusIcon");
  };

  const handleOpenProfile = () => {
    window.location.href = "https://countertrade.vit.ooo/v1/auth/steam";
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 1500);
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

  // adding steam button

  const items: MenuItem[] = [
    getItem(
      <span
        onClick={toggleIcon}
        style={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <span>{t('productType')} (переименовать)</span>
        <Image
          src={iconState === "plusIcon" ? plusIcon : minusIcon}
          alt="icon"
        />
      </span>,
      "sub1",
      null,
      [
        getItem(
          <span
            onClick={toggleIconPistol}
            style={{
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <span>{t('pistol')}</span>
            <Image
              src={pistolState === "plusIcon" ? plusIcon : minusIcon}
              alt="icon"
            />
          </span>,
          "sub3",
          null,
          [
            getItem("Все пистолеты", "13"),
            getItem("Five-Seven", "14"),
            getItem("Glock-18", "15"),
            getItem("P2000", "16"),
            getItem("P250", "17"),
            getItem("R8 Revolver", "18"),
            getItem("Tec-9", "19"),
            getItem("CZ75-Auto", "21"),
            getItem("USP-S", "22"),
            getItem("Desert Eagle", "23"),
            getItem("Dual Berettas", "24"),
          ]
        ),
        getItem(
          <span>{t('rifle')}</span>,
          "sub4",
          <div
            onClick={toggleIconPistol}
            style={{ position: "absolute", right: "30px" }}>
            <Image
              src={pistolState === "plusIcon" ? plusIcon : minusIcon}
              alt="icon"
            />
          </div>,
          [getItem("Пусто", "25")]
        ),
        getItem(
          <span>{t('sniperRifle')}</span>,
          "sub5",
          <div
            onClick={toggleIconPistol}
            style={{ position: "absolute", right: "30px" }}>
            <Image
              src={pistolState === "plusIcon" ? plusIcon : minusIcon}
              alt="icon"
            />
          </div>,
          [getItem("Пусто", "26")]
        ),
        getItem(
          <span>{t('subGun')}</span>,
          "sub6",
          <div
            onClick={toggleIconPistol}
            style={{ position: "absolute", right: "30px" }}>
            <Image
              src={pistolState === "plusIcon" ? plusIcon : minusIcon}
              alt="icon"
            />
          </div>,
          [getItem("Пусто", "27")]
        ),
        getItem(
          <span>{t('machineGun')}</span>,
          "sub7",
          <div
            onClick={toggleIconPistol}
            style={{ position: "absolute", right: "30px" }}>
            <Image
              src={pistolState === "plusIcon" ? plusIcon : minusIcon}
              alt="icon"
            />
          </div>,
          [getItem("Пусто", "28")]
        ),
        getItem(
          <span>{t('shotgun')}</span>,
          "sub8",
          <div
            onClick={toggleIconPistol}
            style={{ position: "absolute", right: "30px" }}>
            <Image
              src={pistolState === "plusIcon" ? plusIcon : minusIcon}
              alt="icon"
            />
          </div>,
          [getItem("Пусто", "29")]
        ),
        getItem(
          <span>{t('knife')}</span>,
          "sub9",
          <div
            onClick={toggleIconPistol}
            style={{ position: "absolute", right: "30px" }}>
            <Image
              src={pistolState === "plusIcon" ? plusIcon : minusIcon}
              alt="icon"
            />
          </div>,
          [getItem("Пусто", "30")]
        ),
        getItem(
          <span>{t('other')}</span>,
          "sub10",
          <div
            onClick={toggleIconPistol}
            style={{ position: "absolute", right: "30px" }}>
            <Image
              src={pistolState === "plusIcon" ? plusIcon : minusIcon}
              alt="icon"
            />
          </div>,
          [getItem("Пусто", "31")]
        ),
        // getItem('Снайперская винтовка', '25'),
        // getItem('Пистолет-пулемет', '26'),
        // getItem('Пулемет', '27'),
        // getItem('Дробовик', '28'),
        // getItem('Нож', '29'),
        // getItem('Прочее', '30'),
      ]
    ),
    getItem(
      <span
        onClick={toggleIconSecond}
        style={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <span>Критерий</span>
        <Image
          src={iconStateSecond === "plusIcon" ? plusIcon : minusIcon}
          alt="icon"
        />
      </span>,
      "sub11",
      null,
      [
        getItem("Категория", "33"),
        getItem("Фазы", "34"),
        getItem("Раритетность", "35"),
        getItem("Качество", "36"),
      ]
    ),
  ];


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
              {t('loading')}
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
              style={{ textDecoration: "none" }}>
              <Button
                onClick={handleOpenProfile}
                className={styles.steam_btn}
                type="primary"
                loading={loadings[0]}
                onClickCapture={() => enterLoading(0)}>
                <Image src={steamIcon} alt="steam icon" />
                {t('clickMe')}
              </Button>
            </Link>
          </div>
        )}
        {isAuthenticated && (
          <>
            <div className={styles.avatar}>
              <Image
                src={
                  decodedToken.photos[1] == ""
                    ? ""
                    : decodedToken.photos[1].value
                }
                alt="avatar"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <section>
              <article className={styles.name_email_content}>
                <h3>
                  {decodedToken
                    ? decodedToken.displayName.length > 12
                      ? decodedToken.displayName.slice(0, 12) + "..."
                      : decodedToken.displayName
                    : "<div>Username</div>"}
                </h3>
                <div className={styles.line}></div>
                <p>{decodedToken.id}</p>
              </article>
              <article className={styles.user_info}>
                <p>Moscow, Russia</p>
                <p className={styles.friends_count}>{friendCount}{t('friends')}</p>
              </article>
              <article className={styles.desc}>
                <p>
                  Status: Не бойся противника, который практикует 10,000 ударов.
                  Бойся того, кто практикует один удар 10,000 раз.
                </p>
              </article>
              <footer className={styles.downContnet}>
                <div className={styles.links}>
                  <h3>{t('inventory')}</h3>
                  <h3>STEAM</h3>
                  <h3>{t('myLinks')}</h3>
                  <h3>{t('write')}</h3>
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
        {pathname === "/" && (
          <div className={styles.select_wrapper}>
            <section className={styles.select_section}>
              {/* <Menu
              style={{ width: 256, background: 'none', border: 'none' }}
              // defaultSelectedKeys={['1']}
              // defaultOpenKeys={['sub1']}
              mode="inline">
              <Menu.SubMenu
                style={{ background: '#131d2c', width: '300px', color: 'white' }}
                onTitleClick={toggleIcon}
                key="sub1"
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
                  key="sub2"
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
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="25">
                  Снайперская винтовка
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="26">
                  Пистолет-пулемет
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="27">
                  Пулемет
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="28">
                  Дробовик
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="29">
                  Нож
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="30">
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
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="31">
                  Категория
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="32">
                  Фазы
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="33">
                  Раритетность
                </Menu.Item>
                <Menu.Item style={{ color: 'white', background: '#243766' }} eventKey="34">
                  Качество
                </Menu.Item>
              </Menu.SubMenu>
            </Menu> */}
              <Menu
                style={{ width: 300, background: "none", border: "none" }}
                mode="inline"
                theme="dark"
                items={items}
              />
            </section>
          </div>
        )}

        {pathname === "/chat" && (
          <div className={styles.chatSelect}>
            <div className={styles.findUser}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Image src={loopIcon} alt="loop" />
                <input type="text" placeholder={t('search')} />
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

        {pathname === "/" && (
          <div className={styles.float}>
            <div className={styles.float_content}>
              <h2>{t('float')}</h2>
              <h2 className={styles.valueText}>{inputValue.toFixed(3)}</h2>
              <Col span={8}>
                <Slider
                  min={0.0}
                  max={1000}
                  onChange={onChange}
                  value={typeof inputValue === "number" ? inputValue : 0}
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
