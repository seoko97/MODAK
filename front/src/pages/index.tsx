import React from "react";
import { NextPage } from "next";
import UserChange from "@src/components/modals/UserUpdateForm";
import styled from "styled-components";
import useModal from "@src/hooks/useInput";

const Container = styled.div`
  height: 3000px;
`;

const Home: NextPage = () => {
  const [isOpen, onOpen, onClose] = useModal();

  return (
    <div>
      <button onClick={onOpen}>click</button>
      {isOpen && <UserChange onClick={onClose} />}
      <Container />
    </div>
  );
};

export default Home;
