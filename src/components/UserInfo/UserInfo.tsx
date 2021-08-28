import React from "react";
import IUserProfile from "types/UserProfile";
import { displayName, displayAddress } from "utils/displayUserProperties";
import Icons from "assets/icons";
import * as S from "./styles";

export const UserInfo: React.FC<Props> = ({ userProfile }) => {
  return (
    <S.ProfileDetailsContainer>
      <S.ProfileDetailsContent>
        <S.ProfileName>{displayName(userProfile.info.name)}</S.ProfileName>
        <S.ProfilePropertyRow>
          <S.PropertyRowIcon src={Icons.mailIcon} alt="mail icon" />
          <S.Property>{userProfile.info.email}</S.Property>
        </S.ProfilePropertyRow>
        <S.ProfilePropertyRow>
          <S.PropertyRowIcon src={Icons.contactIcon} alt="contact icon" />
          <S.Property>{displayAddress(userProfile.info.address)}</S.Property>
        </S.ProfilePropertyRow>
        <S.ProfilePropertyRow>
          <S.PropertyRowIcon src={Icons.phoneIcon} alt="phone icon" />
          <S.Property> {userProfile.info.phone}</S.Property>
        </S.ProfilePropertyRow>
        <S.ProfilePropertyRow>
          <S.PropertyRowIcon src={Icons.webIcon} alt="phone icon" />
          <S.ProfileUrlRow> {userProfile.info.websiteUrl}</S.ProfileUrlRow>
        </S.ProfilePropertyRow>
        <S.CompanyInfoContainer>
          <S.CompanyIcon src={Icons.companyIcon} alt="phone icon" />
          <S.CompanyRow>
            <S.CompanyName>{userProfile.company.name}</S.CompanyName>
            <S.CompanyDesc>{userProfile.company.motto}</S.CompanyDesc>
          </S.CompanyRow>
        </S.CompanyInfoContainer>
      </S.ProfileDetailsContent>
    </S.ProfileDetailsContainer>
  );
};

type Props = {
  userProfile: IUserProfile;
};

export default UserInfo;
