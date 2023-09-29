"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;
/* ------------------------------------------------------- *
app.get('/', (req,res, next) =>{
    req.customData = 'Custom Data With Request'
    res.customDataWithResponse = 'Custom Data With Response'

    next() // türü ne olursa olsun bir sonraki methoda yolluyor. Eğer next ile gidilecek başka method yoksa alttaki koddan çalışmaya devam eder

    res.send({ // next() olduğu için buradaki kod çalışmayacak.
        message: 'Birinci Middleware running'
    }) // Block Command
})

app.get('/', (req,res,next)=>{
    next() // Buradaki next res.send'den önce olduğu için doğrudan sonraki method'a gönderir. Kendisinden sonra gelen res.send hiç çalışmaz.
    res.send({ // next() olduğu için buradaki kod çalışmayacak.
        message: 'İkinci Middleware running'
    }) // Block Command
    next()  // Buradaki next hiçbir zaman çalışmaz. Çünkü res.send içerisinde end barındırır ve scope'ı bitirir.
})


app.get('/', (req, res) => {
    res.send({
        customData: [ 
            req.customData,
            res.customDataWithResponse
        ],
        message: 'Welcome to Home2'
    })
})

/* ------------------------------------------------------- *

const middleFunction1 = (req, res, next) => {
    // const skip = req.query.skip ?? false;
    req.customData = "Custom Data With Request";
    res.customDataWithResponse = "Custom Data With Response";
    next('route');
};

const middleFunction2 = (req, res, next) => {
    req.name ="murat";
    req.surname ="gümüş"
    next('route')
};

app.get("/", [middleFunction1, middleFunction2], (req, res) => {
    res.send({
        customData: [
            req.customData,
            res.customDataWithResponse,
            req.name,
            req.surname
        ],
        message: "Welcome to Home",
    });
});
/* ------------------------------------------------------- *

const middleFunction1 = (req, res, next) => {
    // console.log( req.query )
    const skip = req.query.skip ?? false;

    req.customData = "Custom Data With Request";
    res.customDataWithResponse = "Custom Data With Response";

    if (skip) {
        // Bir sonraki bağımsız fonksiyona git:
        console.log("next-route çalıştı");
        req.result = "skip calisti";

        next("route");
    } else {
        // Bir sonraki callback fonksiyona git:
        console.log("next çalıştı");
        req.result = "skip calismadi";

        next();
    }
};

const middleFunction2 = (req, res, next) => {
    // next()

    res.send({
        customData: [req.customData, res.customDataWithResponse,req.result],
        message: "Here is func2, next() runned",
    });
};
app.use([middleFunction1, middleFunction2]);




/* ------------------------------------------------------- */

// const isAdmin = (req, res, next) => {
//     const user = req.skip === "admin";

//     if (user && user.role === "admin") {
//         next();
//     } else {
//         next("route");
//     }
// };

// app.use(isAdmin);
// app.get("/", (req, res) => {
//     res.send("Welcome!aa");
// });

// app.get("/", (req, res) => {
//     res.status(403).send("Access denied");
// });

const isAdmin = (req, res, next) => {
    const user = req.user;

    if (user == 123) {
        next('route');
    } else {
        res.status(403).send("Access denied");
    }
};
app.use(isAdmin);
app.get("/", (req, res) => {
    res.send("Welcome!");
});
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
