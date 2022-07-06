const { tracksModel } = require("../models")

/**
 * Obtener lista de la BD
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async(req, res) => {
    const data = await tracksModel.find({})

    res.send({ data });
}

/**
 * Obtener un detalle de un item en especifico
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => { }

/**
 * insertar un item o registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async(req, res) => {
    const { body } = req
    console.log(body)
    const data = await tracksModel.create(body)
    res.send({data})
 }
    
    
/**
 * Actualizar o editar un item o registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => { }

/**
 * Eliminar un item o registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => { }


module.exports = { getItems, getItem, createItem, updateItem, deleteItem };