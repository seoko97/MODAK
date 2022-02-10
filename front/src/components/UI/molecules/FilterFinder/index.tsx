import React from "react";
import styled from "styled-components";
import RowFrame from "@templates/RowFrame";
import FilterCategory from "./FilterCategory";

const FilterFinder = () => {
  return (
    <RowFrame>
      <FinderContainer>
        <FilterCategory />
        <FilterCategory />
        <FilterCategory />
        <FilterCategory />
        <ButtonContainer>
          <StyledButton>초기화</StyledButton>
          <StyledButton>검색</StyledButton>
        </ButtonContainer>
      </FinderContainer>
    </RowFrame>
  );
};

export default FilterFinder;

const FinderContainer = styled.div`
margin-top: 1em;
  border: 1px solid ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  border-radius: 15px;
  padding: 30px 50px;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};

  /* box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1); */ */
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const StyledButton = styled.button`
  border: none;
  padding: 10px 20px;

  &:hover {
    cursor: pointer;
  }

  & + button {
    margin-left: 20px;
  }
`;
