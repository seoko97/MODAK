import { setUser } from "@src/slices/users";
import wrapper from "@src/store";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const StyledHome = styled.div`
  font-size: 20px;
  font-weight: bold;
  background-color: #ccc;
`;

const Home = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  const onClick = useCallback(() => {
    dispatch(setUser());
  }, [dispatch]);

  return (
    <>
      <StyledHome>
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
