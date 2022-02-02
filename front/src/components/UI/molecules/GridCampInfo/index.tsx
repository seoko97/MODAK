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
  src: "https://media.istockphoto.com/photos/shot-of-a-cute-vintage-teapot-in-a-campsite-near-to-lake-picture-id1305448692?b=1&k=20&m=1305448692&s=170667a&w=0&h=JIAAnIWgx2dwTi96Zn37rauFCRV11EBIPeTbwAjbpPc=",
};
export default GridCampInfo;
