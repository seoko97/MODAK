import HeartIcon from "@src/components/icons/HeartIcon";
import PencilIcon from "@src/components/icons/PencilIcon";
import { ICamp } from "@src/types/reducers/camp";
import React from "react";
import SubTitle from "../../atoms/SubTitle";
import Style from "./styles";

interface Props {
  createdAt: Date;
  location: Pick<ICamp, "_id" | "name" | "address">;
}

const IconComponent = () => (
  <Style.IconBox>
    <Style.Icons>
      <PencilIcon size={13} /> 10
    </Style.Icons>
    <Style.Icons>
      <HeartIcon size={13} /> 10
    </Style.Icons>
  </Style.IconBox>
);

const VisitedCamp = ({ createdAt, location }: Props) => (
  <Style.VisitedCamp>
    <SubTitle>2022-01-28</SubTitle>
    <Style.CampInfo>
      <Style.CampLink href="#">
        <a>@캠핑장 이름/ 주소</a>
      </Style.CampLink>
      <IconComponent />
    </Style.CampInfo>
  </Style.VisitedCamp>
);

export default VisitedCamp;
