import UserManagerDB from "../dao/users.managers.js";

let manager= new UserManagerDB()

export async function getUsersService() {
    let user= await manager.getuser()
    return user
    
}

export async function addUserService(first_name,last_name,age,email,password,pets,role) {
    const newUser= await manager.addusers(first_name,last_name,age,email,password,pets,role)
    return newUser
}

export async function generateMockUsersService(x) {
    const users= await manager.generateMockUsers(x)
    console.log(users)
    return users;
}