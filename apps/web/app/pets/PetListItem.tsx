"use client";

import { Pet as PetListItem } from "model";

interface Props {
  pet: PetListItem;
}

const PetListItem = ({ pet }: Props) => {
  return (
    <li>
      <h3>{pet.name}</h3>
      <h3>{pet.age}</h3>
      <h3>{pet.gender}</h3>
      <h3>{pet.kind}</h3>
      <h3>{pet.ownerid}</h3>
      <h3>{pet.petid}</h3>
    </li>
  );
};

export default PetListItem;
