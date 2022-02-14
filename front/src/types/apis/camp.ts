import { ICamp } from "../reducers/camp";

type CampQueryDTO = Pick<
  ICamp,
  "name" | "address" | "environment" | "category" | "thema" | "amenities" | "animal"
>;

export interface CampQueryData extends Partial<CampQueryDTO> {
  lastId?: string;
}
