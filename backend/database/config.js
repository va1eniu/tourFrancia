import mongoose from "mongoose";

const conectarDB = async ()=>{
   try {
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    console.log('DB ONLINE');
   } catch (error) {
    console.log(error);
    throw new Error('db can not inicializes')
   }
}

export default conectarDB;