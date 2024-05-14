import React from "react";
import "./profile.module.scss";
import { useTranslations } from "next-intl";

const ProfileBadge = () => {

  const t = useTranslations()

  return <div>{t('profile')}</div>;
};

export default ProfileBadge;
