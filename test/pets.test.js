import mongoose from 'mongoose';
import supertest from 'supertest';
import { expect } from 'chai';
import dotenv from 'dotenv';
import app from '../src/app.js';
import UserModel from '../src/dao/models/user.models.js'; 

dotenv.config();

const requester = supertest(app);

let testUser;

describe('Testing Avanzado', function () {
  before(async function () {
  
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('✅ Conectado a MongoDB (test)');

    await mongoose.connection.collection('users').deleteOne({ email: 'steffany@test.com' });

    testUser = await UserModel.create({
      name: 'Steffany',
      email: 'steffany@test.com',
      password: '1234'
    });
  });

  after(async function () {
   
    await mongoose.connection.collection('pets').deleteMany({});
    await mongoose.connection.collection('users').deleteMany({});
    await mongoose.connection.close();
    console.log('🛑 Conexión cerrada en test');
  });

  describe('Test Products', function () {
    it('El endpoint POST /api/pets/addPets debe crear una nueva mascota', async function () {
      const petMock = {
        name: 'Feli',
        specie: 'Perro',
        birthDate: '2021-12-17',
        owner: testUser._id.toString(),
        image: 'sin imagen'
      };

      const response = await requester
        .post('/api/pets/addPets')
        .send(petMock);

      expect(response.status).to.equal(201);
      expect(response.body).to.have.property('_id');
      expect(response.body.name).to.equal(petMock.name);
    });
  });
});