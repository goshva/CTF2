import { NextPage } from 'next';
import React from 'react';
import styles from './home.module.scss';
import Image from 'next/image';
import arrowDownIcon from '../../../public/arrowDown.svg';
import SortIcon from '../../../public/SortIcon.svg';
import loopIcon from '../../../../public/loop-chat-icon.svg';
import addPostLargeIcon from '../../../public/AddPostIconLarge.svg';
import avatar from '../../../../public/avatar.png';
import postImage from '../../../public/postImage.png';

// икоки с https://lucide.dev/icons
import { Eye } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Undo2 } from 'lucide-react';

const HomePage: NextPage = () => {
  return (
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
          <Image src={loopIcon} alt="find icon" />
        </div>
      </header>
      <div className={styles.post_container}>
        <div className={styles.addPost}>
          <Image src={addPostLargeIcon} alt="add post icon" />
        </div>
        <div className={styles.PostCard}>
          <article className={styles.top_of_card}>
            <div className={styles.textsInfo}>
              <Image width={40} height={40} src={avatar} alt="avatar" />
              <div>
                <span>@mavrodi</span>
                <p>20мин</p>
              </div>
            </div>
            <button className={styles.subscribe_button}>Подписаться</button>
          </article>
          <div className={styles.content}>
            <div style={{ textAlign: 'center' }}>
              <Image className={styles.postImage} src={postImage} alt="post image" />
            </div>
            <h2 className={styles.title}>Мой личный топ карт CS:GO</h2>
            <article className={styles.icons}>
              <Eye /> <span>128</span> <ThumbsUp /> <span>12</span> <MessageCircle />
              <span>144</span> <Undo2 />
              <span>65</span>
            </article>
          </div>
        </div>
        <div className={styles.PostCard}>
          <article className={styles.top_of_card}>
            <div className={styles.textsInfo}>
              <Image width={40} height={40} src={avatar} alt="avatar" />
              <div>
                <span>@mavrodi</span>
                <p>20мин</p>
              </div>
            </div>
            <button className={styles.subscribe_button}>Подписаться</button>
          </article>
          <div className={styles.content}>
            <div style={{ textAlign: 'center' }}>
              <Image className={styles.postImage} src={postImage} alt="post image" />
            </div>
            <h2 className={styles.title}>Мой личный топ карт CS:GO</h2>
            <article className={styles.icons}>
              <Eye /> <span>128</span> <ThumbsUp /> <span>12</span> <MessageCircle />
              <span>144</span> <Undo2 />
              <span>65</span>
            </article>
          </div>
        </div>
        <div className={styles.PostCard}>
          <article className={styles.top_of_card}>
            <div className={styles.textsInfo}>
              <Image width={40} height={40} src={avatar} alt="avatar" />
              <div>
                <span>@mavrodi</span>
                <p>20мин</p>
              </div>
            </div>
            <button className={styles.subscribe_button}>Подписаться</button>
          </article>
          <div className={styles.content}>
            <div style={{ textAlign: 'center' }}>
              <Image className={styles.postImage} src={postImage} alt="post image" />
            </div>
            <h2 className={styles.title}>Мой личный топ карт CS:GO</h2>
            <article className={styles.icons}>
              <Eye /> <span>128</span> <ThumbsUp /> <span>12</span> <MessageCircle />
              <span>144</span> <Undo2 />
              <span>65</span>
            </article>
          </div>
        </div>
        <div className={styles.PostCard}>
          <article className={styles.top_of_card}>
            <div className={styles.textsInfo}>
              <Image width={40} height={40} src={avatar} alt="avatar" />
              <div>
                <span>@mavrodi</span>
                <p>20мин</p>
              </div>
            </div>
            <button className={styles.subscribe_button}>Подписаться</button>
          </article>
          <div className={styles.content}>
            <div style={{ textAlign: 'center' }}>
              <Image className={styles.postImage} src={postImage} alt="post image" />
            </div>
            <h2 className={styles.title}>Мой личный топ карт CS:GO</h2>
            <article className={styles.icons}>
              <Eye /> <span>128</span> <ThumbsUp /> <span>12</span> <MessageCircle />
              <span>144</span> <Undo2 />
              <span>65</span>
            </article>
          </div>
        </div>
        <div className={styles.PostCard}>
          <article className={styles.top_of_card}>
            <div className={styles.textsInfo}>
              <Image width={40} height={40} src={avatar} alt="avatar" />
              <div>
                <span>@mavrodi</span>
                <p>20мин</p>
              </div>
            </div>
            <button className={styles.subscribe_button}>Подписаться</button>
          </article>
          <div className={styles.content}>
            <div style={{ textAlign: 'center' }}>
              <Image className={styles.postImage} src={postImage} alt="post image" />
            </div>
            <h2 className={styles.title}>Мой личный топ карт CS:GO</h2>
            <article className={styles.icons}>
              <Eye /> <span>128</span> <ThumbsUp /> <span>12</span> <MessageCircle />
              <span>144</span> <Undo2 />
              <span>65</span>
            </article>
          </div>
        </div>
        <div className={styles.PostCard}>
          <article className={styles.top_of_card}>
            <div className={styles.textsInfo}>
              <Image width={40} height={40} src={avatar} alt="avatar" />
              <div>
                <span>@mavrodi</span>
                <p>20мин</p>
              </div>
            </div>
            <button className={styles.subscribe_button}>Подписаться</button>
          </article>
          <div className={styles.content}>
            <div style={{ textAlign: 'center' }}>
              <Image className={styles.postImage} src={postImage} alt="post image" />
            </div>
            <h2 className={styles.title}>Мой личный топ карт CS:GO</h2>
            <article className={styles.icons}>
              <Eye /> <span>128</span> <ThumbsUp /> <span>12</span> <MessageCircle />
              <span>144</span> <Undo2 />
              <span>65</span>
            </article>
          </div>
        </div>
        <div className={styles.PostCard}>
          <article className={styles.top_of_card}>
            <div className={styles.textsInfo}>
              <Image width={40} height={40} src={avatar} alt="avatar" />
              <div>
                <span>@mavrodi</span>
                <p>20мин</p>
              </div>
            </div>
            <button className={styles.subscribe_button}>Подписаться</button>
          </article>
          <div className={styles.content}>
            <div style={{ textAlign: 'center' }}>
              <Image className={styles.postImage} src={postImage} alt="post image" />
            </div>
            <h2 className={styles.title}>Мой личный топ карт CS:GO</h2>
            <article className={styles.icons}>
              <Eye /> <span>128</span> <ThumbsUp /> <span>12</span> <MessageCircle />
              <span>144</span> <Undo2 />
              <span>65</span>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
