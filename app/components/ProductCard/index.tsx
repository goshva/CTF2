import React from 'react'
import styles from './card.module.scss'
import Image from "next/image";
import { useTranslations } from 'next-intl';

const index = () => {

  const t = useTranslations()

  return (
    <div>
      {t('card')}
    </div>
  )
}

export default index
