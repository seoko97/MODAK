import React from "react";
import styled, { css } from "styled-components";
import Title from "../../atoms/Title";

const StyledContainer = styled.figure`
  display: flex;
  gap: 30px;
  padding: 30px;
`;

const ImageBoxStyle = css`
  width: 130px;
  height: 130px;
  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    width: 100px;
    height: 100px;
  }
`;

const StyledImageBox = styled.div`
  ${ImageBoxStyle}
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    display: none;
  }
`;

const StyledImage = styled.img`
  ${ImageBoxStyle}
  border-radius: 50%;
`;

const StyledInfo = styled.figcaption`
  color: gray;
  & h2,
  p {
    margin-bottom: 10px;
  }
`;

const MyPageProfile = () => {
  return (
    <StyledContainer>
      <StyledImageBox>
        <StyledImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      </StyledImageBox>
      <StyledInfo>
        <Title size={14}>닉네임</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        글 13 좋아요 10
      </StyledInfo>
    </StyledContainer>
  );
};

export default MyPageProfile;
