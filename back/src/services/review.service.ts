import { ReviewModel, UserModel } from "@src/models";

import { IReviewDTO } from "@src/types/Review";

export class ReviewService {
  constructor(
    private readonly reviewModel: typeof ReviewModel,
    private readonly userModel: typeof UserModel,
  ) {}

  async getReviewsByQuery(query = {}, target = {}, skip = 0, limit: number) {
    return await this.reviewModel
      .find(query)
      .sort(target)
      .skip(skip * 10)
      .populate("author", "-refreshToken -source")
      .populate("location", "_id name address")
      .limit(limit);
  }

  async delete(id: string) {
    return await this.reviewModel.findOneAndDelete({ _id: id });
  }

  async create(data: IReviewDTO) {
    const review = await this.reviewModel.create(data);

    await review.populate("author", "-refreshToken -source");
    await review.populate("location", "_id address name");

    return review;
  }

  async update(id: string, data: Partial<IReviewDTO>) {
    const review = await this.reviewModel.findOneAndUpdate({ _id: id }, data, { new: true });

    return review;
  }
  async like(id: string, userId: string) {
    await this.reviewModel.updateOne(
      { _id: id },
      {
        $push: { likes: userId },
        $inc: { count: 1 },
      },
    );
    await this.userModel.updateOne({ _id: userId }, { $inc: { totalLike: 1 } });
  }

  async unLike(id: string, userId: string) {
    await this.reviewModel.updateOne(
      { _id: id },
      { $pull: { likes: userId }, $inc: { count: -1 } },
    );
    await this.userModel.updateOne({ _id: userId }, { $inc: { totalLike: -1 } });
  }
}

export const reviewService = new ReviewService(ReviewModel, UserModel);
