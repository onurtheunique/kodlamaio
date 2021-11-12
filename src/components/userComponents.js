import { BaseLogger, ElsaticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("yüklendi")

// let logger1=new BaseLogger()
let logger1=new ElsaticLogger()
let userService=new UserService(logger1)

let user1=new User(1,"Ahmet","soyad","Ankara")
let user2=new User(2,"Baran","gökçek","muğla")

userService.add(user1)
userService.add(user2)
console.log(userService.getById(1))
console.log(userService.list()) 