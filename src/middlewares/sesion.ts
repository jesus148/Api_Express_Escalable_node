import { NextFunction , Request, Response} from 'express';
import { verifyToken } from '../utils/jwt.handle';
import { JwtPayload } from 'jsonwebtoken';
import { RequestExt } from '../interfaces/req-ext';

// Midleware


// clase modelo de tipo request
// osea contiene los metodos request req.body, req.params, req.query
// --- DESCOMENTAR ESTO 
// interface RequestExt extends Request{
//     // nueva propiedad , El signo de interrogación (?) indica que esta propiedad es opcional, es decir, puede existir o no en el objeto req. El tipo de la propiedad user es un objeto con una sola clave que son las llaves {}.Esto significa que si la propiedad user está presente, debe contener un campo id que sea una cadena de texto.
//     // user?:{id:string}

//     // igual al de arriba pero puede ser string o JwtPayload
//     user?: string | JwtPayload;
// }



// verificando el token 
// req:RequestExt  : el req es de tipo RequestExt
const checkJwt = (req:RequestExt , res:Response , next: NextFunction)=>{
    // todo ok 
    try{
        // obteniedo el token del enviado por le cliente
        // recordar desde postman Authorization : > auth type > Bearer Token > token (poner el token)
        // Bearer 123121212121 : es el token obtenido
        const jwtByUser = req.headers.authorization || "";

        // el split : separa por el vacio y lo pone en un array
        // [ Bearer , 123121212121 ]:
        // pop() : elimina el ultimo y devuelve solo eso , osea solo el 123121212121
        const jwt = jwtByUser.split(' ').pop();

        // verificando el token 
        // `${jwt}` : en envia asi pq para q lo convierta a string
        // enviamos todo el token  si es correcto te devuelve el payload
        // as considero otro tipo de objeto q requiera la clase RequestExt
        const isUser = verifyToken(`${jwt}`) as {id:string};

//         printer 
//         { id: 'Leifer.contacto@gmail.com', iat: 1733460119, exp: 1733467319 }
// {
//   jwtByUser: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkxlaWZlci5jb250YWN0b0BnbWFpbC5jb20iLCJpYXQiOjE3MzM0NjAxMTksImV4cCI6MTczMzQ2NzMxOX0.LBia7bldnBri-gTomLronYNhEjCRO0SnSCPMx0tRYQQ'
// }
// printer el payload si es correcto la verificacion es true
        console.log(isUser);

        // verificando si no existe
        if(!isUser){
            // envia al cliente
            res.send("NO_TIENE_UN_JWT_VALIDO")
        // todo ok
        }else{

            // agregando al request el payload del token
            // osea cuando llege a la ruta del metodo , esto req.user ya esta agregado 
            // esto se usa para ver quien agrego algo o uso tu api
            req.user= isUser;


            // envia al cliente , printer el token 
            // console.log({jwtByUser});
            
            // pasa al metodo o continua
            next();
        }
        // si hay un error
    }catch(e){
        // printer consola
        console.log({e});
        // estado
        res.status(400);
        // printer cliente
        res.send("SESION_NO_VALID");
    }
}

// exportando
export { checkJwt};