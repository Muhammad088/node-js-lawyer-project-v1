import Contract from "./contractModel.js";
import {
  createOne,
  deleteOne,
  getAll,
  getOneById,
  updateOne,
} from "../../utils/handlerFactory.js";

/**
 * @description   create contract
 * @ACL           user
 * @route         post    api/v1/contracts
 */
export const createContract = createOne(Contract);

/**
 * @description   get all contracts
 * @ACL           user
 * @route         get    api/v1/contracts
 */
export const getAllContracts = getAll(Contract);

/**
 * @description   get one contract by id
 * @ACL           private
 * @route         get    api/v1/contracts/:id
 */
export const getOneContractById = getOneById(Contract);

/**
 * @description   update contract
 * @ACL           private
 * @route         put    api/v1/contracts/:id
 */
export const updateContract = updateOne(Contract);

/**
 * @description   delete contract
 * @ACL           admin
 * @route         delete    api/v1/contracts/:id
 */
export const deleteContract = deleteOne(Contract);
