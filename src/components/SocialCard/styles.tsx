import styled from "styled-components";
const activeShadow = "drop-shadow(0 0 .35em #f09a80)";
const normalShadow = "drop-shadow(0 0 0.35em rgba(0, 0, 0, 0.25))";
interface ISocialCardContainerProps {
  selected: boolean;
}
export const SocialCardContainer = styled.div<ISocialCardContainerProps>`
  height: 100%;
  filter: ${(props) => (props.selected ? activeShadow : "none")};
  border-radius: 0.75em;
  box-shadow: 0px 10px 64px 0px rgba(0, 0, 0, 0.1);
  :hover {
    filter: ${(props) => (props.selected ? activeShadow : normalShadow)};
    cursor: pointer;
  }
`;

export const AddSocialCardContainer = styled(SocialCardContainer)`
  color: #e7e7e7;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    filter: ${activeShadow};
    cursor: pointer;
  }
`;

export const PlusSign = styled.div`
  font-size: 7em;
`;
