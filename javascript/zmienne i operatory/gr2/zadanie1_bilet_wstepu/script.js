imie = prompt("Podaj imię");
nazwisko = prompt("Podaj nazwisko");
rodzaj = prompt("Podaj rodzaj biletu");
cena = Number(prompt("Podaj cenę biletu"));

document.write("<h2>" + imie + " " + nazwisko + "</h2>");
document.write("<b>Rodzaj:</b> " + rodzaj + "<br>");
document.write("<b>Cena:</b> " + cena + " PLN");