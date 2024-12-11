
import {hash , compare} from "bcryptjs";


// PARA ENCRIPTAR CONTRASEÑAR Y VERIFICAR EL PASSWORD 

// encriptat contraseña
const encrypt = async(pass:string)=>{
    
    // encripta la contraseña con el hash 
    // mayor sea el numero mas seguro sera pero demorara un poco
    const passwordhash = await hash(pass, 8);

    // retorna al cliente 
    return passwordhash;
};


    

// verifica y compara contraseña
const verified = async(pass:string , passhash:string)=>{
    
    // compara la contraseña 
    const isCorrect= await compare(pass , passhash);

    // retorna un booleano 
    return isCorrect;
};

// exportando 
export {encrypt , verified}