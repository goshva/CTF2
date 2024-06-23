'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useCreatePostsMutation, useGetAllPostsQuery } from '@/redux';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import styles from './homeContent.module.scss';
import PostCard from '../PostCard';
import gunIcon from '../../../public/gun-icon.svg';
import cameraIcon from '../../../public/camera-icon.svg';
import playIcon from '../../../public/play-icon.svg';
import fileIcon from '../../../public/file-icon.svg';
import loopIcon from '../../../public/loop-icon.svg';
import activeLoopIcon from '../../../public/active-loop-icon.svg';
import Image from 'next/image';

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

function HomeContent() {
  //@ts-ignore
  const decodedToken = useSelector((state) => state.auth.decodedToken);
  // ============================

  const path = usePathname();
  const [value, setValue] = useState<string>('');
  const buttonRef = useRef<HTMLButtonElement>(null);
  // получение постов
  // const { data = [] as PostType[] } = useGetAllPostsQuery({});

  // console.log('real posts', data);
  const { data = [] as PostFake[] } = useGetAllPostsQuery({});

  // создания поста
  const [addPost, { isError }] = useCreatePostsMutation();

  // для увелечения textarea
  const [isFocused, setIsFocused] = useState(false);

  // для будушего создания поста
  const handleCreatePost = async () => {
    try {
      // await addPost(value).unwrap(); создания нового поста
      let userName = 'Test User';
      let avatar = 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-8.jpg';

      if (decodedToken) {
        userName = decodedToken.displayName || 'Test User';
        avatar = decodedToken.photos ? decodedToken.photos[1].value : avatar;
      }

      const newPost = {
        createdAt: new Date().toISOString(),
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png',
        desc: value,
        user: {
          userName: userName,
          avatar: avatar,
        },
        id: String(Date.now()),
      };
      await addPost(newPost).unwrap();
      console.log('Пост успешно создан');
      alert('Пост успешно создан!');
      setValue('');
      setIsFocused(false);
    } catch (err) {
      console.warn('Ошибка при создании поста', err);
    }
  };

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

  // must remove

  // const [isSmallScreen, setIsSmallScreen] = useState(false);
  // const [isHighScreen, setIsHighScreen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     const height = window.innerHeight;
  //     setIsSmallScreen(width === 1280 && height === 720);
  //     setIsHighScreen(height > 1080);
  //   };

  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  useEffect(() => {
    const body = document.body;

    if (path === '/') {
      window.scrollTo(0, 0);
      body.classList.add('no-scroll-home');
    } else {
      body.classList.remove('no-scroll-home');
    }

    return () => {
      body.classList.remove('no-scroll-home');
    };
  }, [path]);

  useEffect(() => {
    // всегда скролл вверх в home
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className={styles.homeContent}>
        <div style={{ height: isFocused ? '200px' : '120px' }} className={styles.inputBorder}>
          <textarea
            style={{ height: isFocused ? '100px' : '40px' }}
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
        <div
          // style={{
          //   height: isHighScreen ? '' : isFocused ? (isSmallScreen ? '30vh' : '32.5vh') : '',
          // }}
          // style={{ marginTop: '-40px' }}
          className={styles.postsWrapper}>
          <div className={styles.posts_section}>
            {data.map((post: PostFake) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
