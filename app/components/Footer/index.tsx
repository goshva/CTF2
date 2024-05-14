'use client';
import Image from 'next/image';
import { FC, useState } from 'react';

import footerIcon from '@/Vector.svg';
import { Button } from '../ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

import steamIcon from '@/steam-icon.svg';
import tgIcon from '@/Telegram.png';
import vcIcon from '@/Vk.png';
import youtubeIcon from '@/youtube.png';
import { useTranslations } from 'next-intl';

const Footer: FC = () => {

  const [activeFooter, setActiveFooter] = useState(false);

  const t = useTranslations()

  return (
    <div
      style={{ gridColumn: '1 / 3', display: 'block' }}
      className={`absolute bottom-0 w-full flex flex-col justify-between bg-black/75 p-2 ${activeFooter ? 'h-[100px]' : 'h-[30px]'
        }`}>
      <div className="container">
        <div className="flex gap-2">
          <Image src={footerIcon} alt="icon" width={15} height={17} />
          <span className="text-white text-[12px]">@2024 COUNTER.TRADE.ru</span>
        </div>
        <Button
          onClick={() => setActiveFooter(!activeFooter)}
          size={'icon'}
          className={`absolute left-1/2  ${activeFooter ? 'top-3' : 'top-1/2 translate-y-[-50%]'
            } z-30 translate-x-[-50%]  bg-transparent hover:bg-transparent h-[30px] p-1`}>
          {!activeFooter ? <ChevronUp color="white" /> : <ChevronDown color="white" />}
        </Button>
      </div>
      <div className="container">
        {activeFooter && (
          <div className="flex justify-between items-center">
            <ul className="flex gap-4 list-none text-white">
              <li>
                <a href="#">{t('contactUs')}</a>
              </li>
              <li>
                <a href="#">{t('rules')}</a>
              </li>
              <li>
                <a href="#">{t('terms')}</a>
              </li>
            </ul>
            <div className="flex gap-3">
              <button className="relative w-[40px] h-[40px]">
                <Image src={steamIcon} alt="steam" fill />
              </button>
              <button className="relative w-[40px] h-[40px]">
                <Image src={tgIcon} alt="steam" fill />
              </button>
              <button className="relative w-[40px] h-[40px]">
                <Image src={vcIcon} alt="steam" fill />
              </button>
              <button className="relative w-[40px] h-[40px]">
                <Image src={youtubeIcon} alt="steam" fill />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
