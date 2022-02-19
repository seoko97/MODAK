import React from "react";
import styled from "styled-components";
import ImageSlider from "@organisms/ImageSlider";
import ExitIcon from "@icons/ExitIcon";
import ModalLayout from "../ModalLayout";

interface Props {
  isOpen: boolean;
  onClick: () => void;
  photos: string[];
}

const Container = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  min-width: 40%;

  .slick-track {
    display: flex !important;
    align-items: center;
    justify-content: center;
  }

  .slick-active {
    margin: 0 10px;
  }

  @media (max-width: ${({ theme }) => theme.BP.HDPC}) {
    padding: 20px;

    .slick-active {
      margin: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    width: 95%;
    padding: 0;
  }
`;

const CloseButton = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10000;
  border-radius: 50%;
  cursor: pointer;
  & > svg {
    fill: #aeaeae;
    width: 100%;
    height: 100%;
  }
`;

const ModalCaroucel = ({ onClick, photos }: Props) => {
  return (
    <>
      <ModalLayout onClick={onClick}>
        <CloseButton onClick={onClick}>
          <ExitIcon />
        </CloseButton>
        <Container>
          <ImageSlider images={photos} />
        </Container>
      </ModalLayout>
    </>
  );
};

export default ModalCaroucel;
