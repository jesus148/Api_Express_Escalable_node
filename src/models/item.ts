import {Schema, model} from 'mongoose';
import { Car } from '../interfaces/car.interface';

// schemas para crear una tabla en el mongodb 
// <Car> : usando la clase modelo
// Schema el esqema es para crear la entidad
const ItemSchema=new Schema<Car>(
    {
        // propiedades
        name: {
            type: String, //tipo de datos
            required: true, //requeridos
        },
        color:{
            type:String,
            required:true
        },
        gas:{
            type:String,
            // el tipo de dato q debe tener 
            enum:["gasoline","electric"],
            required:true
        },
        year:{
            type:Number,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        }
    },
    {
        // fecha registro y actualizacion
        timestamps:true,
        // para no poner el id de las clases
        versionKey:false
    }
);


// creacion de el modell en mongodb y para tener las propiedades de la bd 
// items : el nombre sera igual al crear en la bd
const ItemModel = model("items", ItemSchema);

// exportando
export default ItemModel;
