import { Router} from "express";
import { urlencoded } from "express";
import {  generateMockPetsController, addPetsController } from "../controllers/pets.controllers.js";
import {generateMockUsersController, addUsersController} from "../controllers/users.controllers.js"

let mocksRouter= Router()

mocksRouter.get('/pets', generateMockPetsController)
mocksRouter.get('/users', generateMockUsersController)
mocksRouter.post('/generarData/pets' ,addPetsController)
mocksRouter.post('/generarData/users', addUsersController)


export default mocksRouter;