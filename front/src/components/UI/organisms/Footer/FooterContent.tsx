import React from "react";
import Logo from "@icons/Logo";
import Link from "@atoms/Link";

const FooterContent = () => {
  return (
    <>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div>Copyrights(c) 2022.</div>
    </>
  );
};

export default FooterContent;
