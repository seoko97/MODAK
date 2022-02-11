export interface IAxiosSchduleDTO {
  facltNm: string; // 야영장
  lineIntro: string; // 한줄소개
  intro: string; // 소개
  addr1: string; // 주소
  mapX: number; // 경도
  mapY: number; // 위도
  tel: string; // 전화
  resveUrl: string; // 예약페이지
  animalCmgCl: string; // 애완견 가능 여부
  induty: string; // 업종
  themaEnvrnCl: string; // 테마환경
  sbrsCl: string; // 부대시설
  eqpmnLendCl: string; // 장비 대여 여부
  lctCl: string; // 입지
}

export interface IKeyValueString {
  [key: string]: any;
}
