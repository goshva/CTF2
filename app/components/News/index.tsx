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
    <div className={styles.carousel}>
      <div
        ref={innerCarouselContainerRef}
        className={styles.innerCarouselContainer}
        style={
          {
            // width: `calc(${data.length * 100}%)`,
          }
        }
      >
        {data.map(({ imageUrl, title, description, hashTags }, index) => (
          <div className={styles.slide} key={`slide-${index}`}>
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
              className={styles.image}
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "contain",
              }}
            />
            <div className={styles.carouselContent}>
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
        ))}
      </div>
    </div>
  );
});

export default News;

// import { FC } from "react";
// import styles from "./news.module.scss";
// import Image from "next/image";
// import leftArrow from "@/left-arrow.svg";

// const News: FC = () => {
//   return (
//     <div
//       style={{
//         marginRight: 20,
//         overflow: "hidden",
//         backgroundColor: "rgba(40, 46, 51, 0.5)",
//         borderRadius: 10,
//         border: "1px solid black",
//       }}>
//       <div
//         style={{
//           display: "flex",
//           border: "1px solid red",
//           width: "100%",
//         }}>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}>
//           <button
//             style={{
//               borderRadius: 10,
//               border: "2px solid red",
//               marginLeft: 5,
//               marginRight: 5,
//               background: "transparent",
//             }}>
//             <Image src={leftArrow} width="20" height="20" alt="left arrow" />
//           </button>
//         </div>
//         <div
//           style={{
//             border: "2px solid black",
//             display: "flex",
//             width: "800px",
//             height: "110px",
//             marginTop: "auto",
//             marginBottom: "auto",
//             borderRadius: "10px",
//           }}>
//           <div>
//             <Image
//               src="/avatar.png"
//               alt="new_image"
//               width={200}
//               height={105}
//               style={{ borderRadius: 10, border: "2px solid red" }}
//             />
//           </div>
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <div style={{ display: "flex", flexDirection: "row" }}>
//               <h1>🚨 Новые обновления в CSGO! 🚨</h1>
//               <div
//                 style={{
//                   borderRadius: 10,
//                   border: "2px solid red",
//                   background: "grey",
//                 }}>
//                 jskdasl
//               </div>
//             </div>
//             <h2 style={{ fontSize: 12 }}>
//               Внимание, игроки! Valve только что выпустила новый патч для
//               Counter-Strike: Global Offensive, добавив улучшения карты Mirage и
//               новый набор скинов для оружия. Проверьте новые тактические
//               возможности и уникальные дизайны. Не пропустите шанс
//               присоединиться к соревнованиям этого месяца с удвоенными XP.
//               Будьте в курсе всех изменений и максимизируйте свои шансы на
//               победу!
//             </h2>
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}>
//           <button
//             style={{
//               borderRadius: 10,
//               border: "2px solid red",
//               marginLeft: 5,
//               marginRight: 5,
//               background: "transparent",
//             }}>
//             <Image
//               src={leftArrow}
//               width="20"
//               height="20"
//               alt="left arrow"
//               style={{ transform: "rotate(180deg)" }}
//             />
//           </button>
//         </div>
//         <div
//           style={{
//             border: "2px solid black",
//             display: "flex",
//             width: "800px",
//             height: "110px",
//             marginTop: "auto",
//             marginBottom: "auto",
//             borderRadius: "10px",
//           }}>
//           <div>
//             <Image
//               src="/avatar.png"
//               alt="new_image"
//               width={200}
//               height={105}
//               style={{ borderRadius: 10, border: "2px solid red" }}
//             />
//           </div>
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <div style={{ display: "flex", flexDirection: "row" }}>
//               <h1>🚨 Новые обновления в CSGO! 🚨</h1>
//               <div
//                 style={{
//                   borderRadius: 10,
//                   border: "2px solid red",
//                   background: "grey",
//                 }}>
//                 jskdasl
//               </div>
//             </div>
//             <h2 style={{ fontSize: 12 }}>
//               Внимание, игроки! Valve только что выпустила новый патч для
//               Counter-Strike: Global Offensive, добавив улучшения карты Mirage и
//               новый набор скинов для оружия. Проверьте новые тактические
//               возможности и уникальные дизайны. Не пропустите шанс
//               присоединиться к соревнованиям этого месяца с удвоенными XP.
//               Будьте в курсе всех изменений и максимизируйте свои шансы на
//               победу!
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;
