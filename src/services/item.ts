
import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

// CLASE LOGICA SE USARA PARA METODOS RELACIONADOS A LAS BD OSEA LA LOGICA


// metodo registrar
// (item:Car) : recibe un objeto clase
const insertCart = async(item:Car)=>{
    // registrando
    const responseInsert = await ItemModel.create(item);
    // retornando el objeto ingresado
    return responseInsert;
}


// metodo obtiene todos
const getCars= async () => {
    
    // metodo obtiene todo
    const responseItem = await ItemModel.find({});

    console.log(responseItem);
    
    // retornando todo 
    return responseItem;
}



// metodo obtiene solo 1 
const getCar=async(id:string)=>{
    // get el primero , busca por id 
    const responseItem= await ItemModel.findOne({_id: id})
    return responseItem;
}


// metodo actualizar 
const updateCar = async (id:string , data:Car)=>{

    // metodoc encuentra y actualiza por id , data objeto a actualizar 
    // {_id:id}: parametro 
    //    data : objeto a actualizar 
    // {    new:true} : devuelve el objeto actualizado
    const responseItem= await ItemModel.findOneAndUpdate({_id:id}, data , {
        new:true
    });
    return responseItem;
}




// metodo eliminar 
const deleteCar  = async (id : string)=>{
    // get el primero , busca por id 
    const responseItem= await ItemModel.findOneAndDelete({_id: id});

    // retornar el objeto eliminado 
    return responseItem;
}




// exportando
export {insertCart , getCars , getCar , updateCar , deleteCar}