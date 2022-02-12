import React, { FC } from "react";
import NextLink from "next/link";

interface Props {
  href: string;
  prefetch?: boolean;
}

const Link: FC<Props> = ({ href, children, prefetch }) => (
  <NextLink prefetch={prefetch} href={href}>
    <a>{children}</a>
  </NextLink>
);

Link.defaultProps = {
  href: "/",
  prefetch: true,
};

export default Link;
