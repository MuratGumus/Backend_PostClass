"use strict";

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

/* ------------------------------------------------------- */
//? OBJECT DESTRUCTURING

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

// Object to JSON:
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
------------------------------------------------------- */

const PascalCaseNamed = function () {
    this.property = "value";
};

/* ------------------------------------------------------- */
//? "NEW" KEYWORD

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
