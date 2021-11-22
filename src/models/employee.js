import User from "./user.js";

export default class Custumer extends User {
    constructor(id,firstname,lastname,city,age)
    {
        super(id,firstname,lastname,city,age)
        this.salary=this.salary
    }
}