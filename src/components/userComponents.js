import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("yüklendi")

// let userService=new UserService()
let userService=new UserService()

let user1=new User(1,"Ahmet","soyad","Ankara")

userService.add(user1)

userService.add()
userService.getById(1)
userService.list()