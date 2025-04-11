
import { getPetsService, addPetsService , generateMockPetsService} from "../service/pets.service.js";

export  const getPetsController= async (req,res)=>{
        const pets = await getPetsService();
          res.send(pets );
}
  
    
    export const addPetsController = async (req, res) => {
        const { name, specie, birthDate, owner, image } = req.body;
    
        if (!name || !specie) {
          return res.status(400).send('Los campos name y specie son obligatorios');
        }
      
        try {
          const newPet = await addPetsService(name, specie, birthDate, owner, image); 
          res.status(201).send(`Mascota creada con éxito: ${newPet}`);
        } catch (error) {
          res.status(400).send(error.message); 
        }
      };

      export const generateMockPetsController = async (req, res) => {
        const numPets = parseInt(req.query.num) || 1; 
        try {
          const mockPets = await generateMockPetsService(numPets);
          res.status(201).json(mockPets); 
      } catch (error) {
          res.status(400).send(error.message); 
      }
  
    };