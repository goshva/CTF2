import React from "react";
import "./profile.module.scss";
import { useTranslations } from "next-intl";

const ProfileBadge = () => {

  const t = useTranslations('translation')


  return <div>{t('profile')}</div>;
};

export default ProfileBadge;
