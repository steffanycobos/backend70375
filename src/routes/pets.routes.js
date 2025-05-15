import { Router} from "express";
import { urlencoded } from "express";
import { addPetsController, getPetsController} from "../controllers/pets.controllers.js";

let petsRouter= Router()

petsRouter.get('/', getPetsController)
petsRouter.post('/addPets', addPetsController)

  

export default petsRouter;