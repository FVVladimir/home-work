// ввод текущей даты 
// вывод - следующий день 

let NowDate = prompt('Введите дату в формате мм/дд/гг');
let date = new Date();

  date.setTime(Date.parse(NowDate)); //в date вставляем нашу дату из NowDate

    date.setDate(date.getDate() + 1); //прибавляем 1 день к полученной дате

        alert(date);
