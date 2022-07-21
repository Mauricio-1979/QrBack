const { Router } = require('express');
const{Menues,Ingredients}=require('../db')


const router = Router();

router.get('/',(req,res,next)=>{
    Menues.findAll({
        
    })
    .then((r)=>res.send(r))
    .catch(()=>next())
})
//---------------
router.post('/',(req,res,next)=>{
    const{name,image,description,type,price,ingredients}=req.body
    Menues.create(
        {
            name:name,
            image:image,
            description:description,
            type:type,
            price:price,
    })
    .then(()=>{return findOne({where:{name:name,image:image,type:type,price:price},
        include:[Ingredients]})

    })
    .then((r)=>{
        ingredients.forEach(async(e) => {
            let i=await Ingredients.findOne({where:{id:e}})
            r.addIngredients(i)
            
        });
                      
    })
    .catch(()=>next())
})
//--------------------

module.exports=router
