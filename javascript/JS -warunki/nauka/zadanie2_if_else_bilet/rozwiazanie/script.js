const wiek = Number(prompt("Podaj wiek:"));
let rodzaj;
let cena;
if (wiek < 18) {
  rodzaj = "ulgowy";
  cena = 15;
} else {
  rodzaj = "normalny";
  cena = 25;
}
document.write("Bilet " + rodzaj + ", " + cena + " zł");
