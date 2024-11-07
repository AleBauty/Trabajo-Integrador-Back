const express = require('express')
const router = express.Router()
// Traemos el controlador
const productosController = require('../controllers/productoController')

router.get('/', productosController.getproducto)
router.get('/:id', productosController.getproductoById)
router.get('/search/Nombre/:Nombre', productosController.getproductoByNombre)
router.get('/search/categoria/:categoria', productosController.getproductoByCategoria)
router.post('/', productosController.createproducto)
router.put('/:id', productosController.updateproducto )
router.delete('/:id', productosController.deleteproducto)

module.exports = router