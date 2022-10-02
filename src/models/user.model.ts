export default interface User{
    id?: number;
    name: string;
    lastName: string;
    mail: string;
    password: string;
    rol: number;
    createdAt?: Date;
    updateAt?: Date; 
}