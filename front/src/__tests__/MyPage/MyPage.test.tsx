import MyPage, { TabList } from "@src/components/UI/organisms/myPage";
import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@src/theme/index";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("마이페이지 테스트", () => {
  it("렌더 확인", () => {
    const component = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <MyPage />
        </ThemeProvider>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
