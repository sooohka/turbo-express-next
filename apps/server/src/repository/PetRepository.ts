import { Pet } from "model";
import { Client } from "pg";

class PetRepository {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async getAll(): Promise<Pet[]> {
    const d = await this.client.query<Pet>("SELECT * FROM pets");
    const pets = d.rows;
    return pets;
  }

  async getById(id: string): Promise<Pet> {
    const d = await this.client.query<Pet>(
      "SELECT * FROM pets WHERE petid=$1",
      [id]
    );
    const pet = d.rows;
    return pet[0];
  }
}

export default PetRepository;
