import React from "react";
import styled from "styled-components";

interface Props {
  size?: number;
}

const StyledIcon = styled.svg`
  fill: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  transition: 0.3s fill;
`;
const PencilIcon = ({ size }: Props) => (
  <StyledIcon width={size} height={size} viewBox="0 0 24 24">
    <path d="M14.078 7.061l2.861 2.862-10.799 10.798-3.584.723.724-3.585 10.798-10.798zm0-2.829l-12.64 12.64-1.438 7.128 7.127-1.438 12.642-12.64-5.691-5.69zm7.105 4.277l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z" />
  </StyledIcon>
);

export default PencilIcon;
