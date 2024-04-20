import { Router } from "express";
import {
  createComplaint,
  deleteComplaint,
  getAllComplaints,
  getOneComplaintById,
  updateComplaint,
} from "./complaintServices.js";
import {
  createComplaintValidator,
  deleteComplaintValidator,
  getOneComplaintByIdValidator,
  updateComplaintValidator,
} from "./complaintValidators.js";

const router = Router();

router
  .route("/")
  .get(getAllComplaints)
  .post(createComplaintValidator, createComplaint);
router
  .route("/:id")
  .get(getOneComplaintByIdValidator, getOneComplaintById)
  .put(updateComplaintValidator, updateComplaint)
  .delete(deleteComplaintValidator, deleteComplaint);

export default router;
