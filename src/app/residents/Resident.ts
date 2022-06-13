export enum MaritalStatus {
  BACHELOR = 'A',
  MARRIED = 'B',
  DIVORCEE = 'C',
  WIDOWER = 'D',
}

export default class Resident extends Person {
  private _startYear: number;
  private _maritalStatus: MaritalStatus;
  private _address: string;
  public get address(): string {
    return this._address;
  }
  public set address(v: string) {
    this._address = v;
  }

  public get startYear(): number {
    return this._startYear;
  }
  public set startYear(v: number) {
    let currentYear = new Date().getFullYear();
    if (v < 1900 || v > currentYear)
      throw RangeError(`year nedd to be between 1900 and ${currentYear}`);
    this._startYear = v;
  }

  public get maritalStatus(): MaritalStatus {
    return this._maritalStatus;
  }
  public set maritalStatus(v: MaritalStatus) {
    this._maritalStatus = v;
  }

  constructor(
    id: string,
    fullName: string,
    age: number,
    isMale: boolean,
    imgUrl: string,
    startYear: number,
    maritalStatus: MaritalStatus,
    address: string,
    city: string = 'Hadera'
  ) {
    super(id, fullName, age, isMale, imgUrl, city);

    this._startYear = this.startYear = startYear;
    this._maritalStatus = this.maritalStatus = maritalStatus;
    this._address = this.address = address;
  }
}
