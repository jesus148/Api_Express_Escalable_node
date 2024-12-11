import {Request} from 'express';
import multer, {diskStorage} from 'multer';


// ruta donde se guardara el file
// C:\Users\JesúsArgelHuamanAnge\Desktop\Marco\express\api_escalable_expess/storage
// process.cwd() para ver la ruta parecido al dirname
// crear el folder storage en 
// api_escalable_expess : en el nombre de tu proyecto 
const PATH_STORAGE=`${process.cwd()}/storage`;


// metodo
const storage=diskStorage({
    
    // destino donde se guardara 
    destination(req:Request, file:Express.Multer.File, cb:any){
        cb(null, PATH_STORAGE);
    },

    // nombre del archivo
    filename(req:Request, file:Express.Multer.File, cb:any){

        // obtiene la extension 
        // objeto file
        // {
        //     fieldname: 'myFile',
        //     originalname: 'images.png',
        //     encoding: '7bit',
        //     mimetype: 'image/png'
        // }
        // images.png : separa en un array por el . y el pop elimina el ultimo y ese te devuelve
        const ext = file.originalname.split(".").pop();

        // storage\image-1733845962228.png
        // como se almacena
        const fileNameRandom= `image-${Date.now()}.${ext}`;
        cb(null, fileNameRandom);
    },
})

// donde se guardara y su nombre respectivo
const multerMiddleware = multer({ storage });

// exportando
export default multerMiddleware;