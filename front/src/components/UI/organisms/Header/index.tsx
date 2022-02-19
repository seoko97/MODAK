import React from "react";

import HeaderSection from "./HeaderSection";
import MobileHeaderSection from "./MobileHeaderSection";

const Header = () => {
  return (
    <>
      <HeaderSection />
      <MobileHeaderSection />
    </>
  );
};

export default React.memo(Header);
