import { Client } from "pg";
import Container from "../container";
import OwnerController from "../controller/OwnerController";
import PetController from "../controller/PetController";
import OwnerRepository from "../repository/OwnerRepository";
import PetRepository from "../repository/PetRepository";
import OwnerService from "../service/OwnerService";
import PetService from "../service/PetService";

const containerLoader = async (pgClient: Client) => {
  const container = new Container();

  // repositories
  const petRepository = new PetRepository(pgClient);
  const ownerRepository = new OwnerRepository(pgClient);

  // services
  const petService = new PetService(petRepository);
  const ownerSerivce = new OwnerService(ownerRepository);

  // controllers
  const petController = new PetController(petService);
  const ownerController = new OwnerController(ownerSerivce);

  container.register("petRepository", petRepository);
  container.register("ownerRepository", ownerRepository);
  container.register("petService", petService);
  container.register("ownerService", ownerSerivce);
  container.register("petController", petController);
  container.register("ownerController", ownerController);

  return container;
};

export default containerLoader;
