import React from "react";
import styled from "styled-components";

const StyledCheckbox = ({ option }) => {
  return (
    <FilterItemContainer>
      <CheckboxWrapper>
        <input type="checkbox" value={option} />
        <p>{option}</p>
      </CheckboxWrapper>
    </FilterItemContainer>
  );
};

export default StyledCheckbox;

const FilterItemContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const CheckboxWrapper = styled.label`
  display: flex;
  &:hover,
  input:hover {
    cursor: pointer;
  }
`;
