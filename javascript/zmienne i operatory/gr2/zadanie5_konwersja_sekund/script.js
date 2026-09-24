godzina = Number(prompt("Podaj godzine"));
minuta = Number(prompt("Podaj minute"));
sekunda = Number(prompt("Podaj sekunde"));

wynik = godzina * 60 * 60 + minuta * 60 + sekunda;

document.write("Od polnocy minelo: " + wynik + " sekund.");
