import styled from "styled-components";
import SearchSvg from "src/assets/svg/search.svg";
import { Colors } from "src/constants/Colors";

export const SearchBox = styled.div`
  width: 130px;
  height: 30px;
  border-radius: 20px;
  background-color: ${Colors.AddressBoxGrey};
  display: flex;
  padding: 1px;
  margin-left: 15px;
`

export const SearchIcon = styled.div`
  background-image: url(${SearchSvg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 16px;
  height: 16px;
  margin: 7px 5px 7px 10px;
`

export const SearchInput = styled.input`
  width: 80px;
  height: 28px; 
  background-color: transparent;
  box-shadow: none;
  border: none;
  outline: none;
  color: ${Colors.SearchBoxTextGrey};

  & :focus-visible{
    border: none;
    outline: none;
  }
`

export const StyledSelect = styled.select`
  outline: none;
  width: 80px;
  height: 30px;
  border-radius: 20px;
  background: ${Colors.AddressBoxGrey};
  color: ${Colors.White};
  padding: 0 10px;
  font-size: 14px;
`