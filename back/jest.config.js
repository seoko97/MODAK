module.exports = {
  preset: "ts-jest", // 이 부분에서 ts-jest를 사용한다고 알려준다
  testEnvironment: "node", //테스트 환경 'node' 환경을 사용한다 알려줌
  testMatch: ["**/__tests__/*.test.(ts|tsx)"], //js 파일은 dist에서도 감지가 될 수 있으니
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "@passport/(.*)": "<rootDir>/src/passport/$1",
    "@controllers/(.*)": "<rootDir>/src/controllers/$1",
    "@services/(.*)": "<rootDir>/src/services/$1",
    "@routes/(.*)": "<rootDir>/src/routes/$1",
    "@models/(.*)": "<rootDir>/src/models/$1",
    "@middlewares/(.*)": "<rootDir>/src/middlewares/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
    "@type/(.*)": "<rootDir>/src/types/$1",
  },
};
