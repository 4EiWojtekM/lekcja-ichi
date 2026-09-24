const euro = 4.30;
const dolar = 3.90;
nasz=Number(prompt("POdaj ile chcesz wymienic"));
eurow = (nasz/euro).toFixed(2);
dolarw = (nasz/dolar).toFixed(2);
document.write("Kwota "+nasz+" PLN to: "+"<hr>"+eurow+" EUR"+"<hr>"+dolarw+" USD");