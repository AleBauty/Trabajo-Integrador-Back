// Traemos el modelo de Movie
const producto = require('../models/producto')



const getproducto = (req, res) => {
    const atributo = { ...req.query }
    const query = req.query || {};
    // Si no hay género especificado, obtendremos todas las películas
    producto.find(query)
        .then(productos => res.json(productos))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}

const getproductoById = (req, res) => {
    const { id } = req.params
    producto.findById(id)
        .then(producto => {
            if (!producto) return res.status(404).json({ message: 'Pelicula no encontrada' })
            res.json(producto)
        })
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}

const getproductoByNombre = (req, res) => {
    const { Nombre } = req.params
    producto.find({ Nombre: { $regex: Nombre, $options: 'i' } })
        .then(productos => res.json(productos))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}


const createproducto = (req, res) => {
    const newproducto = new producto(req.body)
    newproducto.save()
        .then(producto => res.status(201).json(producto))
        .catch(error => res.status(400).json({ message: 'Error al agregar la pelicula', error }))
}

const updateproducto = (req, res) => {
    producto.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(producto => {
            if (!producto) return res.status(404).json({ message: 'Pelicula no encontrada' })
            res.json(producto)
        })
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}

const deleteproducto = (req, res) => {
    producto.findByIdAndDelete(req.params.id)
        .then(producto => {
            if (!producto) return res.status(404).json({ message: 'Pelicula no encontrada' })
            res.status(200).json({ message: 'Pelicula eliminada correctamente' })
        })
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}

const getproductoByCategoria = (req, res) => {
    const { categoria } = req.params;
    
    producto.find({ categorias: { $regex: categoria, $options: 'i' } })
        .then(productos => res.json(productos))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }));
}
module.exports = { 
    getproducto,
    getproductoById,
    getproductoByNombre,
    getproductoByCategoria,
    createproducto,
    updateproducto,
    deleteproducto
}