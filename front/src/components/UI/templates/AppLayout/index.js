import styled from "styled-components";
import Header from "../../organisms/Header";

const StyledAppLayout = styled.div`
  width: 100%;
  min-height: calc(100vh - 140px);
  position: relative;
  padding-bottom: 140px;
  background-color: ${({ theme }) => theme.BAKCGROUND_COLOR.PRIMARY_COLOR};
  transition: background 0.3s;
  z-index: 0;
`;

const AppLayout = ({ children }) => {
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
