"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv
 * npm i express-async-handler
 */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *
app.get("/user/:id", (req, res) => {
    // localhost/user/123 şeklinde yazılır
    const id = req.params.id ?? 0; // url'deki id değeri varsa bunu id değişkenine ata, eğer değeri yoksa id'ye 0 ata.
    //localhost/user/9 yazarsak kod çalışırken localhost/user/abc yazdığımda error verir. çünkü user'dan sonra yazılacak kodun number olması gerekiyor
    if (isNaN(id)) {
        //isNaN(id)  ==|  typeof(id) ==Number
        res.statusCode = 400;
        throw new Error("ID is Not A Number", { cause: "params.id=" + id });
    } else {
        res.statusCode = 200;
        res.send({
            error: false,
            id: id,
        });
    }
});

/* ------------------------------------------------------- *
// TRY-CATCH:

app.get("/user/:id", (req, res, next) => {
    try {
        const id = req.params.id ?? 0;
        if (isNaN(id)) {
            res.statusCode = 400;
            throw new Error("ID is Not A Number", { cause: "params.id=" + id });
        } else {
            res.send({
                // Hata dönmezse dönecek çıktı
                error: false,
                id: id,
            });
        }
    } catch (err) {
        // Hata dönerse dönecek çıktı

        console.log("try-catch runned");
        next(err); // Go to errorHandler() // hatayı error handler'a yolladı. try catch olmasaydı buna gerek kalmayacaktı. throw error doğrudan error handler'a yollanacaktı

        // res.send({
        //     error: true,
        //     message: err.message,
        //     cause: err.cause  // hem hatayı gösterir hem de sebebini gösterir
        // })
    }
});

/* ------------------------------------------------------- */
// ASYNC:

const asyncFunction = async () => {
    throw new Error('Created error in async-func')
}

//? Control with catch(next)
app.get('/async', async (req, res, next) => {
    await asyncFunction().catch(next) // Go to errorHandler()
})

/* ------------------------------------------------------- */
// express-async-handler
// $ npm i express-async-handler

const asyncHandler = require("express-async-handler");

app.get(
    "/async",
    asyncHandler(async (req, res, next) => {
        res.errorStatusCode = 400;
        throw new Error("Created error in async-func");
    })
);
/* ------------------------------------------------------- */

//? use(errorHandler) kodlamanın en sonunda yer almalı.
// * Eğer 4 tane parametre varsa error handler vardır. 1. yazılan parametre error parametresidir. Error handler kodun en altına yazılıyor
const errorHandler = (err, req, res, next) => {
    // koddaki hatayı errorHandler ile ele alıyoruz ve istediğimiz şekilde hata ekranını düzenliyoruz.
    const statusCode = res.statusCode ?? 500;

    console.log("errorHandler runned");

    res.status(statusCode).send({
        error: true, // special data
        message: err.message, // Error string Message
        cause: err.cause, // Error optional cause
        // stack: err.stack // Error Details.,
        mesaj: "sadece rakam yaziyorsunuz",
    });
};
//? for run errorHandler call in use.
//? It must be at last middleware.
app.use(errorHandler); //errorhandler'ın varlığını tanıyoruz
// /* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
