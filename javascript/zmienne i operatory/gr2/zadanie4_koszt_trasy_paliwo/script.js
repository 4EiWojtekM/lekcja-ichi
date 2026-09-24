trasa = Number(prompt("Podaj dlugosc trasy w km"));
spalanie = Number(prompt("Podaj spalanie w l/100 km"));
cenapaliwa = Number(prompt("Podaj cene paliwa za litr"));

ilosclitrow = ((trasa / 100) * spalanie).toFixed(2);
koszt = (ilosclitrow * cenapaliwa).toFixed(2);

document.write("Potrzebujesz " + ilosclitrow + " litrow paliwa.<br>");
document.write("Koszt wyprawy: " + koszt + " zl.");
