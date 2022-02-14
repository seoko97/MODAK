import { CampsiteModel, UserModel } from "@models/.";

import { IAxiosSchduleDTO, IKeyValueString } from "@src/types";
import { ICampsiteDTO } from "@src/types/Campsite";
import { APIURL } from "@utils/constants";
import { getCampData } from "@utils/dataParser";
import axios from "axios";

export class CampsiteService {
  constructor(
    private readonly campsiteModel: typeof CampsiteModel,
    private readonly userModel: typeof UserModel,
  ) {}

  async getCampById(id: string) {
    return await this.campsiteModel.findByIdAndUpdate(id, { $inc: { views: 1 } });
  }

  async getCampsByQuery(query = {}, target = {}, limit: number) {
    return await this.campsiteModel
      .find(query)
      .sort({ ...target, _id: -1 })
      .limit(limit);
  }

  async create(data: ICampsiteDTO) {
    return await this.campsiteModel.findOrCreate(data);
  }

  async update(id: string, data: IKeyValueString) {
    return await this.campsiteModel.updateOne({ _id: id }, data);
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

  async bookmark(userId: string, campId: string) {
    return await this.campsiteModel.findOneAndUpdate(
      { _id: campId },
      { $push: { bookmark: userId }, $inc: { totalBookmark: 1 } },
      { new: true },
    );
  }

  async unBookmark(userId: string, campId: string) {
    return await this.campsiteModel.findByIdAndUpdate(
      { _id: campId },
      { $pull: { bookmark: userId }, $inc: { totalBookmark: -1 } },
      { new: true },
    );
  }

  async getById(id: string, obj = {}): Promise<ICampsiteDTO | null> {
    return this.campsiteModel.findById(id, obj);
  }
}

export const campsiteService = new CampsiteService(CampsiteModel, UserModel);
