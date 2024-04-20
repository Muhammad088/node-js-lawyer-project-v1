import { check } from "express-validator";
import validatorCatcher from "../../validators/validatorCatcher.js";

export const getOneReviewByIdValidator = [
  check("id").isMongoId().withMessage(`invalid review id format`),
  validatorCatcher,
];

export const createReviewValidator = [
  check("description")
    .notEmpty()
    .withMessage(`description is required`)
    .isLength({ min: 5 })
    .withMessage("Too short description")
    .isLength({ max: 1000 })
    .withMessage("Too long description"),
  check("creatorUserId")
    .isMongoId()
    .withMessage(`invalid creatorUser id format`),
  check("ownerUserId").isMongoId().withMessage(`invalid ownerUser id format`),
  check("taskId").isMongoId().withMessage(`invalid task id format`),
  check("rating").isInt({ min: 1, max: 5 }),

  validatorCatcher,
];

export const updateReviewValidator = [
  check("id").isMongoId().withMessage(`invalid category id format`),
  validatorCatcher,
];

export const deleteReviewValidator = [
  check("id").isMongoId().withMessage(`invalid category id format`),
  validatorCatcher,
];
