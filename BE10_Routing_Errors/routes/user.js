"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

// const express = require("express");
// const router = express.Router()

const router = require("express").Router();

const routeControl = (req, res, next) => {
    const { username } = req.query;

    if (username == "clarusway") {  //localhost8000/user/login?username=clarusway
        // res.send({  //Daha ilerleyen kodlarda res.send tekrar kullanıldığı için burada kullandığımızda bunu çalıştırır ve sonraki res.send'i çalıştırmaz ve terminalde hata verir.
        //     message: "Correct Username",
        // });
        console.log("Correct username");
        next();
        
    } else {
        res.send({
            message: "Wrong Username",
        });
    }
};

// We can use middleware with router:
router.use(routeControl);  //app.use'in içerisinde middleware'leri kullanabiliyoruz.

//* Eğer yukarıdaki if condition'dan next ile geçebilirsek alttaki route devreye girecek. eğer else'e girerse ve next ile geçemezsek bu kod hiç çalışmayacak
router
    .route("/extra")  //localhost8000/extra'da aşağıdaki kodu çalıştır demek. /extra'yı 
    .get((req, res) => {
        res.send({ message: "get" });
    })
    .post((req, res) => {
        res.send({ message: "post" });
    })
    .put((req, res) => {
        res.send({ message: "put" });
    })
    .delete((req, res) => {
        res.send({ message: "delete" });
    });

// router.get("/", (req, res) => {
//     res.send({ message: "All User" });
// });
// router.get("/login", (req, res) => {
//     res.send({ message: "Login" });
// });
// router.get("/logout", (req, res) => {
//     res.send({ message: "Logout" });
// });
// router.get("/:userId", (req, res) => {
//     res.send({ message: "User Page" });
// });
// router.get("/:userId/password", (req, res) => {
//     res.send({ message: "Password Page" });
// });

module.exports = router;
