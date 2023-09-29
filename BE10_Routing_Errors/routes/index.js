"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

// const express = require("express");
// const router = express.Router()
//* Yukarıda ayrı ayrı uzun yazımı var. Altta tek satırda yazılmış shorthand'i var. İkisi de aynı.
const router = require("express").Router(); //Sadece router amaçlı express çalıştırmak için express kullanıyoruz. router baş harfi büyük.
// Burada sadece url yönetimi yapıyoruz. sadece url yönetimi yapıyorsak app ile yazmak mantıklı değil. çünkü app kendi içerisinde çok fazla çalışan kod barındırıyor. bu da programı verimsiz hale getirir. bu nedenle daha az kod barındıran route'u kullanacağız. app komutu express'in tüm motorunu çalıştırırken route sadece route işlemi yapacak kadar kodu çalıştırır.

//* Alttaki kodu buradan exports edecek olsak dahi express'e bağladığımız için ve içerisinde bulunduğumuz dosyada express olmadığı için yukarıya express ekliyoruz
router.get("/", (req, res) => {
    res.send({ message: "Home Page" });
});
router.get("/about", (req, res) => {
    res.send({ message: "About Page" });
});
router.get("/user111/", (req, res) => {
    res.send({ message: "User Page111" });
});

module.exports = router;  // Ana klasöre import edebilmek için buradan export yapıyoruz
