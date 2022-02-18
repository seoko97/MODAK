import React, { MouseEvent } from "react";

interface Props {
  className: string;
  onClick: (e: MouseEvent<SVGSVGElement>) => void;
}

const Left = (props: Props) => (
  <svg viewBox="0 0 7 10" {...props}>
    <path d="M0.148438 8.82812L3.97656 5L0.148438 1.17188L1.32031 0L6.32031 5L1.32031 10L0.148438 8.82812Z" />
  </svg>
);
export default Left;
