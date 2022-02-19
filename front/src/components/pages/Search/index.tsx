import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

import { useAppSelector } from "@store/configureStore";
import { getCamps } from "@reducers/camps/action";

import SortButton from "@molecules/SortButton";
import CampSiteListBox from "@molecules/CampsiteListBox";
import RowFrame from "@templates/RowFrame";

import useScroll from "@hooks/useScroll";
import useThrottle from "@hooks/useThrottle";

interface Props {
  query: {
    [key: string]: string;
  };
}

const StyledHeader = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  & > * {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    font-size: 18px;
  }
`;

const Loader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const Search = ({ query }: Props) => {
  const values = Object.values(query);
  const [skip, setSkip] = useState(0);
  const { mainCamps, getCamps: GCState } = useAppSelector((state) => state.camps);
  const dispatch = useDispatch();
  const [scrollHeight, clientHeight] = useScroll();

  const onThrottle = useThrottle(async () => {
    await dispatch(getCamps({ ...query, skip: String(skip + 1) }));
    setSkip((prev) => prev + 1);
  }, 500);

  useEffect(() => {
    if (scrollHeight + 300 >= clientHeight) {
      onThrottle();
    }
  }, [scrollHeight, clientHeight]);

  const onChange = useCallback(async (e) => {
    await dispatch(getCamps({ sorted: e.target.value, ...query }));
  }, []);

  return (
    <RowFrame>
      <StyledHeader>
        <div>{values[0]} 검색결과</div>
        <div>
          <SortButton onChange={onChange} />
        </div>
      </StyledHeader>
      {mainCamps.map((camp, i) => (
        <CampSiteListBox camp={camp} key={camp._id + i} />
      ))}

      {GCState.loading && (
        <Loader>
          <ClipLoader color="#ccc" />
        </Loader>
      )}
    </RowFrame>
  );
};

export default Search;
