//Зациклить вывод дней недели таким образом: «День недели.
//Хотите увидеть следующий день?» и так до тех пор, пока
//пользователь

//-----------------------/Реализация задаачи с помоцью цикла/---------------------------------------------------------


// const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let currDay = 0;

// while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
//   currDay = (currDay + 1) % days.length;

// }



//---------------------------/Реализация задачи с помощью конструкции Switch/----------------------------------------


outer: for(let d = 1; d > 0;){

  for(let day = 0; day <= 8; day++){
      switch (day) {
          case 2:
              if(confirm('Понедельник. Хотите увидеть следующий день?')){     
                  break;
              }else break outer;
          case 3:
              if(confirm('Вторник. Хотите увидеть следующий день?')){     
                  break;
              }else break outer;
          case 4:
              if(confirm('Среда. Хотите увидеть следующий день?')){     
                  break;
              }else break outer;
          case 5:    
              if(confirm('Четверг. Хотите увидеть следующий день?')){     
                  break;
              }else break outer;
          case 6:    
             if(confirm('Пятница. Хотите увидеть следующий день?')){     
                  break;
              }else break outer;
          case 7:    
              if(confirm('Суббота. Хотите увидеть следующий день?')){     
                  break;
              }else break outer;
          case 8:    
              if(confirm('Воскресенье. Хотите увидеть следующий день?')){     
                  break;
              }else break outer;            
      }  
  }  
 
}