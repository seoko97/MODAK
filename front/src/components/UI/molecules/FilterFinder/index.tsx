import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getCamps } from "@src/reducers/camps/action";
import useScroll from "@src/hooks/useScroll";
import useThrottle from "@src/hooks/useThrottle";
import FilterCategory from "./FilterCategory";
import { getCampQuery } from "../../../../apis/camp/index";
import { useAppSelector } from "../../../../store/configureStore";

interface QueryProps {
  [key: string]: string[];
}

interface Props {
  sorted: string;
}

const categories = [
  {
    name: "지역",
    options: ["서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", "경기", "강원"],
  },
  {
    name: "주변환경",
    options: ["해변", "산", "숲", "계곡", "강", "호수", "도심"],
  },
  {
    name: "부대시설",
    options: ["전기", "wifi", "온수", "수영장", "산책로", "편의점"],
  },
  {
    name: "테마",
    options: ["낚시", "일출명소", "일몰명소", "물놀이", "액티비티"],
  },
];

const FilterFinder = ({ sorted }: Props) => {
  const { mainCamps } = useAppSelector((state) => state.camps);
  const [query, setQuery] = useState<QueryProps>({});
  const dispatch = useDispatch();
  const [scrollHeight, clientHeight] = useScroll();
  const onThrottle = useThrottle(async () => {
    await dispatch(getCamps({ ...query, sorted, lastId: mainCamps[mainCamps.length - 1]._id }));
  }, 1000);

  useEffect(() => {
    if (scrollHeight + 300 >= clientHeight) {
      onThrottle();
    }
  }, [scrollHeight, clientHeight]);

  const checked = useCallback(
    (title, list) => {
      const newQuery = {
        ...query,
        [title]: list,
      };
      setQuery(newQuery);
    },
    [query],
  );

  const searchCamps = useCallback(async () => {
    await dispatch(getCamps({ ...query, sorted }));
  }, [query, sorted]);

  return (
    <FinderContainer>
      {categories.map((category) => (
        <FilterCategory key={category.name} category={category} query={query} checked={checked} />
      ))}
      <ButtonContainer>
        <input type="button" value="초기화" />
        <input type="button" value="검색" onClick={searchCamps} />
      </ButtonContainer>
    </FinderContainer>
  );
};

export default FilterFinder;

const FinderContainer = styled.form`
  margin-top: 1em;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.1);
  padding: 30px 50px;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    padding: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  input {
    border-radius: 4px;
    border: none;
    padding: 10px 20px;

    &:hover {
      cursor: pointer;
    }
  }

  input + input {
    margin-left: 20px;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    input {
      width: 50px;
      height: 20px;
      font-size: 10px;
      padding: 0;
    }

    input + input {
      margin-left: 10px;
    }
  }
`;
