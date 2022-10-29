import { Pet } from "model";
import PetListItem from "./PetListItem";

const getPets = async () => {
  const res = await fetch("http://localhost:8081/pets");
  const json = (await res.json()) as Promise<Pet[]>;
  return json;
};

const page = async () => {
  const pets = await getPets();
  return (
    <ul>
      {pets.map((pet) => (
        <PetListItem key={pet.petid} pet={pet} />
      ))}
    </ul>
  );
};

export default page;
