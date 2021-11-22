import DataError from "../models/dataError.js"
import User from "../models/user.js"

export default class UserService //export dışarıdan çağırılabilir demek 
// default ise burası çağırılırsa baz olarak bunu al demek
{
    constructor(loggerService){
        // this.users=[]
        this.empleyees=[]
        this.customers=[]
        this.errors=[]
        this.loggerService= loggerService
    }
    load(){
        for (const user of User) {
          switch (user.type){
              case "customer":
                  this.customers.push(user)
                  break;
                  case  "employee":
                      this.empleyees.push(user)
                      break
              default:
this.errors.push(new DataError ("wrong data",user))
                  break;
          }
        }
        this.empleyees=
    }
    add(user)
    {
        // console.log("kullanici eklendi"+user)
       //this.users.push(user)
        this.loggerService.log(user);
    }
    list()
    {
        // console.log("kullanicilar listelendi")
//return  this.users
    }
    getById(id)
    {
        // console.log("kullanici bilgisi getirildi")
  //      return this.users.find(u=>u.id===id)
    }

}