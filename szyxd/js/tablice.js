var kolory = ["biały", "zielony", "czerwony"];
var elKolor = document.getElementById("kolor");
elKolor.textContent = kolory[0];


/*
var samochody = new Array("BMW","Audi","Ferrari");

console.log(samochody[0]);
console.log(samochody[samochody.length -1]);
console.log("ilość elemntów" + samochody.length);

var nowy = prompt("podaj cos");
samochody[0] = nowy;
elKolor.textContent = samochody;
*/



var tab = new Array (
new Array("Jan", "Kowal", "Poznań"),
new Array("Anna", "Kowal", "Gniezno"),
new Array("Anna", "Kowal", "Poznań")

);

console.log(tab[1][2]);

var imiona = ["Janusz", "Adrian", "Andrzej", "Zenon"];
console.log(imiona);

var posertowaneimiona = imiona.sort();
console.log(posertowaneimiona);

var odwrocimiona = posertowaneimiona.reverse();

odwrocimiona.pop();
odwrocimiona.unshift("Paweł");
odwrocimiona.push("Krystiana");
console.log(odwrocimiona);

console.log(odwrocimiona.indexOf("Józek"));
console.log(odwrocimiona.indexOf("Paweł"));


var cyfry = [1,2,20,190,-1,1000000];
console.log(cyfry)
var posortowaneCyfry = cyfry.sort();
console.log(posortowaneCyfry);

var sortujCyfryPrawidlowo = cyfry.sort(function(a,b){return (a-b);
                                                    
});
console.log(sortujCyfryPrawidlowo);


//zad dom utworz formularz z loginemtext i haslempassword zapisz dane w tablicy zapisz wynik w nagłówku drugiego stopnia uzytkownik podaje rowniez kolor w jakim ma byc wszystko wyswietlone


