const Route=require("express").Router()
const cors=require("cors")

const morgan=require("morgan")
const multer=require("multer")



const { postForm } = require("../Controllers/contacto.controller.js")


const upload=multer()

// const corsConfig = {
//     credentials: true,
//     origin: true,
// };
Route.use(cors())
Route.use(morgan('dev'))
Route.get('/',(req,res)=>{


    try {
        return res.send("Recibido")
    } catch (error) {
        

        return res.sendStatus(500).json({message:error.message})
    }
})


Route.post('/contacto',upload.any(),postForm)


module.exports=Route;