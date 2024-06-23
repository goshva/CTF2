"use client";

import { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import styles from "./gun.module.scss";
import Ruble from "@/rubleicon.svg";
import AK47 from "../../../public/ak-47 1.png";
import Image from "next/image";
import GreyElipce from "@/greyelipce.svg";
import LeftArrow from "@/left-arrow.svg";
import Profile from "@/profilenew.svg";
import Balance from "@/components/Balance";
const GunCard: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.flexgun}>
        <div className={styles.navigate}>
          <button className={styles.leftArrow}>
            <Image src={LeftArrow} alt="arrow icon" />
          </button>
          <a>Back</a>
          <Image src={GreyElipce} alt="elipce"></Image>
          <a>Market</a>
          <Image src={GreyElipce} alt="elipce"></Image>
          <a>About the skin</a>
        </div>
        <div className={styles.guncard}>
          <Image src={AK47} alt="ak47"></Image>
          <div className={styles.buttonline}>
            <button className={styles.gunbuttons}>View in game</button>
            <button className={styles.gunbuttons}>View in game</button>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.middleSide}>
            <div className={styles.home_sideBar}>
              <div className={styles.webTitle}>
                <h2>buff 163 chart</h2>
              </div>
              <nav className={styles.router_section}>
                <ul className={styles.links}></ul>
              </nav>
            </div>
          </div>
        </aside>
        <aside className={styles.sidebar}>
          <div className={styles.middleSide}>
            <div className={styles.home_sideBar}>
              <div className={styles.webTitle}>
                <h2>price history</h2>
              </div>
              <nav className={styles.router_section}>
                section under development
                <ul className={styles.links}></ul>
              </nav>
            </div>
          </div>
        </aside>
      </div>
      <div className={styles.equal}>
        <button>8,7</button>
      </div>

      <div className={styles.info}>
        <div className={styles.descriptiongun}>
          <div>
            <div className={styles.upperdesc}>
              <div>
                <a className={styles.guntitle}>АК-47</a>
                <p>
                  Silver color code. Silver RGB color code; Silver color chart.
                  Silver RGB color code. Silver RGB color code = #C0C0C0 ={" "}
                  <br />
                  192Silver color code. Silver RGB color code; Silver color
                  chart. Silver RGB color code. Silver <br /> RGB color code =
                  #C0C0C0 = 192
                </p>
              </div>
            </div>

            <div className={styles.downdescription}>
              <div className={styles.pricedescription}>
                <a>14.2565</a>
                <Image src={Ruble} alt="ruble"></Image>
              </div>
              <div className={styles.pricebuttons}>
                <button>Fast buy</button>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <Balance />
          </div>
        </div>

        <div className={styles.blocks}>
          <div className={styles.firstblock}>
            <aside className={styles.sidebarinfo}>
              <div className={styles.middleSide}>
                <div className={styles.home_sideBar}>
                  <div className={styles.webTitle}>
                    <h2>USER PROFILE</h2>
                  </div>
                  <nav className={styles.router_section}>
                    <div className={styles.userInfo_container}>
                      <div className={styles.avatar}>
                        <Image
                          width={50}
                          height={50}
                          src={Profile}
                          alt="avatar"
                        />
                      </div>
                      <div className={styles.textInfo}>
                        <h2>User Name</h2>
                        <p>status</p>

                        <div>
                          {" "}
                          <p>
                            Transferability <span>- 90%</span>
                          </p>
                          <p>
                            {" "}
                            Average transfer time <span>- 50 minet</span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <ul className={styles.links}></ul>
                  </nav>
                </div>
              </div>
            </aside>
            <aside className={styles.sidebarinfo}>
              <div className={styles.middleSide}>
                <div className={styles.home_sideBar}>
                  <div className={styles.webTitle}>
                    <h2>AUCTION</h2>
                  </div>
                  <nav className={styles.router_section}>
                    <ul className={styles.links}></ul>
                  </nav>
                </div>
              </div>
            </aside>
          </div>
          <div className={styles.nextblock}>
            <aside className={styles.sidebarinfo}>
              <div className={styles.middleSide}>
                <div className={styles.home_sideBar}>
                  <div className={styles.webTitle}>
                    <h2>OTHER OFFERS</h2>
                  </div>
                  <nav className={styles.router_section}>
                    <ul className={styles.links}></ul>
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GunCard;
