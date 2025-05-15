import express from "express";
import { urlencoded } from "express";
import {__dirname}from "./utils.js";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';

import viewsRouter from "./routes/views.routes.js";
import petsRouter from "./routes/pets.routes.js";
import usersRouter from "./routes/users.routes.js";
import mocksRouter from "./routes/mocks.routes.js";


const app = express();
dotenv.config()


const httpServer = app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

const __filename = fileURLToPath(import.meta.url);


app.use(express.urlencoded({ extended: true })); // Para formularios HTML
app.use(express.json()); 
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));





app.use("/", viewsRouter)
app.use("/api/pets", petsRouter);
app.use("/api/users", usersRouter);
app.use("/api/mocks", mocksRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


try {
  await mongoose.connect(process.env.DATABASE_URL, );
  console.log('✅ Conectado a MongoDB');
} catch (err) {
  console.error('❌ Error de conexión a MongoDB:', err.message);
  process.exit(1); 
}



export default app;