
import {Request  , Response} from 'express';
import { handlehttp } from '../utils/error.handle';
import dbconnect from '../config/mongo';
import { insertCart , getCars, getCar , updateCar , deleteCar  } from '../services/item';


// METODOS CONTROLADORES
// solo une el router con el service q contiene la logica de negocio


// metodo obtiene solo 1 item 
const getItem =async({params}:Request, res:Response)=>{
    try {
        // desenvolsa parametros 
        // {id} : el parametro = en routes
        const {id}= params;

        const response= await getCar(id);
        
        // check si existe 
        const data = response ? response: "NOT_FOUND";

        // envio al cliente 
        res.send(data);
    } catch (error) {
    //  res.status(500);   
    //  res.send("ERROR_GET_ITEM"); 

    // metodo del src\utils\error.handle.ts 
    // para manejar errores
    handlehttp(res, 'ERROR_GET_ITEM')  
    }
}


// metodo otiene todo 
const getItems = async(req:Request, res:Response)=>{
    try {
        // obtiene todo
        const reponse = await getCars();
        
        console.log(reponse);
        // envio al front 
        res.send(reponse);  
        
    } catch (error) {
        // metodo manejar errores
        handlehttp(res, 'ERROR_GET_ITEM')  
    }
}





// metodo actualiza 
// {params , body}: parametro y el body 
const updateItem =async({params , body}:Request, res:Response)=>{
    try {
        // destructurando id
        const {id}= params;

        // metodo actualiza por id y el body 
        const response=await updateCar(id , body);
        
        // retorna al cliente 
        res.send(response);
    } catch (error) {
        // metodo manejar errores 
        handlehttp(res, 'ERROR_UPDATE_ITEM')  
    }
}


// metodo crear
// {body}:Request : recibe el body como request directamente
const postItem = async({body}:Request, res:Response)=>{
    try {
        // usando el metodo registrar de services\items
        const responseItem = await insertCart(body);

        // envio al front
        res.send(responseItem);
    } catch (error) {
        // metodo manejar errores
        handlehttp(res, 'ERROR_POST_ITEM' , error)  
    }
}


// metodo eliminar id 
const deleteItem = async({params}:Request, res:Response)=>{
    try {
        // desestructura el id 
        const {id}=params;
        // elimina por el id 
        const response = await deleteCar(id);

        // enviando al front
        res.send(response);
    } catch (error) {
        // metodo manejar errores
        handlehttp(res, 'ERROR_DELETE_ITEM')  
    }
}


// exportando
export {getItem , getItems, postItem , updateItem, deleteItem}