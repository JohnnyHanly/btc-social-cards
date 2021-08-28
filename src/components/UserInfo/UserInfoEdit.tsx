import React, { ChangeEvent } from "react";
import DynamicTextInput from "components/DynamicTextInput/DynamicTextInput";
import { IUserInfoEditState } from "types/UserProfile";
import Icons from "assets/icons";
import * as S from "./styles";

export const UserProfileEdit: React.FC<Props> = ({
  userInfoState,
  isUserUnchanged,
  updateUserDetails,
  handleSaveClick,
}) => {
  return (
    <S.ProfileDetailsContainer onClick={(event) => event.stopPropagation()}>
      <S.ProfileDetailsContent>
        <S.EditNameContainer>
          <DynamicTextInput
            updateField={updateUserDetails}
            field={"First Name"}
            value={userInfoState.firstname}
          />
          <DynamicTextInput
            updateField={updateUserDetails}
            field={"Last Name"}
            value={userInfoState.lastname}
          />
        </S.EditNameContainer>
        <S.ProfilePropertyRow>
          <S.PropertyRowIcon src={Icons.mailIcon} alt="mail icon" />
          <DynamicTextInput
            updateField={updateUserDetails}
            field={"Email"}
            value={userInfoState.email}
          />
        </S.ProfilePropertyRow>
        <S.AddressInputRow>
          <S.PropertyRowIcon src={Icons.contactIcon} alt="contact icon" />
          <S.AddressInputContainer>
            <DynamicTextInput
              updateField={updateUserDetails}
              field={"Street"}
              value={userInfoState.street}
            />
            <DynamicTextInput
              updateField={updateUserDetails}
              field={"Zip Code"}
              value={userInfoState.zipcode}
            />
            <DynamicTextInput
              updateField={updateUserDetails}
              field={"City"}
              value={userInfoState.city}
            />
            <DynamicTextInput
              updateField={updateUserDetails}
              field={"State"}
              value={userInfoState.state}
            />
          </S.AddressInputContainer>
        </S.AddressInputRow>
        <S.ProfilePropertyRow>
          <S.PropertyRowIcon src={Icons.phoneIcon} alt="phone icon" />
          <DynamicTextInput
            updateField={updateUserDetails}
            field={"Phone"}
            value={userInfoState.phone}
          />
        </S.ProfilePropertyRow>
        <S.ProfilePropertyRow>
          <S.PropertyRowIcon src={Icons.webIcon} alt="phone icon" />
          <DynamicTextInput
            updateField={updateUserDetails}
            field={"Web Site Url"}
            value={userInfoState.websiteurl}
          />
        </S.ProfilePropertyRow>
        <S.CompanyInfoContainerWithButton>
          <S.CompanyDetails>
            <S.CompanyIcon src={Icons.companyIcon} alt="phone icon" />
            <S.CompanyRow>
              <DynamicTextInput
                updateField={updateUserDetails}
                field={"Company Name"}
                value={userInfoState.companyname}
              />
              <DynamicTextInput
                updateField={updateUserDetails}
                field={"Company Motto"}
                value={userInfoState.companymotto}
              />
            </S.CompanyRow>
          </S.CompanyDetails>
          <S.SaveButton disabled={isUserUnchanged} onClick={handleSaveClick}>
            Save
          </S.SaveButton>
        </S.CompanyInfoContainerWithButton>
      </S.ProfileDetailsContent>
    </S.ProfileDetailsContainer>
  );
};

type Props = {
  userInfoState: IUserInfoEditState;
  isUserUnchanged: boolean;
  updateUserDetails: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSaveClick: () => void;
};

export default UserProfileEdit;
