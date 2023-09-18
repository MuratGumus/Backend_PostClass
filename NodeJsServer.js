"use strict";
/* --------------------------------------------

        NODEJS

-------------------------------------------- */

const http = require("node:http");  // altta tekrar tekrar yazmamak için burada yorum satırına almadan yazıp bırakıyorum.

/* -------------------------------------------- *

//* locahost = 127.0.0.1

const http = require("node:http")  // http modülünü çağırıyoruz

const app = http.createServer((req, res) =>{ // server kuruyoruz



}).listen(8000, ()=> console.log("Server is running")) // 8000 portunda çalıştırıyoruz


/* -------------------------------------------- *

const app = http.createServer((req, res) =>{


    console.log(req.url);
    if (req.url == '/') {

        res.end('<h1>Main Page')

    } else if (req.url == '/second') {

        res.end('<h1>Second Page')

    } else {

        res.end('<h1>Server is running')
    }


}).listen(8000, () => console.log("Server Runned"))

/* -------------------------------------------- */

// http.createServer((req,res) =>{
//     if (req.url == '/') {

//         res.statusCode = 404  // Status code ile ilgili herhangi bir işlem yapılmazsa default olarak 200 döndürür
//         res.statusMessage = 'Not Found'  // Status message ile ilgili herhangi bir işlem yapılmazsa default olarak OK döndürür

//         res.setHeader('Content-Type', 'text/html')   // Content-type dosyanın tipini belirleyen Header'dır
//         res.setHeader('another-header', 'another-value') // set.Header ve write'ı istediğimiz kadar gönderebiliriz. Sayı sınırı yoktur. Ancak res.end sadece bir defa kullanılmalıdır.

//         res.write('* Satir1')  // Ekrana yazdırır
//         res.write('* Satir2')
//         res.write('* Satir3')
//         res.end()

//     }else if (req.url == "/api") {
//         if(req.method == "GET"){
//             res.writeHead(404, "Not Found",{  // Shorthand = status code, status message ve setheader'ı tek seferde yazma.
//                 'Content-Type': 'text/html'
//             })
//         res.write('* Satir1')
//         res.end()
//         }
//     }else{
//         res.end("Different method")
//     }

// }).listen(8000, () => console.log("Server Runned"))

/* -------------------------------------------- *
//* Buradaki örnekte bir web sitesinin url oluşturma mantığıyla ilgili giriş seviyesinde bir örnek yapıyoruz.
const app = http
    .createServer((req, res) => {
        console.log(req.url);
        if (req.url == "/") {
            res.end("Anasayfa");
        } else if (req.url == "/kadin") {
            res.end("Kadinlar için ürünler");
        } else if (req.url == "/erkek") {
            res.end("Erkekler icin urunler");
        } else if (req.url == "/coksatanlar") {
            res.end("Çok Satanlar");
        } else if (req.url == "/indirimdekiler") {
            res.end("İndirimdekiler");
        } else if (req.url == "/hesabim") {
            res.end("<h1>Hesabim");
        } else if (req.url == "/hesabim/ayarlar") {
            res.end("Ayarlar");
        } else if (req.url == "/hesabim/ayarlar/tema") {
            res.end("tema");
        }else if (req.url == "/hesabim/sepetim") {
            res.end("Sepetimdekiler");
        } else if (req.url == "/hesabim/favorilerim") {
            res.end("Favorilerimdekiler");
        } else {
            res.end("Boyle bir sayfa yok");
        }
    })
    .listen(8000, () => console.log("Server Runned"));


/* -------------------------------------------- *

// ENV - Dışarıdan içeriye kod yolluyoruz. Env modulü: env ortamındaki verileri yakalamamızı sağlar. 
//  npm i dotenv  komutuyla yüklenir. node_modules'in içerisine yüklenir.

//? dotenv kullanmadan dışarıdan içeriye veri yollama. Bu yol tercih edilmiyor.
// $ ENV_NAME=ENV_VALUE node index.js Console'dan yazıyoruz.
// console.log( process.env.ENV_NAME ) // Console'den yollanan veriyi yakalar. 

// get ENV_VARS from .env file:
require("dotenv").config(); // $ npm i dotenv // https://www.npmjs.com/package/dotenv
// Yukarıdaki require("dotenv").config() ile env içerisindeki verilir okunur ve process.env içerisine gönderilir.
// console.log(process.env);  ile ENV içerisindeki verileri yakalamak için .env modulü kullanılır
console.log("NODE_ENV:", process.env.NODE_ENV); 
console.log("ENV_HOST:", process.env.ENV_HOST + ':' + process.env.ENV_PORT); 
console.log("ENV_EXAMPLE_STR:", process.env.ENV_EXAMPLE_STR); 
console.log("ENV_EXAMPLE_TXT:", process.env.ENV_EXAMPLE_TXT.split(' ')); 

/* -------------------------------------------- *

// get ENV_VARS from .env file:
require("dotenv").config(); // $ npm i dotenv // https://www.npmjs.com/package/dotenv
// console.log( process.env.PORT )

// const PORT = process.env.ENV_PORT || 8000 // false or 8000
const PORT = process.env.ENV_PORT ?? 8000; // (undefined or null) or 8000  // env'den veri geliyorsa al, gelmiyorsa 8000'i al.

http.createServer((request, response) => {
    response.end("<h1> Welcome to NodeJS Server </h1>");
}).listen(PORT, () => console.log(`Server Runned: http://127.0.0.1:${PORT}`));

/* -------------------------------------------- *

# CommentLine
NODE_ENV = production
ENV_HOST = 127.0.0.1
ENV_PORT = 8000 # Comment
ENV_EXAMPLE_STR = 'Hello World'
ENV_EXAMPLE_TXT = "Zero One Two Three"

/* -------------------------------------------- */



/* -------------------------------------------- */
