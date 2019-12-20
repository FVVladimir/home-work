//запросить число и вывести все делители этого числа

let num = parseInt(prompt('введите число'));
let divisions = [];

for (i = 0; i <= num; i++){
    
    if(num % i == 0){
     
      divisions.push(i);
 }
}

console.log(divisions);