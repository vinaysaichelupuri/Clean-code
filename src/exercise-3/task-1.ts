import { User } from "./types";
export class Employee {
  baseSalary: number;
  taxRate: number;
  bonus: number;
  name: string;

  constructor(
    baseSalary: number,
    taxRate: number,
    bonus: number,
    name: string
  ) {
    (this.baseSalary = baseSalary),
      (this.taxRate = taxRate),
      (this.bonus = bonus),
      (this.name = name);
  }

  calculateSalary(baseSalary:number,taxRate:number,bonus:number):number {
    const salaryAfterTax = baseSalary - baseSalary * taxRate;
    const finalSalary = salaryAfterTax + bonus;
    return finalSalary;
  }

  logUserSalary(user: User, salary: number) {
    console.log(
      `${user.name}: Base Salary = $${user.baseSalary}, Tax Rate = ${user.taxRate * 100}%, Bonus = $${user.bonus}, Final Salary = $${salary}`
    );
  }

  updateTotalUsersSalary(salary: number, totalSalary: number): number {
    totalSalary += salary;
    return totalSalary;
  }

  totalSalaryOfAllUsers(users: User[]): number {
    let totalSalary = 0;
    users.forEach((user) => {
      const salary = this.calculateSalary(user.baseSalary, user.taxRate, user.bonus);
      this.logUserSalary(user, salary);
      totalSalary += this.updateTotalUsersSalary(salary, totalSalary);
    });
    return totalSalary;
  }
}
