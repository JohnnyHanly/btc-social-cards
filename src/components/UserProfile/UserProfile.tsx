import React from "react";
import UserAvatar from "components/UserAvatar/UserAvatar";
import IUserProfile from "types/UserProfile";
import * as S from "./styles";
import UserInfo from "components/UserInfo/UserInfo";

const UserProfile: React.FC<Props> = ({ userProfile }) => {
  return (
    <S.UserProfileContainter>
      <UserAvatar
        profilePicUrl={userProfile.info.profilePicUrl}
        name={userProfile.info.name}
        id={userProfile.id}
      />
      <UserInfo userProfile={userProfile} />
    </S.UserProfileContainter>
  );
};

type Props = {
  userProfile: IUserProfile;
};
export default UserProfile;
