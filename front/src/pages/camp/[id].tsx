import React from "react";
import { NextPage } from "next";
import RowFrame from "@templates/RowFrame";
import CampSiteInfo from "@molecules/CampSiteInfo";
import CampsiteReviewBox from "@organisms/CampsiteReviewBox";

const Camp: NextPage = () => {
  return (
    <>
      <CampSiteInfo />
      <RowFrame>
        <CampsiteReviewBox />
      </RowFrame>
    </>
  );
};

export default Camp;
