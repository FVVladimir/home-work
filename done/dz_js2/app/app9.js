// викторина

let quesOne = 0,
    quesTwo = 0,
    quesThree = 0,
    global = 0;


quesOne = parseInt(prompt('длинна окружности равна 1-пр2 2-п2 3-р/2'));

quesTwo = parseInt(prompt('оператор присвоения в js 1-= 2-== 3-=== '));

quesThree = parseInt(prompt('теги в HTML берутся в 1-() 2-{} 3-<>'));



if (quesOne == 1) {

    global = global + 2;

} else;

if (quesTwo == 2) {

    global = global + 2;

} else;

if (quesThree == 3) {

    global = global + 2;

} else;


alert("ваш результат = " + global + " баллов");
