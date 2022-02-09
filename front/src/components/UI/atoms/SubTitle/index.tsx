import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  size?: number;
}

const StyledSubTitle = styled.h2<Props>`
  font-size: ${({ size }) => size}px;
  color: #757575;
`;
const SubTitle: FC<Props> = ({ size, children }) => (
  <StyledSubTitle size={size}>{children}</StyledSubTitle>
);

SubTitle.defaultProps = {
  size: 13,
};

export default SubTitle;
