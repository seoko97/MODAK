import { Request, Response } from "express";
import fs from "fs";
import { ReviewService, reviewService } from "@services/review.service";
import { IReviewDocument } from "@src/types/Review";

try {
  fs.accessSync("uploads");
} catch (error) {
  fs.mkdirSync("uploads");
}

export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}
  test = async (req: Request, res: Response) => {
    const modelTest = await this.reviewService.test();

    res.send(modelTest);
  };

  create = async (req: Request, res: Response) => {
    const { content, author, locations, shopname } = req.body;
    const photes = req.files;

    res.send("asd");
  };

  getReview = async (req: Request, res: Response) => {
    res.send("asd");
  };
}

export const reviewController = new ReviewController(reviewService);
