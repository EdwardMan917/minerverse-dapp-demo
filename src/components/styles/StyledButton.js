import styled from "styled-components";

export const StyledButtonContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 50px 0 150px 0;
`;

export const LongButton = styled.button`
  background: #faf300;
  font-family: "GothamBold";
  color: #000;
  font-size: 24px;
  border-width: 0px;
  border-radius: 16px;
  user-select: none;
  width: 45%;
`;

export const ShortButton = styled.button`
  background: #faf300;
  font-family: "GothamBold";
  color: #000;
  font-size: 24px;
  border-width: 0px;
  border-radius: 16px;
  user-select: none;
  padding: 0 20px 0 20px;
  min-width: 100px;
`;

export const NavButton = styled.button`
  background: #faf300;
  font-family: "GothamMedium";
  color: #000;
  font-size: 14px;
  border-width: 0px;
  border-radius: 20px;
  user-select: none;
  height: 27px;
  width: 160px;
`;