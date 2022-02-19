import React from "react";
import styled from "styled-components";

interface Props {
  size?: number;
}

const StyledIcon = styled.svg`
  fill: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  transition: 0.3s fill;
`;

const BookmarkIcon = ({ size }: Props) => (
  <StyledIcon width={size} height={size} viewBox="0 0 15 18">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.74556 2.09467C1.86277 1.95402 2.02174 1.875 2.1875 1.875H12.8125C12.9783 1.875 13.1372 1.95402 13.2544 2.09467C13.3717 2.23532 13.4375 2.42609 13.4375 2.625V15.9746C13.4375 16.4845 12.9844 16.8103 12.6097 16.5698L7.94203 13.5742C7.80604 13.4869 7.65421 13.4413 7.5 13.4413C7.34579 13.4413 7.1939 13.487 7.05791 13.5742L2.02296 16.8063C1.81459 16.9401 1.5625 16.759 1.5625 16.4752V2.625C1.5625 2.42609 1.62835 2.23532 1.74556 2.09467ZM12.8125 2.625H2.1875V15.8501L6.76328 12.9128C6.98994 12.7674 7.24298 12.6913 7.5 12.6913C7.75702 12.6913 8.0101 12.7674 8.23675 12.9128L12.8125 15.8494V2.625Z"
    />
  </StyledIcon>
);

export default BookmarkIcon;
