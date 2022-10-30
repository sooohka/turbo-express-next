import OwnerRepository from "../repository/OwnerRepository";

class OwnerService {
  private ownerRepository: OwnerRepository;

  constructor(ownerRepository: OwnerRepository) {
    this.ownerRepository = ownerRepository;
  }

  async findOwners() {
    const pets = await this.ownerRepository.getAll();

    return pets;
  }

  async findOwnerById(id: string) {
    const pet = await this.ownerRepository.getById(id);
    return pet;
  }
}
export default OwnerService;
