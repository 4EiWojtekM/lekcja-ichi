const matma = Number(prompt("Podaj ocene z matmy"));
const polak = Number(prompt("Podaj ocene z polaka"));
const infa = Number(prompt("Podaj ocene z infy"));
const srednia = (matma+polak+infa)/3
document.write(srednia.toFixed(2));
