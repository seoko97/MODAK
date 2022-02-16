import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  url: string;
  size?: number;
  alt: string;
}

const StyledAvatar = styled.img<Pick<Props, "size">>`
  background: #ccc;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.125s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.04);
  }
`;

const Avatar: FC<Props> = ({ size, url, alt }) => (
  <StyledAvatar alt={alt} width={size} height={size} src={url} size={size as number} />
);

export default Avatar;
