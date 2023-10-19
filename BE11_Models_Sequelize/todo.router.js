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