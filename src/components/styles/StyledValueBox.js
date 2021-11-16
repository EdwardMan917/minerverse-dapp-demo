import styled from "styled-components";

export const ValueBox = styled.div`
  box-sizing: border-box;
  width: 100%; 
  min-height: 150px;
  display: flex;
  flex-direction: column;
  border: 2px;
  border-style: solid;
  border-color: white;
  border-radius: 15px;
  margin-bottom: 40px;
  padding-left: 20px;
  background: #000;
`;

export const BoxTitle = styled.div`
  width: 100%;
  font-family: "GothamBold";
  font-size: 25px;
  color: white;
  margin-top: 30px;
`;

export const BoxValue = styled.div`
  width: 100%;
  font-family: "GothamBold";
  font-size: 45px;
  color: #faf300;
  text-shadow: 
    0 0 7px #faf300  ;
  margin-top: 15px;
`;
