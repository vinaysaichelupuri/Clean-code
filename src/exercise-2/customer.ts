import { CarType } from "./car";
import { Rent } from "./rent";

export class Customer {
  private _name: string;
  private _rentals: Rent[] = [];
  private _coins: number = 0;

  constructor(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public addRental(rent: Rent) {
    this._rentals.push(rent);
  }

  public generateStatement() {
    let result = `Bill generated for customer ${this._name} \n`;
    for (const rental of this._rentals) {
      result += "\t" + rental.car.name + "\t" + this.rentalAmount(rental) + "\n";
    }
    
    result += "Balance due: " + this.totalRentalAmount() + "\n";
    result += "You earned: " + this.coins + " coins \n";
    return result;
  }

  public generateHTMLStatement() {
    let result = `<h1>Bill generated for customer ${this._name} \n </h1>`;

    for (const rental of this._rentals) {
      result +=
        "<p>\t" + rental.car.name + "\t" + this.rentalAmount(rental) + "\n</p>";
    }
    
    result += "<p> Balance due: " + this.totalRentalAmount() + "\n </p>";
    result += "<p> You earned: " + this.coins + " coins \n </p>";
    return result ;
  }
  

   public get coins() {
    for (const rental of this._rentals) {
      this._coins += 1;
      if (rental.days > 5) {
        this._coins += 2;
      }
    }
    return this._coins;
  }

  public totalRentalAmount(){
    let totalAmount = 0;
    for (const rental of this._rentals) {
      totalAmount += this.rentalAmount(rental);
    }
    return totalAmount;
  }
  
  private rentalAmount(rental: Rent) {
    let rentalAmount: number = 0;
    switch (rental.car.type) {
      case CarType.NEW:
        rentalAmount += 10;
        if (rental.days > 5) {
          rentalAmount = rentalAmount - rentalAmount * 0.05;
        }
        break;
      case CarType.REFURBISHED:
        rentalAmount += 5;
        break;
    }
    return rentalAmount;
  }
}
