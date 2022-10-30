import express from "express";
import OwnerController from "../../controller/OwnerController";

const router = express.Router();
const ownerRouter = (ownerController: OwnerController) => {
  router.get("/", ownerController.ownerList);
  router.get("/:id", ownerController.ownerDetails);
  return router;
};
export default ownerRouter;
