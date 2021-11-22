import User from "./user.js";

export default class Custumer extends User {
    constructor(id,firstname,lastname,city,crediCardNumber)
    {
        super(id,firstname,lastname,city,age)
        this.crediCardNumber=crediCardNumber
    }
}