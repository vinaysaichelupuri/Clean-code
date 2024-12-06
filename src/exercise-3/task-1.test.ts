import { User } from "./types";
import { Employee } from "./task-1";

describe("Employee Class Methods", () => {
  const Employes = new Employee(0, 0, 0, ""); 

  const users: User[] = [
    { name: "Alice", baseSalary: 50000, taxRate: 0.2, bonus: 5000 },
    { name: "Bob", baseSalary: 60000, taxRate: 0.15, bonus: 4000 },
    { name: "Charlie", baseSalary: 70000, taxRate: 0.1, bonus: 1000 },
  ];

  it("should correctly calculate salary (calculateSalary)", () => {
    const salary = Employes.calculateSalary(50000, 0.2, 5000);
    expect(salary).toBe(45000); 
  });

  it("should update the total salary (updateTotalUsersSalary)", () => {
    const updatedSalary = Employes.updateTotalUsersSalary(45000, 100000);
    expect(updatedSalary).toBe(145000);
  });

  it("should calculate total salary of all users (totalSalaryOfAllUsers)", () => {
    const totalSalary = Employes.totalSalaryOfAllUsers(users);
    expect(totalSalary).toBe(164000);
  });
});