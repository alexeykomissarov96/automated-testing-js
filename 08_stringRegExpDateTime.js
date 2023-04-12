// 1
const testString = 'ahb acb aeb aeeb adcb axeb'
const re = /a.b/g
console.log(testString.match(re));

// 2
const testString2 = '2 + 3 223 2223'
const regEx = /2...3/g
console.log(testString2.match(regEx));

// 3
let now = new Date()
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());