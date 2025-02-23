// importing classes from other files
import inquirer from "inquirer";
import Truck from "./truck.js";
import Car from "./car.js";
import Motorbike from "./motorbike.js";
import Wheel from "./wheel.js";
// define the Cli class
class Cli {
    // Update the constructor to accept Car, Truck, and Motorbike objects
    constructor(vehicles) {
        // Update the vehicles property to accept Car, Truck, and Motorbike objects
        this.vehicles = [];
        this.exit = false;
        this.vehicles = vehicles;
    }
    // static method to generate a vin
    static generateVin() {
        // return a random string
        return (Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15));
    }
    // method to choose a vehicle from existing vehicles
    chooseVehicle() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'selectedVehicleVin',
                message: 'Select a vehicle to perform an action on',
                choices: this.vehicles.map((vehicle) => {
                    return {
                        name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                        value: vehicle.vin,
                    };
                }),
            },
        ])
            .then((answers) => {
            // set the selectedVehicleVin to the vin of the selected vehicle
            this.selectedVehicleVin = answers.selectedVehicleVin;
            // perform actions on the selected vehicle
            this.performActions();
        });
    }
    // method to create a vehicle
    createVehicle() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'vehicleType',
                message: 'Select a vehicle type',
                choices: ['Car', 'Truck', 'Motorbike'],
            },
        ])
            .then((answers) => {
            if (answers.vehicleType === 'Car') {
                // create a car
                this.createCar();
            }
            else if (answers.vehicleType === 'Truck') {
                // create a truck
                this.createTruck();
            }
            else if (answers.vehicleType === 'Motorbike') {
                // create a motorbike
                this.createMotorbike();
            }
        });
    }
    // method to create a car
    createCar() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
        ])
            .then((answers) => {
            const car = new Car(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), []);
            // push the car to the vehicles array
            this.vehicles.push(car);
            // set the selectedVehicleVin to the vin of the car
            this.selectedVehicleVin = car.vin;
            // perform actions on the car
            this.performActions();
        });
    }
    // method to create a truck
    createTruck() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
            {
                type: 'input',
                name: 'towingCapacity',
                message: 'Enter Towing Capacity',
            },
        ])
            .then((answers) => {
            const truck = new Truck(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [], parseInt(answers.towingCapacity));
            // push the truck to the vehicles array
            this.vehicles.push(truck);
            // set the selectedVehicleVin to the vin of the truck
            this.selectedVehicleVin = truck.vin;
            // perform actions on the truck
            this.performActions();
        });
    }
    // method to create a motorbike
    createMotorbike() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
            {
                type: 'input',
                name: 'frontWheelDiameter',
                message: 'Enter Front Wheel Diameter',
            },
            {
                type: 'input',
                name: 'frontWheelBrand',
                message: 'Enter Front Wheel Brand',
            },
            {
                type: 'input',
                name: 'rearWheelDiameter',
                message: 'Enter Rear Wheel Diameter',
            },
            {
                type: 'input',
                name: 'rearWheelBrand',
                message: 'Enter Rear Wheel Brand',
            },
        ])
            .then((answers) => {
            const frontWheel = new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand);
            const rearWheel = new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand);
            const motorbike = new Motorbike(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [frontWheel, rearWheel]);
            // push the motorbike to the vehicles array
            this.vehicles.push(motorbike);
            // set the selectedVehicleVin to the vin of the motorbike
            this.selectedVehicleVin = motorbike.vin;
            // perform actions on the motorbike
            this.performActions();
        });
    }
    // method to find a vehicle to tow
    findVehicleToTow(truck) {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'vehicleToTow',
                message: 'Select a vehicle to tow',
                choices: this.vehicles.map((vehicle) => {
                    return {
                        name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                        value: vehicle,
                    };
                }),
            },
        ])
            .then((answers) => {
            const vehicleToTow = answers.vehicleToTow;
            if (vehicleToTow.vin === truck.vin) {
                console.log('The truck cannot tow itself.');
            }
            else {
                truck.tow(vehicleToTow);
            }
            this.performActions();
        });
    }
    // method to perform actions on a vehicle
    performActions() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Select an action',
                choices: [
                    'Print details',
                    'Start vehicle',
                    'Accelerate 5 MPH',
                    'Decelerate 5 MPH',
                    'Stop vehicle',
                    'Turn right',
                    'Turn left',
                    'Reverse',
                    'Tow a vehicle',
                    'Do a wheelie',
                    'Select or create another vehicle',
                    'Exit',
                ],
            },
        ])
            .then((answers) => {
            const selectedVehicle = this.vehicles.find((vehicle) => vehicle.vin === this.selectedVehicleVin);
            if (!selectedVehicle) {
                console.log('Vehicle not found.');
                return;
            }
            switch (answers.action) {
                case 'Print details':
                    selectedVehicle.printDetails();
                    break;
                case 'Start vehicle':
                    selectedVehicle.start();
                    break;
                case 'Accelerate 5 MPH':
                    selectedVehicle.accelerate(5);
                    break;
                case 'Decelerate 5 MPH':
                    selectedVehicle.decelerate(5);
                    break;
                case 'Stop vehicle':
                    selectedVehicle.stop();
                    break;
                case 'Turn right':
                    selectedVehicle.turn('right');
                    break;
                case 'Turn left':
                    selectedVehicle.turn('left');
                    break;
                case 'Reverse':
                    selectedVehicle.reverse();
                    break;
                case 'Tow a vehicle':
                    if (selectedVehicle instanceof Truck) {
                        this.findVehicleToTow(selectedVehicle);
                        return;
                    }
                    else {
                        console.log('Only trucks can tow vehicles.');
                    }
                    break;
                case 'Do a wheelie':
                    if (selectedVehicle instanceof Motorbike) {
                        selectedVehicle.wheelie();
                    }
                    else {
                        console.log('Only motorbikes can do a wheelie.');
                    }
                    break;
                case 'Select or create another vehicle':
                    this.startCli();
                    return;
                case 'Exit':
                    this.exit = true;
                    break;
            }
            if (!this.exit) {
                this.performActions();
            }
        });
    }
    // method to start the cli
    startCli() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'CreateOrSelect',
                message: 'Would you like to create a new vehicle or perform an action on an existing vehicle?',
                choices: ['Create a new vehicle', 'Select an existing vehicle'],
            },
        ])
            .then((answers) => {
            if (answers.CreateOrSelect === 'Create a new vehicle') {
                this.createVehicle();
            }
            else {
                this.chooseVehicle();
            }
        });
    }
}
// export the Cli class
export default Cli;
