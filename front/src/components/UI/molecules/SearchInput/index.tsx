import React, { memo, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import MagnifierIcon from "@icons/MagnifierIcon";
import useModal from "@src/hooks/useModal";
import useInput from "@src/hooks/useInput";
import useDebounce from "@src/hooks/useDebounce";
import { useDispatch } from "react-redux";
import { getCampsByKeyword } from "@src/reducers/camps/action";
import { search as sC } from "@src/reducers/camps";
import { useAppSelector } from "@src/store/configureStore";
import SearchCampList from "@molecules/SearchCampList";
import Overlay from "@atoms/Overlay";

const StyledInputBox = styled.div`
  margin-left: 40px;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 3;
`;

const InputInner = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & svg {
    width: 20px !important;
    height: 20px;
  }

  & > input {
    font-size: 16px;
    padding: 0;
    /* width: ${({ isOpen }) => (isOpen ? "200px" : "0")}; */
    width: 200px;
    overflow: auto;
    transition: width 0.3s;
    color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
    border: none;
    &:focus {
      outline: none;
    }
    background: none;
  }
`;

const SearchWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  background-color: ${({ theme }) => theme.BAKCGROUND_COLOR.PRIMARY_COLOR};

  width: 300px;
  max-height: 300px;
  overflow-y: auto;

  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, onOpen, onClose] = useModal();
  const [value, onChangeValue, setValue] = useInput();
  const dispatch = useDispatch();
  const router = useRouter();
  const { searchCamps, search } = useAppSelector((state) => state.camps);

  const debounce = useDebounce(async (value: string) => {
    await dispatch(getCampsByKeyword(value));
  }, 300);

  useEffect(() => {
    onClose();
    setValue("");
  }, [router.asPath]);

  useEffect(() => {
    if (value) {
      dispatch(sC());
      debounce(value);
    }
  }, [value]);

  return (
    <>
      <StyledInputBox>
        <InputInner isOpen={isOpen}>
          <div onClick={isOpen ? onClose : onOpen}>
            <MagnifierIcon />
          </div>
          <input
            value={value}
            onChange={onChangeValue}
            placeholder="어디로 가시나요?"
            ref={inputRef}
          />
        </InputInner>
        {isOpen && (
          <SearchWrapper>
            {search.loading ? <ClipLoader color="#ccc" /> : <SearchCampList camps={searchCamps} />}
            {search.done && !searchCamps.length && "검색 결과가 없습니다."}
          </SearchWrapper>
        )}
      </StyledInputBox>
      {isOpen && <Overlay onClick={onClose} />}
    </>
  );
};

export default memo(InputWrapper);
