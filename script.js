//Завдання 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Завдання 2
numbers.forEach(function(number) { console.log(number); });

//Завдання 3
const doubled = numbers.map(function(number) { return number * 2; });

//Завдання 4
const newNumbers = numbers.filter(function(number) {return number > 5; });

//Завдання 5
const sum = numbers.reduce(function(acc, number) { return acc + number; }, 0);

//Завдання 6
const isNumbers = numbers.some(function(number) { return number > 8; });


console.log(`${doubled}\n${newNumbers}\n${sum}\n${isNumbers}`);