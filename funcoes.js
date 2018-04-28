function pegaNumeroRealDoUsuario(frase){
        return parseFloat(prompt(frase).replace(",","."));
}
function converteDecimalPraTexto(decimal) {
        return decimal.toFixed(2).replace(".",",");
}