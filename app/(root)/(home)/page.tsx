'use client';

import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
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

interface AuthorType {
  id: string;
  name: string;
  avatar: string;
}

interface TagsType {
  id: string;
  name: string;
  createdAt: string;
}

interface ThemeType {
  id: string;
  name: string;
  createdAt: string;
}

type CountType = {
  likes: number;
};

export interface PostType {
  id: string;
  createdAt: string;
  content: string;
  img: string;
  authorId: string;
  themeId: string;
  author: AuthorType;
  comments: string[];
  tags: TagsType;
  theme: ThemeType;
  _count: CountType;
}

// for fake api
interface UserFake {
  userName: string;
  avatar: string;
}

export interface PostFake {
  createdAt: string;
  image: string;
  desc: string;
  user: UserFake;
  id: string;
}

const HomePage: NextPage = () => {
  const [value, setValue] = useState<string>('');
  const buttonRef = useRef<HTMLButtonElement>(null);
  // получение постов
  // const { data = [] as PostType[] } = useGetAllPostsQuery({});
  const { data = [] as PostFake[] } = useGetAllPostsQuery({});

  // создания поста
  const [addPost, { isError }] = useCreatePostsMutation();

  // для будушего создания поста
  const handleCreatePost = async () => {
    try {
      // await addPost(value).unwrap(); создания нового поста
      console.log('Пост успешно создан');
      setValue('');
    } catch (err) {
      console.warn('Ошибка при создании поста', err);
    }
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (buttonRef.current && buttonRef.current.contains(e.relatedTarget as Node)) {
      return;
    }
    setIsFocused(false);
  };

  console.log('post', data);

  return (
    <div className={styles.home}>
      <div className="flex">
        <HomeSidebar />
        <div className={styles.homeContent}>
          <div style={{ height: isFocused ? '280px' : '140px' }} className={styles.inputBorder}>
            <textarea
              style={{ height: isFocused ? '170px' : '40px' }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Написать пост"
            />
            <div className={styles.line}></div>
            <article className={styles.downContent}>
              <div className={styles.icons}>
                <Image src={cubeIcon} alt="icon" />
                <Image src={clockIcon} alt="icon" />
                <Image src={smileIcon} alt="icon" />
              </div>
              <button ref={buttonRef} onClick={handleCreatePost}>
                Отправить
              </button>
            </article>
          </div>

          <article className={styles.advertisingBlock}>
            <Image
              src="https://skincashier.com/blog/wp-content/uploads/sites/9/2020/07/csgo-skins-economy-800x450.jpg"
              alt="advertising"
              layout="fill"
            />
          </article>

          {/* Контейнер для постов */}
          <div style={{ marginTop: isFocused ? '0px' : '-160px' }} className={styles.postsWrapper}>
            <div className={styles.posts_section}>
              {data.map((post: PostFake) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <article className={styles.advertisingBlock}>
            <Image
              src="https://mir-s3-cdn-cf.behance.net/projects/404/4088ae195194999.Y3JvcCw5ODEsNzY3LDQ4LDM0.jpg"
              alt="advertising"
              layout="fill"
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
