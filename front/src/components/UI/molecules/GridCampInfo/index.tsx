import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import GridCampInfoInner from "./GridCampInfoInner";

interface Props {
  to: string;
  title: string;
  description: string;
  src: string;
}

const StyledCamp = styled.div<Pick<Props, "src">>`
  width: 100%;
  height: 200px;
  position: relative;
  cursor: pointer;
`;

const GridCampInfo = ({ to, title, description, src }: Props) => {
  return (
    <>
      <Link href={to}>
        <StyledCamp src={src}>
          <Image alt="asd" src={src} layout="fill" objectFit="cover" />
          <GridCampInfoInner title={title} description={description} />
        </StyledCamp>
      </Link>
    </>
  );
};

GridCampInfo.defaultProps = {
  src: "/post.jpg",
};
export default GridCampInfo;
