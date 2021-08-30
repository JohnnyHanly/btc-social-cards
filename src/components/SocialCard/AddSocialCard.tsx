import UserProfileEdit from "components/UserProfile/UserProfileEdit";
import * as S from "./styles";
import { initalUserProfile } from "utils/global";
import { IUserInfoEditState } from "types/UserProfile";
import { mapUserStateToProfile } from "utils/global";
import { useDispatch } from "react-redux";
import { addNewUserProfile } from "redux/userProfileSlice";
import renderToast from "utils/renderToast";

export const AddSocialCard: React.FC<Props> = ({
  handleAddSocialCardClick,
  userProfileFormVisible,
}) => {
  const dispatch = useDispatch();
  const handleSaveClick = (userInfoState: IUserInfoEditState) => {
    const userProfile = mapUserStateToProfile(userInfoState);
    try {
      dispatch(addNewUserProfile(userProfile));
      renderToast({ type: "success", message: "Added user" });
      handleAddSocialCardClick();
    } catch (err: any) {
      renderToast({ type: "error", message: "Could not add user" });
    }
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
          <UserProfileEdit
            userProfile={initalUserProfile}
            handleSaveClick={handleSaveClick}
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
