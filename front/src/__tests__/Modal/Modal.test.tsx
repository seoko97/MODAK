import React from "react";
import UserUpdate from "@src/components/modals/UserUpdateForm";
import { User } from "@src/components/UI/molecules/MypageProfile";
import renderer from "react-test-renderer";
import { screen } from "@testing-library/react";

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
    const component = renderer.create(
      <UserUpdate onClick={onClick} user={user} updateUser={updateUser} />,
    );
    // portalRoot = document.getElementById("modal");
    expect(component.toJSON()).toMatchSnapshot();
  });
});

// ? 실제 -> Mock -> Stub, spy..
// ? 하나의 오브젝트에 여러 function, 일부분만 fake로 만드
// ? mock보다 stub이 일부에 집중할 때
// ? spy : 진짜 오브젝트에 대해서 안쪽에 들어가게 해서, 거기서 수행하는 것들을 갈아끼우거나, 리턴하게 하는. 좀 하이브리드 느낌.
// ? 테스트 작성이 어려우면? 리얼 코드를 고쳐야하는 건 아닌지 생각해보자.
// ? Mock : 몇 번 호출됐는지 확인 가능한데, 스텁은 그런 게 좀 안 되는. (toHaveCalledTimes, toHaveCalledWith 등등...)

// ? toHaveCalledTimes, toHaveCalledWith: 하는 이유는?
// ? 몽구스 커넥션에 대해서, 호출을 잘 했는지 확인(1번만 호출됐느냐?), 내가 원하는 결과와 같이 왔느냐?()
// ? API 테스트를 할 때, 파라미터들이 같이 올 텐데, 쿼리문에 잘 포함되고 있는지..
// ? 타임 라이브러리에 A란 메소드를 잘 가져왔는지, 원하는 format으로 잘 가져왔는지...

// ? E2E(end to end) 테스트...보단 unit test를.
// ? 몽구스 자체보다는, 내가 만든 메소드가 잘 기능하는지.
// ? JSON이 string으로 왔으면, 그걸 다시 JSON으로 변환시켜서 테스트.
// ? 테스트를 문서화하면, 걔네들에 대한 스펙을 정리.
// ? get이라는 API에 대해서 이러이러하게 정리를 하고서, 테스트를 작성.
// ? 테스트를 먼저 만들고, 기능 개발을 구현.
// ? 테스트는 이 사람이, 기능은 저 사람이.

// ? 서버 개발을 하다보면, 리얼 테스트를 안 해도 될 때가 많음.
// ? 어떤 데이터가 들어갔는지, 테스트 코드가 있으면 안 해도 됨. 포스트맨에서 설정하고, 뭐하고, 파일 첨부하고, 키도 바꾸고...서버 저장 잘 됐는지...
// ? 테스트 코드 작성했으면? 쿼리가 잘 돌아가는지, 세이브가 해당 공간에 잘 되는지 확인 가능.

// ? 시간 절약이 매우 좋음.
// ? 테스트는 리팩토링에 굉장히 좋음. 조기에 발견하기 좋음.
// ? 구직에 도움 되는.

// ? TDD를 할 때 주니어와 시니어의 조화.
// ? 리액트만 보더라도, 빌드 시간 절약.

// ? 내가 만든 스펙을 미리 정리. 더 빠르게, 더 명확하게 개발.
// ? 구조를 잡기 좋음.
