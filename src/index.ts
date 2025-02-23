// import classes
import Truck from "./classes/truck.js";
import Car from "./classes/car.js";
import Motorbike from "./classes/motorbike.js";
import Wheel from "./classes/wheel.js";
import Cli from "./classes/cli.js";

// create an array of vehicles
const vehicles: (Truck | Car | Motorbike)[] = [];

// create a truck
const truck = new Truck(
  Cli.generateVin(),
  'red',
  'Ford',
  'F-150',
  2021,
  5000,
  120,
  [],
  10000
);

// create a car
const car = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  [],
);

// create a motorbike
const motorbikeWheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbikeWheels);

// push vehicles to array
vehicles.push(truck);
vehicles.push(car);
vehicles.push(motorbike);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();

