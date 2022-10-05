// task1
// function camelize(str) {
//     return str
//       .split('-')
//       .map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); 
//   }

// task2
// function filterRange(arr, a, b) {
//   return arr.filter(item => (a <= item && item <= b));
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); 

// alert( arr ); 

// task3
// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }

// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); 

// alert( arr );

// task4
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr );

// task5
// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted );
// alert( arr );

// task6
// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       c = split[1],
//       b = +split[2];

//     if (!this.methods[c] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[c](a, b);
//   };

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }



// task7
// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 28};
// let users = [ vasya, petya, masha ];
// let names = users.map(item=>item.name);
// alert(names); // Вася, Петя, Маша

// task8
// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
// }
// let vasya = {name : " Вася ", age: 25};
// let petya = {name : " Петя ", age: 30};
// let masha = {name : " Маша ", age: 28};

// let arr = [ vasya , petya , masha ] ;

// sortByAge ( arr );

// // тепер : [ vasya , masha , petya ]
// alert( arr [0].name); // Вася
// alert ( arr [1].name); // Маша
// alert ( arr [2].name); // Петро


// task 9
// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }
// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 29};
// let arr = [ vasya, petya, masha ];
// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// task10
// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   } 

//     return result;
//   }
//   let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "крішна", ":-O"];
//   alert (unique (strings));

// // task11
// function unique(arr) {
//   return Array.from(new Set(arr));
// }


// task12
// function makeCounter() {
//   let count = 0;
//   return function() {
//   return count++; };}
//   let counter = makeCounter();
//   let counter2 = makeCounter();
//   alert (counter ()); // 0
//   alert (counter ()); // 1
//   alert (counter2 ()); //0
//   alert (counter2 ()); //1

// Функція вкладена, проте, на мою думку, правильно було б якби return перший стояв би останнім, адже так тоді повертаємо 0 ще до виконання вкладеної функції 
//і вже після нуля повертається одиниця. 

//  task13
// function Counter() {
//   let count = 0;
//   this.up = function() {
//   return ++count;
//   };
//   this.down = function() {
//   return - count;
//   };
//   }
//   let counter = new Counter();
//   alert(counter.up()); //?
//   alert(counter.up()); //?
//   alert(counter.down() ); //?

//Тут відміна у формі писання знака, тому тут відразу будуть нові значення, і чому виводяться 1 та 2, то тут глобальний скоуп та локальний скоуп, спочатку йде локальний 
// він збільшив на одиницю, потім через глобальний одиниця переросла у двійку, а інша функція повернула останнє значення зі знаком мінус

// task14
// function factorial(n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// }
// alert( factorial(5) ); // 120