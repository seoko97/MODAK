import React, { useState, useMemo, useCallback, memo } from "react";
import styled from "styled-components";
import StyledCheckbox from "./CheckButton";

interface Props {
  category: {
    name: string;
    options: string[];
  };
  checked: (title: string, list: string[]) => void;
  query: { [key: string]: string[] };
}

const FilterCategory = ({ category, checked, query }: Props) => {
  const [filterNameActive, setFilterNameActive] = useState(false);
  const title = useMemo(() => {
    switch (category.name) {
      case "지역":
        return "address";
      case "주변환경":
        return "environment";
      case "부대시설":
        return "amenities";
      case "테마":
        return "thema";
      default:
        return "address";
    }
  }, []);

  const toggleHandler = useCallback(() => {
    setFilterNameActive(!filterNameActive);
  }, [filterNameActive]);

  const onChecked = useCallback(
    (e) => {
      const { target } = e;
      const [value, isChecked] = [target.value, target.checked];
      const newOption = query[title] ? [...query[title]] : [];

      if (isChecked) newOption.push(value);
      else {
        const index = newOption.indexOf(value);
        newOption.splice(index, 1);
      }

      checked(title, newOption);
    },
    [query],
  );

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
            checkedOptionsHandler={onChecked}
          />
        ))}
      </ul>
    </StyledFilterList>
  );
};

export default memo(FilterCategory);

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
