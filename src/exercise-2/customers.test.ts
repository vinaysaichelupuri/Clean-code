import { Customer } from "./customer";
import { Rent } from "./rent";
import { Car ,CarType} from "./car";

describe("Customer Class Tests", () => {
  let customer: Customer;

  beforeEach(() => {
    customer = new Customer("John Doe");
  });

  test("should create a customer with the correct name", () => {
    expect(customer.name).toBe("John Doe");
  });

  test("should add a rental to the customer", () => {
    const car = new Car("Toyota Camry", CarType.NEW);
    const rent = new Rent(car, 3);

    customer.addRental(rent);
    expect(customer.generateStatement()).toContain("Toyota Camry");
  });

  test("should calculate rental amount for NEW car", () => {
    const car = new Car("Tesla Model 3", CarType.NEW);
    const rent = new Rent(car, 6); 

    customer.addRental(rent);
    const statement = customer.generateStatement();

    expect(statement).toContain("Tesla Model 3");
    expect(statement).toContain("Balance due: 9.5"); 
  });

  test("should calculate coins correctly", () => {
    const car1 = new Car("Honda Civic", CarType.REFURBISHED);
    const rent1 = new Rent(car1, 3);

    const car2 = new Car("Ford Mustang", CarType.NEW);
    const rent2 = new Rent(car2, 6); 

    customer.addRental(rent1);
    customer.addRental(rent2);

    expect(customer.coins).toBe(4); 
  });
});