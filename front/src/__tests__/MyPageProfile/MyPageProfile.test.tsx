import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@src/theme/index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyPageProfile from "@src/components/UI/molecules/MypageProfile";

describe("MyPageProfile 테스트", () => {
  it("렌더 확인", () => {
    const view = render(
      <ThemeProvider theme={lightTheme}>
        <MyPageProfile />
      </ThemeProvider>,
    );

    expect(view.container).toMatchSnapshot();
  });

  it("프로필 편집 클릭", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <MyPageProfile />
      </ThemeProvider>,
    );

    const buttons = screen.getByTitle("EditProfile");
    // userEvent.click(buttons);
  });
});
