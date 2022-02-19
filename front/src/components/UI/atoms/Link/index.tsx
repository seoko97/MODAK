import React, { FC } from "react";
import NextLink from "next/link";

interface Props {
  href: string;
}

const Link: FC<Props> = ({ href, children }) => (
  <NextLink href={href}>
    <a>{children}</a>
  </NextLink>
);

Link.defaultProps = {
  href: "/",
};

export default Link;
