var text = "ZSK - Zespół Szkół Komunikacji"
console.log(text.length);

var pierwszy = text.charAt();
console.log(pierwszy);

var ostatni = text.charAt(text.length -1);
console.log(ostatni);

//document.write(text.charAt(11));


//ASCII
document.write(text.charCodeAt(0));
document.write(text.charCodeAt(14));

//zamiana na duże litery

/*var duze = text.toUpperCase();
var male = text.toLowerCase();
console.log(male);

//camelCase zapis zmiennej
var duzeMale =text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
console.log(duzeMale);*/


//użytkownik wprowadza z klawiatury swoje imie zaminie pierwszy znak na duza litere a pozostale na maleWyświetl wszystko w nagłówku drugiego stopnia w kolorze niebieskimm


var imie = prompt("Imie: ");

var wypisz =imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
var text = document.getElementById('xd');
text.innerHTML = wypisz;

console.log(text.substr(1,text.length - 2));







