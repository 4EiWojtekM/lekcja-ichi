const SZKLANKA = 250;

szklanki = Number(prompt("Ile szklanek wody potrzebujesz wlać?"));

ml = szklanki * SZKLANKA;
litry = ml / 1000;
document.write(szklanki + " szklanek to " + ml + " mililitrów.<br>");
document.write("Czyli " + litry + " litrów.");