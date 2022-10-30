import { PetOwner } from "model";
import { Client } from "pg";

class OwnerRepository {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async getAll(): Promise<PetOwner[]> {
    const d = await this.client.query<PetOwner>("SELECT * FROM owners");
    const pets = d.rows;
    return pets;
  }

  async getById(id: string): Promise<PetOwner> {
    const d = await this.client.query<PetOwner>(
      "SELECT * FROM pets WHERE ownerid=$1",
      [id]
    );
    const pet = d.rows;
    return pet[0];
  }
}

export default OwnerRepository;
