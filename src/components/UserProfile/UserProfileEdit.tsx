import React, { ChangeEvent, useState } from "react";
import IUserProfile, { IUserInfoEditState } from "types/UserProfile";
import {  mapUserProfileToState } from "utils/global";
import UserAvatarEdit from "components/UserAvatar/UserAvatarEdit";
import UserInfoEdit from "components/UserInfo/UserInfoEdit";
import * as S from "./styles";
const UserProfileEdit: React.FC<Props> = ({ userProfile, handleSaveClick }) => {
  const [isUserUnchanged, setUserUpdated] = useState(true);

  const [userInfoState, setUserInfoState] = useState<IUserInfoEditState>(
    mapUserProfileToState(userProfile)
  );
  const updateUserInfo = (
    event: ChangeEvent<HTMLInputElement>,
    key?: string,
    val?: string
  ) => {
    setUserUpdated(false);
    const { name, value } = event.target;
    setUserInfoState((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <S.UserProfileContainter>
      <UserAvatarEdit
        updateUserInfo={updateUserInfo}
        profilePicUrl={userInfoState.profilepicurl}
        name={{ first: userInfoState.firstname, last: userInfoState.lastname }}
      />
      <UserInfoEdit
        handleSaveClick={handleSaveClick}
        updateUserInfo={updateUserInfo}
        isUserUnchanged={isUserUnchanged}
        userInfoState={userInfoState}
      />
    </S.UserProfileContainter>
  );
};

type Props = {
  userProfile: IUserProfile;
  handleSaveClick: (userInfoState: IUserInfoEditState) => void;
};

export default UserProfileEdit;
