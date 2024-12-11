
import {Request , Response} from 'express';
import { handlehttp } from '../utils/error.handle';
import dbconnect from '../config/mongo';


// METODOS CONTROLADORES
// solo une el router con el service q contiene la logica de negocio


const getBlogs =(req:Request, res:Response)=>{
    try {
        
    } catch (error) {
    //  res.status(500);   
    //  res.send("ERROR_GET_Blogs"); 
    handlehttp(res, 'ERROR_GET_BLOG')  
    }
}


const getBlogss =(req:Request, res:Response)=>{
    try {
        
    } catch (error) {
        handlehttp(res, 'ERROR_GET_BLOG')  
    }
}


const updateBlogs =(req:Request, res:Response)=>{
    try {
        
    } catch (error) {
        handlehttp(res, 'ERROR_UPDATE_BLOG')  
    }
}


const postBlogs =({body}:Request, res:Response)=>{
    try {
        res.send(body);
    } catch (error) {
        handlehttp(res, 'ERROR_POST_BLOG')  
    }
}



const deleteBlogs =(req:Request, res:Response)=>{
    try {
        
    } catch (error) {
        handlehttp(res, 'ERROR_DELETE_BLOG')  
    }
}


// exportando
export {getBlogs , getBlogss, postBlogs , updateBlogs, deleteBlogs}