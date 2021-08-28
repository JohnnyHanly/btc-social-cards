import styled from "styled-components";

export const LoadMoreButton = styled.button`
  padding: 1em 1.5em;
  border: transparent;
  border-radius: 0.75em;
  background-color: #f395ba;
  color: white;
  width: 85%;
  font-size: 0.5em;
  margin: 0.5em 0 1em 0;
  :hover {
    cursor: pointer;
    filter: drop-shadow(0 0 0.35em #fed182);
  }
  @media only screen and (min-width: 960px) {
    width: 10%;
  }
`;
