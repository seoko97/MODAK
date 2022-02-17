import React from "react";
import { NextPage } from "next";
import RowFrame from "@templates/RowFrame";
import CampSiteCoverImg from "@molecules/CampSiteCoverImg";
import CampSiteInfo from "@molecules/CampSiteInfo";
import CampsiteReviewBox from "@organisms/CampsiteReviewBox";

const Camp: NextPage = () => {
  return (
    <>
      <CampSiteCoverImg />
      <RowFrame>
        <CampSiteInfo />
        <CampsiteReviewBox />
      </RowFrame>
    </>
  );
};

export default Camp;
