import {randomBytes, createHash} from "crypto";

export default class PassAuth{
    constructor(){}

    public generateSalt(){
        return randomBytes(16).toString('base64');
    }

    public encryptPassword(input:string){
        let password;
        let saltHash
        let salt = this.generateSalt();

        password = createHash('sha256').update(`${salt}:${input}`, "binary").digest('base64')
        saltHash = password;

        let pepper = 0;
        do{
            password = createHash('sha256').update(`${saltHash}:${++pepper}`, "binary").digest('hex')   
        }while(!password.startsWith("000"))

        return { salt, pepper, password }
    }

    public comparePassword(userPassword: string, pwdData: any){
        const {salt, pepper, password} = pwdData;
        let  hash;
        hash = createHash('sha256').update(`${salt}:${userPassword}`, "binary").digest('base64')
        hash = createHash('sha256').update(`${hash}:${pepper}`, "binary").digest('hex')   
        console.log(hash);
        return (hash === password);
    }

}