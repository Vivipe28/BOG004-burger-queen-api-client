import { Roles } from './workers-item'

export class workersInterface {

    email!: string;
    password!: string
    roles!: Roles;

    constructor(email: string, password: string, roles:Roles){
        this.email = email
        this.password = password
        this.roles = roles
    }
}

