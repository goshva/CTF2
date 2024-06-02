import { ReactNode } from 'react';
import Image from 'next/image';
import styles from './layout.module.scss';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import backgroundImage from '@/main-bg.png';
import UserInfo from '../../components/UserInfo';
import News from '../../components/News/index';
import initTranslations from '../i18n';
import TranslationsProvider from '../../components/TranslationsProvider/TranslationsProvider';

const i18nNamespaces = ['dic'];

async function HomeLayout({ children, params: { locale } }: { children: ReactNode; params: { locale: string } }) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <>
                <div className="bgWrap">
                    <Image
                        src={backgroundImage}
                        alt="background Image"
                        fill
                        priority
                        placeholder="blur"
                        quality={100}
                    />
                </div>
                <div className={styles.wrapper}>
                    <Header />
                    <UserInfo />
                    <News />
                    <main className={styles.main}>{children}</main>
                </div>
            </>
        </TranslationsProvider>
    );
}

export default HomeLayout;
