export class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  present() {
    console.log(`Denne bil er en ${this.brand}, og den er fra ${this.year}`);
  }
}
