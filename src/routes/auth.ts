import {Request, Response , Router} from 'express';
import {loginCtrl, registrerCtrl} from '../controllers/auth';


const router =  Router();


// ROUTER PARA LA AUTENTICACION 

// http://localhost:3002/auth/registrer  ---post
    // {
    //     "name":"Leifer",
    //     "password":"12345",
    //     "email":"Leifer.contacto@gmail.com"
    // }
router.post("/registrer", registrerCtrl);



// http://localhost:3002/auth/login  ---post    
// {
//     "password":"12345",
//     "email":"Leifer.contacto@gmail.com"
// }
router.post("/login", loginCtrl);


// exportando
export {router};