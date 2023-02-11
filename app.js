//1* Написать алгоритм переворота строки. СТАНДАРТНУЮ ФУНКЦИЮ REVERSE НЕ ИСПОЛЬЗОВАТЬ. Например: "123456789" -> "987654321"

// let myCardNumber = '4177490157074610';
// let newResult = myCardNumber.split('').reverse().join('');
// console.log(newResult);

//2* Напишите программу, где пользователь вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа. Например: 5 -> 15 (потому что 1 + 2 + 3 + 4 + 5 = 15), 10 -> 55.

// let num = parseInt(prompt('Number', ''));
// let summ = 0;
// for (let i = 1;  i <= num; i++){
//   summ +=i;
// }
// console.log(summ);


//3* С помощью цикла while напишите программу определения суммы всех нечетных чисел в диапазоне от 1 до 99 включительно.


// let num = 1;6
// while( num ++ < 99){
//   if(num % 2 !==0){
//     console.log(num);
//   }
// };


//4* Составьте массив дней недели. С помощью цикла for выведите все дни недели со следующими правилами: будни должны быть написаны строчными буквами, а выходные заглавными. То есть на выходе должен быть массив: ["понедельник","вторник",...,"СУББОТА",....]

// const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

// let newDays = [];
// for (let i = 0; i < days.length; i++) {
//     if(i <= 4){
//       newDays.push(days[i].toLowerCase())
//     }else{
//       newDays.push(days[i].toUpperCase())
//     }  
// }
// console.log(newDays);






