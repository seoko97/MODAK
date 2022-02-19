import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    gap: 6px;
  }
`;

const EachTab = styled.span<{ active: boolean }>`
  font-size: 18px;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  cursor: pointer;
  margin: auto;
  transition: font-weight 0.1s;
  ${(props) =>
    props.active &&
    css`
      color: #038c5a;
      font-weight: bold;
      box-shadow: inset 0px -2px 0px #038c5a;
    `}
  ${(props) =>
    !props.active &&
    css`
      :hover {
        font-weight: bold;
      }
    `}
`;

export default {
  Container,
  EachTab,
};
