import styled from "styled-components";

export const UserProfileContainter = styled.div`
  border-radius: 0.75rem;
  display: flex;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 10px 64px 0px rgba(0, 0, 0, 0.1);
  align-items: center;
  width: 100%;
  :hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 960px) {
    flex-direction: row;
  }
`;
