import { IKeyValueString } from "@src/types";
import { ICampsiteDTO } from "@src/types/Campsite";

const keyList = ["name", "address", "environment", "category", "thema", "amenities", "animal"];

type StrArr = string | string[];
interface IData {
  [key: string]: StrArr;
}

const getArrayInfo = (key: string, data: string) => {
  const d = {} as IKeyValueString;
  const reg = new RegExp(data);
  d[key] = { $in: [reg] };
  return d;
};

export const campsQuery = (data: Partial<ICampsiteDTO>) => {
  if (Object.keys(data).length === 0) return {};

  const { animal, address, name, ...op } = data;
  const query = {} as IKeyValueString;
  const and = [];

  for (const key in op) {
    const el = (<IData>op)[key];
    if (!keyList.includes(key)) continue;

    if (el instanceof Array) {
      el.forEach((e) => {
        const d = getArrayInfo(key, e);
        and.push(d);
      });
    } else {
      const d = getArrayInfo(key, el);
      and.push(d);
    }
  }
  if (name && !(<StrArr>name instanceof Array)) query.name = { $regex: name };
  if (address && !(<StrArr>address instanceof Array)) query.address = { $regex: address };
  if (animal && !(<StrArr>animal instanceof Array))
    query.animal = animal === "true" ? /^((?!불가능).)*$/ : /불가능/;
  if (and[0]) query.$and = and;

  console.log(query);

  return query;
};
