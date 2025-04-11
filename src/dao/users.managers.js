import UserModel from "./models/user.models.js";
import { faker } from '@faker-js/faker';


class UserManagerDB {
    constructor() {}
  
   
    async getuser() {
      let allusers = await UserModel.find(); 
      let users = JSON.parse(JSON.stringify(allusers)); 
      return users
    }
  
    async addusers(first_name,last_name,age,email,password,pets,role) {
     
      let newUser = await UserModel.create({
        first_name,last_name,age,email,password,pets,role
      });
  
      console.log('User:', newUser); 
      return newUser; 
    }


async generateMockUsers(x) {
  const users = []; 
  for (let i = 0; i < x ; i++) {
      const user = await UserModel.create({ 
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 90 }) ,
        email: faker.internet.email(),
        password: faker.internet.password(),
        pets:[],
        role: 'user'
         
      });
      users.push(user); 
  }
  return users;
}
}
export default UserManagerDB;