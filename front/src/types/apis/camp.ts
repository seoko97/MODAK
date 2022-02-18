import { ResponseDTO } from ".";
import { ICamp } from "../reducers/camp";

type CampQueryDTO = Pick<
  ICamp,
  "name" | "address" | "environment" | "category" | "thema" | "amenities" | "animal"
>;

export interface CampQueryData extends Partial<CampQueryDTO> {
  sorted?: string;
  skip?: string;
}

export interface ResCp extends ResponseDTO {
  camp: ICamp;
}

export interface ResCps extends ResponseDTO {
  camps: ICamp[];
}

export interface ResCpBms extends ResponseDTO {
  userId: string;
  campId: string;
}

export interface ResCpSearch extends ResponseDTO {
  camps: Pick<ICamp, "_id" | "name" | "lineIntro">[];
}
