'use client';

import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
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
import { useGetAllPostsQuery, useCreatePostsMutation } from '@/redux';
// import axios from '../../axios'; для реальных  постов их сервера

interface UserType {
  userName: string;
  avatar: string;
}

export interface PostType {
  createdAt: string;
  image: string;
  desc: string;
  user: UserType;
  id: string;
}

const HomePage: NextPage = () => {
  const [value, setValue] = useState<string>('');
  // получение постов
  const { data = [] as PostType[] } = useGetAllPostsQuery({});

  // создания поста
  const [addPost, { isError }] = useCreatePostsMutation();

  // для будушего создания поста
  const handleCreatePost = async () => {
    setValue('');
    try {
      // await addPost(value).unwrap(); создания нового поста
      console.log('Пост успешно создан');
    } catch (err) {
      console.warn('Ошибка при создании поста', err);
    }
  };

  return (
    <div className={styles.home}>
      <div className="flex">
        <HomeSidebar />
        <div className={styles.home}>
          <div className={styles.inputBorder}>
            <button>
              Everyone <Image src={arrowIcon} alt="arrow image" />
            </button>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="What about post of trade?"
            />
            <div className={styles.line}></div>
            <article className={styles.downContent}>
              <div className={styles.icons}>
                <Image src={cubeIcon} alt="icon" />
                <Image src={clockIcon} alt="icon" />
                <Image src={smileIcon} alt="icon" />
              </div>
              <button onClick={handleCreatePost}>Post</button>
            </article>
          </div>
          {/* Контейнер для постов */}
          <div className={styles.posts_wrapper}>
            <div className={styles.posts_section}>
              {data.map((post: PostType) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
