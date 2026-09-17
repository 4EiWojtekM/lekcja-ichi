const cux = prompt("Ile masz cukierków:");
const bahor = prompt("Ile masz dzieci:");
const ilosc = Math.floor(cux/bahor);
const ilosc2 = cux%bahor;
document.write("Mozesz dac maxymalnie "+ilosc+" cukierków bahorom. A mi zostanie "+ilosc2);
