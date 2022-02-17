import React, { memo } from "react";
import styled from "styled-components";
import { ICamp } from "@type/reducers/camp";
import Link from "@atoms/Link";

interface Props {
  camps: Pick<ICamp, "_id" | "name" | "lineIntro">[];
}
const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Item = styled.li`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  & * {
    color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.BORDER_COLOR.PRIMARY_COLOR};
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
const Intro = styled.p`
  color: #ababab;
`;

const SearchCampList = ({ camps }: Props) => {
  return (
    <Container>
      {camps.map((camp) => (
        <Item key={camp._id}>
          <Link key={camp._id} href={`/camp/${camp._id}`}>
            <Title>{camp.name}</Title>
            <Intro>{camp.lineIntro}</Intro>
          </Link>
        </Item>
      ))}
    </Container>
  );
};

export default memo(SearchCampList);
