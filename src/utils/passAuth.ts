import {randomBytes, createHash} from "crypto";

export default class PassAuth{
    constructor(){}

    /** 
     * Generate a salt used to encrypt the password
     * Random sequence to append at start of the pre-encrypted pass.
     * Example: yOzVwR8aWS8mZATMbhVnIA==
     * 
     * @returns Salt: string 
    */
    public generateSalt(){
        return randomBytes(16).toString('base64');
    }

    /**
     * Encrypt the password using the original password and a
     * generated pepper and salt, required to compare on login.
     * Pepper is a number that makes the hash of the pasword start with 000 
     * 
     * @param input: string
     * @returns salt: int, pepper: string, password: string
     */
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

    /**
     * Compares the password provided by the user.
     * If the password provided plus the salt and pepper from the 
     * database creates the same hash the password is correct
     * 
     * @param userPassword : string
     * @param pwdData: Object (salt, pepper, password) 
     * @returns isCorrect:boolean
     */
    public comparePassword(userPassword: string, pwdData: any){
        const {salt, pepper, password} = pwdData;
        let  hash;
        hash = createHash('sha256').update(`${salt}:${userPassword}`, "binary").digest('base64')
        hash = createHash('sha256').update(`${hash}:${pepper}`, "binary").digest('hex')   
        console.log(hash);
        return (hash === password);
    }

}