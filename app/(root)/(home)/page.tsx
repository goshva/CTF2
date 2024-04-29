import { NextPage } from 'next';
import React from 'react';
import styles from './home.module.scss';
import Image from 'next/image';
import arrowDownIcon from '../../../public/arrowDown.svg';
import SortIcon from '../../../public/SortIcon.svg';
// import loopIcon from '../../../../public/loop-chat-icon.svg';
import addPostLargeIcon from '../../../public/AddPostIconLarge.svg';
import PostCard from '@/components/PostCard';
import HomeSidebar from '@/components/HomeSidebar';

const HomePage: NextPage = () => {
  return (
    <div className="container-fluid mt-[20px]">
    <div className="row">
      <div className="col-3">
        <HomeSidebar />
      </div>
      <div className="col-9">
      <div className={styles.wrapper} style={{height: '600px' }}>
      <div className={styles.home}>
      <header className={styles.header}>
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
          {/* <Image src={loopIcon} alt="find icon" /> */}
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
      </div>
    </div>
      </div>
      </div>
    </div>
  </div>
  );
};

export default HomePage;
