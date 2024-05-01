import { NextPage } from 'next';
import React from 'react';
import styles from './home.module.scss';
import Image from 'next/image';
import arrowDownIcon from '../../../public/arrowDown.svg';
import SortIcon from '../../../public/SortIcon.svg';
import addPostLargeIcon from '../../../public/AddPostIconLarge.svg';
import PostCard from '@/components/PostCard';
import arrowIcon from '../../../public/down-arrow.svg';
import cubeIcon from '../../../public/cube-icon.svg';
import clockIcon from '../../../public/clock-icon.svg';
import smileIcon from '../../../public/smile-emoji.svg';
import HomeSidebar from '@/components/HomeSidebar';

const HomePage: NextPage = () => {
  return (
    <div className="container-fluid mt-[20px]">
      <div className="row">
        <div className="col-3">
          <HomeSidebar />
        </div>
        <div className="col-8">
          <div className={styles.wrapper}>
            <div className={styles.home}>
              {/* Закомментированный код для заголовка */}
              <div className={styles.inputBorder}>
                <button>
                  Everyone <Image src={arrowIcon} alt="arrow image" />
                </button>
                <textarea placeholder="What about post of trade?" />
                <div className={styles.line}></div>
                <article className={styles.downContent}>
                  <div className={styles.icons}>
                    <Image src={cubeIcon} alt="icon" />
                    <Image src={clockIcon} alt="icon" />
                    <Image src={smileIcon} alt="icon" />
                  </div>
                  <button>Post</button>
                </article>
              </div>
              {/* Контейнер для постов */}
              <div className={styles.post_container}>
                {/* Набор постов */}
                <div className={styles.posts_wrapper}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className={styles.posts_section}>
                      <PostCard />
                      <PostCard />
                      <PostCard />
                      <PostCard />
                      <PostCard />
                      <PostCard />
                      <PostCard />
                      <PostCard />
                      <PostCard />
                    </div>
                  </div>
                </div>
              </div>

              {/* Ввод иконок и кнопки для создания поста */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
