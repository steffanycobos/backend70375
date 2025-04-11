import petModel from "./models/pets.models.js";
import { faker } from "@faker-js/faker";

class PetsManagerDB {
  constructor() {}

  async getpets() {
    let allpets = await petModel.find();
    let pets = JSON.parse(JSON.stringify(allpets));
    return pets;
  }

  async addpets(name, specie, birthDate, owner, image) {
    if (!name || !specie) {
      throw new Error("Los campos name y specie son obligatorios");
    }

    let newPet = await petModel.create({
      name,
      specie,
      birthDate,
      owner,
      image,
    });

    console.log("Pet:", newPet);
    return newPet; //
  }

  async generateMockPets(numPets) {
    const pets = [];
    for (let i = 0; i < numPets; i++) {
      const pet = await petModel.create({
        name: faker.animal.petName(),
        specie: faker.helpers.arrayElement([
          "Perro",
          "Gato",
          "Loro",
          "Hamster",
        ]),
        birthDate: faker.date.past(3).toISOString().split("T")[0],
        adopted: faker.datatype.boolean(),
        image: faker.image.url(),
      });
      pets.push(pet);
    }

    return pets;
  }
}

export default PetsManagerDB;
