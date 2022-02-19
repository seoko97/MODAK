import React from "react";
import styled from "styled-components";
import RowFrame from "@templates/RowFrame";
import FooterContent from "./FooterContent";

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 140px;
  background-color: #3e3e3e;
  color: #9b9b9b;
  font-size: 16px;
  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    & svg {
      width: 140px;
    }
    .fill-logo {
      fill: #fff;
    }
  }

  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    & > div {
      flex-direction: column;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <Wrapper>
        <RowFrame>
          <FooterContent />
        </RowFrame>
      </Wrapper>
    </>
  );
};

export default Footer;
