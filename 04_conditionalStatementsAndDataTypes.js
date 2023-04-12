// Addition
let addition1 = 'Hello' + true; // Hellotrue
console.log('string + boolean = ', addition1);

let addition2 = 'Hello' + 8; // Hello8
console.log('string + number = ', addition2); 

let addition3 = 8 + true; // 9
console.log('number + boolean(true) = ', addition3);

let addition4 = 8 + 0; // 8
console.log('number + boolean(false) = ', addition4);

// Multiplication
let multiplication1 = 'Hello' * true; // NaN
console.log('string * boolean = ', multiplication1);

let multiplication2 = 'Hello' * 8; // NaN
console.log('string * number = ', multiplication2);

let multiplication3 = 8 * true; // 8
console.log('number * boolean(true) = ', multiplication3);

let multiplication4 = 8 * false; // 0
console.log('number * boolean(false) = ', multiplication4);

// Division
let division1 = 'Hello' / true; // NaN
console.log('string / boolean = ', division1);

let division2 = 'Hello' / 8; // NaN
console.log('string / number = ', division2);

let division3 = 8 / true; // 8
console.log('string / boolean(true) = ', division3);

let division4 = 8 / false; // Infinity
console.log('string / boolean(false) = ', division4);

// Numeric conversion
let a = '8' 
let b = Number(a)
console.log(b, 'is', typeof b); // 8 is a number

let c = true
let d = Number(c)
console.log(d, 'is', typeof d); // 1 is a number

// String conversion
let e = false 
let f = String(e)
console.log(f, 'is', typeof f); // false is a string

let g = 8
let h = String(g)
console.log(h, 'is', typeof h); // 8 is a string

// Boolean conversion
let i = 1 
let j = Boolean(i)
console.log(i, 'is', typeof j); // true is boolean

let k = '' 
let l = Boolean(k)
console.log(l, 'is', typeof l); // false is boolean

