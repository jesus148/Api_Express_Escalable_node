import {Schema, model } from 'mongoose';
import { User } from '../interfaces/user.interface';

// schemas para crear una tabla en el mongodb 
// <User> : usando la clase modelo
const UserSchema=new Schema<User>(
    {
        name:{
            required:true,
            type:String
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
         description:{
            type:String,
            default:'value x default' //valor x default si esta vacio
         }
    },
    {
        versionKey:false,// para q cuando se crea el documento no aparezca el subguion 
        timestamps:true //fecha de registro y actualizacion en mongo
    }
);


// creacion de el modell en mongodb y para tener las propiedades de la bd 
const UserModel = model("users",UserSchema);

// exportando
export default UserModel;