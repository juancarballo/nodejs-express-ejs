//ruta para la pagina de inicio
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
})
//ruta para la pagina login
router.get('/login', (req, res) => {
    res.render('login.ejs');
})



//exportamos el router
module.exports = router;