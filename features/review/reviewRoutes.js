import { Router } from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getOneReviewById,
  updateReview,
} from "./reviewServices.js";
import {
  createReviewValidator,
  deleteReviewValidator,
  getOneReviewByIdValidator,
  updateReviewValidator,
} from "./reviewValidators.js";

const router = Router();

router.route("/").get(getAllReviews).post(createReviewValidator, createReview);
router
  .route("/:id")
  .get(getOneReviewByIdValidator, getOneReviewById)
  .put(updateReviewValidator, updateReview)
  .delete(deleteReviewValidator, deleteReview);

export default router;
