const{Router}=require("express")
const express= require("express")
const router=express.Router()
const Tarea=require("../models/tareas")


router.get("/",async(req,res)=>{
    const tareas= await Tarea.find() 
    console.log(tareas)
    res.render("index",{tareas})
})

router.post("/Favoritos", async(req,res)=>{
    const tarea = new Tarea(req.body)
    await tarea.save()
    console.log(req.body)
    res.redirect("/")
})

router.get("/eliminar/:id",async(req,res)=>{
   const id =req.params.id
   await Tarea.remove({_id:id})
   res.redirect("/")


})


module.exports=router;