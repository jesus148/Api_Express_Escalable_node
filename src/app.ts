import "dotenv/config"
import express from "express";
import cors from "cors";
import { router } from "./routes";
import  db from "./config/mongo";

// APP PRINCIPAL


// puerto personalizado , uno o  el otro puerto
const PORT = process.env.port || 3001;
// creacion app
const app=express();

// cors ruta especifica q ruta de consume esto basicamente es seguridad
// app.use(cors({
//     origin:['http://localhost:4200']
// }))

// nucleos
app.use(cors());

// intercambio de datos desde el front al back en formato json
app.use(express.json());


// conexion a la bd 
db().then(()=>console.log("conexion ready"));


// routers
// aca trae el index.ts(esto junta todos los routers del folder routes)
app.use(router);




// puerto de la app
app.listen(PORT , ()=>console.log('listo por el puerto ', PORT));