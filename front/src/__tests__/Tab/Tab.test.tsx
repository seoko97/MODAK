import { TabList } from "@src/components/UI/organisms/MyPage";
import React from "react";
import renderer from "react-test-renderer";
import Tab from "../../components/UI/organisms/Tab";

describe("Tab 테스트", () => {
  const tabs: (keyof TabList)[] = ["내 리뷰", "나의 캠핑 기록", "찜한 캠핑장"];
  let current: keyof TabList;
  let onClick: () => void;

  beforeEach(() => {
    current = "내 리뷰";
    onClick = jest.fn();
  });

  it("렌더 확인", () => {
    const component = renderer.create(<Tab current={current} onClick={onClick} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
