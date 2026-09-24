const STAWKA_VAT = 0.23;
nazwa = prompt("Podaj nazwe towaru");
cena = Number(prompt("Podaj cene netto towaru"));
pod = Number((cena*STAWKA_VAT).toFixed(2));
bru = (cena + pod).toFixed(2);
document.write("Towar: "+nazwa+" Cena netto: "+cena+" Podatek: "+pod+" Cena brutto: "+bru);