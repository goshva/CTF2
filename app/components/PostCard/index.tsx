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

function PostCard() {
  return (
    // <div className={styles.PostCard}>
    //   <article className={styles.top_of_card}>
    //     <div className={styles.textsInfo}>
    //       <Image width={40} height={40} src={avatar} alt="avatar" />
    //       <div>
    //         <span>@mavrodi</span>
    //         <p>20мин</p>
    //       </div>
    //     </div>
    //     <button className={styles.subscribe_button}>Подписаться</button>
    //   </article>
    //   <div className={styles.content}>
    //     <div style={{ display: 'flex', justifyContent: 'center' }}>
    //       <Image className={styles.postImage} src={postCardImage} alt="post image" />
    //     </div>
    //     <h2 className={styles.title}>Мой личный топ карт CS:GO</h2>
    //     <article className={styles.icons}>
    //       <Eye /> <span>128</span> <ThumbsUp /> <span>12</span> <MessageCircle />
    //       <span>144</span> <Undo2 />
    //       <span>65</span>
    //     </article>
    //   </div>
    // </div>
    <div className={styles.post_card}>
      <article className={styles.high_content}>
        <Image className={styles.avatar} src={avatar} alt="avatar" />
        <div className="mt-10 mb-2">
          <div className={styles.infoTexts}>
            <span className={styles.userName}>Profile Name</span>
            <span className={styles.greyText}>@profie name</span>
            <span className={styles.dot}>.</span>
            <span className={styles.greyText}>18h</span>
          </div>
          <div className={styles.desc}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's: bit.ly/2kvf6yj
            </p>
          </div>
          <Image
            className={styles.postImage}
            width={700}
            height={350}
            src="https://www.skinwallet.com/csgo/wp-content/uploads/2020/04/mugshot-1.png"
            alt="post image"
          />
          <div className={styles.postIcons}>
            <article className={styles.comments}>
              <MessageCircle style={{ cursor: 'pointer' }} color="#8a98a4" />
              <span>32</span>
            </article>
            <article className={styles.share}>
              <Share style={{ cursor: 'pointer' }} color="#8a98a4" />
              <span>4</span>
            </article>
            <article className={styles.like}>
              <Heart style={{ cursor: 'pointer' }} color="#8a98a4" />
              <span>312</span>
            </article>
          </div>
          {/* <div className={styles.commentSection}>
            <div className={styles.comment_input}>
              <textarea placeholder="Write comment..." />
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
            <article className={styles.userComment}>
              <div className={styles.content_comment}>
                <Image
                  style={{ width: '52px', height: '52px' }}
                  className={styles.commentAvatar}
                  src={avatar}
                  alt="Avatar"
                />
                <div className={styles.infoTexts}>
                  <span className={styles.userName}>Profile Name</span>
                  <span className={styles.greyText}>@profie name</span>
                  <span className={styles.dot}>.</span>
                  <span className={styles.greyText}>18h</span>
                </div>
                <article style={{ width: '200px' }}>
                  <p className={styles.comment}>комментарий тип</p>
                </article>
              </div>
            </article>
          </div> */}
        </div>
      </article>
    </div>
  );
}

export default PostCard;
