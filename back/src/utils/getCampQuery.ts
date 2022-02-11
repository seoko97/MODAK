import { ICampsiteDTO } from "@src/types/Campsite";

const keyList = ["name", "address", "environment", "category", "thema", "amenities", "animal"];

interface IData {
  [key: string]: string | string[];
}

export const strOrArr = (data: string | string[]) => {
  return typeof data === "string" ? [decodeURI(data)] : data.map((el) => decodeURI(el));
};

export const campsQuery = (data: Partial<ICampsiteDTO>) => {
  if (Object.keys(data).length === 0) return {};

  const queryAnd = [];
  const { animal, ...op } = data;

  for (const key in op) {
    if (!keyList.includes(key)) continue;
    const condition = {
      [key]: {
        $in: strOrArr((<IData>op)[key]),
      },
    };
    queryAnd.push(condition);
  }

  if (animal)
    queryAnd.push({
      animal: animal === undefined ? /가능/ : animal === "true" ? /^((?!불가능).)*$/ : /불가능/,
    });

  return {
    $and: [...queryAnd],
  };
};
