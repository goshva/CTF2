import { NextPage } from 'next';
import React from 'react';
import styles from './home.module.scss';
import Image from 'next/image';
import arrowDownIcon from '../../../public/arrowDown.svg';
import SortIcon from '../../../public/SortIcon.svg';
import loopIcon from '../../../../public/loop-chat-icon.svg';
import addPostLargeIcon from '../../../public/AddPostIconLarge.svg';
import PostCard from '@/components/PostCard';
import arrowIcon from '../../../public/down-arrow.svg';
import cubeIcon from '../../../public/cube-icon.svg';
import clockIcon from '../../../public/clock-icon.svg';
import smileIcon from '../../../public/smile-emoji.svg';
import avatar from '../../../public/avatar.png';
import postImage from '../../../public/postImage.png';
import { Heart, MessageCircle, Share } from 'lucide-react';

const HomePage: NextPage = () => {
  return (
    <div className={styles.home}>
      {/* <header className={styles.header}>
        <button>
          <div className={styles.dateText}>
            <Image src={arrowDownIcon} alt="arrow icon" />
            <span>Date</span>
          </div>
          <div>
            <Image src={SortIcon} alt="sort icon" />
          </div>
        </button>
        <div className={styles.input_container}>
          <input type="text" />
          <Image src={loopIcon} alt="find icon" />
        </div>
      </header>
      <div className={styles.post_container}>
        <div className={styles.addPost}>
          <Image src={addPostLargeIcon} alt="add post icon" />
        </div>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div> */}
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
      <div className={styles.posts_wrapper}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
  );
};

export default HomePage;
