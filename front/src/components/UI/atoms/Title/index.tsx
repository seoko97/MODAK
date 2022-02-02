import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  size: number;
}

const StyledTitle = styled.h2<Props>`
  font-size: ${({ size }) => size}px;
  font-weight: bold;
`;
const Title: FC<Props> = ({ size, children }) => <StyledTitle size={size}>{children}</StyledTitle>;

export default Title;
