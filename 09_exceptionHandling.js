try {
    console.log(a);
    let a = 3
} catch {
    console.log('let must be declared before use');
}


let b = 1 / 0
try {
    if (b === Infinity) {
        throw new Error
    } else {
        console.log(b);
    }
} catch {
    console.log('cannot be divided by zero');
}

