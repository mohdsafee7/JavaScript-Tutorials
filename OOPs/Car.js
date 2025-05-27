function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year|| new Date().getFullYear();

}


const myCar = new Car("BMW","F",2002);
const myFavCar = new Car("Benz","GLS",2025);

console.log(myCar);
console.log(myFavCar);
