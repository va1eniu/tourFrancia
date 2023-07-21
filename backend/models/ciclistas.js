import mongoose from "mongoose";

const ciclistaSchema = mongoose.Schema({
    
    nombre:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'name is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'PassWord is required']
    },
   

})

const Ciclista = mongoose.model("ciclistaUser", ciclistaSchema)

export default Ciclista;