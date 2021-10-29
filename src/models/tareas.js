const mongoose=require("mongoose")
const Schema=mongoose.Schema

const SchemaTareas=new Schema({
    id:{type: Number,required : true },
    imagen:{type: String,required : true },
    Titulo:{type: String,required : true },
    categoria:{type: String,required : true },
    descripcion:{type: String,required : true },
})

module.exports=mongoose.model("Tarea",SchemaTareas)