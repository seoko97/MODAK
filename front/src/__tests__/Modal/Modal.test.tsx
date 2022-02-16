import React from "react";
import UserUpdate from "@src/components/modals/UserUpdateForm";
import { User } from "@src/components/UI/molecules/MypageProfile";
import renderer from "react-test-renderer";
import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@src/theme/index";

describe("Modal 테스트", () => {
  let onClick: () => void;
  let user: User;
  let updateUser: (userInfo: User) => void;
  let portalRoot: HTMLCollectionOf<Element>;
  beforeEach(() => {
    user = {
      _id: 1,
      firstName: "이",
      lastName: "태현",
      email: "asdasd@gmail.com",
      nickname: "현",
      profile:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      createAt: "1121-11-11",
      source: "source",
      likes: 1,
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet magnam dolor quasi laboriosam, qui facere deleniti, assumenda eius, expedita quisquam sit. Vitae veniam corrupti voluptatum laboriosam culpa, accusantium quia!",
    };
    updateUser = jest.fn();
    onClick = jest.fn();
  });

  it("snapshot", () => {
    // const view = render(
    //   <ThemeProvider theme={lightTheme}>
    //     <UserUpdate onClick={onClick} user={user} updateUser={updateUser} />
    //   </ThemeProvider>,
    // );
    // expect(view.container).toMatchSnapshot();
  });
});
