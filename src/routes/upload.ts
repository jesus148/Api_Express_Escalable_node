
import {Router} from 'express';
import { checkJwt } from '../middlewares/sesion';
import { getFile } from '../controllers/upload';
import multerMiddleware from '../middlewares/file';


const router = Router();


// http://localhost:3002/upload
// body> form-data > 
// key(myfile)(type-file) - value(cargar imagen )
// myFile ponerse en el postman o cliente key(myfile)
// Authorization : > auth type > Bearer Token > token de lo q te da el login(poner el token)
// el single es un metodo de multer :Acepta un solo archivo con el nombre fieldname. El archivo único se almacenará en req.file.
router.post("/",  checkJwt ,  multerMiddleware.single('myFile') , getFile);

// exportando router
export { router};