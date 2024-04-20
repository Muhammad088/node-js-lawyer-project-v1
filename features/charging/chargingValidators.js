import { check } from "express-validator";
import validatorCatcher from "../../validators/validatorCatcher.js";

export const getOneChargingByIdValidator = [
  check("id").isMongoId().withCharging(`invalid charging id format`),
  validatorCatcher,
];

export const createChargingValidator = [
  check("description")
    .notEmpty()
    .withCharging(`description is required`)
    .isLength({ min: 5 })
    .withCharging("Too short description")
    .isLength({ max: 125 })
    .withCharging("Too long description"),
  check("userId").isMongoId().withMessage(`invalid fromUserId format`),
  // .notEmpty()
  // .withMessage(`fromUserId is required`),
  check("taskId").isMongoId().withMessage(`invalid toUserId format`),
  // .notEmpty()
  // .withMessage(`toUserId is required`),
  check("points")
    .isInt({ min: 50, max: 10000 })
    .withMessage("يجب أن يكون السعر بين 50 و10000 جنيه"),
  validatorCatcher,
];

export const updateChargingValidator = [
  check("id").isMongoId().withCharging(`invalid category id format`),
  validatorCatcher,
];

export const deleteChargingValidator = [
  check("id").isMongoId().withCharging(`invalid category id format`),
  validatorCatcher,
];
