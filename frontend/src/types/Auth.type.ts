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