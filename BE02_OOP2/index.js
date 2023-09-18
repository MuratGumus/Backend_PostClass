"use strict"

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



