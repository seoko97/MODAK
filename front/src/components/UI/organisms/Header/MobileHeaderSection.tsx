import React, { useEffect } from "react";
import styled from "styled-components";
import useModal from "@hooks/useModal";
import Logo from "@icons/Logo";
import MagnifierIcon from "@icons/MagnifierIcon";
import MenuIcon from "@icons/MenuIcon";
import Link from "@atoms/Link";

import RowFrame from "@templates/RowFrame";
import MobileNav from "@molecules/MobileNav";
import MobileSearchForm from "@molecules/MobileSearchForm";
import { useRouter } from "next/router";

const Container = styled.div`
  display: none;
  width: 100%;
  position: sticky;
  top: -20px;
  padding-top: 20px;
  transition: all 0.3s ease-in-out;
  z-index: 10;
  background-color: ${({ theme }) => theme.BAKCGROUND_COLOR.RGBA};
  backdrop-filter: saturate(180%) blur(20px);

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    display: flex;
  }
`;

const Inner = styled(RowFrame)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  & svg {
    width: 120px;
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  & > svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  }
`;

const MobileHeaderSection = () => {
  const [isOpenMenu, onShowMenu, onCloseMenu] = useModal();
  const [isSearch, onShowList, onCloseList] = useModal();
  const router = useRouter();

  useEffect(() => {
    onCloseMenu();
    onCloseList();
  }, [router.asPath]);

  return (
    <>
      <Container>
        <Inner>
          <IconWrapper onClick={onShowMenu}>
            <MenuIcon />
          </IconWrapper>
          <Link href="/">
            <Logo />
          </Link>
          <IconWrapper onClick={isSearch ? onCloseList : onShowList}>
            <MagnifierIcon />
          </IconWrapper>
        </Inner>
      </Container>
      <MobileSearchForm isOpen={isSearch} onClose={onCloseList} />
      <MobileNav isOpen={isOpenMenu} onClose={onCloseMenu} />
    </>
  );
};

export default MobileHeaderSection;
