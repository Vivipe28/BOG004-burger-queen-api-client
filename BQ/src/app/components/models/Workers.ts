export class workersInterface {
    email!: string;
    password!: string
    roles!: string;

    constructor(email: string, password: string, roles: string){
        this.email = email
        this.password = password
        this.roles = roles
    }
}

export class workers {
    id!: any;
    email!: string;
    password!: string
    roles!: string;

    constructor(id: any, email: string, password: string, roles: string){
        this.id =  id
        this.email = email
        this.password = password
        this.roles = roles
    }
}