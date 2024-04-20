import Complaint from "./complaintModel.js";
import {
  createOne,
  deleteOne,
  getAll,
  getOneById,
  updateOne,
} from "../../utils/handlerFactory.js";

/**
 * @description   create complaint
 * @ACL           user
 * @route         post    api/v1/complaints
 */
export const createComplaint = createOne(Complaint);

/**
 * @description   get all complaints
 * @ACL           user
 * @route         get    api/v1/complaints
 */
export const getAllComplaints = getAll(Complaint);

/**
 * @description   get one complaint by id
 * @ACL           private
 * @route         get    api/v1/complaints/:id
 */
export const getOneComplaintById = getOneById(Complaint);

/**
 * @description   update complaint
 * @ACL           private
 * @route         put    api/v1/complaints/:id
 */
export const updateComplaint = updateOne(Complaint);

/**
 * @description   delete complaint
 * @ACL           admin
 * @route         delete    api/v1/complaints/:id
 */
export const deleteComplaint = deleteOne(Complaint);
