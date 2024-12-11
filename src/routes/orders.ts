
import {Router} from 'express';
import { getItems } from '../controllers/order';
import { checkJwt } from '../middlewares/sesion';

const router = Router();


// ROUTES PARA LOS ORDERS 

// http://localhost:3002/orders/get ----postman
// checkJwt : midleware
// Authorization : > auth type > Bearer Token > token de lo q te da el login(poner el token)
router.get('/get', checkJwt , getItems)


export { router};