import express, { Router } from "express";
import { Pet } from "model";
import dbClient from "../../db";
import { CustomError } from "../../error";

const router = express.Router();

router.get("/", async (req, res) => {
  const d = await dbClient.query<Pet>("SELECT * FROM pets");
  const pets = d.rows;
  res.send(pets);
});

router.get("/:id", async (req, res, next) => {
  try {
    const d = await dbClient.query<Pet>("SELECT * FROM pets WHERE petid=$1", [
      req.params.id,
    ]);
    const pet = d.rows;
    if (pet.length === 0) {
      throw new CustomError("no pet found", 404);
    }
    res.send(pet[0]);
  } catch (e) {
    next(e);
  }
});

const petRouter: [string, Router] = ["/pets", router];

export default petRouter;
