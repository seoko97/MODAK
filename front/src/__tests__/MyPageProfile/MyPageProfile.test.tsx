import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@src/theme/index";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyPageProfile from "@src/components/UI/molecules/MypageProfile";

// ? describe: 서술하다.
describe("MyPageProfile 테스트", () => {
  let profile: string;
  let nickname: string;
  let onOpen: () => void;
  let intro: string;

  it("렌더 확인", () => {
    const component = renderer.create(
      <ThemeProvider theme={lightTheme}>
        <MyPageProfile />
      </ThemeProvider>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
