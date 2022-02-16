import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import useInput from "@hooks/useInput";
import Link from "@atoms/Link";

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    padding: 0;
  }
  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:last-child {
      gap: 10px;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 600px;
  height: 40px;
  border: 0;
  border-radius: 6px 0 0 6px;
  font-size: 15px;
  padding: 3px 20px;
`;

const Button = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 0 6px 6px 0;
  border: none;
  background-color: #287b3a;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
`;

const TagWrraper = styled.div`
  gap: 10px;
  & > span {
    background-color: #287b3a;
    padding: 5px 8px;
    border-radius: 5px;
    cursor: pointer;
  }
  & .checked {
    background-color: #0f461b;
  }
`;

const MainSearchForm = () => {
  const [value, onChange] = useInput();
  const [tag, setTag] = useState("키워드");

  const onClickTag = useCallback((e) => {
    setTag(e.target.innerText);
  }, []);

  const onChecked = useCallback((value: string) => (tag === value ? "checked" : ""), [tag]);
  const getQueryKey = useMemo(() => {
    if (tag === "키워드") return "name";
    if (tag === "테마") return "thema";
    if (tag === "카테고리") return "category";
    if (tag === "주변환경") return "environment";
  }, [tag]);

  return (
    <>
      <Container>
        <div>
          <Input onChange={onChange} value={value} placeholder="어디로 가시나요?" />
          <Link href={`/search?${getQueryKey}=${value}`}>
            <Button>검색</Button>
          </Link>
        </div>
        <TagWrraper>
          <span className={onChecked("키워드")} onClick={onClickTag}>
            키워드
          </span>
          <span className={onChecked("테마")} onClick={onClickTag}>
            테마
          </span>
          <span className={onChecked("카테고리")} onClick={onClickTag}>
            카테고리
          </span>
          <span className={onChecked("주변환경")} onClick={onClickTag}>
            주변환경
          </span>
        </TagWrraper>
      </Container>
    </>
  );
};

export default MainSearchForm;
