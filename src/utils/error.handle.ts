
import {Response} from 'express';

// esto sirve para manejar errores

// (res:Response, error:string): son los parametros
const handlehttp = (res:Response, error:string, errorRaw?:any)=>{
    // printer error 
    console.log(errorRaw);
    // devuevel al usuario
    res.status(500); //estado codigo
    res.send({error}) //envio al front
}

// exportando
export {handlehttp};