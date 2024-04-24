export class UserModel {

    username?: string;
    password?: string;

    constructor (obj:any){
        if (obj){
            this.username = obj.username;
            this.password = obj.password;
        }
    }
}