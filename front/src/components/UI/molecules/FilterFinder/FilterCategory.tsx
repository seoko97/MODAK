import React, { useState } from "react";
import styled from "styled-components";
import StyledCheckbox from "./CheckButton";

const FilterCategory = ({ category }) => {
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [filterNameActive, setFilterNameActive] = useState(false);

  const toggleHandler = (e) => {
    setFilterNameActive(!filterNameActive);
  };

  const checkedOptionsHandler = (value, isChecked) => {
    if (isChecked) {
      setCheckedOptions([...checkedOptions, value]);
    } else if (!isChecked && checkedOptions.find((one) => one === value)) {
      const filter = checkedOptions.filter((one) => one !== value);
      setCheckedOptions([...filter]);
    }
  };

  console.log("checkedOptions", checkedOptions);

  return (
    <StyledFilterList>
      <FilterName
        id="mobile-toggle"
        className={filterNameActive ? "active" : ""}
        onClick={toggleHandler}
      >
        {category.name}
        <div id="burger">
          <div id="line1"></div>
          <div id="line2"></div>
        </div>
      </FilterName>
      <ul>
        {category.options.map((option) => (
          <StyledCheckbox
            option={option}
            name={category.name}
            key={option}
            checkedOptionsHandler={checkedOptionsHandler}
          />
        ))}
      </ul>
    </StyledFilterList>
  );
};

export default FilterCategory;

const StyledFilterList = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    display: block;

    ul {
      width: 100%;
      height: 0;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    & > #mobile-toggle.active + ul {
      height: auto;
      visibility: visible;
      opacity: 100%;
    }

    #mobile-toggle.active > #burger > #line2 {
      transform: rotate(0deg);
    }
  }
`;

const FilterName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
  font-size: 20px;

  .burger {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    font-size: 15px;

    #burger {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      position: relative;
      pointer-events: none;

      div {
        position: absolute;
        width: 50%;
        height: 2px;
        background-color: #c0c0c0;
      }

      #line2 {
        transition: 0.3s all;
        transform: rotate(90deg);
      }
    }
  }
`;