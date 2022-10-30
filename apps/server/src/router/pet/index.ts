import express from "express";
import PetController from "../../controller/PetController";

const router = express.Router();
const petRouter = (petController: PetController) => {
  router.get("/", petController.petList);
  router.get("/:id", petController.petDetails);
  return router;
};
export default petRouter;
