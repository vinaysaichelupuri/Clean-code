import { Length } from "./task-3";
import { Weight } from "./task-3";
import { Volume } from "./task-3";

describe("Length Comparison", () => {
    test("should return true for equal lengths (100 cm = 1 m)", () => {
      const length1 = new Length(100, "centimeters");
      const length2 = new Length(1, "meters");
      expect(Length.areEqual(length1, length2)).toBe(true);
    });
  
    test("should return false for unequal lengths", () => {
      const length1 = new Length(50, "centimeters");
      const length2 = new Length(1, "meters");
      expect(Length.areEqual(length1, length2)).toBe(false);
    });
    test("should add two lengths correctly (100 cm + 1 m = 2 m)", () => {
        const length1 = new Length(100, "centimeters");
        const length2 = new Length(1, "meters");
        const result = length1.add(length2);
        expect(result).toEqual(new Length(2, "meters"));
      });
  });
