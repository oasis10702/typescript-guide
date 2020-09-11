class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
// vehicle.honk();
console.log(vehicle.color);

class Carr extends Vehicle {
  constructor(public wheel: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const carr = new Carr(4, "red");
// carr.drive();
