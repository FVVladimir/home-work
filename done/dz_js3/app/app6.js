//Зациклить калькулятор. Запросить у пользователя 2 числа
//и знак, решить пример, вывести результат и спросить, хо-
//чет ли он решить еще один пример. И так до тех пор, пока
//пользователь не откажется.

 
let con = true;

while(con == true){ 

    let
    int1 = +prompt('введите число 1 '),
    int2 = +prompt('введите число 2 '),
    sign = +prompt('введиет арифметический знак 1-сложить 2-вычитание 3-деление 4-умножение' ),    
    answ = 0;  
      
      switch(sign) {
      case 1:
        answ = int1 + int2;
      break;
      case 2:
         answ = int1 - int2;
      break;
      case 3:
          answ = int1 / int2;
       break;
      case 4:
         answ = int1 * int2;
      break;
      };
      console.log(answ);

           con = confirm ('хотите продолжить');

    };