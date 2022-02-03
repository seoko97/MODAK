import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: Props) => (
  <Link href={href}>
    <li>
      <span>{text}</span>
    </li>
  </Link>
);

export default NavItem;
