class Car {
    acceleration: number = 0;
    constructor(public name: string){}
    honk (){
        console.log(`${this.name} is saying: Tooooooooot!`);
    }
    accelerate (speed: number){
        this.acceleration = this.acceleration + speed; 
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);