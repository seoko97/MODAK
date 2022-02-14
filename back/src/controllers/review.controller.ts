import { NextFunction, RequestHandler } from "express";
import fs from "fs";
import { ITokenUser } from "~types/User";
import { IReviewDTO } from "~types/Review";
import { ReviewService, reviewService } from "@services/review.service";
import { userService, UserService } from "@services/user.service";
import { CampsiteService, campsiteService } from "@services/campsite.service";
import resizeImage from "@utils/resizeImage";
import { IKeyValueString } from "~types/.";
import { checkValid } from "@src/utils/checkIdValid";

try {
  fs.accessSync("uploads");
} catch (error) {
  fs.mkdirSync("uploads");
}

export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService,
    private readonly userService: UserService,
    private readonly campsiteService: CampsiteService,
  ) {}

  getMainReviews: RequestHandler = async (req, res) => {
    const reviews = await this.reviewService.getReviewsByQuery({}, { count: -1, _id: -1 }, 6);

    res.json({ status: true, reviews });
  };

  getCampReviews: RequestHandler = async (req, res, next) => {
    const { location } = req.params;
    const { lastId } = req.query;

    if (!checkValid(location) || (lastId && !checkValid(lastId as string)))
      return next({ message: "유효하지 않은 정보입니다." });

    const findCamp = await this.campsiteService.getById(location);

    if (!findCamp) return next({ message: "존재하지 않는 캠핑장입니다." });

    const query = { location } as IKeyValueString;
    lastId && (query._id = { $gt: lastId });

    const reviews = await this.reviewService.getReviewsByQuery(query, { count: -1, _id: -1 }, 10);

    res.json({ status: true, reviews });
  };

  getUserReviews: RequestHandler = async (req, res, next) => {
    const { lastId } = req.query;
    const { id } = req.params;
    if (!checkValid(id) || (lastId && !checkValid(lastId as string)))
      return next({ message: "유효하지 않은 정보입니다." });

    const findUser = await this.userService.getById(id);

    if (!findUser) return next({ message: "존재하지 않는 사용자입니다." });

    const query = { author: id } as IKeyValueString;
    lastId && (query._id = { $gt: lastId });

    const reviews = await this.reviewService.getReviewsByUserId(query);

    res.json({ status: true, reviews });
  };

  create: RequestHandler = async (req, res) => {
    const { _id } = req.user as ITokenUser;
    const { content, location, rating, photos } = req.body as Omit<IReviewDTO, "author">;
    const campId = location as unknown as string;
    const review = await this.reviewService.create({
      content,
      location,
      rating,
      photos,
      author: _id,
    });

    await this.userService.updateByQuery({ _id }, { $inc: { reviewCount: 1 } });
    await this.campsiteService.update(campId, { $inc: { totalReview: 1 } });

    res.send({ status: true, review });
  };
  update: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const { content, location, rating, photos } = req.body as Omit<IReviewDTO, "author">;
    const review = await this.reviewService.update(id, {
      content,
      location,
      rating,
      photos,
    });

    if (!review) return next({ message: "리뷰가 존재하지 않습니다." });

    res.send({ status: true, review });
  };

  delete: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const review = await this.reviewService.delete(id);

    await this.userService.updateByQuery({ _id: review?.author }, { $inc: { reviewCount: 1 } });
    await this.campsiteService.update(review?.location as unknown as string, {
      $inc: { totalReview: 1 },
    });

    res.json({ status: true });
  };

  uploadImage: RequestHandler = async (req, res, next: NextFunction) => {
    const photos = req.files as Express.Multer.File[];

    if (!photos) return next({ message: "이미지가 존재하지 않습니다." });

    await resizeImage(photos);

    const images = photos.map((photo) => photo.filename);

    res.json({ status: true, images });
  };
  like: RequestHandler = async (req, res) => {
    const { _id: userId } = req.user as ITokenUser;
    const { id: reviewId } = req.params;

    await this.reviewService.like(reviewId, userId);

    res.json({ status: true, userId, reviewId });
  };

  unLike: RequestHandler = async (req, res) => {
    const { _id } = req.user as ITokenUser;
    const { id } = req.params;

    await this.reviewService.unLike(id, _id);

    res.json({ status: true, userId: _id, reviewId: id });
  };
}

export const reviewController = new ReviewController(reviewService, userService, campsiteService);
