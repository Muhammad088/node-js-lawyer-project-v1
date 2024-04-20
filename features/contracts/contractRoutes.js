import { Router } from "express";
import {
  createContract,
  deleteContract,
  getAllContracts,
  getOneContractById,
  updateContract,
} from "./contractServices.js";
import {
  createContractValidator,
  deleteContractValidator,
  getOneContractByIdValidator,
  updateContractValidator,
} from "./contractValidators.js";

const router = Router();

router
  .route("/")
  .get(getAllContracts)
  .post(createContractValidator, createContract);
router
  .route("/:id")
  .get(getOneContractByIdValidator, getOneContractById)
  .put(updateContractValidator, updateContract)
  .delete(deleteContractValidator, deleteContract);

export default router;
