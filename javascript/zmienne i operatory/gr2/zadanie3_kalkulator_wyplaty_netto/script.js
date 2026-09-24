stawka = Number(prompt("Podaj stawke"));
godziny = Number(prompt("Podaj liczbe godzin"));

wyplata = (stawka * godziny).toFixed(2);

document.write("Twoja wyplata za " + godziny + " godzin przy stawce " + stawka + " zl wynosi: " + wyplata + " zl");