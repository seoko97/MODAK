import Logo from "@src/components/icons/Logo";
import { setUser } from "@src/slices/users";
import wrapper from "@src/store";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const StyledHome = styled.div`
  padding: 10px;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  & > svg {
    height: 40px;
  }
`;

const Home = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const onClick = useCallback(() => {
    dispatch(setUser());
  }, [dispatch]);

  return (
    <>
      <StyledHome>
        <Logo />
        로그인
        <button onClick={onClick}>클릭</button>
        <p>{user?.name}</p>
      </StyledHome>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  store.dispatch(setUser());

  return {
    props: {
      a: {},
    },
  };
});

export default Home;
