export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    cloneCar() {
        const clonedCar = new this.constructor();
        clonedCar._brand = undefined;
        clonedCar._motor = undefined;
        clonedCar._color = undefined;
        return clonedCar;
    }
}
