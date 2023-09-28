"use strict";

// TODO *****************   LESSON 1 - RECAP  *****************

// TODO *****************   LESSON 2 - OOP1  *****************
/* -------------------------------------------------------
    OBJECTS 
------------------------------------------------------- */

// const exampleObject = {

//     propertyName: 'value', // field, attribute
//     methodName: function () {
//         return 'This is Method'
//     }
// }

// console.log( exampleObject.propertyName )
// console.log( exampleObject.methodName() )

/* ------------------------------------------------------- */

// const Car = {

//     brand: 'Ford',
//     model: 'Mustang',
//     year: 1967,
//     isAutoGear: true,
//     colors: ['white', 'red'],
//     details: {
//         color1: 'red',
//         color2: 'white',
//         engineSize: 4900
//     },
//     startEngine: function () {
//         return 'Motor calisti'
//     }
// }

// Property'lere 2 yolla ulaşırız. 1- (.)notasyonu 2-[]içerisinde. (.) notasyonu ile ulaşma örneği "Car.brand" iken [] ile ulaşmanın  örneği "Car.details['engineSize']"'dir.

// (.) Notasyonu ile property'ye tek bir yazım tarzı ile ulaşılırken [] ile birden fazla yazım tarzıyla ulaşılabilir. Eğer[] içerisine yazacağımız kodu bir değişkene atama yaparsam doğrudan o değişkenin variable name'ni kullananarak erişebiliriz.
// Örnek: const beyazRenk = "color2"
// console.log(Car.details[beyazRenk])

// console.log( Car.brand )
// console.log( Car.colors )
// console.log( Car.colors[0]
// console.log( Car.details )
// console.log( Car.details.engineSize )
// console.log( Car.startEngine() )

// console.log( Car['brand'] )
// console.log( Car.details['engineSize'] )
// console.log( Car['details']['engineSize'] )
// console.log( Car['startEngine']() )

/* ------------------------------------------------------- *
//? "THIS" KEYWORD
// *This keyword'u içerisinde bulunduğu object'i temsil eder. Sadece o object'in içerisinde çalışır. 

// *Car.brand global bir ifadeyken this.brand local bir ifadedir. Alttaki örnekte object içerisinde kod yazarken this.brand şeklinde kod yazarsak Car.brand yazmaya göre çok daha hızlı çalışır. Çünkü eğer Car.brand yazarsak tüm kod içerisinde önce Car object'i bulur daha sonra brand'e ulaşır. Ancak this.brand yazarsak doğrudan kodun içerisindeki brand'a ulaşır.

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['white', 'red'],
    details: {
        color1: 'red',
        color2: 'white',
        engineSize: 4900
    },
    startEngine: function () {
        return 'Motor calisti'
    },
    getDetails: function () {

        // return this
        // return this.brand + ' ' + this.model + ' ' + this.year
        return this.startEngine()

    },
    arrowFunc: () => {
    //? Arrow functions is globalScope. (Not working this keyword in here)
        // return this
        return this.brand
    }
}

// * Expression ve Declaration fonksiyonlarlar local fonksiyondur. Sadece bulunduğu yerden erişebilir. Ancak Arrow function global fonksiyondur. Local olmadığı için diğer yerlerden de erişilebilir. this, bulunduğu object'in kendisini temsil ettiği için Arrow function ile kullanılmamalı. Eğer Arrow function ile kullanılırsa this, daha üst penceredeki bir yeri temsil edeceği için this.brand gibi kodların tamamında hata döndürecektir. Bu nedende property'leri expression function ile yazıyoruz.

// console.log( Car.getDetails() )
console.log( Car.arrowFunc() )

/* ------------------------------------------------------- *
//? ARRAY DESTRUCTURING
// * Array destructuring yaparken sıralama önemlidir. Her şey indis sırasına göre yapılır.

const testArray = [ 'value0', 'value1', 'value2', 'value3' ]

// const var0 = testArray[0]
// const var1 = testArray[1]

//? Sıralama Önemli!
// const [ firstItem, secondItem ] = testArray
// console.log(firstItem, secondItem)

//? RestOperator (Toplayıcı) (En sonda olmak zorunda):
// let [ first, second, third, ...others ] = testArray
// console.log(first, second, others)

//? SpreadOperator (Dağıtıcı) (En başta olmak zorunda):
const newArr = [ ...testArray, 'new-value', 'new-value2' ]
const newArr2 = [ 'value0', 'value1', 'value2', 'value3' ]
const newArr3 = [...testArray]
const newArr4 = testArray

console.log( newArr2  == testArray) // False. 
console.log( newArr3  == testArray) // False. Heap-Stack olayından dolayı içeriği aynı olsa da farklı yerlerde saklandığı için farklıdır.
console.log( newArr4  == testArray) // True. Shallow copy olduğu için aynı yerde saklanır. Bu nedenle aynıdır.

/* ------------------------------------------------------- *
//? OBJECT DESTRUCTURING
// * Object destructuring yaparken indisin hiçbir önemi yoktur. Tamamen key-property-key eşleşmelerine göre yapılır. İstenilen sırada yapılabilir.

const Car = {
    brand: "Ford",
    model: "Mustang",
    year: 1967,
    isAutoGear: true,
    colors: ["white", "red"],
    details: {
        color1: "red",
        color2: "white",
        engineSize: 4900,
    },
    startEngine: function () {
        return "Motor calisti";
    },
};

// Rest:
// const { year, model, brand, ...otherItems } = Car
// console.log( year, model, brand )
// console.log( otherItems )

const { year: modelYear, model: newName, brand } = Car;
console.log(modelYear, newName, brand);
console.log(Car); // Orjinal değişmiyor.

// Spread:
const newObj = {
    ...Car.colors,
    newKey: "new-value",
};
console.log(newObj);

/* ------------------------------------------------------- *
// ? VERİ TİPİ DÖNÜŞTÜRME
// * JSON veri tipi sadece string barındırabilir. Object veri tipi ise içerisinde tüm veri tiplerini barındırabilir. Eğer JSON formatına dönüştürelen objenin içerisinde stringe çevrilemeyen array gibi ögeler varsa bunlar doğrudan dışlanır ve çevrilmez. Object'ten JSON'a dönüştürülen veri tekrar Object'e çevrilse de bu dışlanan ve çevrilemeyen öğeler geri gelmez. 

// Object to JSON: // String olarak dönüştürür
const json = JSON.stringify(Car);
console.log(typeof json, json);

// JSON to Object:
const newObj2 = JSON.parse(json);
console.log(typeof newObj2, newObj2);

// Object to Array:
// const arr = [ ...Car ]
const arr = Object.entries(Car);
console.log(arr);
const arr2 = Object.values(Car);
console.log(arr2);
const arr3 = Object.keys(Car);
console.log(arr3);

/* -------------------------------------------------------
    Object Constructor
------------------------------------------------------- *

const PascalCaseNamed = function () {
    this.property = "value";
};

/* ------------------------------------------------------- */
//? "NEW" KEYWORD
//* this.brand olarak yazılan brand property iken this brand'e ataması yapılan brand ve üst satırında function içerisinde yazılan brand ise parametredir.

// const CarConstructor = function (brand, model, year = 2011) {

//     this.brand = brand
//     this.model = model
//     this.year = year
//     this.isRunning = false
//     this.startEngine = function () {
//         this.isRunning = true
//         return 'Motor çalıştı'
//     }
// }

// const newCar = new CarConstructor('Ford', 'Mustang', 1967)
// console.log( newCar )

// const newCar2 = new CarConstructor('Toyota', 'Corolla')
// console.log( newCar2 )

// console.log( newCar2.isRunning )
// console.log( newCar2.startEngine() )
// console.log( newCar2.isRunning )

// ? 2. ÖRNEK

// const BookConstructor = function (
//     author,
//     name,
//     year,
//     color,
//     copy,
//     publishing,
//     Boolean
// ) {
//     this.Boolean = false
//     this.author = author;
//     this.name = name;
//     this.year = year;
//     this.color = color;
//     this.copy = copy;
//     this.publishing = publishing;
// };
// const newBook = new BookConstructor(
//     "Sabahattin Ali",
//     "Canim Aliye Ruhum Filiz",
//     1940,
//     "orange",
//     "100000",
//     "YKY",
// );
// console.log(newBook);

/* ------------------------------------------------------- */

// TODO ***************  LESSON 3  - OOP2    ***************

"use strict";

/* -------------------------------------------------------
    OOP & CLASSES
------------------------------------------------------- *
// ? OOP: Object Oriented Programming
// ? DRY: Don't Repeat Yourself
// ? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
// ? CLASS: Obje türetmek için kullanılacak şablon.

// Class Declaration ve Class Expression vardır. Bunlardan Class Expression daha fazla kullanılandır
// Class yapılarında PascalCase kullanılır. Tüm kelimelerin baş harfleri büyük yazılır. Class içerisinde yazılan fonksiyonlara parantez eklenmez.

// Class Declaration:
// class PascalNamedClassName { ... }



// Class Expression:
const PascalNamedClassName = class { // Şu anda obje içerisinde değil fonksiyon içerisindeyiz. Object kurallarına değil, function kurallarına göre yazıyruz.
    undefinedProperty // Onle definition(Ön tamınlama yapılmıştır. İleride kullanıma hazır hale getirilmiştir) ('undefined')
    extraField = 'field-value'

    // Constructor'un adı constructor olmak zorundadır. Constructor'ı yazdığımız yer önemli değildir ama best practise olarak property'lerin üstünde yazılır.
    //? "new Class" ile obje oluştururken veri göndermek için "constructor" methodu kullanılır.
    constructor (parameter1, parameter2 = 'default-value') {
        this.parameter1 = parameter1
        this.parameter2 = parameter2
    }

    methodName1() {  
        return this
    }

    methodName2() {
        return this.extraField
    }
}

//? INSTANCE: Bir classtan türetilen objedir.
// class ile oluşturduğumuz object'e instance denir.
// class soyut, instance somuttur
// class templatettir , instance onun hayata geçirilmiş halidir

const instance = new PascalNamedClassName('parameter-1-value', 'parameter-2-value')
// console.log( "instance: " , instance) // PascalNamedClassName'i döndürüyor
// console.log( instance.methodName2() )  // method2'yi döndürüyor
// instance.extraField = 'new-value' //method2'yi değiştiriyor
// console.log( instance.extraField ) // method 2'yi yeniden döndürüyor

/* ------------------------------------------------------- *
//  Class olan Car= çalışma alanıdır, baskı makinesidir.
//  Class'ın içerisindeki constructor = kalıptır
//  Class'ın içerisindeki constructor ile ürettiğimiz obje ise instance'dır.

class Car {

    isRunning = false

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Motor Calisti')
        return this.isRunning
    }
}

// Instance oluştururken sadece parametre girsek bile class içerisindeki property'lerde otomatik olarak instance içerisine aktarılır.
const fordInstance = new Car('Ford', 'Mustang', 1967)
console.log ( fordInstance.isRunning ) // Buradaki isRunning instance olan veriyi döndürür. Car class'ını değil
fordInstance.isRunning = true // Instance içerisindeki veriler değiştirilebilir
console.log ( fordInstance.isRunning ) //> false
fordInstance.runEngine() //> Motor Çalıştı
console.log ( fordInstance.isRunning ) //> true

const mercedesInstance  = new Car('Mercedes', 'CLK200', 2000)
console.log ( "mercedesInstance:", mercedesInstance )
console.log(fordInstance);

/* ------------------------------------------------------- *
//? INHERITANCE: MirasAlma. Başka bir Class'ın tüm özelliklerini devralma (parent-child ilişkisi kurma)
//? THIS: Child Class - SUPER: Parent Class
// inheritance, (kalıtım, miras) bir classın bütün özelliklerinin başka bir class tarafından kullanılabilmesidir. en tepeye en genel class yazılır. orada en temel işlevler yapılır. alttaki classlarda daha detay işlemleri yapar

class Vehicle {

    vehicleIsActive = false

    constructor(vehicleType) {
        this.vehicleType = vehicleType
        // this.brand = brand // bu kısma yazdığımız tüm parametreleri kalıtım aldığımız yerlerde kullanmak zorundayız
    }
}

// Inheritance almak için "Class ClassName extends InheritanceAlinanClassName" şeklinde yazilir
// this komutu mevcut class'a ulaşırken super komutu inheritance alınan class'a ulaşır onu temsil eder. this child classı, super parametresi parent classı temsil eder.
class Car extends Vehicle { 

    isRunning = false

    constructor( brand, model, year, vehicleType = 'Car') {
        //? super() parametresi en tepede olmalı (Önce parent constructor çalıştırılmalı)
        super(vehicleType) // run constructor of ParentClass. Super= Inheritance aldığımız class'ın this'i
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Motor Calistirildi')
        return this.isRunning
    }
}

const fordInstance = new Car('Ford', 'Mustang', 1967, 'SUV')
// console.log( "fordInstance:",fordInstance )

// Bir class, birden fazla class'ı inheritance alabilir. Bir üst inheritance baba class iken, baba class inheritance aldığı class ise dede class olur. Super() sadece baba classtan çekilir. Accessory içerisinde super() yaparsak Car'dan, Car içerisinde Super() yaparsak Vehicle'dan çekeriz

// class Accessory extends Car { 

//     constructor(accessoryName, brand, model, year, vehicleType = 'Car') {
//         super(brand, model, year, vehicleType)
//         this.accessoryName = accessoryName
//     }
// }

// const fordCliamate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1967, 'SUV')
// // const fordCliamate = new Accessory('Bosh Climate', ...Object.values(ford)) //? Sıralama Önemli.
// console.log (fordCliamate)

// class ArabaSigorta extends Car{
//     constructor(brand, model, year, suresi, kapsami){
//         super(brand, model, year)
//         this.suresi = suresi
//         this.kapsami = kapsami
//     }
//     yapildi() {
//         return console.log('Sigortaniz basariyla yapilmistir')
        
//     }
// }


/* ------------------------------------------------------- *
//? Polymorphism: Miras aldığımız sınıfın özellik/methodlarını yeniden yazabilme.
//? Override: Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezme / iptal etme / önceliğini alma)
//? Overload: Üst metodla aynı isimde ama farklı yapıda (parametre adet/tip) yeni method oluşturma. (aynı anda ikiside aktif) (JS desteklemez)

class Vehicle {

    vehicleIsActive = false

    constructor(vehicleType) {
        this.vehicleType = vehicleType
    }

    getDetails() {
        console.log('Vehicle getDetails calisti')
        return this.vehicleType
    }
}

class Car extends Vehicle {

    isRunning = false

    constructor(brand, model, year, vehicleType = 'Car') {
        super(vehicleType) 
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Motor Calisti')
        return this.isRunning
    }

    //? Override: Üstteki method ile aynı isimde. Artık bu geçerli.
    // Aynı isimde yeni bir method calistiriyoruz. Bundan sonra Car içerisinde Vehicle'dan inheritance alınan getDetails değil Car içerisindeki getDetails çalışacak
    
    getDetails() {
        console.log('Car getDetails calisti')
        // return this
        return {
            brand: this.brand,
            model: this.model,
            year: this.year,
            vehicleType: super.getDetails(), // Parent class metodları super ile çalıştırabilir.
            // vehicleIsActive: super.vehicleIsActive // super-constructor bu veriyi this'e aktardı.
            vehicleIsActive: this.vehicleIsActive // super constructor bu veriyi this'e aktardı.
        }
    }
}

const ford = new Car('Ford', 'Mustang', 1967, 'SUV')
console.log ( "fordd", ford )
console.log ("fordd getDetails:", ford.getDetails() )

/* ------------------------------------------------------- *
//? JS PUBLIC: Genel erişime açık.
//? JS PROTECTED: Sadece Tanımlı olduğu class ve Inherit edilen child-class erişebilir. Tanımlarken key'in önüne _ ekleriz.
//? -* JS/ES12 öncesi desteklemiyor: Genel erişime açık ama lütfen dokunmayın :) 
//? JS PRIVATE: Sadece tanımlı olduğu class içinde erişim var. Tanımlarken key'in önüne # ekleriz.


class Vehicle {

    publicVehicleIsActive = false // PUBLIC PROPERTY
    _protectedProp = "protectedTrue" // PROTECTED PROPERTY
    #privateProp = true // PRIVATE PROPERTY

    constructor(vehicleType) {
        this.vehicleType = vehicleType
    }

    // Override yapma lütfen:
    _protectedMethod() {
        console.log('Vehicle protectedMethod calisti')
        return true
    }

    #privateMethod() {
        console.log('Vehicle privateMethod calisti')
        return true
    }

    getDetails() {
        console.log('Vehicle getDetails calisti')
        console.log( 'privateProp', this.#privateProp )
        console.log( 'privatedMethod', this.#privateMethod() )
    }
}

class Car extends Vehicle {

    isRunning = false

    constructor(brand, model, year, vehicleType = 'Car') {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Motor Calisti')
        return this.isRunning
    }

    getDetails() {
        console.log('Car getDetails calisti')
        // console.log( 'privateProp', this.#privateProp ) // NO ACCESS
        // console.log( this.#privateMethod() ) // NO ACCESS
        // console.log( 'privateProp', super.#privateProp ) // NO ACCESS
        // console.log( super.#privateMethod() ) // NO ACCESS
    }
}

const ford = new Car('Ford', 'Mustang', 1967, 'SUV')
console.log(ford);
// console.log ( ford ) // public ve protected'e ulaşabiliyor ama private'a ulaşamıyor.
// console.log ( ford.getDetails() )
// console.log ( ford.#privateProp ) // NO ACCESS
// console.log(ford._protectedProp);
// ford._protectedProp = "gümüş"
// console.log(ford._protectedProp);

/* ------------------------------------------------------- *
//? GETTER & SETTER METHODS: Görevi veri getirme (getter) ve veri güncelleme (setter) olan metodlardır.
//? "STATIC" KEYWORD: Class'dan direkt erişim. (Instance erişemez.)

class Car {

    isRunning = false
    #price

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Motor calistirildi')
        return this.isRunning
    }

    set setPrice(newPrice) {
        // return this.#price = newPrice
        this.#price = newPrice
        console.log('Fiyat Alindi.')
        return true
    }

    get getPrice() {
        // return this.#price
        return 'Fiyat: ' + (this.#price ?? 'Henüz Belirlenmedi.')
    }

    //? Direkt class ile erişmek istediklerimizi static ile işaretleriz.
    //? Statik property veya methodlara intance ile erişilmez.
    static staticProp = 'static value'

    //? Static methodlarda this ifadesi sadece statikleri çağırır.
    static staticMethod() {
        console.log('Static Method calisti')
        return this
    }
}

const ford = new Car('Ford', 'Mustang', 1967)
console.log(ford)



console.log( ford.getPrice )
// ford.price(5000) // CLassic method // NO ACCESS
ford.setPrice = 5000 // Setter method
// console.log( ford.getPrice )
console.log( ford.getPrice )


// //? STATIC METHOD EXAMPLE
// // Car.runEngine() // NO ACCESS
// const abc = Math.round(1.56)
// console.log( abc )

// //? Statikler instance'a aktarılmaz.
// // console.log(ford.staticMethod()) 
// console.log( Car.staticProp )
// console.log(ford)
// console.log( Car.staticMethod() )

/* ------------------------------------------------------- */
//? ABSTRACTION: Soyutlama/Modelleme (Aynı amaç için kullanılan değişken ve methodları bir class içinde yazıyor olması)
//? ENCAPCULLATION: Kapsülleme/Ayrıştırma (Kodların gizliliği, private attre erişilemiyor olması ve birbirinden bağımsız çalışmaları.)
/* ------------------------------------------------------- */

//* HAPPY CODDING :)

// TODO *****************   LESSON 4 - NodeJs Server    *****************

"use strict";
/* --------------------------------------------

        NODEJS

-------------------------------------------- */

const http = require("node:http"); // altta tekrar tekrar yazmamak için burada yorum satırına almadan yazıp bırakıyorum.

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

// TODO *****************   LESSON 5 - SQL    *****************

// -- -- -- -- --  SQL RULES -- -- -- -- -- -- --

// -- Bu satır artık bir yorum satırıdır. SingleLine Comment

// /*
// 	Multiline Comment
// 	Çok satırlı yorum
// */

// -- SELECT 1 AS one; -- Endline Comment
// -- SELECT 1 AS one, /* InLine Comment. Satır içerisinde yorum */ 2 AS one;

// -- NOT Case-Sensitive, Küçük büyük harf fark etmez
// -- select 1 as one; // Standart dışı kullanım. kod çalışır ama bu şekilde yazım tavsiye edilmez
// -- SELECT 1 AS ONE; // Tabsiye edilen standart kullanım

// -- SEPARATOR = ; (Noktalı Virgül)
// -- SELECT 1 AS one -- Tek block işlemler için noktalı-virgül zorunlu değildir.

// -- * Piyasa Standartları:
// -- * * SQL Temel komutları BÜYÜK harfle yazılır. SELECT * FROM Album WHERE AlbumID=1;
// -- * * String verilerde tek-çift tırnak kullanabilirsiniz. Standart olan tek tırnaktır.  SELECT 'string' AS yazi;
// -- * * Her bir temel komut yeni bir satıra yazılır:

// /* Tavsiye edilen yazım tarzıdır. Kodlar yan yana değil alt alta yazılır.
// SELECT	*
// FROM	Album
// WHERE	AlbumID=1;
// */

// --- --- --- SQL --- --- ---

// -- * SELECT - Seç getir. CRUD işlemlerinde READ'e karşılık gelir
// -- * FROM - Hangi tablodan? Hangi veriyle işlem yapacağımızı belirtiriz

// -- SELECT * FROM Album;  -- * = Tüm sutunlar. * = ALL
// -- SELECT AlbumId, Title FROM Album; -- İstediğim sutunları getir. -- Tavsiye edilen yöntem ayrı-ayrı yazmaktır.
// ------

// -- * AS -- Tablo veya Sutunları geçici adlandırmak için kullanılır. -- Lakap Takma

// -- SELECT 1 AS baslik;
// -- SELECT 'data' AS baslik; // AnyData
// -- SELECT 2*2 AS sonuc; -- Matematiksel ifade
// -- SELECT AlbumId AS AlbumNO, Title AS Baslik FROM Album; -- Sutun isimlendirme. AlbumId'yi AlbumNO, Title'ı Baslık adıyla yazdır.
// -- SELECT AlbumId+5 AS AlbumNO, Title AS Baslik FROM Album; -- Sutun isimlendirme. AlbumId'lerin numaralarını 5 artırarak yazdır.
// -- SELECT Album.AlbumId, Album.Title FROM Album; --SELECT AlbumId, Title FROM Album ile aynı koddur.
// -- SELECT a.AlbumId, a.Title FROM Album AS a; -- Tablo isimlendirme
// -- SELECT a.AlbumId AS Numara, a.Title AS Baslik FROM Album AS a; -- SELECT Album.AlbumId, Album.Title FROM Album ile aynı koddur
// -- SELECT a.AlbumId Numara, a.Title Baslik FROM Album a;

// -- * DISTINCT - Tekrar edilen kayıtarın tekrar edilmesini engeller (tek kayıt olarak getirir). Tamamen birbirinin aynısı olan kayıtların tekrar tekrar gösterirmesini engeller. Sadece bir kez gösterilir
// -- SELECT DISTINCT City FROM Customer;
// -- * ORDER BY VERİLERİ HANGİ SIRAYLA YAZDIRACAĞINI BELİRTİR. (0-9, A-Z)
// -- SELECT DISTINCT City, Country FROM Customer ORDER BY Country ASC; -- Bütün sutunlardaki ortak olanları 1 kere getirir.

// -- * WHERE - Filtreleme
// -- SELECT * FROM Customer WHERE Country = 'USA' -- Tüm müşterilerden ülkesi USA olanları yazdır
// -- SELECT * FROM Customer WHERE Country != 'USA' -- Tüm müşterilerden ülkesi USA olmayanları yazdır
// -- SELECT * FROM Customer WHERE Country <> 'USA'  -- Tüm müşterilerden ülkesi USA olmayanları yazdır
// -- SELECT * FROM Customer WHERE CustomerId > 20 -- Tüm müşterilerden customerid'si 20'den büyük olanları yazdır
// -- SELECT * FROM Customer WHERE CustomerId >= 20 -- Tüm müşterilerden customerid'si 20'den büyük veya eşit olanları yazdır
// -- SELECT * FROM Customer WHERE CustomerId < 20 -- Tüm müşterilerden customerid'si 20'den küçük olanları yazdır
// -- SELECT * FROM Customer WHERE CustomerId <= 20 -- Tüm müşterilerden customerid'si 20'den küçük veya eşit olanları yazdır
// -- SELECT * FROM Customer WHERE CustomerId BETWEEN 10 AND 20 -- 10 ile 20 arasında olanları getir. (her ikiside dahil)
// ------

// -- * WHERE - AND/OR/NOT
// -- AND => Tüm şartlar sağlıyorsa true döndürür
// -- OR => Kendisinden öncekiler ya da kendisi şartı sağlıyorsa true döndürür
// -- NOT => Değili manasındadır.
// -- * SELECT * FROM table WHERE True OR NOT True
// -- SELECT * FROM Customer WHERE NOT Country = 'USA' -- Ülkesi olanlar hariç Tüm müşterileri yazdır
// -- SELECT * FROM Customer WHERE Country = 'USA' AND Company NOT NULL -- Ülkesi USA olanlar ve şirketi null olmayanlar tüm müşterileri yazdır
// -- SELECT * FROM Customer WHERE Country = 'USA' OR Country = 'Brazil' OR Country = 'Denmark' -- Ülkesi USA, Brazil veya Denmark olan tüm müşterileri yazdır
// -- SELECT * FROM Customer WHERE (Country = 'USA' OR Country = 'Brazil' OR Country = 'Denmark') AND CustomerId > 25 -- Ülkesi USA, Brazil veya Denmark olan ve cumtomerid'si 25'ten büyük olan tüm müşterileri yazdır
// -- SELECT * FROM Customer WHERE (Country = 'USA' OR Country = 'Brazil' OR Country='Denmark') AND (CustomerId BETWEEN 25 AND 27) -- (Ülkesi USA, Brazil veya Denmark olan) ve (cumtomerid'si 25 ile 27 arasında) olan tüm müşterileri yazdır
// -----

// -- * WHERE - IN / NOT IN  // WHERE ile aynı şekilde filtreleme yapar
// -- SELECT * FROM Customer WHERE Country IN ('USA', 'Brazil', 'Denmark');   -- Ülkesi USA, Brazil veya Denmark olan tüm müşterileri yazdır
// -- SELECT * FROM Customer WHERE Country NOT IN ('USA', 'Brazil', 'Denmark'); -- Ülkesi USA, Brazil veya Denmark olmayan tüm müşterileri yazdır
// -- SELECT * FROM Customer WHERE CustomerID IN (2,3,4,10,11); -- CustomerId'si 2,3,4,10,11 olan tüm müşterileri yazdırır.
// (edited)

// TODO *****************   LESSON 6 - SQL2     *****************

/*
-- * WHERE - LIKE ( _ = SingleChar, % = JokerChar)
SELECT * FROM Customer WHERE Country LIKE 'USA'

****************************

-- * WHERE - LIKE ( _ = SingleChar, % = JokerChar) // Like sayesinde where ile yaptığımız filtrelemeleri daha detaylı yapabiliyoruz.
-- SELECT * FROM Customer WHERE Country LIKE 'USA'; -- "USA" olanlar.
-- SELECT * FROM Customer WHERE Address LIKE '627 Broadway'; -- "627 Broadway" olanlar.
-- SELECT * FROM Customer WHERE Address LIKE '1498%';  -- "1498" ile başlayan kayıtlar.
-- SELECT * FROM Customer WHERE Address LIKE '%langer';  -- "langer" ile biten kayıtlar.
-- SELECT * FROM Customer WHERE Address LIKE '%rue%';  -- içinde "rue" geçen kayıtlar.
-- SELECT * FROM Customer WHERE Phone LIKE '_55 %'; -- 2. ve 3. karakteri 55 olan kayıtlar.
-- SELECT * FROM Customer WHERE Address LIKE '_a_%'; -- 2 karakteri "a" olan ve en az 3 karakter olan.
-- SELECT * FROM Customer WHERE Phone LIKE '+__ 030%'; -- Ülke kodu bilinmeyen 030 ile başlaya telefonlar.
-- SELECT * FROM Customer WHERE Phone LIKE '+__ 030%' AND FirstName = 'Niklas'; -- Niklas isimli 030 ile başlayan numaralı kayıtlar.

****************************

-- * ORDER BY - Sıralama
-- * ASC - A-Z, 0-9 Sıralama
-- * DESC - Z-A 9-0 Sıralama
-- SELECT * FROM Customer ORDER BY Country ASC; -- A-Z, 0-9 Sıralama
-- SELECT * FROM Customer ORDER BY Country; -- Default: ASC
-- SELECT * FROM Customer ORDER BY Country DESC; -- Ters Sıralama, Z-A 9-0 Sıralama
-- SELECT * FROM Customer ORDER BY Country ASC, City ASC, LastName ASC; -- Sırasıyla ülke - şehir ve soyisim sırala. İlk yazdığına göre sıralama yapıyor.
-- SELECT * FROM Customer ORDER BY Country, City, LastName; -- Sırasıyla ülke - şehir ve soyisim sırala.
SELECT * FROM Customer WHERE Country IN ('USA', 'Brazil') AND CustomerId > 12 AND Company NOT NULL ORDER BY Company ASC 

****************************

-- * LIMIT - Belli sayıda kayıt getir.
-- SELECT * FROM Customer LIMIT 0, 10;  -- LIMIT kaçıncı kayıttan itibaren, kaç ADET kayıt. İlk parametre dahil değil iken ikinci parametre dahildir. Aslında burada indis mantığı yoktur. Mantık şu şekilde işler. İlk parametreden sonra ikinci parametre kadar veri döndür.
-- SELECT * FROM Customer LIMIT 5 -- Başlangıç default: 0
SELECT * FROM Customer LIMIT 10, 5;  -- 10. kayıttan sonraki (yani 11. kayıttan itibaren) 5 adet kaydı getir.

****************************

SUBQUERY (SELECT IN SELECT) (Nested Query)
-- SELECT * FROM Album WHERE ArtistId = (SELECT ArtistId FROM Artist WHERE Name = 'Led Zeppeli'); -- Sanatçı ID'sini SubSelect'den aldık.
-- SELECT AlbumId, Title, (SELECT Name FROM Artist WHERE ArtistId = a.ArtistId) AS Artist FROM Album AS a;
/*
-- SubSELECT sorgusunu tablo gibi kullanmak:
SELECT FirstName, LastName
FROM (
	SELECT * FROM Customer WHERE Country = 'USA' AND CustomerId > 22
) WHERE FirstName LIKE '%a%'

****************************

-- -- -- -- -- -- -- -- JOINS -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

-- Birden fazla tablodaki kayıtları tek bir tabloda getirmek için kullanıyor.

-- * INNER JOIN -- Yalnızca kesişen kayıtları getirir.
-- * (Alternatif Yazım: JOIN) Default JOIN yöntemi INNER JOIN'dir. (Piyasa kullanımı: INNER JOIN)
/*
SELECT *
FROM Artist AS art
JOIN Album AS alb ON alb.ArtistId=art.ArtistId -- JOIN == INNER JOIN
ORDER BY ArtistId ASC, AlbumId ASC
*/
/*
SELECT c.FirstName, c.LastName, c.Country, i.InvoiceId, i.InvoiceDate, i.Total AS InvoiceTotal
FROM Customer AS c
INNER JOIN Invoice AS i ON i.CustomerId = c.CustomerId
ORDER BY c.CustomerId

SELECT t.Name Sarki, a.Title Album, m.Name Dosya, g.Name Tur
FROM Track t
INNER JOIN Album a ON a.AlbumId=t.AlbumId
INNER JOIN MediaType m ON t.MediaTypeId=m.MediaTypeId
INNER JOIN Genre g ON g.GenreID=t.GenreId

****************************
-- * LEFT JOIN -- FROM tablodaki BÜTÜN kayıtlar ve JOIN tablodaki KESİŞEN kayıtları getir.

SELECT *
FROM Artist AS art
LEFT JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC

****************************

RIGHT JOIN -- FROM tablodaki KESİŞEN kayıtlar ve JOIN tablodaki BÜTÜN kayıtları getir.

SELECT *
FROM Artist AS art
RIGHT JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC

****************************

-- * FULL OUTER JOIN -- Her iki tablonun BÜTÜN kayıtlarını göster, Eşleşenleri yanyana göster.

SELECT *
FROM Artist AS art
FULL OUTER JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC

****************************

-- * CROSS JOIN -- Her iki tablonun BÜTÜN kayıtlarını göster, İlişki gözetme.

SELECT *
FROM Artist AS art
CROSS JOIN Album AS alb
ORDER BY ArtistId ASC, AlbumId ASC

****************************

-- * JOIN ÖRNEKLER

-- Hangi sanatçı hangi albümleri çıkarmıştır. Bir albüme sahip olmayan sanatçıları gösterme. Sadece albüm sahibi olan sanatçıları göster.
SELECT t1.ArtistId, t1.Name AS sanatci, t2.Title AS album
FROM Artist AS t1
INNER JOIN Album AS t2 ON t1.ArtistId=t2.ArtistId
-- WHERE t1.Name = 'Led Zeppeli'
ORDER BY t1.ArtistId
/*
-- Bütün sanatçıları göster. Hangi sanatçı hangi albüme sahip onu da göster. Ama albüm sahibi olmayan kayıtlara NULL yaz.
SELECT t1.ArtistId, t1.Name AS sanatci, t2.Title AS album
FROM Artist AS t1
LEFT JOIN Album AS t2 ON t2.ArtistId=t1.ArtistId
ORDER BY t1.ArtistId

****************************

-- -- -- -- -- -- -- --  FUNCTIONS -- -- -- -- -- -- -- --

-- * COUNT -- Kayıt Sayısı
-- SELECT COUNT(*) AS kayitSayisi FROM Customer; -- (*) kullanmak efektif değil. 
-- SELECT COUNT(CustomerId) AS kayitSayisi FROM Customer; -- Herhangi bir sutun ismi kullanmalıyız (PRIMARY)
-- SELECT COUNT(CustomerId) AS kayitSayisi FROM Customer WHERE Country IN ('USA', 'Brazil', 'Denmark');

-- * SUM -- Toplam
-- SELECT SUM(Total) AS toplam, BillingCountry FROM Invoice; -- Toplam fatura tutarı
-- SELECT SUM(Total) AS toplam FROM Invoice WHERE BillingCountry='USA'; -- Amerikaya kesilen fatura toplamı.
-- SELECT COUNT(InvoiceId) AS adet, SUM(Total) AS toplam FROM Invoice; -- Toplam fatura tutarı

-- * AVG -- Ortalama
-- SELECT AVG(Total) AS ortalama FROM Invoice; // eğer null değer varsa bu hem toplamaya hem bölmeye dahil edilmez

-- * ROUND -- Yuvarlama  -- Tofixed
-- SELECT ROUND(AVG(Total)) AS ortalama FROM Invoice;
-- SELECT ROUND(AVG(Total), 2) AS ortalama FROM Invoice;

-- * MIN -- En küçük değer -- String de destekler
-- SELECT MIN(Total) AS minTutar FROM Invoice;
-- SELECT MIN(FirstName) FROM Customer;

-- * MAX -- En büyük değer -- String de destekler
-- SELECT MAX(Total) AS maxTutar FROM Invoice;
-- SELECT MAX(FirstName) FROM Customer;

-- * LENGTH -- Karakter Sayısı (Kayıt sayısı tek satıra düşürmez)
-- SELECT LENGTH(BillingAddress) AS karakterSayisi FROM Invoice;
-- SELECT LENGTH(Total) AS karakterSayisi FROM Invoice; -- Number veri karakter sayısı


-- -- -- -- GROUP BY -- -- -- -- 

-- * GROUP BY -- İşlemleri gruplayarak yap.
SELECT COUNT(*) AS kayitSayisi, Country FROM Customer GROUP BY Country;
-- SELECT BillingCountry, COUNT(InvoiceId) AS faturaSayisi FROM Invoice GROUP BY BillingCountry;  -- Hangi ülkeye kaç adet fatura kesildi.
-- SELECT BillingCountry, SUM(Total) AS toplam FROM Invoice GROUP BY BillingCountry; -- Ülkeye göre toplam tutarları ver.
-- SELECT BillingCountry, AVG(Total) AS ortalama FROM Invoice GROUP BY BillingCountry;  -- Ülkeye göre ortalama fatura tutarı.
-- SELECT BillingCountry, ROUND(AVG(Total), 2) AS ortalama FROM Invoice GROUP BY BillingCountry;  -- Ülkeye göre ortalama fatura tutarı. -- yuvarlanmış
-- SELECT BillingCountry, MIN(Total) AS minimum FROM Invoice GROUP BY BillingCountry;  -- Ülkeye göre minimum fatura tutarı.
-- SELECT BillingCountry, MAX(Total) AS maximum FROM Invoice GROUP BY BillingCountry;  -- Ülkeye göre maximum fatura tutarı.

****************************
*/

// TODO *****************   LESSON 7 - SQL All  *****************

//!
//?
//*

//TODO ***************  MUSTERİ TABLOSU   ****************/
// ID   ad          soyad       sehir       bakiye  meslek
// 1	"Ali"   	"Yılmaz"	"Ankara"	5750    1
// 2	"Emel"	    "Çınar"	    "Bursa"	    5800    2
// 3	"Aslı"	    "Kaya"	    "Ankara"	7440    1
// 4	"Mehmet"	"Yücedağ"	"Ankara"	2650    3
// 5	"Mesut"	    "Aslan"	    "İstanbul"	4480    3
// 6	"Ayse"	    "Yıldırım"	"Ankara"	8850    1
// 7	"Mehmet"	"Kaya"	    "Bursa" 	6500    2
// 8	"Tufan"	    "Çimen"	    "İstanbul"	4750    2
// 9	"Zeynep"	"Öztürk"	"Adana" 	3800    1

//TODO ***************  MESLEK TABLOSU   ****************/

// ID   ad
// 1    öğretmen
// 2    doktor
// 3    mühendis
// 4    müzisyen

//TODO ***************  FAKÜLTE TABLOSU   ****************/

// ID   bolumad     bolumf
// 1   mekatronik   1
// 2   yazılım      1
// 3   ybs          3
// 4   matematik    2
// 5   kimya        2
// 6   fizik        2
// 7   otomotiv     1
// 8   metalurji    1

//TODO ***************  BÖLÜM TABLOSU   ****************/

// ID   ad
// 1    mühendislik
// 2    fen edebiyat
// 3    İibf

//TODO ***************  KİTAPLAR TABLOSU   ***************/

// ID   ad  tarih
// 1    Palto                   30.08.2020
// 2    Kuyucaklı Yusuf         30.08.2020
// 3    Yer Altından Notlar     31.08.2020
// 4    İki Şehrin Hikayesi     31.08.2020
// 5    Tuna Kılavuzu           01.09.2020
// 6    Satranç                 01.09.2020
// 7    Alemdağda Var Bir Yılan 03.09.2020

//TODO ***************  DERSLER TABLOSU   ***************/
// ID   dersad                      kontenjan   bolumid
// 1    Algoritma                   20          1
// 2    Yapay Zeka                  20          1
// 3    Elektronik Devreler         20          2
// 4    Bilgi Güvenliği             20          2
// 5    Nesne Tabanlı Programlama   20          2
// 6    Lineer Cebir                20          4

//! Insert Sorgusu ile Veri Girişi
//? insert into musteri (id,ad,soyad,sehir) values (1, 'Ali', 'Kaya', 'Ankara')
//* musteri tablosundeki id,ad,soyad,sehir yerlerine sırasıyla value olarak 1, 'Ali', 'Kaya', 'Ankara' yazdırır

//! Select ile verileri listeleme
//? select id,ad,soyad, from musteri
//* musteri tablosundaki id,ad,soyad verilerini listeler
//? select * from musteri
//* musteri tablosundaki tüm verileri listeler

//! Order by ile verileri sıralama
//? select * from musteri order by id
//* musteri tablosundaki sütunu 'id' olanları sırasıyla (1-9 / a-z) sıralar.

//! Where ile şartlı listeleme
//? select * from musteri where ad='Mehmet'
//* musteri tablosundaki tüm verilerden ad='Mehmet' olanları listeler
//? select * from musteri where ad!='Mehmet'
//* musteri tablosundaki tüm verilerden ad='Mehmet' olmayanları listeler
//? select * from musteri where ad='Mehmet' and id=4 or sehir='Adana'
//* musteri tablosundaki tüm verilerden (ad='Mehmet' ve id=4) olanları veya (sehir='Adana') olanları listeler. Or yazıldığında Or'dan öncesi bir parantez, Or'dan sonrası bir parantez olarak değerlendirilir.

//! İçerisindeki belirli bir harfe göre verileri listeleme
//? select * from musteri where ad like '%a%'
//* musteri tablosundaki tüm verilerdeki ad'lardan içerisinde 'a' harfi olanları listeler
//? select * from musteri where ad not like '%a%'
//* musteri tablosundaki tüm verilerdeki ad'lardan içerisinde 'a' harfi olmayanları listeler

//! Like ile beş göre verileleri listeleme
//? select * from musteri where ad like 'A%'
//* musteri tablosundaki tüm verilerdeki ad'lardan içerisinde 'A' harfiyle başlayanları listeler
//? select * from musteri where ad not like 'A%'
//* musteri tablosundaki tüm verilerdeki ad'lardan içerisinde 'A' harfiyle başlamayanları listeler
//? select * from musteri where ad like '%a'
//* musteri tablosundaki tüm verilerdeki ad'lardan içerisinde 'a' harfiyle bitenleri listeler
//? select * from musteri where ad like '%a'
//* musteri tablosundaki tüm verilerdeki ad'lardan içerisinde 'a' harfiyle bitmyenleri listeler
//? select * from musteri where ad like '[abc]'
//* musteri tablosundaki tüm verilerdeki ad'lardan a, b ve c harfiyle başlayanları listeler
//? select * from musteri where ad like '[a-f]'
//* musteri tablosundaki tüm verilerdeki ad'lardan a ile f arasındaki harflerle başlayanları listeler
//? select * from musteri where ad like 'Mur_t'
//* musteri tablosundaki tüm verilerdeki ad'ların içerisinde "Mur_t" var mı kontrol eder. "_" olan kısma her türkü karakter gelebilir. Tüm ihtimalleri değerlendirir.
//? select * from musteri where ad like 'M__%'
//* musteri tablosundaki tüm verilerdeki ad'ların içerisinde "M" ile başyan, en az 3 harfli olanları listeler.
//? select * from musteri where ad like '_M%'
//* musteri tablosundaki tüm verilerdeki ad'ların içerisinde ikinci karakteri "M" olanları listeler.

//! Delete ile belirli bir veriyi silme
//? delete from musteri where id=10
//* musteri tablosundaki id=10 olan verileri siler

//! Update ile belirli verileri değiştirme, güncelleme
//? update musteri set bakiye =5750 where id=1
//* musteri tablosunda id=1 olan bakiyeleri 5750 olarak değiştirir.Eğer Where ile filtrelemezsek tüm bakiyeleri 5750 yapar.

//! Aggregate Functions'lar birlikte kullanılabilir
// ? select count(bakiye), max(bakiye), min(bakiye), avg(bakiye), sum(bakiye) from musteri
//* musteri tablosundaki sehir='Ankara' olan verileri count, max, min, avg ve sum olarak tek seferde döndürür. Null veriler göz ardı edilir. hem toplama hem de bölene eklenmez.
//? select max(bakiye) - min(bakiye) from musteri where sehir='Ankara'
//* musteri tablosunda sehir='Ankara' olan verilerdeki en yüksek bakiye ile en düşük bakiyenin farkını döndürür

//! Is Null ile null olup olmadığını kontrol etme
//? select * from musteri where ad is null
//* müsteri tablosundaki ad sütununda null var mı kontrol eder. Eğer null ise döndürür. Eğer null değilse döndürmez.
//? select * from musteri where ad is not null
//* müsteri tablosundaki ad sütununda null var mı kontrol eder. Eğer null ise döndürmez. Eğer null değilse döndürür.

//! Count => Tabloda kaç tane veri olduğunu sayar
//? select count(*) from musteri where sehir='Ankara'
//* musteri tablosundaki kaç tane sehir='ankara' verisi olduğunu döndürür. Eğer where ile filtrelemezsek musteri tablosunda kaç tane veri(sütun) olduğunu döndürür.

//! Sum => Sütunlardaki sayısal verileri toplar
//? select sum(bakiye) from musteri where sehir='Ankara'
//* musteri tablosunda sehir='Ankara' olan verilerdeki bakiyelerin toplamını döndürür. Eğer where ile filtrelemezsek tablodaki tüm bakiyelerin toplamını döndürür.

//! Avg => Sütundaki sayısal verilerin ortalamasını döndürür
//? select avg(bakiye) from musteri where sehir='Ankara'
//* musteri tablosundaki sehir='Ankara' olan verilerdeki bakiyelerin ortalamasını döndürür. Eğer where ile filtrelemezsek tablodaki tüm bakiyelerin ortalamasını döndürür.

//! Max => Sütundaki sayısal verilerin en büyüğünü döndürür
//? select max(bakiye) from musteri where sehir='Ankara'
//* musteri tablosundaki sehir='Ankara' olan verilerdeki bakiyelerin en büyüğünü döndürür. Eğer where ile filtrelemezsek tablodaki tüm bakiyelerin en büyüğünü döndürür.

//! Min => Sütundaki sayısal verilerin en küçüğünü döndürür
//? select max(bakiye) from musteri where sehir='Ankara'
//* musteri tablosundaki sehir='Ankara' olan verilerdeki bakiyelerin en küçüğünü döndürür. Eğer where ile filtrelemezsek tablodaki tüm bakiyelerin en küçüğünü döndürür.

//! Group by ile belirli şartlara göre guplandırma
//? select sehir, count(*) from musteri group by sehir
//* musteri tablosundaki sehir sütunundaki verilerden hangi şehirde kaç kişi olduğunu gruplayarak döndürür.

//? select sehir, count(*) as kisi from musteri group by sehir
//* musteri tablosundaki sehir sütunundaki verilerden hangi şehirde kaç kişi olduğunu gruplayarak döndürür. Yukarıdakinden farklı olarak kaç kişi olduğunun gösterildiği sütunun adını kisi olarak değiştirir.

//! Having ile gruplandırma yaparken filtreleme
//? select sehir, sum(bakiye) as maas from musteri group by sehir having sum(bakiye)> 15000
//* musteri tablosundaki sehir sütunundaki verilerden hangi şehirde kaç kişi olduğunu bulur, ancak sadece bakiye toplamları 15000 şartını sağlayanları gruplar.

//! Sub Query ( Alt Sorgu) ile sorgu yapma - select içerisinde select yapma
//? select * from musteri where bakiye =(select max(bakiye) from musteri)
//* musteri tablosundaki bakiyesi en yüksek olan müşteriyi döndürür
//? select * from musteri where meslek=(select id from meslek where ad='öğretmen')
//* Mesleği öğretmen olanların id'sini bul, bu id ile musteri tablosundaki meslekleri sorgula demektir. Aslında bkz: select * from musteri where meslek=1

//! Sub Query ( Alt Sorgu) ile verilerle işlem yapma - select içerisinde select yapma
//? update musteri set bakiye = bakiye*1.1 where meslek= (select id from meslek where ad='mühendis')
//* musteri tablosundaki bakiyelerden mesleği mühendis olanların bakiyelerini %10 artırır.

//! Truncate ile tablo silme
//? truncate table urun
//* urun isimli tablonun tamamını siler

//! Inner Join ile tablolardaki ortak alanları birleştirme.
//? select musteri.ad,soyad,sehir,meslek.ad from musteri inner join meslek on musteri.meslek = meslek.id
//* hem musteri tablosunda hem de meslek tablosunda ad isimli sütun bulunmaktadır. Bu nedenle sadece ad yazmamız halinde sadece musteri tablosundaki adlar dönecektir. Bunu engellemek için "ad"ların başına hangi tablodan geliyorsa o tablonun adını yazıyoruz. Ardından inner join (ortak alanları birleştirme) ile meslek tablosundaki meslek.id'e karşılık gelen kısmı musteri.meslek kısmına yazdırıyoruz. Böylelikle ortak alanların tamamını birleştiriyoruz.
//* Eğer sadece join yazılmışsa default olan inner joindir. Ancak join olarak değil inner join olarak yazılması tavsiye edilir.

//! Left Join ile tablolardaki ortak alanları birleştirme
//? select bolumid, bolumad, ad from fakulte left join bolum on fakulte.id = bolum.bolumf
//* soldaki tablonun tüm değerlerini ve sağ taraftaki tablodaki değerlerden sadece sol taraftaki tabloyla ilişkili olan değerleri getirir. Soldaki tablodan getirdiğinin sağ taraftaki tablodaki karşılığı yoksa null değeri atar. Yukarıdaki kodda fakülte(kodda left join'in solunda fakulte yazıldığı için sol taraf fakulte oluyor) tablosunu sabit tutar, bolumdeki(kodda left join'in sağında bolum yazıldığı için sağ taraf bolum oluyor) verileri bolum tablosuna birleştirir. Eğer karşılığı VARSA birleştirir. Eğer karşılığı yoksa alta ekler, fakülte kısmına null ataması yapar.

//! Right Join ile tablolardaki ortak alanları birleştirme
//? select id, ad, bolumad from bolum right join fakulte on fakulte.id=bolum.bolumf
//* sağdaki tablonun tüm değerlerini ve sol taraftaki tablodaki değerlerden sadece sağ taraftaki tabloyla ilişkili olan değerleri getirir. Sağdaki tablodan getirdiğinin sol taraftaki tablodaki karşılığı yoksa null değeri atar. Yukarıdaki kodda fakülte(kodda right join'in sağında fakulte yazıldığı için sağ taraf fakulte oluyor) tablosunu sabit tutar, bolumdeki(kodda right join'in solunda bolum yazıldığı için sol taraf bolum oluyor) verileri bolum tablosuna birleştirir. Eğer karşılığı birleştirir. Eğer karşılığı yoksa alta ekler, fakülte kısmına null ataması yapar.

//! Full Join ile tabloları birleştirme
//? select musteri.ad, soyad, sehir, meslek.ad from musteri full join meslek on musteri.meslek=meslek.id
//* karşılığı olup olmadığına bakmaksızın tabloları birleştirir. Karşılığı varsa karşısına yazar, karşılığı yoksa null döndürür.

//! Cross Join ile tabloları birleştirme
//? select bolumad, ad from bolum cross join fakulte
//* Herhangi bir karşılık beklemeksizin tüm tabloları çaprazlama birbirine eşleştiriyor. Bkz: Tablo1: A,B Tablo2: 1,2 => Cross Join sonucu: A1, A2, B1, B2

//! Intersect ile tablolardaki kesişimi döndürme
//? select * from bolum2 intersect select * from bolum3
//* intersect'i kümelerdeki kesişim olarak düşünebiliriz. Her iki tabloda da olanları döndürür

//! Except ile tablolardaki farkı döndürme
//? select * from bolum2 except select * from bolum3
//* except'i kümelerdeki fark olarak düşünebiliriz. Tablolar arasındaki farkı döndürür

//! Union ile tablo birleştirme
//? select * from bolum2 union select * from bolum3
//* tabloları birleştirip verileri tek tabloda birleştirmek için kullanılır. Aynı öğeler 1 defa sayılır

//! Union  All ile tablo birleştirme
//? select * from bolum2 union all select * from bolum3
//* tabloları birleştirip verileri tek tabloda birleştirmek için kullanılır.  Aynı öğeler 1'den fazla defa sayılır

//! Ascii ile ascii kod öğrenme
//? select ascii ('a')
//* parantez içerisinde belirtilen karakterin ascii kodunu döndürür

//! Concat ile metinleri birleştirme
//? select concat ('hello ', 'world')
//* ilk kelime ile ikinci kelimeyi metin olarak birleştirir.
//? select concat_ws ('*','hello ', 'world')
//* ilk kelime ile ikinci kelimeyi metin olarak birleştirir. Kelimeler arasına ilk parametreyi ekler.

//! Left ile soldan belirli karakteri alma
//? select left ('Hello World',3)
//* metindeki ilk 3 karakteri döndürür

//! Right ile soldan belirli karakteri alma
//? select right ('Hello World',3)
//* metindeki son 3 karakteri döndürür

//! Length ile metin uzunluğunu hesaplama
//? select length ('Hello World')
//* metinde kaç karakter olduğunu hesaplar. metnin uzunluğunu döndürür.

//! Replace ile metni değiştirme
//? select id,replace(ad,'i','ı') from bolum3
//* bolüm3 tablosundaki id'lerde bulunan i harflerini ı olarak değiştirir.

//! Reverse ile metni ters çevirme
//? select reverse(ad) from bolum3
//* metni sondan başa ters çevirir

//! Substring ile metindeki belirli bir aralığı alma
//? select substring ('Hello World', 1,3)
//* metindeki 1. karakterden başlayarak 3 karakteri döndürür.

//! Lower ve Upper ile harfi büyütüp küçültme
//? select lower(ad), upper(ad) from bolum3
//* topladaki adları önce tamamen küçük harfle, daha sonra tamamen büyük harfle döndürür.

//! Abs ile mutlak değer alma
//? select abs(-5)
//* sayıların mutlak değerini döndürür

//! Ceil ile tavana yuvarlama
//? select ceil(5.34)
//* virgüllü sayıyı üst sayıya yuvarlar

//! Floor ile tabanı alma
//? select floor(5.34)
//* virgüllü sayının küsüratını siler, tabanı döndürür

//! Power ile üs alma
//? select power(2, 3)
//* ilk parametre sayıyı, ikinci parametre üssü temsil eder. 2 üssü 3 = 8 sonucunu döndürür.

//! Random ile rastgele sayı ürütme
//? select random ()
//* 0 ile 1 arasında rastgele sayı üretiyor

//! Round ile virgüllü sayının bir kısmını döndürme
//? select random (4.43, 1)
//* virgüllü sayının virgülden sonrasını 2. parametre kadar yazdırır. Eğer 2. parametre yazılmazsa virgülden sonrasını yazdırmaz sadece tam kısmı döndürür.

//! Sign ile sayının pozitif mi negatif mi olduğunu döndürme
//? select sign (4)
//* parametre olarak girilen sayının pozitif, negatif, nötr değerini döndürür.

//! Sqrt ile karekök alma
//? select sqrt (4)
//* parametre olarak girilen sayının karekökünü alır.

//! Log ile logaritmasını alma
//? select log (4)
//* parametre olarak girilen sayının logaritmasını alır.

//! Current Date günü öğrenme
//? select current_date
//* bugünün tarihini döndürür

//! Current Time saati öğrenme
//? select current_time
//* anın saat bilgisini döndürür

//! Now ile zamanı öğrenme
//? select now()
//* anın gün ve saat bilgilerini döndürür
//? select ad,tarih, age(now(), tarih) from kitaplar
//* şu an ile kitaplar tablosundaki tarih arasında geçen süreyi döndürür.

//! Age ile 2 tarih arasındaki süreyi hesaplama
//? select age (timestamp '01.01.2023')
//* bugün ile parametre olarak girilen tarih arasındaki zamanı hesaplar.

//! View ile method oluşturma
//? create view View2 As select bolumid, bolumad,ad from bolum inner join fakulte on bolum.bolumf=fakulte.id
//* view2 isminde view(fonksiyon) oluşturuyoruz ve istediğimiz zaman bu view'ı çağırabiliyoruz.

//! Do Begin End ile değişken atama
//? do $$
//? declare
//? Sinav int :=15;
//? begin
//? raise notice 'öğrencinin sınav notu: %', Sinav;
//? end $$
//* Do ve End'den sonra $$ atılır. declare kısmında tanımlama işlemi yapılır. Begin ile End arasında atama ya da ekrana yazdırma işlemi yapılır. Raise notice ile ekrana yazdırılır.

//! Declare ile atama yapma
//? sayi int:=15;
//* sırasıyal variable name, variable key, ":=", value olarak yazılır.

//! Pg_sleep ile gecikmeli işlem yapma
//? select pg_sleep(2); select * from bolum
//* pg_sleep ile 2 saniye bekleme ayarlanır. Yapılacak işlem 2 saniye sonra yapılır.

//! If-Else ile condition tanımlama
//? do $$
//? declare
//? Sinav1 int :=15;
//? Sinav2 int :=29;
//? Sinav3 int :=60;
//? Ortalama int;
//? begin
//? ortalama:=(Sinav1+Sinav2+Sinav3)/3;
//? raise notice 'öğrencinin sınav ortalaması: %', ortalama;
//? if ortalama>=50 then
//? raise notice 'Öğrenci Dersi Geçti';
//? else
//? raise notice 'Öğrenci Dersten Kaldı';
//? end if;
//? end $$
//* if else ile koşul tanımlıyoruz. Sonuca göre işlem yapıyor.

//! Switch Case condition tanımlama
//? Select dersad,bolumid,
//?		Case
//?			When bolumid=1
//?		then 'Yazılım'
//?			when bolumid=2
//?		then 'Mekatronik'
//?			when bolumid=3
//?		then 'Elektronik'
//?	End duration
//? From Dersler
//? order by dersad;
//* Switch case tanımlıyoruz. Sonuca göre işlem yapıyor.

//! While döngüsü tanımlama
//? do $$
//? declare
//? sayac int :=1;
//? begin
//? while sayac<=10 loop
//? Raise Notice 'Sayaç: %', sayac;
//? sayac :=sayac+1;
//? end loop;
//? end $$
//* While tanımlıyoruz. Sonuca göre işlem yapıyor.

//! Loop döngüsü tanımlama
//? do $$
//? declare
//? sayac int :=1;
//? begin
//?     loop
//?         exit when sayac=5;
//?         raise notice 'Merhaba';
//?         sayac :=sayac+1;
//?     end loop;
//? end $$
//* Loop tanımlıyoruz. Sonuca göre işlem yapıyor.

//! Pg_sleep ile gecikmeli işlem yapma
//? select pg_sleep(2); select * from bolum
//* pg_sleep ile 2 saniye bekleme ayarlanır. Yapılacak işlem 2 saniye sonra yapılır.

//! Procedure ile hazır komut yapma
//? create procedure deneme()
//? language plpgsql
//? as $$
//? begin
//? raise notice 'postgresql dersi';
//? end $$

//? call deneme()
//* method, fonksiyonla benzer şekilde çalışır. Deneme() isimli procedure hazırlanır. Daha sonra call ile çağrılır.

//! Fonksiyon yazma
//? Create Function toplam(s1 int, s2 int)
//? returns int
//? language plpgsql
//? as $$
//? declare
//? 	sonuc integer;
//? begin
//? 	sonuc:=s1+s2;
//? 	return sonuc;
//? end $$;
//* yukarıdaki gibi parametreleri fonksiyon yazılır. Başka bir yerde çağrılır.

//!
//?
//*

// TODO *****************   LESSON 8*****************

// TODO *****************   LESSON 9*****************

// TODO *****************   LESSON 10*****************

// TODO *****************   LESSON 11*****************

// TODO *****************   LESSON 12*****************
