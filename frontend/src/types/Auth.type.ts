 export interface User {
    _id:string;
    email:string;
    userName:string
}

 export interface AuthResponse  {
    message:string;
    status:string;
    user:User;
    token:string
}