import { IUser } from ".";

export interface IUserInfoInput {
  label: string;
  value: string;
}

export interface IAboutMeUserSection {
  inputs: IUserInfoInput[];
  handleChangeInput: (
    index: number,
    newValue: string,
    inputType: "basicInfo" | "aboutMe"
  ) => void;
  handleChangeAvatar: () => void;
}

export interface IBasicInfoUserSection {
  inputs: IUserInfoInput[];
  selectedPrivacy: string;
  handleSave: () => void;
  handleChangeInput: (
    index: number,
    newValue: string,
    inputType: "basicInfo" | "aboutMe"
  ) => void;
  handleChangePrivacy: (value: string) => void;
  handleCancel: () => void;
}

export interface IInputWithLabel {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

export interface IProfileFriendsPage {
  profile: IUser;
}

export interface IProfileMightLike {
  profile: IUser;
  onClick: (profile: number) => void;
  key: number;
}

export interface ISelectСustomize {
  optionsValue: string[];
  onSelectChange: (value: string) => void;
  defaultValue: string;
}

export interface IPopup {
  active: null | string | boolean;
  setActive: () => void;
  children: React.ReactNode;
}
