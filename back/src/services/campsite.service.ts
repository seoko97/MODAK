import { CampsiteModel } from "@src/models";

import { ICampQuery, ICampsiteDocument, ICampsiteDTO } from "@src/types/Campsite";

export class CampsiteService {
  constructor(private readonly campsiteModel: typeof CampsiteModel) {}
  async test() {
    return "test";
  }

  async getCampById(id: string) {
    return this.campsiteModel.findById(id);
  }

  async getCampsByQuery(query: ICampQuery) {
    return await this.campsiteModel.find(query).limit(3);
  }

  async create(data: ICampsiteDTO) {
    return this.campsiteModel.findOrCreate(data);
  }
}

export const campsiteService = new CampsiteService(CampsiteModel);
