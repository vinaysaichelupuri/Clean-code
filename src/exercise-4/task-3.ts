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


  export class Weight {
    value: number;
    unit: string;
 
   constructor(value: number, unit: string) {
     this.value = value;
     this.unit = unit;
   }
 
    toBaseUnit(): number {
     switch (this.unit.toLowerCase()) {
       case "kilograms":
         return this.value;
       case "grams":
         return this.value / 1000;
       case "milligrams":
         return this.value / 1000000;
       default:
         throw new Error("Unsupported unit");
     }
   }
 
   static areEqual(weight1: Weight, weight2: Weight): boolean {
     return weight1.toBaseUnit() === weight2.toBaseUnit();
   }

   add(weight: Weight): Weight {
       const totalValue = this.toBaseUnit() + weight.toBaseUnit();
       return new Weight(totalValue, "kilograms");
     }

     static addMultiple(weights: Weight[]): Weight {
       const totalValue = weights.reduce((sum, weight) => sum + weight.toBaseUnit(), 0);
       return new Weight(totalValue, "kilograms");
     }
 }

 export class Volume {
    value: number;
    unit: string;
 
   constructor(value: number, unit: string) {
     this.value = value;
     this.unit = unit;
   }
 
    toBaseUnit(): number {
     switch (this.unit.toLowerCase()) {
       case "litres":
         return this.value;
       case "millilitres":
         return this.value / 1000;
       default:
         throw new Error("Unsupported unit");
     }
   }
 
   static addMultiple(volumes: Volume[]): Volume {
     const totalValue = volumes.reduce((sum, volume) => sum + volume.toBaseUnit(), 0);
     return new Volume(totalValue, "litres");
   }
 }


