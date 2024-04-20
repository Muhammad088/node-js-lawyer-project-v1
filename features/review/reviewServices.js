import Review from "./reviewModel.js";
import {
  createOne,
  deleteOne,
  getAll,
  getOneById,
  updateOne,
} from "../../utils/handlerFactory.js";

/**
 * @description   create review
 * @ACL           user
 * @route         post    api/v1/reviews
 */
export const createReview = createOne(Review);

/**
 * @description   get all reviews
 * @ACL           user
 * @route         get    api/v1/reviews
 */
export const getAllReviews = getAll(Review);

/**
 * @description   get one review by id
 * @ACL           private
 * @route         get    api/v1/reviews/:id
 */
export const getOneReviewById = getOneById(Review);

/**
 * @description   update review
 * @ACL           private
 * @route         put    api/v1/reviews/:id
 */
export const updateReview = updateOne(Review);

/**
 * @description   delete review
 * @ACL           admin
 * @route         delete    api/v1/reviews/:id
 */
export const deleteReview = deleteOne(Review);
