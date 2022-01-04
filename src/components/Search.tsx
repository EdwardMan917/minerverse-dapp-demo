import styled from "styled-components";
import SearchSvg from "src/assets/svg/search.svg";
import { Colors } from "src/constants/Colors";

export const SearchBox = styled.div`
  width: 150px;
  height: 30px;
  border-radius: 20px;
  background-color: ${Colors.ToggleSwitchGrey};
  display: flex;
  padding: 1px;
`

export const SearchIcon = styled.div`
  background-image: url(${SearchSvg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  margin: 5px 5px 5px 10px;
`

export const SearchInput = styled.input`
  width: 80px;
  height: 28px; 
  background-color: transparent;
  box-shadow: none;
  border: none;
  outline: none;

  & :focus-visible{
    border: none;
    outline: none;
  }
`