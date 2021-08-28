import React, { ChangeEvent, useState } from "react";
import IUserProfile from "types/UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { selectUserProfile } from "redux/userProfileSlice";
import UserInfo from "components/UserInfo/UserInfo";
import UserInfoEdit from "components/UserInfo/UserInfoEdit";
import { updateUserProfile } from "redux/userProfileSlice";
import { mapUserStateToProfile, mapUserProfileToState } from "utils/global";
import { IUserInfoEditState } from "types/UserProfile";
import * as S from "./styles";
import UserAvatar from "components/UserAvatar/UserAvatar";
import { RootState } from "redux/store";

const SocialCard: React.FC<Props> = ({ userProfile }) => {
  const [isUserUnchanged, setUserUpdated] = useState(true);

  const selectedProfile = useSelector<RootState>(
    (state) => state.userProfiles.selectedUserProfile
  ) as IUserProfile;
  const dispatch = useDispatch();
  const [userInfoState, setUserInfoState] = useState<IUserInfoEditState>(
    mapUserProfileToState(userProfile)
  );

  const updateUserDetails = (event: ChangeEvent<HTMLInputElement>) => {
    setUserUpdated(false);
    const { name, value } = event.target;
    setUserInfoState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = () => {
    const mappedUserDetails = mapUserStateToProfile(
      userInfoState
    ) as IUserProfile;
    dispatch(updateUserProfile(mappedUserDetails));
    setUserUpdated(true);
  };
  const handleSocialCardClick = () => {
    dispatch(selectUserProfile(userProfile.id));
  };

  const isActiveUser = (activeUserId: string, userId: string) => {
    return activeUserId === userId ? true : false;
  };

  const activeUser = isActiveUser(selectedProfile.id, userProfile.id);

  return (
    <S.SocialCardContainer
      selected={activeUser}
      onClick={handleSocialCardClick}
    >
      <UserAvatar
        profilePicUrl={userProfile.info.profilePicUrl}
        name={userProfile.info.name}
        isActiveUser={activeUser}
        id={userProfile.id}
      />
      {activeUser ? (
        <UserInfoEdit
          userInfoState={userInfoState}
          isUserUnchanged={isUserUnchanged}
          updateUserDetails={updateUserDetails}
          handleSaveClick={handleSaveClick}
        />
      ) : (
        <UserInfo userProfile={userProfile} />
      )}
    </S.SocialCardContainer>
  );
};

type Props = {
  userProfile: IUserProfile;
};

export default SocialCard;
