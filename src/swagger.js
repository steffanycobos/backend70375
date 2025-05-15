import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Mascotas',
    version: '1.0.0',
    description: 'Documentación de la API usando Swagger',
  },
  servers: [
    {
      url: 'http://localhost:8080'
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/pets.routes.js'],
  
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
