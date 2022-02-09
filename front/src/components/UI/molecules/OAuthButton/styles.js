import styled from "styled-components";
/* ${({ theme }) => theme.BAKCGROUND_COLOR.THIRDARY_COLOR} */

const IconBox = styled.div`
  width: 60px;
  height: 60px;
  @media (max-width: ${({ theme }) => theme.BP.TABLET_Y}) {
    width: 40px;
    height: 40px;
  }
`;

const StyledText = styled.text`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin-left: 15px;
  color: ${(props) => {
    if (props.source === "Google") return "#707070";
    if (props.source === "Facebook") return "#1877F2";
    return "#000000";
  }};

  @media (max-width: ${({ theme }) => theme.BP.TABLET_Y}) {
    font-size: 16px;
  }
`;

const StyledOauthButton = styled.button`
  width: 380px;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px;
  background-color: ${(props) => {
    if (props.source === "Kakao") return "#FEE500";
    return "#FFFFFF";
  }};
  border: 2px;
  border-style: solid;
  border-color: ${(props) => {
    if (props.source === "Google") return "#FFFFFF";
    if (props.source === "Facebook") return "#1877F2";
    return "#FEE500";
  }};
  border-radius: 10px;
  box-shadow: ${(props) => {
    if (props.source === "Google") return "0px 2px 6px #888888";
    return "0";
  }};

  @media (max-width: ${({ theme }) => theme.BP.TABLET_Y}) {
    width: 240px;
    height: 50px;
  }
`;

export { StyledText, StyledOauthButton, IconBox };
