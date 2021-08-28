import styled from "styled-components";
const activeShadow = "drop-shadow(0 0 .35em #f09a80)";
const normalShadow = "drop-shadow(0 0 0.35em rgba(0, 0, 0, 0.25))";
interface ISocialCardContainerProps {
  selected: boolean;
}
export const SocialCardContainer = styled.div<ISocialCardContainerProps>`
  border: 1px solid transparent;
  border-radius: 0.75rem;
  display: flex;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 10px 64px 0px rgba(0, 0, 0, 0.1);

  align-items: center;
  width: 100%;
  filter: ${(props) => (props.selected ? activeShadow : "none")};
  :hover {
    filter: ${(props) => (props.selected ? activeShadow : normalShadow)};
    cursor: pointer;
  }
  @media only screen and (min-width: 960px) {
    flex-direction: row;
  }
`;
