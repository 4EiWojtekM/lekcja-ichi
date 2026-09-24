rachunek = Number(prompt("Podaj kwote rachunku"));
osoby = Number(prompt("Ile osob"));
procent = Number(prompt("Podaj wysokosc napiwku w procentach"));

napiwek = (rachunek * procent / 100).toFixed(2);
razem = (rachunek + Number(napiwek)).toFixed(2);
naOsobe = (razem / osoby).toFixed(2);

document.write("Rachunek: " + rachunek + " zl<br>");
document.write("Napiwek (" + procent + "%): " + napiwek + " zł<br>");
document.write("Razem: " + razem + " zl<br>");
document.write("Na osobę: " + naOsobe + " zl");
