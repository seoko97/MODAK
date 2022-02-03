import React from "react";
import styled from "styled-components";
import Header from "@organisms/Header";

const StyledAppLayout = styled.div`
  width: 100%;
  min-height: calc(100vh - 140px);
  position: relative;
  padding-bottom: 140px;
  background-color: ${({ theme }) => theme.BAKCGROUND_COLOR.PRIMARY_COLOR};
  transition: background-color 0.3s;
  z-index: 0;
`;

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <StyledAppLayout>
        <Header />
        {children}
      </StyledAppLayout>
    </>
  );
};

export default AppLayout;
