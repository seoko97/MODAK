import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const ContentTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & > h2 {
    color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
    font-size: 18px;
    font-weight: bold;
  }
`;

const TitleBox = ({ title }: Props) => (
  <ContentTitle>
    <h2>{title}</h2>
  </ContentTitle>
);

export default TitleBox;
