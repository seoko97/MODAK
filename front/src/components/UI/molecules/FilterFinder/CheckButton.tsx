import React from "react";
import styled from "styled-components";

const StyledCheckbox = ({ option, name, checkedOptionsHandler }) => {
  const onCheck = ({ target }) => {
    checkedOptionsHandler(target.value, target.checked);
  };

  return (
    <FilterItemContainer>
      <CheckboxWrapper>
        <input
          type="checkbox"
          name={name}
          value={option}
          onClick={(e) => {
            onCheck(e);
          }}
        />
        <p>{option}</p>
      </CheckboxWrapper>
    </FilterItemContainer>
  );
};

export default StyledCheckbox;

const FilterItemContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  min-width: 80px;
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
