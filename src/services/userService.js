export default class UserService //export dışarıdan çağırılabilir demek 
// default ise burası çağırılırsa baz olarak bunu al demek
{
    add(user)
    {
        console.log("kullanici eklendi"+user)
    }
    list()
    {
        console.log("kullanicilar listelendi")
    }
    getById(id)
    {
        console.log("kullanici eklendi")
    }
    
}