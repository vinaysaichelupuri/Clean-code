export class Length {
     value: number;
     unit: string;
  
    constructor(value: number, unit: string) {
      this.value = value;
      this.unit = unit;
    }
  
     toBaseUnit(): number {
      switch (this.unit.toLowerCase()) {
        case "meters":
          return this.value;
        case "centimeters":
          return this.value / 100;
        case "millimeters":
          return this.value / 1000;
        default:
          throw new Error("Unsupported unit");
      }
    }
  
    static areEqual(length1: Length, length2: Length): boolean {
      return length1.toBaseUnit() === length2.toBaseUnit();
    }
    add(length: Length): Length {
        const totalValue = this.toBaseUnit() + length.toBaseUnit();
        return new Length(totalValue, "meters");
      }
  }


