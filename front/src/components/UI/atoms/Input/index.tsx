import React, { FC, memo } from "react";
import styled from "styled-components";

interface Props {
  placeholder: string;
  value?: string;
  // onChange?: () => void;
}

const StyledInput = styled.input<Props>`
  font-size: 16px;
  /* line-height: 24px; 필요여부 검토 */
  width: 100%;
  max-width: 400px;
  flex: 1;
  padding: 8px 8px 8px 35px;
  outline: none;
  border: 1px solid #757575;
  border-radius: 50px;
  box-sizing: border-box;

  &::placeholder {
  color: #757575;
`;

const Input: FC<Props> = ({ placeholder, value }) => (
  <StyledInput placeholder={placeholder} value={value} />
);

export default memo(Input);
