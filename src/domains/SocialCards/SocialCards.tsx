import React, { useEffect, useState } from "react";
import { SocialCard } from "components/SocialCard/SocialCard";
import { SocialCardContainer } from "components/SocialCard/styles";
import { IUserProfile } from "types/UserProfile";
export const SocialCards: React.FC = () => {
  return (
    <SocialCardContainer>
      <SocialCard />
    </SocialCardContainer>
  );
};
