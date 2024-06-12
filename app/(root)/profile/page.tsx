import React from 'react';
import styles from './UserProfile.module.css';
import Header from '@/components/Header';
import UserInfo from '@/components/UserInfo';
import HomeSidebar from '@/components/HomeSidebar';

const UserProfile = () => {
    return (
        <>
            <div className={styles.container}>
                <main className={styles.mainContent}>
                    <div className={styles.profilesAndBalance}>
                        <div className={styles.myProfile}>
                            <UserInfo />
                        </div>
                        <div className={styles.otherProfile}>
                            <div className={styles.userProfile}>USER PROFILE</div>
                            <div className={styles.profileInfo}>
                                <div className={styles.profileInfoLeft}>
                                    <img src="/path-to-avatar.jpg" alt="User Avatar" className={styles.avatar} />
                                    <div className={styles.profiletatus}>
                                        <div className={styles.userName}>User name</div>
                                        <div className={styles.status}>status</div>
                                        <div className={styles.info}>Information is absent.</div>
                                    </div>
                                </div>
                                <div className={styles.profileInfoRight}>
                                    <div className={styles.icons}>
                                        <div className={styles.steamIcon}>Steam Icon</div>
                                    </div>
                                    <div className={styles.actions}>
                                        <button className={styles.writeButton}>Write</button>
                                        <button className={styles.addButton}>Add as Friend</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.rating}>8.7</div>
                        </div>
                        <div className={styles.balance}>
                            <div className={styles.balanceInfo}>
                                <div className={styles.balanceText}>BALANCE</div>
                                <div className={styles.amount}>14.256 ₽</div>
                            </div>
                            <div className={styles.cartContainer}>
                                <div className={styles.cartIcon}> {/* Замените на реальную иконку, если доступно */}
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M7 4h-2l-1 2h16l-1-2h-2v-2h-8v2zm-2.05 3l-2.928 12h16.156l-2.928-12h-10.3zm10.932 2l1.297 5h-9.948l1.297-5h7.354z" />
                                    </svg>
                                </div>
                                <div className={styles.cartCount}>3</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sidebarAndContent}>
                        <div className={styles.sidebar}>
                            <HomeSidebar />
                        </div>
                        <div className={styles.contentAndActions}>
                            <div className={`${styles.productSection} overflow-auto`}>
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
                            <div className={styles.actionsWithSkins}>
                                <button className={styles.actionInventory}>Инвентарь</button>
                                <button className={styles.actionsSellSkins}>Скины на продаже</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default UserProfile;
