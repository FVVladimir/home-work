//проверка одинаковых цифр в трехзначном числе

let a = 0, //вводимое число
    b = 0, //сотни
    c = 0, //десятки и еденици
    d = 0, //десятки
    e = 0; //еденици

a = +prompt('введите трехзначное,целое число');

//if (a < 100 && a > 999) {

    b = Math.floor(a / 100);
    c = a % 100;
    d = Math.floor(c / 10);
    e = c % 10;

//} else

//    alert('число не целое трехзначное');


if (b != d && e != d && b != e) {

    alert('нет одинаковых цифр');

} else

if (b == d && d == e) {

    alert('все цифры одинаковые');
} else

if (b == d || d == e || b == e) {

    alert('две цифры одинаковые');

}




//        b = a / 100; // количество сотен
//        c = a % 100; // десятки и еденицы
//        d = c / 10;  // количество десяток
//        e = c % 10;  // количество едениц
