const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const menues=require('./routerMenues.js')
const codeqr = require('./routerQr.js')
const login = require('./Login.js')
const router = Router();

router.use('/menues',menues)
router.use('/code', codeqr)
router.use('/login', login);






module.exports = router;
