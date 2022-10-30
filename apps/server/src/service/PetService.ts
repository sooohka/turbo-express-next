import PetRepository from "../repository/PetRepository";

class PetService {
  private petRepository: PetRepository;

  constructor(petRepository: PetRepository) {
    this.petRepository = petRepository;
  }

  async findPets() {
    const pets = await this.petRepository.getAll();

    return pets;
  }

  async findPetById(id: string) {
    const pet = await this.petRepository.getById(id);
    return pet;
  }
}

export default PetService;
