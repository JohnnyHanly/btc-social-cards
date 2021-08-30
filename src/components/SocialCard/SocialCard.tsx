import { useDispatch, useSelector } from "react-redux";
import UserProfileEdit from "components/UserProfile/UserProfileEdit";
import UserProfile from "components/UserProfile/UserProfile";
import { updateUserProfile, selectUserProfile } from "redux/userProfileSlice";
import { mapUserStateToProfile } from "utils/global";
import IUserProfile, { IUserInfoEditState } from "types/UserProfile";
import renderToast from "utils/renderToast";
import { RootState } from "redux/store";
import * as S from "./styles";

const SocialCard: React.FC<Props> = ({ userProfile }) => {
  const selectedProfile = useSelector<RootState>(
    (state) => state.userProfiles.selectedUserProfile
  ) as IUserProfile;

  const dispatch = useDispatch();
  const handleSaveClick = (userInfoState: IUserInfoEditState) => {
    const mappedUserDetails = mapUserStateToProfile(
      userInfoState
    ) as IUserProfile;
    dispatch(updateUserProfile(mappedUserDetails));
    // setUserUpdated(true);
    renderToast({ type: "success", message: "User updated" });
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
      {!activeUser ? (
        <UserProfile userProfile={userProfile} />
      ) : (
        <UserProfileEdit
          handleSaveClick={handleSaveClick}
          userProfile={userProfile}
        />
      )}

      {/* <UserAvatar
        profilePicUrl={userProfile.info.profilePicUrl}
        name={userProfile.info.name}
        id={userProfile.id}
      /> */}
      {/* {activeUser ? (
        <UserInfoEdit
          userInfoState={userInfoState}
          isUserUnchanged={isUserUnchanged}
          updateUserDetails={updateUserDetails}
          handleSaveClick={handleSaveClick}
        />
      ) : (
        <UserInfo userProfile={userProfile} />
      )} */}
    </S.SocialCardContainer>
  );
};

type Props = {
  userProfile: IUserProfile;
};

export default SocialCard;
