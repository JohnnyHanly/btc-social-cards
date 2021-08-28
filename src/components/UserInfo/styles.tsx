import styled from "styled-components/macro";
export const ProfileDetailsContainer = styled.div`
  background-color: white;
  color: black;
  width: 100%;
  height: 100%;
  font-size: 12px;
  @media only screen and (min-width: 960px) {
    width: 60%;
  }
`;

export const ProfileDetailsContent = styled.div`
  gap: 1.75em;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 1em;
  margin-right: 1rem;
  @media only screen and (min-width: 960px) {
    margin-left: 3em;
  }
`;

export const ProfileName = styled.h3`
  margin: 1.5em 0 0 0;
  font-family: "DM Serif Display", serif;
  font-size: 1.75em;
  @media only screen and (min-width: 960px) {
    font-size: 2.5em;
  }
`;

export const Property = styled.h5`
  margin: 0;
  padding: 0;
  color: #374a59;
  font-size: 1em;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  @media only screen and (min-width: 960px) {
    font-size: 1.5em;
  }
`;
export const ProfilePropertyRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  @media only screen and (min-width: 960px) {
    width: 100%;
  }
`;

export const ProfileUrlRow = styled(Property)`
  color: #007ae9;
  cursor: pointer;
`;
export const PropertyRowIcon = styled.img`
  margin-right: 1.2em;
  transform: scale(0.9);
  @media only screen and (min-width: 960px) {
    transform: scale(1.15);
  }
`;

export const CompanyInfoContainer = styled(ProfilePropertyRow)`
  gap: 1rem;
  width: 100%;
  margin-top: 0.25rem;
  justify-content: flex-start;
  margin-bottom: 1rem;

  @media only screen and (min-width: 960px) {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

export const CompanyInfoContainerWithButton = styled(CompanyInfoContainer)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (min-width: 960px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;
export const CompanyIcon = styled(PropertyRowIcon)`
  margin-right: 0;
  @media only screen and (min-width: 960px) {
    transform: scale(1.3);
    margin-right: 2em;
  }
`;
export const CompanyDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const CompanyRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #374a59;
`;

export const CompanyName = styled.div`
  color: #555a66;
  font-weight: bold;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.2em;
  @media only screen and (min-width: 960px) {
    font-size: 1.5em;
  }
`;
export const CompanyDesc = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  font-style: italic;
  font-size: 1em;
  @media only screen and (min-width: 960px) {
    font-size: 1.5em;
  }
`;

export const SaveButton = styled.button`
  padding: 0.75em 0.75em;
  background-color: rgb(40, 167, 69);
  border: 1px solid rgb(40, 167, 69);
  border-radius: 0.25em;
  font-size: 1.25em;
  color: white;
  width: 100%;
  margin-top: 0.5em;
  @media only screen and (min-width: 960px) {
    width: 25%;
    margin-top: 0;
    margin-right: 2em;
  }
  :hover:enabled {
    background-color: #218838;
    border-color: #1e7e34;
    filter: drop-shadow(0 0 0.5em #69e085);
    cursor: pointer;
  }
  :disabled {
    filter: opacity(0.5);
  }
`;

export const EditNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 75%;
  gap: 0.55em;
  margin-top: 2em;
`;

export const AddressInputRow = styled(ProfilePropertyRow)`
  justify-content: flex-start;
  align-items: center;
`;

export const AddressInputContainer = styled.div`
  display: grid;
  gap: 1.5em;
  grid-template-columns: 1fr 1fr;
`;
