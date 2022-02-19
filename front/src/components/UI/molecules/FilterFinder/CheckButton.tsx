import React, { MouseEvent } from "react";
import styled from "styled-components";

interface Props {
  option: string;
  name: string;
  checkedOptionsHandler: (e: MouseEvent<HTMLElement>) => void;
}

const StyledCheckbox = ({ option, name, checkedOptionsHandler }: Props) => {
  return (
    <FilterItemContainer>
      <CheckboxWrapper>
        <input
          type={name === "지역" ? "radio" : "checkbox"}
          name={name}
          value={option}
          onClick={checkedOptionsHandler}
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
  /* min-width: 80px; */

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
