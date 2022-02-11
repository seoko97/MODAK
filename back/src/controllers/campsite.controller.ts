import { RequestHandler } from "express";
import { campsQuery } from "@utils/getCampQuery";
import { CampsiteService, campsiteService } from "@services/campsite.service";
import { IKeyValueString } from "@src/types";
import { ITokenUser } from "@src/types/User";
import { checkValid } from "@src/utils/checkIdValid";

export class CampsiteController {
  constructor(private readonly campsiteService: CampsiteService) {}

  getMainCamps: RequestHandler = async (_, res) => {
    const reviews = await this.campsiteService.getCampsByQuery(
      {},
      { totalBookmark: -1, views: -1 },
      10,
    );

    res.json({ status: true, reviews });
  };

  getCamps: RequestHandler = async (req, res) => {
    const { sorted, lastId, ...data } = req.query;
    const query = campsQuery(data) as IKeyValueString;

    const target = {} as IKeyValueString;
    sorted && (target[`${sorted}`] = -1);

    if (lastId) {
      if (query.$and) query.$and.push({ _id: { $gt: lastId } });
      else query._id = { $gt: lastId };
    }

    const camps = await this.campsiteService.getCampsByQuery(query, target, 10);

    res.json({ status: true, camps });
  };

  getCamp: RequestHandler = async (req, res, next) => {
    const { id } = req.params;

    if (!checkValid(id)) return next({ message: "존재하지 않는 캠핑장입니다." });

    const camp = await this.campsiteService.getCampById(id);
    if (!camp) return next({ message: "존재하지 않는 캠핑장입니다." });

    res.json({ status: true, camp });
  };

  bookmark: RequestHandler = async (req, res) => {
    const { _id: userId } = req.user as ITokenUser;
    const { id: campId } = req.params;

    await this.campsiteService.bookmark(userId, campId);

    res.json({ status: true, userId, campId });
  };

  unBookmark: RequestHandler = async (req, res) => {
    const { _id: userId } = req.user as ITokenUser;
    const { id: campId } = req.params;

    await this.campsiteService.unBookmark(userId, campId);

    res.json({ status: true, userId, campId });
  };
}

export const campsiteController = new CampsiteController(campsiteService);
