'use client';

import { FC, useState, useEffect } from 'react';
import styles from './sidebarFavorites.module.scss';
import Image from 'next/image';
import loopIcon from '@/loop-chat-icon.svg';

const FavoritesSidebar: FC = () => {

  return (
      <aside className={styles.sidebar}>
        <div className={styles.middleSide}>
          <div className={styles.chatSelect}>
            <div className={styles.findUser}>
              <div className={styles.search}>
                <Image src={loopIcon} alt="loop" />
                <input type="text" placeholder="Найти в списке избранного" />
              </div>
              <div className={styles.downLine}></div>
            </div>
           <div>
             Здень пихаем карточки с избранным и кнопками "купить" и "удалить из избранного"
           </div>
          </div>
        </div>
      </aside>
  );
};

export default FavoritesSidebar;
