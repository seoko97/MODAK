import React from "react";

import RowFrame from "@templates/RowFrame";
import GridCamp from ".";

export default {
  title: "Organisms/GridCamp",
  component: GridCamp,
};

export const Default = () => {
  return (
    <RowFrame>
      <GridCamp />
    </RowFrame>
  );
};
