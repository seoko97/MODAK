import React, { memo, useMemo } from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import TitleBox from "@molecules/TitleBox";

import { useAppSelector } from "@store/configureStore";
import { NextArrow, PrevArrow } from "./arrow";

const Container = styled.article`
  padding: 20px 0;
  width: 100%;
  & .slick-arrow {
    width: 14px;
    display: block;
    &.reverse {
      transform: rotate(180deg) translateY(50%);
    }
  }
  & .post-slide {
    width: 98%;
    margin: 0px auto;
    padding: 20px 0;
  }
  & .slick-slide {
    padding: 10px 0;
  }

  & svg {
    fill: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  }

  @media (max-width: ${({ theme }) => theme.BP.HDPC}) {
    & .post-slide {
      width: 95%;
    }
  }

  @media (max-width: 600px) {
    & .post-slide {
      width: 100%;
      margin: 0;
    }
  }
`;

const settings: Settings = {
  infinite: true,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <PrevArrow />,
  prevArrow: <NextArrow />,
  autoplaySpeed: 4000,

  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

interface Props {
  title: string;
  children: React.ReactNode;
}

const CampCardSlider = ({ children, title }: Props) => {
  const { mainCamps } = useAppSelector((state) => state.camps);

  const showLength = useMemo(() => {
    const postsLength = mainCamps.length;
    return postsLength < 3 ? postsLength : 3;
  }, [mainCamps]);

  return (
    <Container>
      <TitleBox title={title} />
      <div className="post-slide">
        <Slider {...settings} slidesToShow={showLength}>
          {children}
        </Slider>
      </div>
    </Container>
  );
};

export default memo(CampCardSlider);
