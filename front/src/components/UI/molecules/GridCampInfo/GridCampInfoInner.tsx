import React from "react";
import styled from "styled-components";
import Title from "@atoms/Title";

interface Props {
  title: string;
  description: string;
}

const StyledInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  color: #fff;
  padding: 20px;

  & > p {
    text-align: center;
  }
`;

const CampInfoInner = ({ title, description }: Props) => (
  <StyledInner>
    <Title size={20}>{title}</Title>
    <p>{description}</p>
  </StyledInner>
);

export default CampInfoInner;
