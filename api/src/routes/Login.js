const { Router } = require('express');
const{Menues,Ingredients,Tables}=require('../db')


const router = Router();

router.get("/dato", async(req, res) => {
    const mesasas = await Tables.findAll();

    res.status(200).send(mesasas)
})

router.get('/open/:ID_Mesa', async (req,res,next)=>{
    const {ID_Mesa} = req.params
    console.log("El Nombre de La Mesa Es: ", ID_Mesa);
    let user;
    try {
        if(ID_Mesa){
            user = await Tables.findOne({
                where : { name: ID_Mesa},
                include:[Menues]
            })
            
        }
        if(!user) return res.status(400).send({msg: "user id does not exist"})
        console.log(user)
        res.status(200).send(user);
    } catch (error) {
        next(error);
        
    }
})

router.post('/', async (req,res,next)=>{
    const {name} = req.body
    console.log("El Nombre de La Mesa Es: ", name);
    let user;
    try {
        if(name){
            user = await Tables.findOne({
                where : { name: name}
            })
            
        }
        if(!user) return res.status(400).send({msg: "user id does not exist"})
        res.status(200).send(true);
    } catch (error) {
        next(error);
        
    }
})
//--------------------

module.exports=router    