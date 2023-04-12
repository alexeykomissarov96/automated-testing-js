// car object
const car = {
    color:'black'
}
car.color = 'green'
car.power = enginePower => console.log(`Engine power = ${enginePower}`);

console.log(car);
car.power(200)

// pears and apples
function totalFruits(apples, pears) {
    return apples + pears
}

console.log(`number of accepted pears and apples = ${totalFruits(100, 200)}`)

// payment terminal
let savedName = 'Aleksei'

function nameChecking(yourName) {
    return (yourName === savedName) ? 'Hello, ' + yourName + '!' : 'There is no such name'
}

console.log(nameChecking('Aleksei'))
console.log(nameChecking('Alexander'))


// type of argument
const typeOfArgument = argument => console.log(typeof argument);

typeOfArgument(true)
typeOfArgument(8)
typeOfArgument('true')
typeOfArgument(null)


// prime number or not prime
let counter = 0

function primeOrNot(number) {
    if (number < 2) {
        return number + ' number is not prime'
    } else {
        for (let i = 2; i < (number / 2 + 1); i++) {
            if (number % i === 0) {
                counter ++  
            } 
        }
        if (counter === 0) {
            return number + ' number is prime'
        } else {
            return number + ' number is not prime'
        }
    }
}

console.log(primeOrNot(139));
console.log(primeOrNot(-3));
console.log(primeOrNot(0));
console.log(primeOrNot(140));


