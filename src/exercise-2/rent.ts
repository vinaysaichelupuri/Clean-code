import { Car } from "./car";

export class Rent {
  private _car: Car;
  private _days: number;

  constructor(car: Car, days: number) {
    this._car = car;
    this._days = days;
  }

  public get car(): Car {
    return this._car;
  }
  public get days(): number {
    return this._days;
  }
}
