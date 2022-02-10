import { CampsiteModel } from "@src/models";
import { IAxiosSchduleDTO } from "@src/types";

import { ICampQuery, ICampsiteDocument, ICampsiteDTO } from "@src/types/Campsite";
import { APIURL } from "@src/utils/constants";
import { getCampData } from "@src/utils/dataParser";
import axios from "axios";

export class CampsiteService {
  constructor(private readonly campsiteModel: typeof CampsiteModel) {}
  async test() {
    return "test";
  }

  async getCampById(id: string) {
    return this.campsiteModel.findById(id);
  }

  async getCampsByQuery(query: ICampQuery, target: any) {
    return await this.campsiteModel.find(query).sort({ _id: 1 }).limit(10);
  }

  async create(data: ICampsiteDTO) {
    return this.campsiteModel.findOrCreate(data);
  }

  async schedule() {
    const camps = await axios.get(APIURL);

    await Promise.all(
      camps.data.response.body.items.item.map((camp: IAxiosSchduleDTO) => {
        const campsite = getCampData(camp);
        return this.create(campsite);
      }),
    );
  }
}

export const campsiteService = new CampsiteService(CampsiteModel);
