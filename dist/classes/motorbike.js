// Importing Vehicle and Wheel classes
import Vehicle from './vehicle.js';
import Wheel from './wheel.js';
// The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
    // The properties should include vin, color, make, model, year, weight, top speed, and wheels
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        if (wheels.length !== 2) {
            this.wheels = [new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    // Create a constructor that accepts the properties of the Motorbike class
    wheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    // The properties should include vin, color, make, model, year, weight, top speed, and wheels
    // The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]) 
    printDetails() {
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`Front Wheel: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
        console.log(`Rear Wheel: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
