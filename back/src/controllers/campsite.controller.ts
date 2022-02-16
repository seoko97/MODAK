import { RequestHandler } from "express";
import { campsQuery } from "@utils/getCampQuery";
import { CampsiteService, campsiteService } from "@services/campsite.service";
import { IKeyValueString } from "@src/types";
import { ITokenUser } from "@src/types/User";
import { checkValid } from "@src/utils/checkIdValid";

export class CampsiteController {
  constructor(private readonly campsiteService: CampsiteService) {}

  getMainCamps: RequestHandler = async (_, res) => {
    const camps = await this.campsiteService.getCampsByQuery(
      {},
      { totalBookmark: -1, views: -1 },
      6,
    );

    res.json({ status: true, camps });
  };

  getCamps: RequestHandler = async (req, res, next) => {
    const { sorted, lastId, ...data } = req.query;
    const query = campsQuery(data) as IKeyValueString;

    if (lastId && !checkValid(lastId as string))
      return next({ message: "유효하지 않은 정보입니다." });

    const target = {} as IKeyValueString;
    sorted && (target[`${sorted}`] = -1);

    if (lastId) query._id = { $lt: lastId };

    const camps = await this.campsiteService.getCampsByQuery(query, target, 10);

    res.json({ status: true, camps });
  };

  getUserCamps: RequestHandler = async (req, res, next) => {
    const { lastId } = req.query;
    const { userId } = req.params;

    if (lastId && !checkValid(lastId as string))
      return next({ message: "유효하지 않은 정보입니다." });

    const query = lastId ? { _id: { $lt: lastId } } : {};

    const camps = await this.campsiteService.getCampsByQuery(
      { ...query, bookmark: userId },
      {},
      10,
    );

    res.json({ status: true, camps });
  };

  getCamp: RequestHandler = async (req, res, next) => {
    const { id } = req.params;

    if (!checkValid(id)) return next({ message: "존재하지 않는 캠핑장입니다." });

    const camp = await this.campsiteService.getCampById(id);
    if (!camp) return next({ message: "존재하지 않는 캠핑장입니다." });

    res.json({ status: true, camp });
  };

  bookmark: RequestHandler = async (req, res, next) => {
    const { _id: userId } = req.user as ITokenUser;
    const { id: campId } = req.params;

    const camp = await this.campsiteService.getCampsByQuery(
      { _id: campId, bookmark: { $in: userId } },
      {},
      1,
    );

    if (camp[0]) return next({ message: "이미 북마크된 캠핑장입니다." });

    await this.campsiteService.bookmark(userId, campId);

    res.json({ status: true, userId, campId });
  };

  unBookmark: RequestHandler = async (req, res, next) => {
    const { _id: userId } = req.user as ITokenUser;
    const { id: campId } = req.params;

    const camp = await this.campsiteService.getCampsByQuery(
      { _id: campId, bookmark: { $in: userId } },
      {},
      1,
    );

    if (!camp[0]) return next({ message: "북마크되지 않은 캠핑장입니다." });

    await this.campsiteService.unBookmark(userId, campId);

    res.json({ status: true, userId, campId });
  };

  search: RequestHandler = async (req, res) => {
    const { keyword } = req.params;
    const camps = await this.campsiteService.getCampsByKeyword(keyword);

    res.json({ status: true, camps });
  };
}

export const campsiteController = new CampsiteController(campsiteService);
