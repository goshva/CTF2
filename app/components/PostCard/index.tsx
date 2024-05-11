import React from 'react';
import styles from './postCard.module.scss';
import Image from 'next/image';
import avatar from '../../../public/avatar.png';
import postCardImage from '../../../public/postImage.png';

// икоки с https://lucide.dev/icons
import { Eye, Heart, Share } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Undo2 } from 'lucide-react';

// icons
import cubeIcon from '../../../public/cube-icon.svg';
import clockIcon from '../../../public/clock-icon.svg';
import smileIcon from '../../../public/smile-emoji.svg';
import arrowIcon from '../../../public/arrowDown.svg';
import { PostType } from '@/(root)/(home)/page';
import { format } from 'timeago.js';

interface PropsTypes {
  post: PostType;
}

const PostCard: React.FC<PropsTypes> = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.highContent}>
        <div className={styles.avatar}>
          <img width={52} height={52} src={post.user.avatar} alt={`user image`} />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userText}>
            <span className={styles.userName}>{post.user.userName}</span>
            <span className={styles.greyText}>@{post.user.userName}</span>
            <span className={styles.dot}>.</span>
            <span className={styles.createdAt}>{format(post.createdAt)}</span>
          </div>
          <div className={styles.desc}>{post.desc}</div>
        </div>
      </div>
      <div className={styles.postImage}>
        <Image
          width={700}
          height={335}
          src={post.image}
          alt={`post image by ${post.user.userName}`}
        />
      </div>
      <article className={styles.icons}>
        <article className={styles.icon}>
          <MessageCircle style={{ cursor: 'pointer' }} color="#8a98a4" />
          <span>32</span>
        </article>
        <article className={styles.icon}>
          <Share style={{ cursor: 'pointer' }} color="#8a98a4" />
          <span>4</span>
        </article>
        <article className={styles.icon}>
          <Heart style={{ cursor: 'pointer' }} color="#8a98a4" />
          <span>312</span>
        </article>
      </article>
    </div>
  );
};

export default PostCard;
