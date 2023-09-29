"use strict";
/* -------------------------------------------------------
    EXPRESSJS
------------------------------------------------------- */
/*
 * npm init -y  // Bu dosyanın proje dosyası olduğunu tanıtırız. package.json'ı yükler
 * npm i express dotenv  // node_modules'i yükleriz. Modul içerisinde hem express hem de dotenv moduü yüklü gelir.
 */

/* ExpressJS Start */
const express = require("express"); // Express.js'i koda dahil eder ve onu express değişkenine atar. Bu sayede express.js özelliklerini kullanabiliriz. Express  modulünü express'e atarız.
const app = express(); // Bu satır, Express.js uygulamasının bir örneğini oluşturur. express işlevini çağırarak bu app değişkeni, Express.js uygulamanızı temsil eder ve web uygulamanızın rotalarını, ara yazılımı (middleware) ve diğer ayarlarını yapılandırmanıza olanak tanır.

/* ENV */ //.env dosyasını kullanarak çevresel değişkenleri yüklemek ve ardından bu değişkenleri kullanarak bir sunucu host adresi ve port numarası belirlemek için kullanılıyor
require("dotenv").config(); // Bu satır, dotenv modülünü kullanarak çevresel değişkenleri .env dosyasından yükler. .env dosyası, uygulamanızın farklı ortamlarda çalışmasını sağlayan ve hassas bilgileri güvenli bir şekilde saklamaya yardımcı olan bir yapılandırma dosyasıdır.
const HOST = process.env.HOST || "127.0.0.1"; //Bu satır, process.env.HOST değişkenini kontrol eder. Eğer bu değişken tanımlanmışsa, o değeri kullanır; aksi takdirde varsayılan olarak '127.0.0.1' (localhost) kullanır. Bu, sunucunun hangi IP adresi veya host adı üzerinden dinleyeceğini belirler.
const PORT = process.env.PORT || 8000; // Bu kod satırı, bir web sunucusunun hangi port üzerinden dinleyeceğini belirlemek için kullanılır. const PORT = process.env.PORT || 8000: Bu satır, process.env.PORT değişkenini kontrol eder. Eğer bu değişken tanımlanmışsa (örneğin, çevresel değişkenler veya .env dosyası aracılığıyla ayarlanmışsa), o değeri PORT değişkenine atar. Eğer process.env.PORT tanımlı değilse veya boşsa, varsayılan olarak 8000 portunu kullanır.
/* ------------------------------------------------------- */
/* HTTP_Methods & URLs */

app.get("/", (request, response) => {
    // Kullanıcı '/' url'sine geldiğinde devamındaki req res callback fonksiyonu çalışacak.
    //? run response.send for print-out:
    // response.send( 'Welcome to Express' )
    response.send({ message: "called in 'get' method." }); // response.send ile bir JSON veri gönderir. Çıktı alırız
});
app.post("/", (request, response) =>
    response.send({ message: "called in 'post' method." })
); // Post methoduyla işlem yapar
app.put("/", (request, response) =>
    response.send({ message: "called in 'put' method." })
); // Put methoduyla işlem yapar
app.delete("/", (request, response) =>
    response.send({ message: "called in 'delete' method." })
); // Delete methoduyla işlem yapar
//? allow at all methods:
app.all("/", (request, response) =>
    response.send({ message: "'all' option allows to all methods." })
); // Tüm methodlarla işlem yapar

// ? app.route('url'): Önce url'yi kontrol eder sonra methodu kontrol eder. Yukarıda yazılan kodun kısa yazılmış halidir.
app.route("/route") // URL sabit methodlar değişken. Bu sayede tek seferde bir URL'ye birden fazla method tanımlayabiliyoruz
    .get((req, res) => res.send("get"))
    .post((req, res) => res.send("post"))
    .put((req, res) => res.send("put"))
    .delete((req, res) => res.send("delete"));

/* ------------------------------------------------------- */
/* URL (Path) Options */

app.get("/", (req, res) => res.send("in 'root' path")); // '/' == root
app.get("/path", (req, res) => res.send("in 'path'")); // '/path' == '/path/' // Her iki yazım da aynıdır.
//? express-urls supported JokerChar:
app.get("/abc(x?)123", (req, res) => res.send("in 'abc(x?)123'")); // abc123 or abcx123  // url yazarken kullanılan parantezin hiçbir karşılığı yoktur. Parantezi yazılmamış gibi çalışır. // ? işareti kendisinden önce yazılan karakter olabilir de olmayabilir de anlamına gelir.
app.get("/abc(x+)123", (req, res) => res.send("in 'abc(x+)123'")); // abcx123 or abcxx..xx123 // + işareti kendisinden önce karakter bir tane de olabilir birden fazla da olabilir anlamına gelir.
app.get("/abc*123", (req, res) => res.send("in 'abc*123'")); // abc123 or abc...123 // abc(ANY)123 // * arada ne olursa olsun anlamına gelir.
// ? express-urls supported regexp:
app.get(/xyz/, (req, res) => res.send("regexp /xyz/")); // url contains = 'xyz' (no limit for subPaths)
app.get(/^\/xyz/, (req, res) => res.send("regexp /^/xyz/")); // url startswith = 'xyz'  // ^ olursa xyz ile başlarsa anlamına gelir.
app.get(/xyz$/, (req, res) => res.send("regexp /xyz$/")) / // url endswith = 'xyz'  // $ olursa xyz ile biterse anlamına gelir.
    /* ------------------------------------------------------- */
    /* URL Parameters (req.params) */

    user /
    66 /
    config /
    update /
    any /
    any /
    any; // Eklediğimiz her / ile parçalara ayırıyoruz ve URL'nin aşağıdaki gibi okunmasını sağlıyoruz. Her /'den sonraki kısma path denir.
// https://127.0.0.1:8000/user/77/config/insert/?key=value
app.get("/user/:userId/config/:configParam/*", (req, res) => {
    res.send({
        userId: req.params.userId,
        configParam: req.params.configParam,
        url: {
            protocol: req.protocol,
            subdomains: req.subdomains,
            hostname: req.hostname,
            baseUrl: req.baseUrl,
            params: req.params,
            query: req.query,
            path: req.path,
            originalUrls: req.originalUrl,
        },
    });
});
/* ------------------------------------------------------- */

//? '\d' means only-digit-chars in regexp: // Sadece bir rakam girilebilir. /d+/ olurs birden fazla rakam girilebilir.
//? '\w' means only-chars in regexp:  // Sadece bir karakter girilebilir. /w+/ olursa birden fazla karakter girilebilir
// app.get('/user/:userId([0-9]+)', (req, res) => { // Sadece rakamlardan oluşabilir.
app.get("/user/:userId(\\d+)", (req, res) => {
    res.send({
        params: req.params,
    });
});

app.get("/command/:userId-:profileId", (req, res) => {
    res.send({
        params: req.params,
    });
});

/* ------------------------------------------------------- */

/* Response Methods */

// ? SendStatus:  // statusu ve send'i kolayce geönderir
app.get("/", (req, res) => res.sendStatus(404));
// ? Status: // Status code döndürür. send döndürür.
app.get("/", (req, res) => res.status(200).send({ message: "OK" }));
app.post("/", (req, res) => res.status(201).send({ message: "Created" }));
app.put("/", (req, res) => res.status(202).send({ message: "Accepted" }));
app.delete("/", (req, res) => res.status(204).send({ message: "No Content" }));
// ? JSON (.send() method already does this converting.)
app.get("/", (req, res) => res.json([{ key: "value" }]));
// ? Download File (Download at browser): dosyayı indirilebilir yapma
app.get("/download", (req, res) => res.download("./app.js", "changedName.js")); // /download'a girildiğinde ./app.js dosyasını "changedName.js" olarak indirir
// ? SendFile Content:
console.log(__dirname); // __dirname, içerisinde bulunduğum dosyanın fiziksel konumunu döndürür
app.get("/file", (req, res) => res.sendFile(__dirname + "/app.js")); // FilePath must be realPath  //sendfile kullandığımızda dosyanın bizim bilgisayarımızdaki fiziksel yolunu vermemiz gerekir. Bu nedenle __dirname kullanılır.
// ? Redirect: // status kodda 300 serisi redirect serisidir.
app.get("/google", (req, res) => res.redirect(301, "https://www.google.com")); // 301 or 302  // /google yazıldığında 'https://www.google.com'a yönlendirir.
app.get("/redirect", (req, res) => res.redirect(302, "/thisPath")); // 301 or 302

/* ------------------------------------------------------- */
// app.listen(PORT, () => console.log(`Running on http://127.0.0.1:${PORT}`))
app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`)); // Bu kod satırı, Express.js uygulamanızı belirlediğiniz IP adresi ve port üzerinden dinlemeye başlatır ve uygulamanın hangi adres ve port üzerinden çalıştığını konsola yazdırır.
