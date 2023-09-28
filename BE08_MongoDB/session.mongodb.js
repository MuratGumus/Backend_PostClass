	/* MongoSH */
	// https://www.mongodb.com/developer/products/mongodb/cheat-sheet/
	// https://www.mongodb.com/docs/manual/reference/sql-comparison/
	// https://www.w3schools.com/mongodb/index.php

	/* General */
	// help
	help  // Yardım sekmesi açılır
	// clearScreen:
	cls // $ console.clear() // ekranı temizler

	mongosh  // terminalde js alanında mongodb alanına geçmemizi sağlar

	// exit from mongosh: // terminalde mongodb alanından js alanına dönmemizi sağlar
	exit // $ exit() // $ .exit
	quit // $ quit()


	/* Databases */
	show('dbs') // $ show dbs // $ show databases // Bağlı olduğumuz veri tabanı sistemindeki veri tabanlarını gösterir
	// Create/Swicth to Database:
	use('newdb') // $ use newdb  // farklı bir veritabanı olan newdb veri tabanına geçiş yapmamızı sağlar. artık newdb veritabanında çalışırız.
	// Drop/Reset:
	db.dropDatabase()  // database'i silmemizi sağlar


	/* Collections (Tables) */
	// mongodb.com/docs/manual/reference/method/js-collection/
	show('collections') // $ show collections // $ show tables
	db.getCollectionNames() // List  // Collection'ların isimlerini gösterir.
	db.getCollectionInfos() // List  // Collection'ların detaylarını gösterir
	db.createCollection('collName') // Create // Collection oluşturmamızı sağlar
	db.collName.renameCollection('collName2') // Update  // Collenction'ın ismini değiştirmemizi sağlar
	db.collName2.drop() // Drop  // Collection'ı silmemizi sağlar


	/* Documents (Records/Rows) */  
	
	// CRUD İŞLEMLERİ
	// Tekil işlem yapacaksak işlemin yanına one, birden fazlaya işlem yapacaksak işlemin yanına many yazacağız.

	// INSERT: SQL' deki insert (create) komutuna karşılık olarak insertone veya insertmany kullanılır
	// db.coll.insertOne( { new_values } )
	// db.coll.insertMany( [ { new_values } ] )
	db.coll.insertOne({ firstName: 'Test', lastName: 'Test', age: 10 })  // Tekli ekleme
	db.coll.insertMany([ // in array[]   // Çoklu kayıt göndermemizi sağlar. Array içerisinde göndermemiz gerekir.
		{ firstName: 'Test1', lastName: 'Test1', age: 11 },
		{ firstName: 'Test2', lastName: 'Test2', age: 12 },
		{ firstName: 'Test3', lastName: 'Test3', age: 13 },
		{ firstName: 'Test4', lastName: 'Test4', age: 14 },
		{ firstName: 'Test5', lastName: 'Test5', age: 15 },
		{ firstName: 'Test6', lastName: 'Test6', age: 16 },
		{ firstName: 'Test7', lastName: 'Test7', age: 17 },
		{ firstName: 'Test8', lastName: 'Test8', age: 18 },
		{ firstName: 'Test9', lastName: 'Test9', age: 19 },
		{ firstName: 'Test', lastName: 'Test', age: 10 },
		{ firstName: 'Test1', lastName: 'Test1', age: 11 },
		{ firstName: 'Test2', lastName: 'Test2', age: 12 },
		{ firstName: 'Test3', lastName: 'Test3', age: 13 },
		{ firstName: 'Test4', lastName: 'Test4', age: 14 },
		{ firstName: 'Test5', lastName: 'Test5', age: 15 },
		{ firstName: 'Test6', lastName: 'Test6', age: 16 },
		{ firstName: 'Test7', lastName: 'Test7', age: 17 },
		{ firstName: 'Test8', lastName: 'Test8', age: 18 },
		{ firstName: 'Test9', lastName: 'Test9', age: 19 },
		{ firstName: 'Test', lastName: 'Test', age: 10 },
		{ firstName: 'Test1', lastName: 'Test1', age: 11 },
		{ firstName: 'Test2', lastName: 'Test2', age: 12 },
		{ firstName: 'Test3', lastName: 'Test3', age: 13 },
		{ firstName: 'Test4', lastName: 'Test4', age: 14 },
		{ firstName: 'Test5', lastName: 'Test5', age: 15 },
		{ firstName: 'Test6', lastName: 'Test6', age: 16 },
		{ firstName: 'Test7', lastName: 'Test7', age: 17 },
		{ firstName: 'Test8', lastName: 'Test8', age: 18 },
		{ firstName: 'Test9', lastName: 'Test9', age: 19 },
	])
	// db.coll.insert() method is depracated.


	/* SELECT */  //SQL'deki select (read) yerin findone veya find kullanılır
	// db.coll.findOne( { filters }, { fields } )  // Tekli işlem için kullanılır. Bulduğu ilk şeyi döndürür.
	// db.coll.find( { filters }, { fields } )  // Çoklu işlem için kullanılır
	db.coll.findOne()
	db.coll.findOne({ firstName: 'Test' })
	db.coll.find()
	db.coll.find({ firstName: 'Test' })
	db.coll.find({/* all */ }, { _id: false, firstName: true, lastName: true }) // Select Fields
	db.coll.distinct('firstName') // Aynı kayıtların sadece bir kez getirilmesini sağlar. Tekrar edenler sadece 1 defa gösterilir.
	// Comparison:
	// Mongodb komutlarının başına $ eklenir.
	db.coll.find({ 'age': { $exists: true } }) // if exists
	db.coll.find({ 'age': { $eq: 15 } }) // == : equal
	db.coll.find({ 'age': { $ne: 15 } }) // <> : not equal
	db.coll.find({ 'age': { $gt: 15 } }) // > : greather than
	db.coll.find({ 'age': { $gte: 15 } }) // >= : greather than equal
	db.coll.find({ 'age': { $lt: 15 } }) // <= : less than equal
	db.coll.find({ 'age': { $lte: 15 } }) // <= : less than equal
	db.coll.find({ 'age': { $in: [10, 11, 12] } }) // in list
	db.coll.find({ 'age': { $nin: [10, 11, 12] } }) // not in list
	// Regex: Yazının herhangi bir yerinde belirtilen metin varsa döndürür
	// mongodb.com/docs/manual/reference/operator/query/regex/
	db.coll.find({ firstName: { $regex: 'Test' } }) // Contains 'Test' // Bu yazım ile alttaki yazım aynı sonucu döndürür
	db.coll.find({ firstName: /Test/ }) // Contains 'Test'  // Bu yazım ile yukarıdaki yazım aynı sonucu döndürür
	db.coll.find({ firstName: /test/i }) // Case-InSensitive  // büyük küçük harf hassasiyetini kaldırır
	db.coll.find({ firstName: /^Test/ }) // StartsWith 'Test'  // Test ile başlama şartı ekler
	db.coll.find({ firstName: /Test$/ }) // EndsWith 'Test' // Test ile bitme şartı ekler
	// Logical:
	db.coll.find({ 'age': { $not: { $eq: 15 } } }) // NOT {EQUAL}  // 15'e eşit olmayanları döndürür
	db.coll.find({ 'firstName': 'Test6', 'age': 16 }) // default: AND  
	db.coll.find({ $and: [{ 'firstName': 'Test6' }, { 'age': 16 }] }) // AND  // Her iki şartı sağlayanı döndürür
	db.coll.find({ $or: [{ 'firstName': 'Test6' }, { 'age': 15 }] }) // OR  // İki şarttan birini sağlayanı döndürür
	db.coll.find({ $nor: [{ 'firstName': 'Test6' }, { 'age': 15 }] }) // NOT OR  //İki şartı da sağlamayanı döndürür
	// Limit:
	db.coll.find().limit(5)  // İlk 5 kaydı döndürür
	db.coll.find().skip(5).limit(5)  // İlk 5 kaydı atla sonraki 5 kaydı döndürür
	// Sort (1:ASC, -1:DESC):  // Normal sıralama için 1, tersten sıralama için -1 kullanırız
	db.coll.find().sort({ age: -1 }).limit(5)  //
	// Count:  // kayıt sayısını belirtiriz
	db.coll.find().count()
	db.coll.countDocuments() // ShortHand find().count()
	db.coll.countDocuments({ firstName: 'Test' })
	db.coll.estimatedDocumentCount() // for bigData
	// db.coll.count() method is depracated.


	// UPDATE:  // Kaydı güncellemek için kullanılır
	//  Set ile varsa kayıt güncellenir yoksa kayıt eklenir
	// db.coll.updateOne( { filters }, { $set: { new_values } } )
	// db.coll.updateMany( { filters }, { $set: { new_values } } )
	db.coll.updateOne({ age: 19 }, { $set: { new_fields: 'new_value' } }) // Add/Update field
	db.coll.updateOne({ age: 19 }, { $set: { new_fields: 'new_value2' } }) // Add/Update field
	db.coll.updateMany({ age: 19 }, { $set: { new_fields: 'new_value3' } }) // Add/Update field
	db.coll.updateMany({/* all */ }, { $unset: { new_fields: 0 } }) // Drop field  // new_fields'i siler
	db.coll.updateMany({/* all */ }, { $currentDate: { updated_at: true } }) // set currentDate to field
	db.coll.updateMany({/* all */ }, { $inc: { age: 2 } }) // increment (age+2) field
	db.coll.updateMany({/* all */ }, { $rename: { updated_at: 'updated' } }) // rename field
	// db.coll.update() method is depracated.


	// DELETE:
	// db.coll.deleteOne( { filters } )
	// db.coll.deleteMany( { filters } )
	db.coll.deleteOne({ age: 19 })
	db.coll.deleteMany({ age: 19 })
	db.coll.deleteMany({/* all */ }) // Delete all documents.
	// db.coll.remove() method is depracated.