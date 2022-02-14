import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

import { useAppSelector } from "@src/store/configureStore";
import useDebounce from "@hooks/useDebounce";
import useInput from "@hooks/useInput";
import { getCampsByKeyword } from "@reducers/camps/action";
import { search as sC, clearSearchCamps } from "@reducers/camps";
import MagnifierIcon from "@icons/MagnifierIcon";
import SearchCampList from "../SearchCampList";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const Container = styled.div<Pick<Props, "isOpen">>`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-95px")};
  left: 0;
  width: 100%;
  transition: top 0.3s;
  & * {
    color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  }

  z-index: 1000;
  background-color: ${({ theme }) => theme.BAKCGROUND_COLOR.PRIMARY_COLOR};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 100;
  overflow: hidden;
`;

const InputBox = styled.div`
  width: 100%;
  height: 90px;
  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  & svg {
    width: 30px;
    height: 30px;
  }

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  & span {
    min-width: 50px;
    text-align: center;
    cursor: pointer;
    font-weight: 700;
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 300px;
  height: 40px;
  outline: none;
  border: 0;
  font-size: 15px;
  background-color: inherit;
`;

const ListWrapper = styled.div<{ isLoading: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ isLoading }) => (isLoading ? "10px" : "0")};
`;

const MobileSearchForm = ({ onClose, isOpen }: Props) => {
  const [value, onChangeValue, setValue] = useInput();
  const { search, searchCamps } = useAppSelector((state) => state.camps);
  const dispatch = useDispatch();

  const debounce = useDebounce(async (value: string) => {
    await dispatch(getCampsByKeyword(value));
  }, 300);

  useEffect(() => {
    setValue("");
    dispatch(clearSearchCamps());
  }, [isOpen]);

  useEffect(() => {
    if (value) {
      dispatch(sC());
      debounce(value);
    }
  }, [value]);

  return (
    <>
      <Container isOpen={isOpen}>
        <InputBox>
          <div>
            <MagnifierIcon />
            <Input value={value} onChange={onChangeValue} placeholder="어디로 가시나요?" />
          </div>
          <span onClick={onClose}>닫기</span>
        </InputBox>
        {isOpen && (
          <ListWrapper isLoading={search.done !== search.loading}>
            {search.done && !searchCamps.length && <span>검색 결과가 없습니다.</span>}
            {search.loading ? <ClipLoader color="#ccc" /> : <SearchCampList camps={searchCamps} />}
          </ListWrapper>
        )}
      </Container>
      {isOpen && <Overlay onClick={onClose} />}
    </>
  );
};

export default MobileSearchForm;
