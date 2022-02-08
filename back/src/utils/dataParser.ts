import { IAxiosSchduleDTO } from "@src/types";
import { ICampsiteDTO } from "@src/types/Campsite";

export const splitStr = (str: string | undefined) => (str ? str.split(",") : []);

export const getCampData = (camp: IAxiosSchduleDTO): ICampsiteDTO => {
  const {
    facltNm,
    lineIntro,
    intro,
    induty,
    addr1,
    mapX,
    mapY,
    tel,
    resveUrl,
    themaEnvrnCl,
    sbrsCl,
    animalCmgCl,
    eqpmnLendCl,
    lctCl,
  }: IAxiosSchduleDTO = camp;

  return {
    name: facltNm.trim() || "",
    address: addr1 || "",
    lineIntro: lineIntro || "",
    intro: intro || "",
    x: Number(mapX) || 0,
    y: Number(mapY) || 0,
    tel: tel || "",
    reservationUrl: resveUrl || "",
    animal: animalCmgCl || "불가능",
    category: splitStr(induty),
    thema: splitStr(themaEnvrnCl),
    amenities: splitStr(sbrsCl),
    rental: splitStr(eqpmnLendCl),
    environment: splitStr(lctCl),
  };
};
