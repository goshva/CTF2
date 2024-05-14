import React from 'react';
import styles from './favoritecard.module.scss';
import PostPhoto from '@/Glock-18.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Favorite = () => {

    const t = useTranslations()

    return (
        <div className={styles.message}>
            <div className={styles.content}>

            </div>
            <div className={styles.imageContainer}>
                <Image src={PostPhoto} height={300} width={300} alt='post-photo' />
                <div>
                    <strong>{t('namePrice')}</strong>
                    <div className={styles.btn_sort}>
                        <button>{t('delete')}</button>
                        <button>{t('trash')}</button>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default Favorite;
