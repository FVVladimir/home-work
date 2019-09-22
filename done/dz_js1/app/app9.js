var x = 0,
    y = 0;

    x = +prompt('введите число');

for(; x; x = Math.floor(x / 10)) {
    y *= 10;
    y += x % 10;
}

alert(y);