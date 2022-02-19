import React, { ChangeEvent } from "react";
import styled from "styled-components";
import TriangleIcon from "@icons/TriangleIcon";

interface Props {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SortedReview = ({ onChange }: Props) => {
  return (
    <BoxArea>
      <SelectBoxWrapper>
        <DropDownSelect onChange={onChange} defaultValue="최신순">
          <DropDownOption value="_id">최신순</DropDownOption>
          <DropDownOption value="count">인기순</DropDownOption>
        </DropDownSelect>
        <TriangleIcon />
      </SelectBoxWrapper>
    </BoxArea>
  );
};

export default SortedReview;

const BoxArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SelectBoxWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  & svg {
    position: absolute;
    right: 10px;
  }
`;

const DropDownSelect = styled.select`
  padding: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  background-color: ${({ theme }) => theme.BAKCGROUND_COLOR.PRIMARY_COLOR};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const DropDownOption = styled.option``;
