import React from "react";
import SocialCard from "components/SocialCard/SocialCard";
import { AddSocialCard } from "components/SocialCard/AddSocialCard";
import IUserProfile from "types/UserProfile";
import { useSelector } from "react-redux";
import { LoadMore } from "components/LoadMore/LoadMore";
import * as S from "./styles";
import { RootState } from "redux/store";

const SocialCards: React.FC = () => {
  const userProfiles = useSelector<RootState>(
    (state) => state.userProfiles.userProfiles
  ) as IUserProfile[];

  return (
    <>
      <S.SocialCardsContainer>
        <S.SocialCardListItem>
          <AddSocialCard />
        </S.SocialCardListItem>
        {userProfiles.map((userProfile) => (
          <S.SocialCardListItem key={userProfile.id}>
            <SocialCard userProfile={userProfile} />
          </S.SocialCardListItem>
        ))}
      </S.SocialCardsContainer>
      <LoadMore />
    </>
  );
};

export default SocialCards;
