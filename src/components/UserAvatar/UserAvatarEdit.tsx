import React, { ChangeEvent, useState } from "react";
import { displayInitials } from "utils/displayUserProperties";
import IUserProfile from "types/UserProfile";
import * as S from "./styles";
import DynamicTextInput from "components/DynamicTextInput/DynamicTextInput";
const UserAvatarEdit: React.FC<Props> = ({
  updateUserInfo,
  name,
  profilePicUrl,
}) => {
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

      <DynamicTextInput
        updateField={updateUserInfo}
        field="Profile Pic Url"
        value={profilePicUrl}
      />
    </S.ProfilePicContainer>
  );
};
type Props = {
  updateUserInfo: (
    event: ChangeEvent<HTMLInputElement>,
    key?: string,
    val?: string
  ) => void;
  name: IUserProfile["info"]["name"];
  profilePicUrl: string;
};

export default UserAvatarEdit;
