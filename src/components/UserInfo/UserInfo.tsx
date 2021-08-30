import React from "react";
import IUserProfile from "types/UserProfile";
import { displayName, displayAddress } from "utils/displayUserProperties";
import Icons from "assets/icons";
import * as S from "./styles";

export const UserInfo: React.FC<Props> = ({ userProfile }) => {
  return (
    <S.UserInfoContainer>
      <S.UserInfoContent>
        <S.UserName>{displayName(userProfile.info.name)}</S.UserName>
        <S.UserPropertyRow>
          <S.UserPropertyRowIcon src={Icons.mailIcon} alt="mail icon" />
          <S.UserProperty>{userProfile.info.email}</S.UserProperty>
        </S.UserPropertyRow>
        <S.UserPropertyRow>
          <S.UserPropertyRowIcon src={Icons.contactIcon} alt="contact icon" />
          <S.UserProperty>{displayAddress(userProfile.info.address)}</S.UserProperty>
        </S.UserPropertyRow>
        <S.UserPropertyRow>
          <S.UserPropertyRowIcon src={Icons.phoneIcon} alt="phone icon" />
          <S.UserProperty> {userProfile.info.phone}</S.UserProperty>
        </S.UserPropertyRow>
        <S.UserPropertyRow>
          <S.UserPropertyRowIcon src={Icons.webIcon} alt="phone icon" />
          <S.ProfileUrlRow> {userProfile.info.websiteUrl}</S.ProfileUrlRow>
        </S.UserPropertyRow>
        <S.CompanyInfoContainer>
          <S.CompanyIcon src={Icons.companyIcon} alt="phone icon" />
          <S.CompanyRow>
            <S.CompanyName>{userProfile.company.name}</S.CompanyName>
            <S.CompanyDesc>{userProfile.company.motto}</S.CompanyDesc>
          </S.CompanyRow>
        </S.CompanyInfoContainer>
      </S.UserInfoContent>
    </S.UserInfoContainer>
  );
};

type Props = {
  userProfile: IUserProfile;
};

export default UserInfo;
