const Router = require('express');
const router = Router();
const fs = require("fs");

const qrcode = require("qrcode");



router.get("/", async(req, res, next) => {
    const {urlQrMenu} = req.params
    
        try {
            
            const QR = await qrcode.toDataURL(urlQrMenu)
    
            res.status(200).send(QR)
        } catch (error) {
            next(error);
        }

   
})
//--------------- ESTE ES EL QUE ESTÁ CREANDO -------

//urlQrMenu =http://localhost:3000/?Id_mesa=mesa3
//urlQrMenu =http://198.162.0.15:3000/?Id_mesa=mesa3
//198.162.0.15 = TU RED
router.get("/qrcode", (req, res, next) => {
    //const {urlQrMenu} = req.params
    const urlQrMenu ='https://bees2biz.com/careers/'
    //const urlQrMenu ='http://localhost:3000/?Id_mesa=mesa3'
    const run = async () => {
        const QR = await qrcode.toDataURL(urlQrMenu)
        const htmlContent =
        `<div style="display: flex; justify-content: center; align-items: center">
            <h2>Menu</h2>
            <img src="${QR}">
        </div>`;
        fs.writeFileSync('./index.html', `${htmlContent}`)
    }
    run()
    console.log("Hecho")
    res.status(200).send({msg:"HECHO"})
})

module.exports = router;