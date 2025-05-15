import { getUsersService, addUserService, generateMockUsersService } from "../service/users.service.js";

export  const getUsersController= async (req,res)=>{
    try {
        const users = await getUsersService();
    
        const { limit } = await req.query;
        if (limit) {
          users.length = limit;
          return res.send(users);
        } else {
          res.send(users)            
          
        }
      } catch (e) {
        res.status(404).send(`${e}`);
      }
    }
    
    export const addUsersController = async (req, res) => {
        const {first_name,last_name,age,email,password,pets,role  } = req.body;
      
       
      
        try {
          const newUser = await addUserService(first_name,last_name,age,email,password,pets,role); 
          res.status(201).send(`User creado con éxito: ${newUser}`); 
        } catch (error) {
          res.status(400).send(error.message); 
        }
      };


      export const generateMockUsersController = async (req, res) => {
        const numUser = parseInt(req.query.num) || 1; 
        try {
          const mockUsers = await generateMockUsersService(numUser);
          res.status(201).json(mockUsers); 
         
        } catch (error) {
          res.status(400).send(error.message); 
      }
          
      }