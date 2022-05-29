# 모닥

- 캠린이부터 캠핑 고인물까지 캠핑족을 위해 캠핑장 이용 후기와 캠핑장 정보를 함께 제공하는 사이트입니다.

## 프로젝트 구성 안내

## 1. 프로젝트 소개

- 기술 스택
  | 분류 | 기술 |
  | ------ | ------------------- |
  | Front | React, NextJs, Redux-toolkit, Redux-saga, Styled-Components |
  | Back | Express, MongoDB |
  | 배포 | Azure, Nginx |
  | 테스팅 | Jest, Storybook |
- 웹서비스에 대한 자세한 개요

## 2. 프로젝트 기획 의도

- 코로나 이후 '언택트'가 강조되었고, 캠핑에 대한 관심이 급부상했고, 캠핑지를 결정하는데 도움을 주는 사이트를 제작하기로 결정.

- 다른 사용자들이 직접 경험하고 작성한 후기는 유저들이 가장 신뢰할 수 있는 자료가 된다고 생각했고, 이를 중점적으로 보여주는 사이트를 제작하기로 했습니다.

- 실제로 캠핑장에 다녀온 사람만이 경험하고 느낀 정보가 있고, 캠핑장에서 제공하는 데이터와 리뷰를 손쉽게 모아 볼 수 있다면 캠핑장을 결정하는데 큰 도움이 될 것이라고 판단.

- 위와 같은 이유로 캠핑장 정보와 리뷰들을 간단하게 볼 수 있는 ‘모닥’ 프로젝트를 기획하게 되었습니다.

## 3. 서비스 주요 기능 설명

**`메인 기능`**

1. 캠핑장 이용 후기 공유  
   방문한 캠핑장에 대한 정보를 리뷰의 형태로 공유하는 기능입니다.

2. 캠핑장 정보 공유  
    각각의 캠핑장의 이름, 위치부터 설치된 시설까지 캠핑장에 대한 데이터 전반을 확인할 수 있습니다.  
   해당 캠핑장을 이용한 사용자의 리뷰도 확인할 수 있습니다.

3. 캠핑장 필터링 기능  
   이용자가 원하는 조건으로 캠핑장을 검색할 수 있습니다.  
   '데크'와 '반려동물 동반 가능'을 조건으로 검색한다면 데크가 있고 반려동물 동반이 가능한 캠핑장들을 찾을 수 있습니다.

4. 이용자의 데이터를 이용하여 리뷰의 신뢰도 필터링 기능  
   작성한 리뷰 수와 리뷰에 달린 공감/추천수를 기반으로 이용자의 신뢰도를 계산하여 작성한 리뷰의 신뢰도를 평가하는 기능입니다.

**`서브 기능`**

1. 리뷰 신고 기능을 통한 자정작용  
   욕설, 허위, 광고 등의 리뷰를 신고할 수 있게하고 신고가 누적된 유저에게 이용제한을 줌으로써 깔끔한 환경을 제공합니다.

2. 가보고 싶은 캠핑장 목록 저장 기능(위시리스트)  
   리뷰를 보고 마음에 드는 캠핑장일 때, 위시리스트에 추가해서 다음에 방문해보고 싶은 캠핑장들을 모아둡니다.

3. 캠핑장 근처의 약국 및 병원을 지도에 표시해주는 기능
   개발의 우선순위는 낮지만 지도 API를 이용하여 캠핑장 근처에 있는 편의 시설을 표시해주는 기능입니다. (후순위)

- 프로젝트만의 차별점, 기대 효과

## 4. 프로젝트 구성도

### 와이어프레임

- [피그마(와이어 프레임)](https://www.figma.com/file/4IuP5rkdTNYy0jsJJ8txH1/Wireframing-in-Figma?node-id=0%3A1)

## 5. 기여

| 이름   | 역할                | 담당 부분 |
| ------ | ------------------- | --------------------------- |
| 지석호 | 팀장 / 프론트엔드 및 백엔드 |  프론트엔드 <br /> 1. 프론트엔드 개발환경 세팅 <br /> 2. Redux-tookit을 통한 상태관리 로직 작성 <br /> 3. Custom Hook을 통한 재사용 로직 작성<br /><br /> 백엔드 <br /> 1. 전체 API(게시글 CRUD, 검색 로직 등) 로직 개발 <br /> 2. JWT를 통한 유저 인증 구현 <br /> 3. Nginx를 통한 Https 적용 |

## 6. 문서

- [노션](https://ripe-basket-c1c.notion.site/MODAK-406777c6cb57426fab2d8395df3ab841)
