
import { Schema, Types, model, Model } from "mongoose"; 
import { Storage } from "../interfaces/storage";


// schemas para crear una tabla en el mongodb 
// <Storage> : usando la clase modelo
const StorageScheme = new Schema<Storage>(
    {
        fileName:{
            type:String
        },
        idUser:{
            type:String
        },
        path:{
            type:String,
        }
    },{
        versionKey:false,// para q cuando se crea el documento no aparezca el subguion 
        timestamps:true //fecha de registro y actualizacion en mongo
    }
);

// creacion de el model en mongodb y para tener las propiedades de la bd 
// en el mongo se crea con el nombre storages
const StorageModel = model("storage",StorageScheme);

// exportando 
export default StorageModel;