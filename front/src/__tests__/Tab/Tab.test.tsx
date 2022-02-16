import React from "react";
import renderer from "react-test-renderer";
import Tabs from "@src/components/UI/organisms/Tabs";
import { TabList } from "@src/components/UI/organisms/myPage";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@src/theme/index";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Tab 테스트", () => {
  let current: keyof TabList;
  let onClick: () => void;
  it("렌더 확인", () => {
    const view = render(
      <ThemeProvider theme={lightTheme}>
        <Tabs current={current} onClick={onClick} />
      </ThemeProvider>,
    );
    expect(view.container).toMatchSnapshot();
  });

  describe("탭 리스트", () => {
    const tabs: (keyof TabList)[] = ["내 리뷰", "나의 캠핑 기록", "찜한 캠핑장"];
    let tab: HTMLElement;

    beforeEach(() => {
      current = "내 리뷰";
      onClick = jest.fn();
    });
    it("탭 리스트 기능 확인", () => {
      render(
        <ThemeProvider theme={lightTheme}>
          <Tabs current={current} onClick={onClick} />
        </ThemeProvider>,
      );
      tab = screen.getByRole("tablist");
      expect(tab).toBeInTheDocument();
    });
  });
});
