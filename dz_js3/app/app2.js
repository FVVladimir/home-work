//наибольший общий делитель двух запрашиваемых чисел

let str1 = 0,
    str2 = 0,
    delitel = 0,
    p, r;


str1 = prompt("Введите первое число");
num1 = parseInt(str1);
str2 = prompt("Введите второе число");
num2 = parseInt(str2);


if (num1 < num2) {
    p = num2;
    num2 = num1;
    num1 = p;
}
do {
    if (num1 % num2 == 0) {
        delitel = num2;
    } else {
        r = num2;
        num2 = num1 % num2;
        num1 = r;
        delitel = num2;
    }
}
while (num1 % num2 != 0);
if (delitel != 1) {
    
    alert("Наибольшим общим делителем чисел" + str1 + " и " + str2 + " является число..." + delitel);
} else {
    alert("Общего делителя нет");
}
