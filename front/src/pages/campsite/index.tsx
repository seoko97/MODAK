import React from "react";
import { NextPage } from "next";

import FilterFinder from "@src/components/UI/molecules/FilterFinder";
import CampSiteListBox from "@src/components/UI/molecules/CampsiteListBox";
import SortButton from "@src/components/UI/molecules/SortButton";
import RowFrame from "@src/components/UI/templates/RowFrame";

const CampsiteListPage: NextPage = () => {
  return (
    <>
      <FilterFinder />
      <RowFrame>
        <SortButton />
        <CampSiteListBox />
        <CampSiteListBox />
        <CampSiteListBox />
        <CampSiteListBox />
        <CampSiteListBox />
      </RowFrame>
    </>
  );
};

export default CampsiteListPage;
