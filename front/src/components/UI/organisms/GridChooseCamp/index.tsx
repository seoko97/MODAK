import React from "react";
import styled from "styled-components";
import GridCampInfo from "../../molecules/GridCampInfo";

const StyledCamp = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  & > div {
    background-color: #ccc;
  }

  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridChooseCamp = () => {
  return (
    <StyledCamp>
      <GridCampInfo title="asd" description="qq" to="#" />
      <GridCampInfo title="asd" description="qq" to="#" />
      <GridCampInfo title="asd" description="qq" to="#" />
      <GridCampInfo title="asd" description="qq" to="#" />
    </StyledCamp>
  );
};

export default GridChooseCamp;
