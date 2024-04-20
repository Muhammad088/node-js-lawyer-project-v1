import Charging from "./chargingModel.js";
import {
  createOne,
  deleteOne,
  getAll,
  getOneById,
  updateOne,
} from "../../utils/handlerFactory.js";

/**
 * @description   create charging
 * @ACL           user
 * @route         post    api/v1/chargings
 */
export const createCharging = createOne(Charging);

/**
 * @description   get all chargings
 * @ACL           user
 * @route         get    api/v1/chargings
 */
export const getAllChargings = getAll(Charging);

/**
 * @description   get one charging by id
 * @ACL           private
 * @route         get    api/v1/chargings/:id
 */
export const getOneChargingById = getOneById(Charging);

/**
 * @description   update charging
 * @ACL           private
 * @route         put    api/v1/chargings/:id
 */
export const updateCharging = updateOne(Charging);

/**
 * @description   delete charging
 * @ACL           admin
 * @route         delete    api/v1/chargings/:id
 */
export const deleteCharging = deleteOne(Charging);
