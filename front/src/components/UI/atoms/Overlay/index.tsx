import React from "react";
import styled from "styled-components";

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
`;

interface Props {
  onClick: () => void;
}

const Overlay = ({ onClick }: Props) => {
  return <StyledOverlay onClick={onClick} />;
};

export default Overlay;
