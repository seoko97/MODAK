import React from "react";
import styled from "styled-components";

const TriangleIcon = () => (
  <StyledIcon width="22" height="13" viewBox="0 0 22 13">
    <path d="M11 13L21.3923 0.25H0.607696L11 13Z" fill="#BFBFBF" />
  </StyledIcon>
);

export default TriangleIcon;

const StyledIcon = styled.svg`
  width: 13px;
  height: 9px;
`;
