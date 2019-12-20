//Запросить у пользователя число и на сколько цифр его
//сдвинуть. Сдвинуть цифры числа и вывести результат (если
//число 123456 сдвинуть на 2 цифры, то получится 345612).


//-------------------------/Реализация задачи с помощью массивов/--------------------------------------------------


let num = prompt('введите число'),
    sdvig = +prompt('введите на сколько знаков будет сдвиг'),
    int= 0,    
    arr = [];

    arr = num.split('');

    for(let i = 0; i < sdvig; i++){

        

       
        int = arr.shift();
        arr.push(int);

     };


console.log(arr);
console.log(int);
console.log(sdvig);

//-------------------------/Реализация задачи с помощью цикла/-------------------------------------------------------

// let num = prompt('Введите число: ',''),
//     sdvig = parseInt(prompt('На сколько сдинуть число? ','')),
//     countSdvig = num.length,
//     div_number = 0,
//     rem_div = 0,
//     rem = 1;

// while(countSdvig > sdvig ){

//     rem *=10;
//     rem_div = parseFloat(num % rem);

//     div_number = parseInt(num / rem);

//     countSdvig--;
// } 

// alert(String(rem_div) + String(div_number));