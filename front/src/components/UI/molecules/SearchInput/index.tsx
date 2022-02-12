import React from "react";
import styled from "styled-components";
import MagnifierIcon from "@icons/MagnifierIcon";
import Input from "@atoms/Input";

const StyledInputBox = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    top: 50%;
    /* left 맞추기, 픽셀로 조절? (검토필요)*/
    left: 20px;
    transform: translate(-50%, -50%);
  }
`;

const InputWrapper = () => {
  return (
    <StyledInputBox>
      <MagnifierIcon size={15} />
      <Input placeholder="어디로 가시나요?" />
    </StyledInputBox>
  );
};

export default InputWrapper;
