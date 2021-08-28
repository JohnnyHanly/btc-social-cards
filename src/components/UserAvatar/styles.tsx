import styled from "styled-components/macro";
export const ProfilePicContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(#f395ba 0%, #fed182 100%);
  align-items: center;
  width: 1000%;
  @media only screen and (min-width: 960px) {
    width: 40%;
    background: linear-gradient(135deg, #f395ba 0%, #fed182 100%);
    height: 100%;
  }
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  padding: 1em;

  @media only screen and (min-width: 960px) {
    height: 200px;
    width: 200px;
  }
`;

export const ProfileInitials = styled.div`
  border: 1px solid transparent;
  font-size: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.4em;
  border-radius: 50%;
  background-color: #222222;
  height: 100px;
  width: 100px;
  @media only screen and (min-width: 960px) {
    height: 200px;
    width: 200px;
  }
`;

export const DelteProfilePictureButton = styled.button`
  border: 1px solid rgb(220, 53, 69);
  border-radius: 60%;
  background-color: rgb(220, 53, 69);
  color: white;
  height: 40px;
  width: 40px;
  margin-bottom: 2em;

  :hover {
    cursor: pointer;
    background-color: #db071c;
    border-color: #db071c;
    filter: drop-shadow(0 0 0.5em #dc3545);
  }
`;
