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
import { PostType, PostFake } from '@/(root)/(home)/page';
import { format } from 'timeago.js';

interface PropsTypes {
  post: PostType;
  // post: PostFake;
}

const PostCard: React.FC<PropsTypes> = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.highContent}>
        <div className={styles.avatar}>
          <Image width={52} height={52} src={post.author.avatar} alt={`user avatar`} />
          {/* <Image width={52} height={52} src={post.user.avatar} alt={`user avatar`} /> */}
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userText}>
            <span className={styles.userName}>{post.author.name}</span>
            {/* <span className={styles.userName}>{post.user.userName}</span> */}
            <span className={styles.greyText}>@{post.author.name}</span>
            {/* <span className={styles.greyText}>@{post.user.userName}</span> */}
            <span className={styles.dot}>.</span>
            <span className={styles.createdAt}>{format(post.createdAt)}</span>
          </div>
          <div className={styles.desc}>{post.content}</div>
          {/* <div className={styles.desc}>{post.desc}</div> */}
        </div>
      </div>
      <div className={styles.postImage}>
        <Image width={700} height={335} src={post.img} alt={`post image by ${post.author.name}`} />
        {/* <Image
          width={700}
          height={335}
          src={post.image}
          alt={`post image by ${post.user.userName}`}
        /> */}
        {/* <Image
          width={700}
          height={335}
          src="https://t4.ftcdn.net/jpg/00/29/58/35/360_F_29583591_X7JT61mF9lWzWxbn6laV00qVeuSzegr1.jpg"
          // alt={`post image by ${post.author.name}`}
          alt={`post image by ${post.user.userName}`}
        /> */}
      </div>
      <section className={styles.icons}>
        <article className={styles.icon}>
          <MessageCircle style={{ cursor: 'pointer' }} color="#8a98a4" />
          {/* <span>{post?.comments.length === 0 ? '0' : post?.comments.length}</span> */}
          <span>0</span>
        </article>
        <article className={styles.icon}>
          <Share style={{ cursor: 'pointer' }} color="#8a98a4" />
          <span>0</span>
        </article>
        <article className={styles.icon}>
          <Heart style={{ cursor: 'pointer' }} color="#8a98a4" />
          {/* <span>{post?._count.likes === 0 ? '0' : post?._count.likes}</span> */}
          <span>0</span>
        </article>
      </section>
    </div>
  );
};

export default PostCard;
