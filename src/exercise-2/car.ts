export enum CarType {
  NEW = "NEW",
  REFURBISHED = "REFURBISHED",
}

export class Car {
  private _name: string;
  private _type: CarType;

  constructor(name: string, type: CarType) {
    this._name = name;
    this._type = type;
  }

  public get name() {
    return this._name;
  }

  public get type() {
    return this._type;
  }
}
