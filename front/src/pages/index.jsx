import React from "react";
import { setUser } from "@src/slices/users";
import wrapper from "@src/store";

const Home = () => {
  return (
    <>
      <div>Home</div>
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
