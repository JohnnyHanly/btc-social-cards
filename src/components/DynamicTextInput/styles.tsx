import styled from "styled-components/macro";
import ITextInputProps from "types/IInputTypes";
export const TextInputContainer = styled.div`
  width: 100%;
  word-wrap: normal;
  @media only screen and (min-width: 960px) {
    width: 78%;
  }
`;

export const UserPropertyInput = styled.input<ITextInputProps>`
  font-size: 1em;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  color: #374a59;
  border-style: none;
  border-color: transparent;
  width: 100%;
  overflow: auto;
  word-wrap: normal;
  @media only screen and (min-width: 960px) {
    font-size: 1.5em;
  }
`;
export const NameInput = styled(UserPropertyInput)`
  font-weight: 700;
  font-family: "DM Serif Display", serif;
  font-size: 1.75em;
  color: black;
  @media only screen and (min-width: 960px) {
    width: 100%;
    font-size: 2.5em;
  }
`;

export const AddressInput = styled(UserPropertyInput)`
  width: 100%;
  color: #374a59;

`;

export const Label = styled.label``;
