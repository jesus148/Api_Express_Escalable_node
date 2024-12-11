import { Auth } from "./auth.interface";

// extends : la clase User tendra las propiedades de auth
// clase hija del auth.interface.ts
export interface User extends Auth{
    name:string,
    description:string
}