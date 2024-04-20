import { Router } from "express";
import {
  createCharging,
  deleteCharging,
  getAllChargings,
  getOneChargingById,
  updateCharging,
} from "./chargingServices.js";
import {
  createChargingValidator,
  deleteChargingValidator,
  getOneChargingByIdValidator,
  updateChargingValidator,
} from "./chargingValidators.js";

const router = Router();

router
  .route("/")
  .get(getAllChargings)
  .post(createChargingValidator, createCharging);
router
  .route("/:id")
  .get(getOneChargingByIdValidator, getOneChargingById)
  .put(updateChargingValidator, updateCharging)
  .delete(deleteChargingValidator, deleteCharging);

export default router;
