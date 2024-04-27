"use client";
import * as React from "react";
import styles from "./news.module.scss";
import Image from "next/image";
import LeftArrow from "@/left-arrow.svg";
import clsx from "clsx";

const data = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1713145872144-351db3748385?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "🎉 Обновление CSGO уже здесь! 🎉",
    description:
      'Valve объявила о значительных изменениях в режиме "Бой насмерть" в Counter-Strike: Global Offensive. Теперь игроки могут наслаждаться более быстрыми раундами и новой системой наград. Кроме того, внедрены исправления багов, улучшения производительности и оптимизация интерфейса. Подготовьтесь к улучшенному игровому опыту и новым вызовам! Поделитесь своими впечатлениями и стратегиями!',
    hashTags: ["PlayCSGO", "CSGOUpdate"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1713145872144-351db3748385?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "🎉 Обновление CSGO уже здесь! 🎉",
    description:
      'nigga объявила о значительных изменениях в режиме "Бой насмерть" в Counter-Strike: Global Offensive. Теперь игроки могут наслаждаться более быстрыми раундами и новой системой наград. Кроме того, внедрены исправления багов, улучшения производительности и оптимизация интерфейса. Подготовьтесь к улучшенному игровому опыту и новым вызовам! Поделитесь своими впечатлениями и стратегиями!',
    hashTags: ["PlayCSGO", "CSGOUpdate"],
  },
];
const News = React.memo(() => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const innerCarouselContainerRef = React.useRef<HTMLDivElement | null>(null);

  const handleNavigateSlides = React.useCallback(
    (isNextSlide: boolean) => () => {
      const navigate = () =>
        setCurrentSlide(currentSlide + (isNextSlide ? 1 : -1));

      if (isNextSlide) {
        if (!data[currentSlide + 1]) {
          return setCurrentSlide(0);
        }

        navigate();
      } else if (!isNextSlide && currentSlide - 1 >= 0) {
        navigate();
      }
    },
    [currentSlide]
  );

  React.useEffect(() => {
    if (innerCarouselContainerRef.current) {
      console.log("currentSlide", currentSlide);
      const innerCarouselContainer = innerCarouselContainerRef.current;
      innerCarouselContainer.style.transform = `translateX(-${
        currentSlide * 90
      }%)`;
    }
  }, [currentSlide]);

  return (
    <div className={styles.outerWrapper} ref={handleRef}>
      <div className={styles.innerWrapper}>
        <div className={styles.smoke} />
        <div className={clsx(styles.smoke, styles.smoke_delayed)} />
        <div
          ref={innerCarouselContainerRef}
          className={clsx(
            styles.innerCarouselContainer,
            !containerWidth && styles.innerCarouselContainer_loading
          )}
          style={{
            width: `calc(${data.length * 100}%)`,
          }}>
          {!containerWidth ? (
            <div className={styles.loader} />
          ) : (
            data.map(({ imageUrl, title, description, hashTags }, index) => (
              <div
                className={styles.slide}
                key={`slide-${index}`}
                style={{
                  width: containerWidth * 0.9,
                }}>
                {index === currentSlide && (
                  <Image
                    src={LeftArrow}
                    alt="left-arrow"
                    className={styles.slideControl}
                    width={20}
                    height={24}
                    onClick={handleNavigateSlides(false)}
                  />
                )}
                <div
                  className={clsx(
                    styles.image,
                    styles.commonBorderStyles,
                    styles.borderImage
                  )}
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                />
                <div
                  className={clsx(
                    styles.carouselContent,
                    styles.commonBorderStyles,
                    styles.borderText
                  )}>
                  <div className={clsx(styles.text, styles.title)}>
                    {title}
                    {hashTags.map((hashTag, index) => (
                      <span key={hashTag + index} className={styles.chip}>
                        #{hashTag}
                      </span>
                    ))}
                  </div>
                  <div className={clsx(styles.text, styles.description)}>
                    {description}
                  </div>
                </div>
                {index === currentSlide && (
                  <Image
                    src={LeftArrow}
                    alt="left-arrow"
                    className={clsx(
                      styles.slideControl,
                      styles.slideControl_reversed
                    )}
                    width={20}
                    height={24}
                    onClick={handleNavigateSlides(true)}
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
});

export default News;
