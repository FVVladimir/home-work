let d = 0,
    s = 0,
    t = 0;

text = 'рекомендуемая средняя скорость движения ';

d = +prompt('введите растояние между городами в километрах');
t = +prompt('введите время за которое вы хотите доехать в часах');

s = d / t;

alert(text + s);