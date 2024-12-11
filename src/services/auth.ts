import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";


// SERVICIO DE AUTENTICACION
// contine logica de negocio


// metodo registrar 
// {email , password, name}:Auth : desestructurando 
const registrerNewUser = async ({email , password, name}:User)=>{

    // verificando si existe x email
    const checks = await UserModel.findOne({email});
    if(checks) return 'ALREADY_USER';

    // encriptando la contraseña 
    const passhash = await encrypt(password);

    // registrando si no existe
    const registrerNewUser = await UserModel.create({
        email , 
        password:passhash, //password encriptada
         name
    });

    // retorna al cliente 
    return registrerNewUser;
}



// logeandote metodo
// {email , password} : desestructurando 2 paramtros del objeto Auth
const loginUser = async ( {email , password}:Auth)=>{
    
    // encontrando si existe un usuario con ese email
    const checkIs = await  UserModel.findOne({email});
    if(!checkIs) return "NOT_FOUND_USER" //se queda ahi

    // comparando password 
    const passwordHash= checkIs.password; //busca el password
    const isCorrect=await verified(password, passwordHash ) //verifica el password
    if(!isCorrect) return "PASSWORD_INCORRECT"; // si es incorrecto se queda ahi 


    // generando el token , se envia  email user enci¿ontrado
    const token = generateToken(checkIs.email);

    // retorna al cliente un objeto
    const data = {
        token, //token 
        user: checkIs //el user total
    }


    // retornando
    return data;
    // retiornamos el usuario 
    // return checkIs;
}


// exportando
export { registrerNewUser , loginUser}