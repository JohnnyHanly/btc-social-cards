import React, { useState } from "react";
import IUserProfile from "types/UserProfile";
import { displayInitials } from "utils/displayUserProperties";
import * as S from "./styles";
const UserAvatar: React.FC<Props> = ({ profilePicUrl, name, id }) => {
  const [errorLoadingProfilePic, setErrorLoadingProfilePic] = useState(false);
  return (
    <S.ProfilePicContainer>
      {errorLoadingProfilePic ? (
        <S.ProfileInitials>{displayInitials(name)}</S.ProfileInitials>
      ) : (
        <S.ProfilePic
          src={profilePicUrl}
          onError={() => setErrorLoadingProfilePic(true)}
        />
      )}
    </S.ProfilePicContainer>
  );
};
type Props = {
  profilePicUrl: IUserProfile["info"]["profilePicUrl"];
  name: IUserProfile["info"]["name"];
  id: IUserProfile["id"];
};
export default UserAvatar;
