
import {Request , Response , Router} from 'express';
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/items';
import { logMiddleware } from '../middlewares/log';


// ROUTER DEL CRUD ITEMS



const router= Router();

// router.get("/", (req:Request , res:Response)=>{ 
//     res.send({data:"send"})
// })




// obtiene todo 
// http://localhost:3002/items ---get
router.get("/", getItems);



// metodo obitien solo 1 
// 674896b04c1b3946a905978c : id de mongo
// http://localhost:3002/items/674896b04c1b3946a905978c
//con un midleware : logMiddleware
router.get("/:id", logMiddleware,getItem);




// http://localhost:3002/items  ---post
// {
//     "name":"jesus",
//     "color":"gray",
//     "gas":"electric",
//     "year":"2023",
//     "description":"el mejor carro",
//     "price":5200
// }
router.post("/", postItem);



// http://localhost:3002/items/674896b04c1b3946a905978c ----put
// {
//     "name": "actualizado",
//     "color": "gray3",
//     "gas": "gasoline",
//     "year": 2025,
//     "description": "el mejor carro",
//     "price": 5200,
//     "createdAt": "2024-11-28T16:13:36.746Z",
//     "updatedAt": "2024-11-28T16:13:36.746Z"
// }
router.put("/:id", updateItem);




// http://localhost:3002/items/6748c63ff76560f66dcd6a77  --- delete
router.delete("/:id", deleteItem);




// exportando
export {router};