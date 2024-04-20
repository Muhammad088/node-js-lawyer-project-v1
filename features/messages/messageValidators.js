import { check } from "express-validator";
import validatorCatcher from "../../validators/validatorCatcher.js";

export const getOneMessageByIdValidator = [
  check("id").isMongoId().withMessage(`invalid message id format`),
  validatorCatcher,
];

export const createMessageValidator = [
  check("description")
    .notEmpty()
    .withMessage(`description is required`)
    .isLength({ min: 5 })
    .withMessage("Too short description")
    .isLength({ max: 125 })
    .withMessage("Too long description"),
  check("fromUserId").isMongoId().withMessage(`invalid fromUserId format`),
  // .notEmpty()
  // .withMessage(`fromUserId is required`),
  check("toUserId").isMongoId().withMessage(`invalid toUserId format`),
  // .notEmpty()
  // .withMessage(`toUserId is required`),
  check("taskId").isMongoId().withMessage(`invalid taskId format`),
  validatorCatcher,
];

export const updateMessageValidator = [
  check("id").isMongoId().withMessage(`invalid category id format`),
  validatorCatcher,
];

export const deleteMessageValidator = [
  check("id").isMongoId().withMessage(`invalid category id format`),
  validatorCatcher,
];
