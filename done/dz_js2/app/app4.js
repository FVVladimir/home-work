// проверка кратности вводимого года 

let i = 0;

i = parseInt(prompt('введите год в формате ХХХХ'));

if (i % 400 == 0){
    
    alert('год високосный');
}else
    
    alert('год не високосный');