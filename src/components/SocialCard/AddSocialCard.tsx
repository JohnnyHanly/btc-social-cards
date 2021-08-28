import React, { ChangeEvent, useState } from "react";
import UserProfileEdit from "components/UserInfo/UserInfoEdit";
import * as S from "./styles";
import { initalUserInfoState } from "utils/global";
import { IUserInfoEditState } from "types/UserProfile";
import { mapUserStateToProfile } from "utils/global";
import { useDispatch } from "react-redux";
import { addNewUserProfile } from "redux/userProfileSlice";
import UserAvatar from "../UserAvatar/UserAvatar";
import renderToast from "utils/renderToast";

export const AddSocialCard: React.FC<Props> = ({
  handleAddSocialCardClick,
  userProfileFormVisible,
}) => {
  const dispatch = useDispatch();

  const [isUserUnchanged, setUserUpdated] = useState(true);

  const [userInfoState, setUserInfoState] =
    useState<IUserInfoEditState>(initalUserInfoState);

  const updateUserDetails = (event: ChangeEvent<HTMLInputElement>) => {
    setUserUpdated(false);
    const { name, value } = event.target;
    setUserInfoState((prev) => ({ ...prev, [name]: value }));
  };
  const handleSaveClick = () => {
    const userProfile = mapUserStateToProfile(userInfoState);
    try {
      dispatch(addNewUserProfile(userProfile));
      renderToast({ type: "success", message: "Added user" });
      handleAddSocialCardClick();
    } catch (err: any) {
      renderToast({ type: "error", message: "Could not add user" });
    }
  };
  const name = {
    first: userInfoState.firstname,
    last: userInfoState.lastname,
  };
  return (
    <>
      {!userProfileFormVisible ? (
        <S.AddSocialCardContainer
          onClick={handleAddSocialCardClick}
          selected={false}
        >
          <S.PlusSign>+</S.PlusSign>
        </S.AddSocialCardContainer>
      ) : (
        <S.SocialCardContainer selected={true}>
          <UserAvatar
            profilePicUrl={userInfoState.profilePicUrl}
            name={name}
            isActiveUser={true}
            id={userInfoState.id}
          />
          <UserProfileEdit
            userInfoState={userInfoState}
            updateUserDetails={updateUserDetails}
            handleSaveClick={handleSaveClick}
            isUserUnchanged={isUserUnchanged}
          />
        </S.SocialCardContainer>
      )}
    </>
  );
};

type Props = {
  handleAddSocialCardClick: () => void;
  userProfileFormVisible: boolean;
};
