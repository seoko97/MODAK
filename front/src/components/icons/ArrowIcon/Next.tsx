import React, { MouseEvent } from "react";

interface Props {
  className: string;
  onClick: (e: MouseEvent<SVGSVGElement>) => void;
}
const Next = (props: Props) => (
  <svg viewBox="0 0 7 10" {...props}>
    <path d="M6.85156 8.82812L5.67969 10L0.679688 5L5.67969 0L6.85156 1.17188L3.02344 5L6.85156 8.82812Z" />
  </svg>
);
export default Next;
