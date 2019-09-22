//  расчет скидки в зависимости от суммы покупки

let sum = 0,
    sumJen = 0,
    discount = 0,
    disOne = 0.03,
    disTwo = 0.05,
    disThree = 0.07;

sum = +prompt('Введите сумму покупки');

if (sum > 200 || sum < 300) {

    discount = sum * disOne;
    sumJen = sum - discount;
}
if (sum > 300 || sum < 500) {

    discount = sum * disTwo;
    sumJen = sum - discount;
}
if (sum > 500) {

    discount = sum * disThree;
    sumJen = sum - discount;
}

alert('к оплате' + sumJen);
