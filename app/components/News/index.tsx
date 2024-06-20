'use client';
import * as React from 'react';
import styles from './news.module.scss';
import Image from 'next/image';
import LeftArrow from '@/left-arrow.svg';
import RightArrow from '@/right-arrow.svg';

const images = [
  'https://cdn.esportfire-services.com/web/assets/images/partners/skinport/CSGO_Banner_Tall.png',
  'https://csgocaseopening.com/wp-content/uploads/2022/11/csgo-cases.jpg.webp',
  'https://blog.scope.gg/content/images/2021/02/ceb7e6ae311eba8c0e764abb4f8be.jpeg',
  'https://www.videogamer.com/wp-content/uploads/counter-strike-2-ranks-rating-maps.jpg',
  'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/27a18038293935.575c35f30e6d9.png',
  'https://i0.wp.com/5ergiveaways.com/wp-content/uploads/2019/06/Twitch-Cover.png?fit=1200%2C380&ssl=1',
  'https://csgo-news.com/wp-content/uploads/2023/07/em-1200x500.jpg',
  'https://esportsafricanews.com/wp-content/uploads/2022/07/IMG_0000049_OUTLAWS_CSGO_TEAM-1024x576.jpg',
  'https://egw.news/cache/1/16/750/1642748639847-16x9.jpg',
];

const News = React.memo(() => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleArrow = (direction: string) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }
    if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1,
      );
    }, 10000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  });

  return (
    <div className={styles.outerWrapper}>
      <section className={styles.newsContainer}>
        <div className={styles.bigNews}>
          <button onClick={() => handleArrow('left')} className={styles.leftArrow}>
            <Image src={LeftArrow} alt="arrow icon" />
          </button>

          <div
            className={styles.imagesContainer}
            style={{ transform: `translateX(${-800 * currentIndex}px)` }}>
            {images.map((img, index) => (
              <article key={index} className={styles.imageWrapper}>
                <Image
                  className={styles.advertiseImage}
                  width={800}
                  height={180}
                  quality={100}
                  src={img}
                  alt={`Slide img #${index}`}
                />
              </article>
            ))}
          </div>
          <button onClick={() => handleArrow('right')} className={styles.rightArrow}>
            <Image src={RightArrow} alt="arrow icon" />
          </button>
        </div>
      </section>
    </div>
  );
});

export default News;
