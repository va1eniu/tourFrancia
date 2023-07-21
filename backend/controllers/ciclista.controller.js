import Ciclista from "../models/ciclistas.js"
import bcryptjs from "bcryptjs";


const getCiclista = (req,res)=>{
    res.status(403).json({
        "message":"home page"
    })
}

const postCiclista = async (req,res)=>{
    const {nombre,email,password} = req.body;
    const nuevoCiclista = new Ciclista({nombre,email,password})

    const existeEmail = await Ciclista.findOne({email});
    if (existeEmail) {
        return res.status(400).json({
            msg:"email is alredy registred"
        })
    }

    const salt = bcryptjs.genSaltSync();
    nuevoCiclista.password = bcryptjs.hashSync(password,salt)
    
    await nuevoCiclista.save();
    res.json({
        "message": "post api",
        nuevoCiclista
    })
}

export {
    getCiclista,
    postCiclista
};