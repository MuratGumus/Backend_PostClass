"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
const router = require('express').Router()

const Todo = require('./todo.model1')

// LIST: Listeleme
// Alttaki kodda todo modelden data alacağız
router.get('/', async (req, res) => {

    // const data = await Todo.findAll()  // Sadece verileri getirir.
    const data = await Todo.findAndCountAll() // findAndCountAll = Todo tablosundaki tüm verileri getir ve say
    res.status(200).send({
        error: false,
        result: data
    })
})

// CREATE: Oluşturma
router.post('/', async (req, res) => {

    // const data = await Todo.create({
    //     title: 'Test Title',
    //     description: 'Test Description',
    // })
    // console.log( typeof req.body, req.body )
    const data = await Todo.create(req.body)
    res.status(201).send({
        error: false,
        body: req.body, // Send Data
        message: 'Created',
        result: data // Receive Data
    })
})

// READ: Tek bir taneyi okuma
router.get('/:id', async (req, res) => {   // id'yi yazmak önemli

    // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
    // const data = await Todo.findOne({ where: { id: req.params.id } })
    
    const data = await Todo.findByPk(req.params.id)  //Pk numarası belirtilen verileri getirir. id kısmına 12 yazarsak id'si 12 olan sütundeki tüm verileri getirir.
    res.status(200).send({
        error: false,
        result: data
    })

})

// UPDATE: Güncellemei değiştirme
router.put('/:id', async (req, res) => {

    // Model.update({ newData }, { filter })  // ilk data yeni data, ikinci data güncelleştirilecek datadır.
    const isUpdated = await Todo.update(req.body, { where: { id: req.params.id } })
    // isUpdated return: [ 1 ] or [ 0 ]
    res.status(202).send({
        error: false,
        body: req.body, // Send Data
        message: 'Updated',
        isUpdated: Boolean(isUpdated[0]),
        result: await Todo.findByPk(req.params.id)
    })
})

// DELETE:
router.delete('/:id', async (req, res) => {

    // Model.destroy({ filter })
    const isDeleted = await Todo.destroy({ where: { id: req.params.id } })
    // isDeleted return: 1 or 0
    if (isDeleted) {
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
    // res.status(204).send({
    //     error: false,
    //     message: 'Deleted',
    //     isDeleted: Boolean(isDeleted)
    // })
})

module.exports = router