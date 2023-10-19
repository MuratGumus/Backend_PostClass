"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
//? package.json'daki bilinen scriptleri  npm scriptAdi ile çalıştırabiliriz. Ancak default olarak tanımlanmayan, bizim tarafımızdan sonradan tanımlanan scripti çalistırmak için $ npm run scriptAdi yazmalıyız.

/* ------------------------------------------------------- */
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data & convert to object: objeye çevirir
app.use(express.json())

app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
})

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
//* TodoModel moved to todo.model.js // Karşıklılık olmaması için ayrı dosyaya taşındı.

// app.use(require('./todo.router'))

/* ------------------------------------------------------- */

const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler runned.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
        body: req.body,  // Hata durumunda servere gönderdiğimiz hatalı veriyi gösterir.
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));