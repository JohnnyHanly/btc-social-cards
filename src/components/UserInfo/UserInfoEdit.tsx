import React, { ChangeEvent } from "react";
import DynamicTextInput from "components/DynamicTextInput/DynamicTextInput";
import { IUserInfoEditState } from "types/UserProfile";
import Icons from "assets/icons";
import * as S from "./styles";

export const UserInfoEdit: React.FC<Props> = ({
  userInfoState,
  isUserUnchanged,
  updateUserInfo,
  handleSaveClick,
}) => {
  return (
    <S.UserInfoContainer onClick={(event) => event.stopPropagation()}>
      <S.UserInfoContent>
        <S.EditNameContainer>
          <DynamicTextInput
            updateField={updateUserInfo}
            field={"First Name"}
            value={userInfoState.firstname}
          />
          <DynamicTextInput
            updateField={updateUserInfo}
            field={"Last Name"}
            value={userInfoState.lastname}
          />
        </S.EditNameContainer>
        <S.UserPropertyRow>
          <S.UserPropertyRowIcon src={Icons.mailIcon} alt="mail icon" />
          <DynamicTextInput
            updateField={updateUserInfo}
            field={"Email"}
            value={userInfoState.email}
          />
        </S.UserPropertyRow>
        <S.AddressInputRow>
          <S.UserPropertyRowIcon src={Icons.contactIcon} alt="contact icon" />
          <S.AddressInputContainer>
            <DynamicTextInput
              updateField={updateUserInfo}
              field={"Street"}
              value={userInfoState.street}
            />
            <DynamicTextInput
              updateField={updateUserInfo}
              field={"Zip Code"}
              value={userInfoState.zipcode}
            />
            <DynamicTextInput
              updateField={updateUserInfo}
              field={"City"}
              value={userInfoState.city}
            />
            <DynamicTextInput
              updateField={updateUserInfo}
              field={"State"}
              value={userInfoState.state}
            />
          </S.AddressInputContainer>
        </S.AddressInputRow>
        <S.UserPropertyRow>
          <S.UserPropertyRowIcon src={Icons.phoneIcon} alt="phone icon" />
          <DynamicTextInput
            updateField={updateUserInfo}
            field={"Phone"}
            value={userInfoState.phone}
          />
        </S.UserPropertyRow>
        <S.UserPropertyRow>
          <S.UserPropertyRowIcon src={Icons.webIcon} alt="phone icon" />
          <DynamicTextInput
            updateField={updateUserInfo}
            field={"Web Site Url"}
            value={userInfoState.websiteurl}
          />
        </S.UserPropertyRow>
        <S.CompanyInfoContainerWithButton>
          <S.CompanyDetails>
            <S.CompanyIcon src={Icons.companyIcon} alt="phone icon" />
            <S.CompanyRow>
              <DynamicTextInput
                updateField={updateUserInfo}
                field={"Company Name"}
                value={userInfoState.companyname}
              />
              <DynamicTextInput
                updateField={updateUserInfo}
                field={"Company Motto"}
                value={userInfoState.companymotto}
              />
            </S.CompanyRow>
          </S.CompanyDetails>
          <S.SaveButton
            disabled={isUserUnchanged}
            onClick={() => handleSaveClick(userInfoState)}
          >
            Save
          </S.SaveButton>
        </S.CompanyInfoContainerWithButton>
      </S.UserInfoContent>
    </S.UserInfoContainer>
  );
};

type Props = {
  userInfoState: IUserInfoEditState;
  isUserUnchanged: boolean;
  updateUserInfo: (
    event: ChangeEvent<HTMLInputElement>,
    key?: string,
    val?: string
  ) => void;
  handleSaveClick: (userInfoState: IUserInfoEditState) => void;
};

export default UserInfoEdit;
