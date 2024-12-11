import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";



// clase modelo de tipo request
// osea contiene los metodos request req.body, req.params, req.query
export interface RequestExt extends Request{
    // nueva propiedad , El signo de interrogación (?) indica que esta propiedad es opcional, es decir, puede existir o no en el objeto req. El tipo de la propiedad user es un objeto con una sola clave que son las llaves {}.Esto significa que si la propiedad user está presente, debe contener un campo id que sea una cadena de texto.
    // user?:{id:string}

    // igual al de arriba pero puede ser una una cadena de texto o el JwtPayload
    user?:  JwtPayload | { id: string };
}

