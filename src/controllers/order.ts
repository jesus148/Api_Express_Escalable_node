
import { Request , Response} from 'express';
import { handlehttp } from '../utils/error.handle';
import {   getCars  } from '../services/item';
import dbconnect from '../config/mongo';
import { JwtPayload } from 'jsonwebtoken';
import { RequestExt } from '../interfaces/req-ext';

// METODOS CONTROLADORES
// solo une el router con el service q contiene la logica de negocio


// clase modelo de tipo request
// osea contiene los metodos request req.body, req.params, req.query
// ---DESCOMENTAR ESTO 
// interface RequestExt extends Request{
//     // nueva propiedad , El signo de interrogación (?) indica que esta propiedad es opcional, es decir, puede existir o no en el objeto req. El tipo de la propiedad user es un objeto con una sola clave que son las llaves {}.Esto significa que si la propiedad user está presente, debe contener un campo id que sea una cadena de texto.
//     // user?:{id:string}

//     // igual al de arriba pero puede ser string o JwtPayload
//     user?: string | JwtPayload;
// }




// metodo otiene todo 
// req:RequestExt el request es de tipo RequestExt
const getItems = async(req:RequestExt, res:Response)=>{
    // todo ok 
    try {

        // envio al cliente 
        res.send({

            data:'ESTO SOLO LO VE LAS PERSONAS CON SESION JWT',
            // el request del src\middlewares\sesion.ts q agrego el request del payload lo obtiene aca
            user:req.user
        })     
        
        // si hay error 
    } catch (error) {
        // metodo manejar errores
        handlehttp(res, 'ERROR_GET_ITEM')  
    }
}



// exportando
export { getItems}