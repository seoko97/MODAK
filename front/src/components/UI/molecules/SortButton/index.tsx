import React, { ChangeEvent } from "react";
import styled from "styled-components";
import TriangleIcon from "@icons/TriangleIcon";

interface Props {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SortButton = ({ onChange }: Props) => {
  return (
    <BoxArea>
      <SelectBoxWrapper>
        <DropDownSelect onChange={onChange} defaultValue="최신순">
          <DropDownOption value="_id">최신순</DropDownOption>
          <DropDownOption value="totalReview">리뷰순</DropDownOption>
          <DropDownOption value="totalBookmark">북마크순</DropDownOption>
        </DropDownSelect>
        <TriangleIcon />
      </SelectBoxWrapper>
    </BoxArea>
  );
};

export default SortButton;

const BoxArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const SelectBoxWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  & svg {
    position: absolute;
    right: 10px;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    width: 120px;
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

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const DropDownOption = styled.option``;
