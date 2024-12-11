
import {NextFunction, Request, Response} from 'express';



// MIDLEWARES

const logMiddleware =(req:Request, res:Response , next:NextFunction)=>{
    // printer 
    // console.log('hola soy el log');

    // get headers del request encabezados
    const header= req.headers;

    // check browser del cliente 
    const useragent=header["user-agent"]
    // printer viendo el navegado q usa el cliente pa la peticion
    console.log("user agent", useragent);
    // ejemplo :user agent PostmanRuntime/7.43.0 el cliente usa postaman


    // sigue la funcion 
    // next();

    // envio al cliente se queda aqui
    res.send("DESDE_MIDLEWARE")
}



// exportando 
export {logMiddleware}