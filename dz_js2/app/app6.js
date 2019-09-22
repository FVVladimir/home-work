// Конвертор валют 

let inSum = 0,
    eur = 1.1,
    uah = 25,
    azn = 0.59,
    conv = 0,
    outSum = 0;

inSum = +prompt('введите сумму в USD');
conv = +prompt('выберите валюту для конвертации: 1EUR 2UAH 3AZN');

if (conv == 1) {

    outSum = inSum * eur;
} 

if (conv == 2) {

    outSum = inSum * uah;
}

if (conv == 3) {
    outSum == inSum * azn;
}

alert(outSum);
