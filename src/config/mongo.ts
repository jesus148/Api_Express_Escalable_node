
import "dotenv/config";
import {connect} from "mongoose";


// CONEXION A BASE DE DATOS


async function dbconnect(): Promise<void>{
    // ruta de la bd q sea tipo string
    const DB_URI=<string>process.env.DB_URI;
    // conexion a la bd
    await connect(DB_URI);
}


// exportando 
export default dbconnect;
