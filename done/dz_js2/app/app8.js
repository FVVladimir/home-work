// проверка возможности вписать окружность в квадрат
// зная переиметер квадратаи длину окружности

let circle = 0,
    diam = 0,
    squaer = 0,
    oneSide = 0,
    p = 3.14;

circle = +prompt('введите длинну окружности');
squaer = +prompt('введите периметр сторон квадрата');

diam = circle / p;
oneSide = squaer / 4;

if (oneSide > diam) {

    alert(' есть возможность вписать данную окружность в данный квадрат');
} else

    alert(' нет возможности вписать данную окружность в данный квадрат');
