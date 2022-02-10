import React from "react";
import styled from "styled-components";
import StyledCheckbox from "./CheckButton";

interface Props {
  name: string;
  items: string[];
}
const FilterCategory = ({ name, items }: Props) => {
  return (
    <StyledFilterList>
      <h3>{name}</h3>
      <ul>
        <StyledCheckbox items={items} />
      </ul>
    </StyledFilterList>
  );
};

FilterCategory.defaultProps = {
  name: "지역",
  items: ["서울시", "부산시", "대전시", "서울시", "부산시", "대전시", "서울시", "부산시", "대전시"],
};

export default FilterCategory;

const StyledFilterList = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & h3 {
    width: 100px;
    font-size: 20px;
  }

  & ul {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    display: block;
  }
`;
