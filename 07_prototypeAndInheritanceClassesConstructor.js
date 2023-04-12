class Animal {

    constructor(name) {
        this.name = name
    }

    move(speed) {
        this.speed = speed
        console.log(`${this.name} move at a speed of ${this.speed} km/ h`);
    }
}


class Cat extends Animal {
    constructor(name, speed) {
        super(name, speed)
    }
}

const cat = new Cat('Grey cat')
cat.move(40)