
export class User{
    #user_id:number;
    #name:string;
    #username:string;
    #email:string;
    #phoneNumber:string;

    constructor(user_id:number,name:string,username:string,email:string,phoneNumber:string){
        this.#user_id = user_id;
        this.#name = name;
        this.#username = username;
        this.#email = email,
        this.#phoneNumber = phoneNumber
    }

    get user_id():number{
        return this.user_id
    }

    set user_id(user_id:number){
        this.#user_id = user_id
    }

    get name():string{
        return this.name
    }

    set name(name:string){
        this.#name= name;
    }
    get username():string{
        return this.username
    }

    set username(username:string){
        this.#username= username
    }

    get email():string{
        return this.email
    }

    set email(email:string){
        this.#email= email;
    }

    get phoneNumber():string{
        return this.phoneNumber
    }

    set phoneNumbe(phoneNumber:string){
        this.#phoneNumber= phoneNumber;
    }

}