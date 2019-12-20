//определить возраст
let age = 0;

age = parseInt(prompt('введите свой возраст'));

if (age < 12) {

    alert('вы ребенок');
} else

if (age > 12 || age < 18) {

    alert('вы подросток');
} else

if (age > 18 || age < 60) {

    alert('вы взрослый(ая)');
} else

if (age < 65) {
    alert('вы пенсионер');
}
