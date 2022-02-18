import React from "react";
import styled from "styled-components";
import GridCampInfo from "@molecules/GridCampInfo";
import TitleBox from "@molecules/TitleBox";

const Container = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const StyledCamp = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  & > div {
    background-color: #ccc;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }
`;

const GridChooseCamp = () => {
  return (
    <Container>
      <TitleBox title="이런 캠핑장은 어떠세요?" />

      <StyledCamp>
        <GridCampInfo
          title="#봄꽃여행"
          description=""
          to="/search?thema=봄꽃여행"
          src="/spring.jpg"
        />
        <GridCampInfo
          title="#여름물놀이"
          description=""
          to="/search?thema=여름물놀이"
          src="/summer.jpg"
        />
        <GridCampInfo
          title="#가을단풍명소"
          description=""
          to="/search?thema=가을단풍명소"
          src="/autumn.jpg"
        />
        <GridCampInfo
          title="#겨울눈꽃명소"
          description=""
          to="/search?thema=겨울눈꽃명소"
          src="/winter.jpg"
        />
      </StyledCamp>
    </Container>
  );
};

export default GridChooseCamp;
