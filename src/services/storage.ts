import { Storage } from "../interfaces/storage";
import StorageModel from "../models/storage";



// CLASE LOGICA SE USARA PARA METODOS RELACIONADOS A LAS BD OSEA LA LOGICA

// {fileName, idUser, path} : Storage : desenvolsando del objeto pasado como parametro
const registrerUpload = async ({fileName, idUser, path} : Storage)=>{

    // registrando usando la clase modelo y su metodo registrer 
    const responseItem = await StorageModel.create({fileName, idUser, path});
    // retornando al cliente
    return responseItem;
}

// exportando
export { registrerUpload};