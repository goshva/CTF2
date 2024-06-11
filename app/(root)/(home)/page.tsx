'use client';

import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import styles from './home.module.scss';
import Image from 'next/image';
import PostCard from '@/components/PostCard';
import gunIcon from '../../../public/gun-icon.svg';
import cameraIcon from '../../../public/camera-icon.svg';
import playIcon from '../../../public/play-icon.svg';
import fileIcon from '../../../public/file-icon.svg';
import HomeSidebar from '@/components/HomeSidebar';
import { useGetAllPostsQuery, useCreatePostsMutation } from '@/redux';
import loopIcon from '../../../public/loop-icon.svg';
import activeLoopIcon from '../../../public/active-loop-icon.svg';
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
  const { data = [] as PostType[] } = useGetAllPostsQuery({});

  console.log('real posts', data);
  // const { data = [] as PostFake[] } = useGetAllPostsQuery({});

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

  const [searchOpened, setSearchOpened] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setSearchOpened(false);
    }
  };

  useEffect(() => {
    if (searchOpened) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpened]);

  return (
    <div className={styles.home}>
      <div className="flex">
        <HomeSidebar />
        <div className={styles.homeContent}>
          <div style={{ height: isFocused ? '280px' : '140px' }} className={styles.inputBorder}>
            {/* <div style={{ height: '280px' }} className={styles.inputBorder}> */}
            <textarea
              style={{ height: isFocused ? '170px' : '40px' }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Написать пост"
            />
            <div ref={searchRef}>
              {!searchOpened && (
                <div onClick={() => setSearchOpened(!searchOpened)} className={styles.searchBox}>
                  <Image src={loopIcon} alt="loopIcon" />
                </div>
              )}
              {searchOpened && (
                <div className={styles.inputBlock}>
                  <Image
                    onClick={() => setSearchOpened(!searchOpened)}
                    src={activeLoopIcon}
                    alt="loopIcon"
                  />
                  <input placeholder="Search by posts" type="text" />
                </div>
              )}
            </div>
            <div className={styles.line}></div>
            <article className={styles.downContent}>
              <div className={styles.icons}>
                <Image src={cameraIcon} alt="icon" />
                <Image src={playIcon} alt="icon" />
                <Image src={fileIcon} alt="icon" />
                <Image src={gunIcon} alt="icon" />
              </div>
              <button ref={buttonRef} onClick={handleCreatePost}>
                Отправить
              </button>
            </article>
          </div>

          {/* Контейнер для постов */}
          <div style={{ marginTop: isFocused ? '-40px' : '-23px' }} className={styles.postsWrapper}>
            <div className={styles.posts_section}>
              {data.map((post: PostType) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* может пригодиться в будущем */}
          {/* <article className={styles.advertisingBlock}>
            <Image
              src="https://mir-s3-cdn-cf.behance.net/projects/404/4088ae195194999.Y3JvcCw5ODEsNzY3LDQ4LDM0.jpg"
              alt="advertising"
              layout="fill"
            />
          </article> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
