import React, { useCallback } from "react";
import styled from "styled-components";

const StyledCheckbox = ({ option, name, checkedOptionsHandler }) => {
  const onCheck = useCallback(
    ({ target }) => {
      checkedOptionsHandler(target.value, target.checked);
      console.log(name, option);
    },
    [name, option],
  );

  return (
    <FilterItemContainer>
      <CheckboxWrapper>
        <input type="checkbox" name={name} value={option} onClick={onCheck} />
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

  input {
    appearance: checkbox;
  }

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
