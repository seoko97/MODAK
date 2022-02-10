import { Request, Response } from "express";
import axios from "axios";

import { CampsiteService, campsiteService } from "@services/campsite.service";

import { ICampQuery, ICampsiteDocument, ICampsiteDTO } from "@src/types/Campsite";
import { serviceKey } from "@src/utils/constants";
import { IAxiosSchduleDTO } from "@src/types";
import { getCampData } from "@src/utils/dataParser";
import { campsQuery } from "@src/utils/getCampQuery";

export class CampsiteController {
  constructor(private readonly campsiteService: CampsiteService) {}

  getCamps = async (req: Request, res: Response) => {
    const query = campsQuery(req.query) as ICampQuery;

    const camps = await this.campsiteService.getCampsByQuery(query, {});

    res.json(camps);
  };

  getCamp = async (req: Request, res: Response) => {
    const camp = await this.campsiteService.getCampById(req.body.id);

    res.json({ status: "ok", data: camp });
  };

  schedule = async () => {
    const camps = await axios.get(serviceKey);

    await Promise.all(
      camps.data.response.body.items.item.map((camp: IAxiosSchduleDTO) => {
        const campsite = getCampData(camp);
        return this.campsiteService.create(campsite);
      }),
    );
  };
}

export const campsiteController = new CampsiteController(campsiteService);
