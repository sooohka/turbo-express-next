import Express, { Router } from "express";
import client from "../../db";
import { CustomError } from "../../error";

const router = Express.Router();

router.get("/", async (req, res) => {
  const d = await client.query("SELECT * FROM owners");
  const owners = d.rows;
  res.send(owners);
});

router.get("/:id", async (req, res, next) => {
  try {
    const d = await client.query("SELECT * FROM owners WHERE ownerid=$1", [
      req.params.id,
    ]);
    const pet = d.rows;
    if (pet.length === 0) {
      throw new CustomError("no pet owner found", 404);
    }
    res.send(pet);
  } catch (e) {
    next(e);
  }
});

const ownerRouter: [string, Router] = ["/owners", router];

export default ownerRouter;
