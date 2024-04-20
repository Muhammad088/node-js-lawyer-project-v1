import { check } from "express-validator";
import validatorCatcher from "../../validators/validatorCatcher.js";

export const getOneTaskByIdValidator = [
  check("id").isMongoId().withMessage(`invalid task id format`),
  validatorCatcher,
];

export const createTaskValidator = [
  check("title")
    .notEmpty()
    .withMessage(`title is required`)
    .isLength({ min: 5 })
    .withMessage("Too short title")
    .isLength({ max: 32 })
    .withMessage("Too long title"),
  check("description")
    .notEmpty()
    .withMessage(`description is required`)
    .isLength({ min: 15 })
    .withMessage("Too short description")
    .isLength({ max: 1000 })
    .withMessage("Too long description"),
  check("destination")
    .notEmpty()
    .withMessage(`destination is required`)
    .isLength({ min: 5 })
    .withMessage("Too short destination")
    .isLength({ max: 32 })
    .withMessage("Too long destination"),
  check("creatorUserId")
    .isMongoId()
    .withMessage(`invalid creatorUser id format`),
  check("date").toDate().notEmpty().withMessage("task must have date"),
  check("points")
    .isInt({ min: 50, max: 10000 })
    .withMessage("يجب أن يكون السعر بين 50 و10000 جنيه"),
  // .withMessage("points quantity must be a number between 50 and 10000"),

  validatorCatcher,
];

export const updateTaskValidator = [
  check("id").isMongoId().withMessage(`invalid category id format`),
  validatorCatcher,
];

export const deleteTaskValidator = [
  check("id").isMongoId().withMessage(`invalid category id format`),
  validatorCatcher,
];
