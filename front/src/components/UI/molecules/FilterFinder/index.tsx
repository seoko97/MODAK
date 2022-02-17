import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { CampQueryData } from "@src/types/apis/camp";
import FilterCategory from "./FilterCategory";

interface CategoryInfoProps {
  name: string;
  options: string[];
}

interface Props {
  categories: CategoryInfoProps[];
}

interface QueryProps {
  [key: string]: string[];
}

const FilterFinder = ({ categories }: Props) => {
  const [query, setQuery] = useState<QueryProps>({
    address: [],
    environment: [],
    thema: [],
    amenities: [],
  });
  const checked = useCallback(
    (title, list) => {
      console.log(query);
      const newQuery = {
        ...query,
        [title]: list,
      };
      setQuery(newQuery);
    },
    [query],
  );

  // console.log(query);

  return (
    <FinderContainer>
      {categories.map((category) => {
        return (
          <FilterCategory key={category.name} category={category} checked={checked} query={query} />
        );
      })}
      <ButtonContainer>
        <input type="button" value="초기화" />
        <input
          type="button"
          value="검색"
          onClick={() => {
            console.log(query);
          }}
        />
      </ButtonContainer>
    </FinderContainer>
  );
};

FilterFinder.defaultProps = {
  categories: [
    {
      name: "지역",
      options: [
        "서울시",
        "부산시",
        "대구시",
        "인천시",
        "광주시",
        "대전시",
        "울산시",
        "세종시",
        "경기도",
        "강원도",
      ],
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
  ],
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
