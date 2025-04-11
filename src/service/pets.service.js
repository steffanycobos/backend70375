import PetsManagerDB from "../dao/pets.manager.js";

let manager = new PetsManagerDB();

export async function getPetsService() {
  let pets = await manager.getpets();
  return pets;
}

export async function addPetsService(name, specie, birthDate, owner, image) {
  const newPet = await manager.addpets(name, specie, birthDate, owner, image);
  return newPet;
}

export async function generateMockPetsService(x) {
  const pets = await manager.generateMockPets(x);
  console.log(pets);
  return pets;
}
