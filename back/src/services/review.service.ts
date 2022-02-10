import { ReviewModel } from "@src/models";

import { IReviewDocument, IReviewDTO } from "@src/types/Review";

export class ReviewService {
  constructor(private readonly reviewModel: typeof ReviewModel) {}
  async test() {
    return "test";
  }

  async getReviewsByQuery(query = {}) {
    return this.reviewModel.find(query).limit(10);
  }

  async getReviewsByUserId(userId: string, limit: number) {
    return this.reviewModel.find({ author: userId }).limit(limit);
  }

  async delete(id: string) {
    await this.reviewModel.deleteOne({ _id: id });
  }

  async create(data: IReviewDTO) {
    return this.reviewModel.create(data);
  }

  async update(id: string, data: any) {
    return this.reviewModel.findOneAndUpdate({ _id: id }, { $set: data });
  }
  async like(id: string, userId: string) {
    await this.reviewModel.updateOne(
      { _id: id },
      {
        $push: {
          likes: userId,
        },
      },
    );
  }
}

export const reviewService = new ReviewService(ReviewModel);
