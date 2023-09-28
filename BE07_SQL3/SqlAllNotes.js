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
