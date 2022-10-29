export type Pet = {
  petid: number;
  name: string;
  kind: string;
  gender: string;
  age: number;
  ownerid: number;
};

export type PetOwner = {
  ownerid: number;
  name: string;
  surname: string;
  streetaddress: string;
  city: string;
  state: string;
  statefull: string;
  zipcode: number;
};

export type ProcedureDetail = {
  proceduretype: string;
  proceduresubcode: string;
  description: string;
  price: string;
};

export type ProcedureHistory = {
  petid: number;
  proceduredate: string;
  proceduretype: string;
  proceduresubcode: string;
};
