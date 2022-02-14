import React from "react";
import styled from "styled-components";

import RowFrame from "@templates/RowFrame";
import Logo from "@icons/Logo";
import Nav from "@molecules/Nav";
import SearchInput from "@molecules/SearchInput";
import Link from "@atoms/Link";
import { useAppSelector } from "@src/store/configureStore";

const Container = styled.header`
  width: 100%;
  position: sticky;
  top: -32px;
  padding-top: 32px;
  transition: all 0.3s ease-in-out;
  z-index: 10;
  background-color: ${({ theme }) => theme.BAKCGROUND_COLOR.RGBA};
  backdrop-filter: saturate(180%) blur(20px);
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    & svg {
      width: 130px;
      cursor: pointer;
    }
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    display: none;
  }
`;

const Inner = styled(RowFrame)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  & svg {
    width: 130px;
    cursor: pointer;
  }
`;

const HeaderSection = () => {
  const { me } = useAppSelector((state) => state.user);

  return (
    <>
      <Container>
        <Inner>
          <Link href="/">
            <Logo />
          </Link>
          <SearchInput />
          <Nav user={me} />
        </Inner>
      </Container>
    </>
  );
};

export default React.memo(HeaderSection);
