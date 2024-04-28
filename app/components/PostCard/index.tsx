import React from 'react';
import styles from './postCard.module.scss';
import Image from 'next/image';
import avatar from '../../../public/avatar.png';
import postCardImage from '../../../public/postImage.png';

// икоки с https://lucide.dev/icons
import { Eye } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Undo2 } from 'lucide-react';

function PostCard() {
  return (
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image className={styles.postImage} src={postCardImage} alt="post image" />
        </div>
        <h2 className={styles.title}>Мой личный топ карт CS:GO</h2>
        <article className={styles.icons}>
          <Eye /> <span>128</span> <ThumbsUp /> <span>12</span> <MessageCircle />
          <span>144</span> <Undo2 />
          <span>65</span>
        </article>
      </div>
    </div>
  );
}

export default PostCard;
