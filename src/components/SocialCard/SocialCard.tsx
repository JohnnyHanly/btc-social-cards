import React from "react";
import { SocialCardContainer } from "./styles";
import { IUserProfile } from "types/UserProfile";


export const SocialCard: React.FC<Props> = ({ userProfile }) => {
  return <SocialCardContainer>social card</SocialCardContainer>;
};

type Props = {
  userProfile?: IUserProfile;
};
