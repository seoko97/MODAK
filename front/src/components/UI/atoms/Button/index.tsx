import React, { FC, memo } from "react";
import styled from "styled-components";

export type ButtonAlign = "none" | "left" | "right";

interface Props {
  name: string;
  align?: ButtonAlign;
  onClick?: () => void;
  type?: "button" | "submit";
}

interface StyledProps {
  align: ButtonAlign;
}

export const StyledButton = styled.button<StyledProps>`
  float: ${({ align }) => align};
  background-color: ${({ theme }) => theme.BAKCGROUND_COLOR.PRIMARY_COLOR};
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  border: none;
  border-radius: 4px;
  font-weight: 600;
  padding: 4px 16px;
  cursor: pointer;

  transition: filter 0.5s;

  &:hover {
    filter: brightness(1.3);
  }
  &:focus {
    outline: none;
  }
`;

const Button: FC<Props> = ({ name, align, onClick, type }) => (
  <StyledButton align={align as ButtonAlign} onClick={onClick} type={type}>
    {name}
  </StyledButton>
);

Button.defaultProps = {
  align: "none",
  type: "button",
};

export default memo(Button);
