import { check } from "express-validator";
import validatorCatcher from "../../validators/validatorCatcher.js";

export const getOneContractByIdValidator = [
  check("id").isMongoId().withMessage(`invalid contract id format`),
  validatorCatcher,
];

export const createContractValidator = [
  check("description")
    .notEmpty()
    .withMessage(`description is required`)
    .isLength({ min: 5 })
    .withMessage("Too short description")
    .isLength({ max: 125 })
    .withMessage("Too long description"),
  check("creatorUserId").isMongoId().withMessage(`invalid fromUserId format`),
  // .notEmpty()
  // .withMessage(`fromUserId is required`),
  check("employeeUserId").isMongoId().withMessage(`invalid toUserId format`),
  // .notEmpty()
  // .withMessage(`toUserId is required`),
  check("points")
    .isInt({ min: 50, max: 10000 })
    .withMessage("يجب أن يكون السعر بين 50 و10000 جنيه"),
  // .withMessage("points quantity must be a number between 50 and 10000"),
  validatorCatcher,
];

export const updateContractValidator = [
  check("id").isMongoId().withMessage(`invalid category id format`),
  validatorCatcher,
];

export const deleteContractValidator = [
  check("id").isMongoId().withMessage(`invalid category id format`),
  validatorCatcher,
];
