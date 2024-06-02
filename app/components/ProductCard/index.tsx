import React from 'react'
import styles from './card.module.scss'
import Image from "next/image";
import { useTranslation } from 'react-i18next';

const index = () => {

  const { t } = useTranslation()

  return (
    <div>
      {t('card')}
    </div>
  )
}

export default index
