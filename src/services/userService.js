export default class UserService //export dışarıdan çağırılabilir demek 
// default ise burası çağırılırsa baz olarak bunu al demek
{
    constructor(loggerService){
        this.users=[]
        this.loggerService= loggerService
    }
    add(user)
    {
        // console.log("kullanici eklendi"+user)
        this.users.push(user)
        this.loggerService.log(user);
    }
    list()
    {
        // console.log("kullanicilar listelendi")
return  this.users
    }
    getById(id)
    {
        // console.log("kullanici bilgisi getirildi")
        return this.users.find(u=>u.id===id)
    }

}