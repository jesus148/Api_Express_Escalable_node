
import { Request , Response } from "express";
import { loginUser, registrerNewUser } from "../services/auth";



// METODOS CONTROLADORES
// solo une el router con el service q contiene la logica de negocio




// {body} : cuerpo del request
const registrerCtrl = async({body}:Request , res:Response)=>{
    
    // metodo registrar 
    const responseuser = await registrerNewUser(body);

    // send al cliente
    res.send(responseuser);
}


// metodo loguearse
// {body}:Request : desenvolsando el obejto del request
const loginCtrl = async({body}:Request , res:Response)=>{

    // desenvolsando del body solo ciertos parametros 
    const { email , password} = body;

        // metodo registrar 
        const responseuser = await loginUser({email , password});

        // verifica si el password es incorrecto
        if(responseuser === "PASSWORD_INCORRECT"){
            res.status(403);
            res.send(responseuser);
        // todo ok
        }else{
            // send al cliente
            res.send(responseuser);
        }

}


export{ loginCtrl , registrerCtrl}