"use strict";

// TODO *****************   LESSON 1 - OOP1  *****************
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

// TODO ***************  LESSON 2  - OOP2    ***************

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

// TODO *****************   LESSON 3 - NodeJs Server    *****************

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

// TODO *****************   LESSON 4*****************

// TODO *****************   LESSON 5*****************

// TODO *****************   LESSON 6*****************

// TODO *****************   LESSON 7*****************

// TODO *****************   LESSON 8*****************

// TODO *****************   LESSON 9*****************

// TODO *****************   LESSON 10*****************
