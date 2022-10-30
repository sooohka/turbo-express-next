import { RequestHandler } from "express";
import PetService from "../service/PetService";

// petController
class PetController {
  private petService: PetService;

  constructor(petService: PetService) {
    this.petService = petService;
  }

  // "/"
  petList: RequestHandler = async (req, res, next) => {
    const pets = await this.petService.findPets();
    res.send(pets);
  };

  petDetails: RequestHandler = async (req, res, next) => {
    const pet = await this.petService.findPetById(req.params.id);
    res.send(pet);
  };
}

export default PetController;
