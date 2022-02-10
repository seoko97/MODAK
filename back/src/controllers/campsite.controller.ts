import { Request, Response } from "express";
import axios from "axios";

import { CampsiteService, campsiteService } from "@services/campsite.service";

import { ICampQuery, ICampsiteDocument, ICampsiteDTO } from "@src/types/Campsite";
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
}

export const campsiteController = new CampsiteController(campsiteService);
