"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

//* SEQUELIZE
//? npm i sequelize sqlite3
//* Sequelize'ı mode oluşturmak için kullanıyoruz.

// https://sequelize.org/docs/v6/getting-started/
const { Sequelize, DataTypes } = require("sequelize"); // Burada instance oluşturuyoruz.
// Where is DB (DB Connection Details):
// const sequelize = new Sequelize('postgres://postgres:12345678@localhost:5432/todoCH14') //Postgresql kullandığımızda bu bağlantı adresini kullanacağız
 // $ npm i pg pg-hstore  // Postgresql ile çalışacaksak ilgili modülleri bu kod ile yüklememiz lazım
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
const sequelize = new Sequelize(
    "sqlite:" + (process.env.SQLITE || "./db.sqlite3")
); //.env dosyasındaki değeri alıyor yoksa './db.sqlite3' alıyor.

// sequelize.define('tableName', { columns })
//? sequelize'de modeller define ile oluşturuluyor. 1. parametre tablonun adı, 2. parametre tablonun modelinin bulunduğu objedir.
//* sequelize.sync()  ile tablo oluşturulduğunda 1. parametrenin çoğulu "todos" isimli sütun oluşturur.
//* Burada model olarak bahsettiğimiz şey Sql'deki tablodur.
const Todo = sequelize.define("todo", {
    // https://sequelize.org/docs/v7/models/data-types/

    //* ID otomatik olarak atanıp doldurulduğu için id'yi yoruma aldık
    // id: { //? Not need define ID field, it will create auto.F
    //     type: DataTypes.INTEGER,  //veritiğini belirtebilmemiz için DataTypes yazmamız lazım.
    //     unique: true,
    //     allowNull: false, // default: true  // id boş olamaz. bir değer alması zorunludur
    //     field: 'custom_column_name', // sütun ismini değiştirme. id yerine buraya yazdığımız kelime sutün adı olur. bunu çok kullanmayacağız
    //     comment: 'Description', // yorum alanı. bunu çok kullanmayacağız
    //     primaryKey: true, // id'yi biz tanımlayacaksak burayı doldurmak önemli
    //     autoIncrement: true, // id'yi biz tanımlayacaksak burayı doldurmak önemli
    // },

    title: {
        type: DataTypes.STRING(64), // varchar(64). Parantez içerisinde kaç karakter olduğunu belirtebiliyoruz.
        allowNull: false,
    },

    description: DataTypes.TEXT, // ShortHand Using.  // Sadece type'ı yazdığımız için {} açmadık.

    priority: {
        type: DataTypes.TINYINT, // postgres: INTEGER. tinyint çok küçük sayıları yazabileceğimiz bellekte az yer yaplayan tanımlama.
        allowNull: false,
        defaultValue: 0, // set default value // 1: High, En öncelikli, 0: Normal, -1: Low, Düşük öncelikli
    },

    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },

    //? Not need define "createdAt" & "updatedAt" fields.
    //* Sequelize, createdAt ve UpdatedAt'i otomatik olarak atadığı için bizim atamamıza gerek yok.
    // createdAt: false, // Unset
    // updatedAt: false, // Unset
});
/* ------------------------------------------------------- */

// SQL veritabanlarında, mongodb'den farklı olarak database önceden hazır olmalıdır. Mongodb'de veritabanı hazırlamadan da çalışabiliriz ancak Sql'de çalışamayız. Bu nedenle database'imizi kurup ayağı kaldırmamız gerekiyor.
// Synchronization:  //* Veritabanı oluşturma ve ayağa kaldırma
//! SYNC MUST RUN ONCE!
// sequelize.sync() // SQL tablosu oluşturur. Sadece olmayan tabloyu oluşturmak için kullanılır. Var olan tabloyu güncellemek için değil. Kullandıktan sonra yoruma al.
//* sequelize.sync({ force: true }) // SQL tablosunu silerek mevcut duruma göre yeniden oluşturur. Değişmeyenler aynı kalır. Değişenlerin son hali yazılı olur. Yapılan işlemler terminalde yazıyor. Bilgi için okuyabilirsin. Kullandıktan sonra bu force olan bu kodu yoruma almak kodun yanlışlıkla zarar görmesini engeller.
//* sequelize.sync({ alter: true }) // SQL tablosunun yedeğini alır ve son duruma göre tabloyu oluşturur ve günceller.Yapılan işlemler terminalde yazıyor. Bilgi için okuyabilirsin. Kullandıktan sonra bu alter olan bu kodu yoruma almak kodun yanlışlıkla zarar görmesini engeller.

// Connect:
// sequelize.authenticate() /Veritabanına bağlanmamızı sağlar/asenkron bir koddur. çalışıp çalışmadığını anlamak için then catch kullanılır
//     .then(() => console.log('* DB Connected *'))
//     .catch((err) => console.log('* DB Not Connected *', err))

module.exports = Todo