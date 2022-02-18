import React from "react";
import ImageSlider from "@organisms/ImageSlider";

import styled from "styled-components";
import ModalLayout from "../ModalLayout";

interface Props {
  isOpen: boolean;
  onClick: () => void;
  photos: string[];
}

const Container = styled.div`
  width: 1200px;
  height: 500px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .slick-track {
    display: flex !important;
    align-items: center;
    justify-content: center;
  }

  .slick-active {
    margin: 0 10px;
  }

  @media (max-width: ${({ theme }) => theme.BP.HDPC}) {
    width: 100%;

    .slick-active {
      margin: 0;
    }
  }
`;

const ModalCaroucel = ({ onClick, photos }: Props) => {
  return (
    <>
      <ModalLayout onClick={onClick}>
        <Container>
          <ImageSlider images={photos} />
        </Container>
      </ModalLayout>
    </>
  );
};

export default ModalCaroucel;
