import React, { useState } from "react";
import IUserProfile from "types/UserProfile";
import { displayInitials } from "utils/displayUserProperties";
import { useDispatch } from "react-redux";
import { removeUserProfilePicture } from "redux/userProfileSlice";
import * as S from "./styles";
const UserAvatar: React.FC<Props> = ({
  profilePicUrl,
  name,
  isActiveUser,
  id,
}) => {
  const dispatch = useDispatch();
  const [errorLoadingProfilePic, setErrorLoadingProfilePic] = useState(false);

  const deleteProfilePicClick = () => {
    dispatch(removeUserProfilePicture(id));
    console.log("clocked");
  };
  return (
    <S.ProfilePicContainer>
      {!errorLoadingProfilePic ? (
        <S.ProfilePic
          src={profilePicUrl}
          onError={() => setErrorLoadingProfilePic(true)}
        />
      ) : (
        <S.ProfileInitials>{displayInitials(name)}</S.ProfileInitials>
      )}
      {isActiveUser && profilePicUrl ? (
        <S.DelteProfilePictureButton onClick={deleteProfilePicClick}>
          X
        </S.DelteProfilePictureButton>
      ) : null}
    </S.ProfilePicContainer>
  );
};
type Props = {
  profilePicUrl: IUserProfile["info"]["profilePicUrl"];
  name: IUserProfile["info"]["name"];
  id: IUserProfile["id"];
  isActiveUser: boolean;
};
export default UserAvatar;
