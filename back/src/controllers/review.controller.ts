import { NextFunction, Request, RequestHandler, Response } from "express";
import fs from "fs";
import { ITokenUser } from "~types/User";
import { IReviewDocument, IReviewDTO } from "~types/Review";
import { ReviewService, reviewService } from "@services/review.service";
import { userService, UserService } from "@services/user.service";
import resizeImage from "@utils/resizeImage";

try {
  fs.accessSync("uploads");
} catch (error) {
  fs.mkdirSync("uploads");
}

export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService,
    private readonly userService: UserService,
  ) {}

  getReviews: RequestHandler = async (req, res) => {
    const { location } = req.body;
    const { lastId } = req.query;

    const reviews = await this.reviewService.getReviewsByQuery({ _id: { $gt: lastId }, location });

    res.json({ status: true, reviews });
  };

  create: RequestHandler = async (req, res) => {
    const _user = req.user as ITokenUser;
    const { content, location, rating, photos } = req.body as Omit<IReviewDTO, "author">;

    const review = await this.reviewService.create({
      content,
      location,
      rating,
      photos,
      author: _user,
    });

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

    await this.reviewService.delete(id);

    res.json({ status: true });
  };

  uploadImage: RequestHandler = async (req, res, next: NextFunction) => {
    const photos = req.files as Express.Multer.File[];

    if (!photos) return next({ message: "이미지가 존재하지 않습니다." });

    await resizeImage(photos);

    const images = photos.map((photo) => photo.filename);

    res.json({ status: true, images });
  };
}

export const reviewController = new ReviewController(reviewService, userService);
