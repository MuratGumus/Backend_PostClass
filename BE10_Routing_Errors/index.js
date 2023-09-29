"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

//? "Router" is special app for URL control in ExpressJS.
//* Burayı routes/index.js' ekledim buraya exports ettik
//* App.get kullanırken express.js'in tüm özelliklerini arka planda çalıştırdığımız için program yoruluyor. Eğer sadece route işlemi yapacaksak verimliliği artırmak için sadece route kullanacağız.

// const router = express.Router();
// router.get("/", (req, res) => {
//     res.send({ message: "Home Page" });
// });
// router.get("/about", (req, res) => {
//     res.send({ message: "About Page" });
// });
// router.get("/user/:userid", (req, res) => {
//     res.send({ message: "User Page" });
// });
// app.use(router);

// Alttaki şekilde yazdığımızda tüm routes klasörörünü değil klasörün içerisindeki default index.js'i çalıştırır. Diğer dosyaları çalıştırmaz. Diğer dosyalar içerisindeki kodları çalıştırmak için onları ayrıca require etmemiz gerekiyor.
const router = require("./routes/"); 
app.use(router)
// app.use("/", require("./routes/"))  //* Alternatif yazım


//* Başka bir yerden dosyayı çağırıp çalıştırmanın iki yolu var. 1. yol önce değişkene atayıp sonra o değişkeni app.use ile çalıştırmak. 2. yol değişkene atamadan doğrudan app.use ile çalıştırmak

const routeUse = require("./routes/user"); //* 1. yol değişkene atayıp app.use ile kullanmak
app.use(routeUse)

 app.use("/user", require("./routes/user")); //* 2. yol doğrudan app.use ile kullanmak
 // routes klasörünü require etmiş olsak da içerisindeki diğer dosyaları ayrıca require yapıyoruz




/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));





