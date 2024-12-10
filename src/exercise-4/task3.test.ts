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

  describe("Weight Comparison", () => {
    test("should return true for equal weights (1000 g = 1 kg)", () => {
      const weight1 = new Weight(1000, "grams");
      const weight2 = new Weight(1, "kilograms");
      expect(Weight.areEqual(weight1, weight2)).toBe(true);
    });
  
    test("should return false for unequal weights", () => {
      const weight1 = new Weight(500, "grams");
      const weight2 = new Weight(1, "kilograms");
      expect(Weight.areEqual(weight1, weight2)).toBe(false);
    });

    test("should add two weights correctly (1000 g + 1 kg = 2 kg)", () => {
        const weight1 = new Weight(1000, "grams");
        const weight2 = new Weight(1, "kilograms");
        const result = weight1.add(weight2);
        expect(result).toEqual(new Weight(2, "kilograms"));
      });
      test("should add multiple weights correctly", () => {
        const weights = [
          new Weight(500, "grams"),
          new Weight(1, "kilograms"),
          new Weight(2000, "grams")
        ];
        const result = Weight.addMultiple(weights);
        expect(result).toEqual(new Weight(3.5, "kilograms"));
      });
  });


  describe("Adding Multiple Volumes", () => {
    test("should add multiple volumes correctly", () => {
      const volumes = [
        new Volume(500, "millilitres"),
        new Volume(1, "litres"),
        new Volume(2000, "millilitres")
      ];
      const result = Volume.addMultiple(volumes);
      expect(result).toEqual(new Volume(3.5, "litres"));
    });
  });
