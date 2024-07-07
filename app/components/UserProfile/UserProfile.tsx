"use client";

import React, { useState, useEffect } from 'react';
import { fetchUserProfile, fetchUserBalance, fetchProducts } from './actions';
import styles from './UserProfile.module.css';
import { Metadata } from 'next';

interface UserProfile {
    avatarUrl: string;
    name: string;
    status: string;
    info: string;
    rating: number;
}

interface UserBalance {
    amount: number;
}

interface Product {
    id: number;
    imageUrl: string;
    title: string;
}

const UserProfile: React.FC = () => {
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [userBalance, setUserBalance] = useState<UserBalance | null>(null);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function loadData() {
            try {
                const profile = await fetchUserProfile();
                setUserProfile(profile);

                const balance = await fetchUserBalance();
                setUserBalance(balance);

                const productsList = await fetchProducts();
                setProducts(productsList);
            } catch (error) {
                console.error('Failed to load data', error);
            }
        }

        loadData();
    }, []);

    if (!userProfile || !userBalance) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>
                <div className={styles.profilesAndBalance}>
                    <div className={styles.otherProfile}>
                        <div className={styles.userProfile}>USER PROFILE</div>
                        <div className={styles.profileInfo}>
                            <div className={styles.profileInfoLeft}>
                                <img src={userProfile.avatarUrl} alt="User Avatar" className={styles.avatar} />
                                <div className={styles.profileStatus}>
                                    <div className={styles.userName}>{userProfile.name}</div>
                                    <div className={styles.status}>{userProfile.status}</div>
                                    <div className={styles.info}>{userProfile.info || "Information is absent."}</div>
                                </div>
                            </div>
                            <div className={styles.profileInfoRight}>
                                <div className={styles.icons}>
                                    <div className={styles.steamIcon}><img src="../../steam-icon.svg" alt="Steam Icon" className={styles.avatar} /></div>
                                </div>
                                <div className={styles.actions}>
                                    <button className={styles.writeButton}>Write</button>
                                    <button className={styles.addButton}>Add as Friend</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.rating}>{userProfile.rating}</div>
                    </div>
                    <div className={styles.balance}>
                        <div className={styles.balanceInfo}>
                            <div className={styles.balanceText}>BALANCE</div>
                            <div className={styles.amount}>{userBalance.amount} ₽</div>
                        </div>
                        <div className={styles.cartContainer}>
                            <div className={styles.cartIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M7 4h-2l-1 2h16l-1-2h-2v-2h-8v2zm-2.05 3l-2.928 12h16.156l-2.928-12h-10.3zm10.932 2l1.297 5h-9.948l1.297-5h7.354z" />
                                </svg>
                            </div>
                            <div className={styles.cartCount}>3</div>
                        </div>
                    </div>
                </div>
                <div className={styles.sidebarAndContent}>
                    <div className={styles.contentAndActions}>
                        <div className={`${styles.productSection} overflow-auto`}>
                            <div className={styles.productCards}>
                                {products.map((product) => (
                                    <div className={styles.productCard} key={product.id}>
                                        <img src={product.imageUrl} alt="Product" />
                                        <p className={styles.productTitle}>{product.title}</p>
                                    </div>
                                ))}
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
    );
};

export default UserProfile;