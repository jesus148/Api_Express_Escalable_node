import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage";
import { registrerUpload } from "../services/storage";
import { handlehttp } from "../utils/error.handle";

const getFile = async (req: RequestExt, res: Response) => {
    // todo ok 
    try {
    // desenvolsando los files del request
    // el user es del mmidleware checkJwt
    // file : es del multer
    const { user, file } = req;






    // { id: 'Leifer.contacto@gmail.com', iat: 1733925449, exp: 1733932649 }
    // console.log(user);

    // {
    //     fieldname: 'myFile',
    //     originalname: 'images.png',
    //     encoding: '7bit',
    //     mimetype: 'image/png',
    //     destination: 'C:\\Users\\JesúsArgelHuamanAnge\\Desktop\\Marco\\express\\api_escalable_expess/storage',
    //     filename: 'image-1733925727576.png',
    //     path: 'C:\\Users\\JesúsArgelHuamanAnge\\Desktop\\Marco\\express\\api_escalable_expess\\storage\\image-1733925727576.png',
    //     size: 2523
    //   }
    // console.log(file);



    // creando un objeto y guardando esos parametros
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };

    
    // registrando
    const response = await registrerUpload(dataToRegister);

    // printer cliente
    res.send(response);

    // error
  } catch (e) {
    handlehttp(res, "ERROR_GET_BLOG");
  }
};


// exportando
export { getFile };