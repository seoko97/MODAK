import React, { useCallback, useState } from "react";
import { NextPage } from "next";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import FilterFinder from "@molecules/FilterFinder";
import CampSiteListBox from "@molecules/CampsiteListBox";
import SortButton from "@molecules/SortButton";
import RowFrame from "@templates/RowFrame";

import { useAppSelector } from "@store/configureStore";
import { getCamps as getCampsByQuery } from "@reducers/camps/action";

const Wrraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > a {
    width: 100%;
  }
  & > * {
    width: 100%;
  }
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 600px;

  padding-top: 30px;
  & > a {
    width: 100%;
  }
`;

const ErrorText = styled.p`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  opacity: 0.8;
`;

const CampsiteListPage: NextPage = () => {
  const { mainCamps, getCamps } = useAppSelector((state) => state.camps);
  const [sorted, setSorted] = useState("_id");
  const dispatch = useDispatch();

  const onChange = useCallback(async (e) => {
    setSorted(e.target.value);
    await dispatch(getCampsByQuery({ sorted: e.target.value }));
  }, []);

  return (
    <>
      <RowFrame>
        <Wrraper>
          <FilterFinder sorted={sorted} />
          <div>
            <SortButton onChange={onChange} />
          </div>
          <ListWrapper>
            {mainCamps[0] ? (
              mainCamps.map((camp, i) => <CampSiteListBox camp={camp} key={camp._id + i} />)
            ) : (
              <ErrorText>검색 결과가 없습니다.</ErrorText>
            )}
            {getCamps.loading && <ClipLoader color="ccc" />}
          </ListWrapper>
        </Wrraper>
      </RowFrame>
    </>
  );
};

export default CampsiteListPage;
