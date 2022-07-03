export interface IWorkersItem {
    id: number;
    email: string;
    roles: object;
}

export interface Roles {
    admin: boolean;
    chef: boolean;
    waiter: boolean;
}