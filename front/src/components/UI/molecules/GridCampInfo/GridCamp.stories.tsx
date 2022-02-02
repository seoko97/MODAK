import React from "react";

import GridCampInfo from ".";

export default {
  title: "Molecules/GridCampInfo",
  component: GridCampInfo,
};

export const Default = () => {
  return (
    <GridCampInfo
      title="테스트 타이틀입니다"
      description="테스트 소개글 입니다. 테스트 소개글 입니다. 테스트 소개글 입니다. 테스트 소개글 입니다. 테스트 소개글 입니다."
      to="#"
      src="https://media.istockphoto.com/photos/shot-of-a-cute-vintage-teapot-in-a-campsite-near-to-lake-picture-id1305448692?b=1&k=20&m=1305448692&s=170667a&w=0&h=JIAAnIWgx2dwTi96Zn37rauFCRV11EBIPeTbwAjbpPc="
    />
  );
};
