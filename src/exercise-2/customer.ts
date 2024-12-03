import { CarType } from "./car";
import { Email } from "./email";
import { Rent } from "./rent";

export class Customer {
  private _name: string;
  private _rentals: Rent[] = [];
  private coins = 0;

  constructor(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public addRental(rent: Rent) {
    this._rentals.push(rent);
  }

  public generateStatementAndSendBill() {
    let totalAmount = 0;
    let result = `Bill generated for customer ${this._name} \n`;
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this._rentals.length; i++) {
      let thisAmount = 0;
      const each = this._rentals[i];

      //calculate amount for each rental
      switch (each.car.type) {
        case CarType.NEW:
          thisAmount += 10;
          // add 5% discount if rented days more than 5
          if (each.days > 5) {
            thisAmount = thisAmount - thisAmount * 0.05;
          }
          break;
        case CarType.REFURBISHED:
          thisAmount += 5;
          break;
      }
      // add coins for each rented car
      this.coins += 1;
      // add bonus +2 if rent days > 5
      if (each.days > 5) {
        this.coins += 2;
      }
      result += "\t" + each.car.name + "\t" + thisAmount + "\n";
      totalAmount += thisAmount;
    }

    // add total amount
    result += "Balance due: " + totalAmount + "\n";
    result += "You earned: " + this.coins + " coins \n";
    Email.sendEmail(result);
    return result;
  }
  public generateStatement (){
    let totalAmount = 0;
      let result = `Bill generated for customer ${this._name} \n`;
  }
}




