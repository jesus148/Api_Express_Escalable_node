
import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

// CLASE LOGICA SE USARA PARA METODOS RELACIONADOS A LAS BD OSEA LA LOGICA


// metodo obtiene todos
const getOrders = async () => {
    
    // metodo obtiene todo
    const responseItem = await ItemModel.find({});

    
    // retornando todo 
    return responseItem;
}






// exportando
export { getOrders }