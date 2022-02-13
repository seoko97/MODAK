import React, { FC, HTMLProps, memo } from "react";
import styled from "styled-components";

interface Props extends HTMLProps<HTMLButtonElement> {
  name: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Button: FC<Props> = ({ name, onClick, type }) => (
  <StyledButton onClick={onClick} type={type}>
    {name}
  </StyledButton>
);

Button.defaultProps = {
  type: "button",
};

export default memo(Button);
