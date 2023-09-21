-- -- -- -- --  SQL RULES -- -- -- -- -- -- -- 

-- Bu satır artık bir yorum satırıdır. SingleLine Comment

/*
	Multiline Comment
	Çok satırlı yorum
*/

-- SELECT 1 AS one; -- Endline Comment
-- SELECT 1 AS one, /* InLine Comment. Satır içerisinde yorum */ 2 AS one;

-- NOT Case-Sensitive, Küçük büyük harf fark etmez
-- select 1 as one; // Standart dışı kullanım. kod çalışır ama bu şekilde yazım tavsiye edilmez
-- SELECT 1 AS ONE; // Tabsiye edilen standart kullanım

-- SEPARATOR = ; (Noktalı Virgül)
-- SELECT 1 AS one -- Tek block işlemler için noktalı-virgül zorunlu değildir. 

-- * Piyasa Standartları:
-- * * SQL Temel komutları BÜYÜK harfle yazılır. SELECT * FROM Album WHERE AlbumID=1;
-- * * String verilerde tek-çift tırnak kullanabilirsiniz. Standart olan tek tırnaktır.  SELECT 'string' AS yazi;
-- * * Her bir temel komut yeni bir satıra yazılır:

/* Tavsiye edilen yazım tarzıdır. Kodlar yan yana değil alt alta yazılır.
SELECT	* 
FROM	Album 
WHERE	AlbumID=1;
*/

--- --- --- SQL --- --- ---

-- * SELECT - Seç getir. CRUD işlemlerinde READ'e karşılık gelir
-- * FROM - Hangi tablodan? Hangi veriyle işlem yapacağımızı belirtiriz

-- SELECT * FROM Album;  -- * = Tüm sutunlar. * = ALL
-- SELECT AlbumId, Title FROM Album; -- İstediğim sutunları getir. -- Tavsiye edilen yöntem ayrı-ayrı yazmaktır.
------

-- * AS -- Tablo veya Sutunları geçici adlandırmak için kullanılır. -- Lakap Takma

-- SELECT 1 AS baslik;
-- SELECT 'data' AS baslik; // AnyData
-- SELECT 2*2 AS sonuc; -- Matematiksel ifade
-- SELECT AlbumId AS AlbumNO, Title AS Baslik FROM Album; -- Sutun isimlendirme. AlbumId'yi AlbumNO, Title'ı Baslık adıyla yazdır.
-- SELECT AlbumId+5 AS AlbumNO, Title AS Baslik FROM Album; -- Sutun isimlendirme. AlbumId'lerin numaralarını 5 artırarak yazdır.
-- SELECT Album.AlbumId, Album.Title FROM Album; --SELECT AlbumId, Title FROM Album ile aynı koddur.
-- SELECT a.AlbumId, a.Title FROM Album AS a; -- Tablo isimlendirme
-- SELECT a.AlbumId AS Numara, a.Title AS Baslik FROM Album AS a; -- SELECT Album.AlbumId, Album.Title FROM Album ile aynı koddur
-- SELECT a.AlbumId Numara, a.Title Baslik FROM Album a;

-- * DISTINCT - Tekrar edilen kayıtarın tekrar edilmesini engeller (tek kayıt olarak getirir). Tamamen birbirinin aynısı olan kayıtların tekrar tekrar gösterirmesini engeller. Sadece bir kez gösterilir
-- SELECT DISTINCT City FROM Customer;
-- * ORDER BY VERİLERİ HANGİ SIRAYLA YAZDIRACAĞINI BELİRTİR. (0-9, A-Z)
-- SELECT DISTINCT City, Country FROM Customer ORDER BY Country ASC; -- Bütün sutunlardaki ortak olanları 1 kere getirir.

-- * WHERE - Filtreleme
-- SELECT * FROM Customer WHERE Country = 'USA' -- Tüm müşterilerden ülkesi USA olanları yazdır
-- SELECT * FROM Customer WHERE Country != 'USA' -- Tüm müşterilerden ülkesi USA olmayanları yazdır
-- SELECT * FROM Customer WHERE Country <> 'USA'  -- Tüm müşterilerden ülkesi USA olmayanları yazdır
-- SELECT * FROM Customer WHERE CustomerId > 20 -- Tüm müşterilerden customerid'si 20'den büyük olanları yazdır
-- SELECT * FROM Customer WHERE CustomerId >= 20 -- Tüm müşterilerden customerid'si 20'den büyük veya eşit olanları yazdır
-- SELECT * FROM Customer WHERE CustomerId < 20 -- Tüm müşterilerden customerid'si 20'den küçük olanları yazdır
-- SELECT * FROM Customer WHERE CustomerId <= 20 -- Tüm müşterilerden customerid'si 20'den küçük veya eşit olanları yazdır
-- SELECT * FROM Customer WHERE CustomerId BETWEEN 10 AND 20 -- 10 ile 20 arasında olanları getir. (her ikiside dahil)
------

-- * WHERE - AND/OR/NOT 
-- AND => Tüm şartlar sağlıyorsa true döndürür
-- OR => Kendisinden öncekiler ya da kendisi şartı sağlıyorsa true döndürür
-- NOT => Değili manasındadır.
-- * SELECT * FROM table WHERE True OR NOT True
-- SELECT * FROM Customer WHERE NOT Country = 'USA' -- Ülkesi olanlar hariç Tüm müşterileri yazdır
-- SELECT * FROM Customer WHERE Country = 'USA' AND Company NOT NULL -- Ülkesi USA olanlar ve şirketi null olmayanlar tüm müşterileri yazdır
-- SELECT * FROM Customer WHERE Country = 'USA' OR Country = 'Brazil' OR Country = 'Denmark' -- Ülkesi USA, Brazil veya Denmark olan tüm müşterileri yazdır
-- SELECT * FROM Customer WHERE (Country = 'USA' OR Country = 'Brazil' OR Country = 'Denmark') AND CustomerId > 25 -- Ülkesi USA, Brazil veya Denmark olan ve cumtomerid'si 25'ten büyük olan tüm müşterileri yazdır
-- SELECT * FROM Customer WHERE (Country = 'USA' OR Country = 'Brazil' OR Country='Denmark') AND (CustomerId BETWEEN 25 AND 27) -- (Ülkesi USA, Brazil veya Denmark olan) ve (cumtomerid'si 25 ile 27 arasında) olan tüm müşterileri yazdır
-----

-- * WHERE - IN / NOT IN  // WHERE ile aynı şekilde filtreleme yapar
-- SELECT * FROM Customer WHERE Country IN ('USA', 'Brazil', 'Denmark');   -- Ülkesi USA, Brazil veya Denmark olan tüm müşterileri yazdır
-- SELECT * FROM Customer WHERE Country NOT IN ('USA', 'Brazil', 'Denmark'); -- Ülkesi USA, Brazil veya Denmark olmayan tüm müşterileri yazdır
-- SELECT * FROM Customer WHERE CustomerID IN (2,3,4,10,11); -- CustomerId'si 2,3,4,10,11 olan tüm müşterileri yazdırır.
(edited)






*/









