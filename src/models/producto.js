const mongoose = require('mongoose')

const ProductoSchema = new mongoose.Schema({
    codigo: Number,
    nombre: String,
    Precio: Number,
    categorias: [String]
})

const productos = mongoose.model('productos', ProductoSchema)

module.exports = productos