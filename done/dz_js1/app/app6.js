let d = 0,
    e = 0;    
    
const kd = 1.15;
      
   text = 'Ваша сумма в евро ';

d = parseInt(prompt('введите сумму в долларах'));

e = d / kd;

alert(text + e);

