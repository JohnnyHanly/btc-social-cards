import styled from "styled-components/macro";
export const SocialCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5em 1em;
  max-width: 85%;
  margin: 2em 0 0.25em 0;

  @media only screen and (min-width: 960px) {
    max-width: 95%;
  }
`;

export const SocialCardListItem = styled.div`
  flex: 1 0 50%;

  @media only screen and (min-width: 960px) {
    flex: 1 0 33%;
  }
`;
