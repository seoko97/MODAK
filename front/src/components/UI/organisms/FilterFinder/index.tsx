import React from "react";
import styled from "styled-components";
import RowFrame from "@templates/RowFrame";
import FilterList from "@molecules/FilterListItem";

const FilterFinder = () => {
  return (
    <RowFrame>
      <FinderContainer>
        <FilterList />
        <FilterList />
        <FilterList />
        <FilterList />
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
  border: 1px solid ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  border-radius: 5px;
  padding: 30px 50px;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
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
