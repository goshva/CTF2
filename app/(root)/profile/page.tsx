// components/UserProfile.tsx

import React from 'react';
import Sidebar from '../../components/Sidebar';
import styles from './UserProfile.module.css';
import Header from '@/components/Header';

const UserProfile = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <main className={styles.mainContent}>
                    <div className={styles.profilesAndBalance}>
                        <div className={styles.myProfile}>
                            <div className={styles.avatar}>Аватар</div>
                            <div className={styles.profileInfo}>
                                <div>Мой профиль</div>
                                <div>Статус</div>
                            </div>
                            <div className={styles.statusIcons}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className={styles.otherProfile}>
                            <div className={styles.avatar}>Аватар</div>
                            <div className={styles.profileInfo}>
                                <div className={styles.rating}>8.9</div>
                                <div>Имя</div>
                                <div>Статус</div>
                                <div>Профиль другого пользователя</div>
                                <button>Написать</button>
                                <button>Добавить в друзья</button>
                                <div>Иконка стим</div>
                            </div>
                        </div>
                        <div className={styles.balance}>
                            <div>Баланс</div>
                            <div>184 р</div>
                            <div>Выбор валюты</div>
                            <button>Вывод</button>
                            <button>Пополнить</button>
                        </div>
                    </div>
                    <div className={styles.sidebarAndContent}>
                        <Sidebar />
                        <div className={styles.contentAndActions}>
                            <div className={styles.productSection}>
                                <div className={styles.productCards}>
                                    <div className={styles.productCard}>Карточка товара</div>
                                    <div className={styles.productCard}>Карточка товара</div>
                                    <div className={styles.productCard}>Карточка товара</div>
                                    <div className={styles.productCard}>Карточка товара</div>
                                    <div className={styles.productCard}>Карточка товара</div>
                                    <div className={styles.productCard}>Карточка товара</div>
                                    <div className={styles.productCard}>Карточка товара</div>
                                    <div className={styles.productCard}>Карточка товара</div>
                                    <div className={styles.productCard}>Карточка товара</div>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <button>Инвентарь</button>
                                <button>Скины на продаже</button>
                                <button>Скины на продаже</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default UserProfile;
