
import { Router } from "express";
import {readdirSync} from 'fs';


// ESTE ROUTER JUNTA TODOS LOS ROUTERS OSEA ESTA ES LA BASE

// ruta actual proyecto
// src\routes
const PATH_ROUTER=`${__dirname}`

const router = Router();


// cortando ruta 
const cleanFileName=(filename:string)=>{
    // index.ts : parametro o nombre del file
    // split separa o divide por comas saliendo ["index", "ts"]
    // shift : corta el primer elemento del array eliminado y lo devuelve 
    const file = filename.split(".").shift();
    return file;
}






// printer files contenidos en la ruta src\routes
// readdirSync : lee los files dentro de un folder 
// filter se usa para filtrar elementos en un array 
readdirSync(PATH_ROUTER).filter((filename =>{
    
    // envio de los files para cortar sin el .ts    
    const cleaname=cleanFileName(filename);

    // que sea diferente a index
    if(cleaname !== "index"){
        // trayendo cada import osea cada router ose desde su import osea si existe y si existe lo trae con el then
        import(`./${cleaname}`).then((moduldeRouter)=>{
            // printer 
            console.log(`Se esta cargando la ruta ..../${cleaname}`)
            // router , osea cada router ya sea blogs.ts o items.ts se concatenar con el {cleaname}
            // {cleaname} : es el name del file y el moduldeRouter.router es el router de cada file ademas cada router tiene metodos segun sea post , delete .etc
            // moduldeRouter.router : se pone asi pq en cada router se exporta el router
            // ejemplo : http://localhost:3002/items
            router.use(`/${cleaname}`, moduldeRouter.router)
        })
    }
}))


export {router};





// router.use

// En Express.js, router.use es un método que se utiliza para:
// Aplicar middleware a rutas específicas o a todo un conjunto de rutas.
// Agrupar rutas que comparten una base común.

// 2. Agrupar rutas
// Puedes usar router.use para estructurar mejor tu aplicación agrupando rutas que comparten un prefijo o base.

// javascript
// Copiar código
// const usersRouter = require('./routes/users');
// const productsRouter = require('./routes/products');

// app.use('/users', usersRouter);   // Todas las rutas en usersRouter estarán bajo /users
// app.use('/products', productsRouter); // Todas las rutas en productsRouter estarán bajo /products
// En este caso:

// Si usersRouter tiene una ruta /profile, será accesible desde /users/profile.
// Si productsRouter tiene una ruta /list, será accesible desde /products/list.
