
import { Router} from "express";
import { urlencoded } from "express";
import { addUsersController,getUsersController } from "../controllers/users.controllers.js";

let usersRouter= Router()

usersRouter.get('/', getUsersController)
usersRouter.post('/addUser', addUsersController)



export default usersRouter;