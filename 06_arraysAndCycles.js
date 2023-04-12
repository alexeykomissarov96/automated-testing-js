// 1
const movies = ['Pulp Fiction', 'Kill Bill', 'Django Unchained', 'The Hateful Eight']
for (let title of movies) {
    console.log(title);
}

// 2
const carManufactures = ['Ford', 'Mitsubishi', 'Toyota', 'Renault']
const arrayToString = String(carManufactures);
console.log(arrayToString);
const stringToArray = arrayToString.split(',')
console.log(stringToArray);

// 3
const friends = ['Alina', 'Ekaterina', 'Rustam', 'Diana'].map(name => 'Hello, ' + name)
console.log(friends);

// 4
const numbers = [-1, 0, 1, 2, 3].map(number => Boolean(number))
console.log(numbers);

// 5
const arr = [1,6,7,8,3,4,5,6]
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
arr.sort(compareNumeric)
arr.reverse(compareNumeric)
console.log(arr);

// 6
const arr2 = [1,6,7,8,3,4,5,6]
const arrIsSorted = arr2.filter(currentNumber => currentNumber > 3)
console.log(arrIsSorted);

// 7  
let arrayOne = [19, 4, 5, 66, 0, 9, 54]
let arrayTwo = [4, 15, 78, 33, 10, 12]

function arrayElement(array, number) {
    console.log(`Index of number ${number} is ${array.indexOf(number)}`);
}

arrayElement(arrayOne, 66)
arrayElement(arrayTwo, 10)

// 8
let a = 0
while (a < 15) {
    console.log(a);
    a++
}

// 9 

let number = 100
for (let i = 1; i <= number; i++) {
    for (let k = 2; k <= i ; k++) {
        if (i % k === 0 && i !== k) {
            break
        } else if (i === k) {
            console.log(i);
        }
    }
}


// 10
for (let i = 0; i < 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}



