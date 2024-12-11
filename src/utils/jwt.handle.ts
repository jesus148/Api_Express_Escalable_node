
import {sign , verify} from 'jsonwebtoken';

// obteniendo la variable de entorno 
const JWT_SECRET = process.env.JWT_SECRET || "token.010101001";



// generando el token 
const generateToken = (id : string)=>{
    // sign : funcion generar token 
    // {id} : el id q sera el payload o cuerpo del token
    // JWT_SECRET seria al firma
    const jwt = sign({id},JWT_SECRET, {
        //tiempo de expiracion
        expiresIn:"2h"
    });
    // retornando
    return jwt;
}

// verificando el token 
const verifyToken = (jwt : string)=>{
    // verfica y retorna un boleano , verfica a partir de la firma
    const isOk= verify(jwt , JWT_SECRET)
    // retorna al cliente
    return isOk;
}


// exportando
export {generateToken , verifyToken};