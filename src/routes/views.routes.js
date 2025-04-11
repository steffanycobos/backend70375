import { Router } from "express";



const viewsRouter = Router();


viewsRouter.get("/", async (req, res) => {
 
  res.send('hola');
});




export default viewsRouter;
