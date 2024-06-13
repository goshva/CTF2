'use client';

import React, { FC, useState, useRef, useEffect } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, ShoppingCart } from 'lucide-react';

// иконки роутов
// import HomeIcon from '../../public/home.svg';
import MessageIcon from '../../../public/message.svg';

import logo from '@/logo.svg';

// простоые
import loopIcon from '../../../public/no-active-loop-icon.svg';
import languageIcon from '../../../public/no-active-language.svg';

// когда активны
import activeLoopIcon from '../../../public/active-loop-icon.svg';
import activeLanguageIcon from '../../../public/active-language.svg';

const Header: FC = () => {
  const [openLink, setOpenLink] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [openLanugageSelector, setOpenLanguageSelector] = useState(false);

  const inputRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setOpenInput(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [showLanguageIcon, setShowLanguageIcon] = useState(false);

  const handleMakeIconActive = () => {
    setShowLanguageIcon(!showLanguageIcon);
    setOpenLanguageSelector(!openLanugageSelector);
  };

  const languageIconRef = useRef<HTMLDivElement>(null);

  const handleClickOutsideLanguage = (event: MouseEvent) => {
    if (languageIconRef.current && !languageIconRef.current.contains(event.target as Node)) {
      setShowLanguageIcon(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideLanguage);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideLanguage);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_content}>
          <div className={styles.left}>
            <Link href={'/'}>
              <Image src={logo} alt="logo" width={260} height={30} quality={100} />
            </Link>
            <Link
              onClick={() => setOpenLink(!openLink)}
              href={openLink ? '/' : '/market'}
              className={styles.cartLink}>
              <div style={{ height: openLink ? '82px' : '22px' }} className={styles.openLink}></div>
              <h1>MARKET</h1>
            </Link>
          </div>
          <div className={styles.right}>
            <section className={styles.headerIcons}>
              {!openInput && (
                <div onClick={() => setOpenInput(true)} className={styles.icons_section}>
                  <Image src={loopIcon} alt="loopIcon" />
                </div>
              )}
              {openInput && (
                <div ref={inputRef} className={styles.find_Input}>
                  <Image onClick={() => setOpenInput(false)} src={activeLoopIcon} alt="loopIcon" />
                  <input type="text" placeholder="find on the website" />
                </div>
              )}
              <div ref={languageIconRef} className={styles.icons_section}>
                <Image
                  onClick={handleMakeIconActive}
                  src={showLanguageIcon ? activeLanguageIcon : languageIcon}
                  alt="languageIcon"
                />
                {openLanugageSelector && (
                  <article className={styles.selectLanguage_section}>
                    <span onClick={handleMakeIconActive}>En</span>
                    <div className="flex justify-center">
                      <hr />
                    </div>
                    <span onClick={handleMakeIconActive}>Ru</span>
                  </article>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
