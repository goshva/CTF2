import React from "react";
import "./profile.module.scss";
import { useTranslation } from "react-i18next";

const ProfileBadge = () => {

  const { t } = useTranslation()

  return <div>{t('profile')}</div>;
};

export default ProfileBadge;
