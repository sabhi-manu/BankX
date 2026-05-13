 export interface User {
    _id:string;
    email:string;
    userName:string;
    phoneNumber:string;
    updatedAt:string;
    createdAt:string;
    systemUser:boolean;
}

 export interface AuthResponse  {
    message:string;
    status:string;
    user:User;
    token:string
}

export interface TransactionResponse {
    _id:string;
    amount:number;
    fromAccount:string;
    toAccount:string;
    status:string;
    createdAt:string;
    updatedAt:string;
    description:string;
}