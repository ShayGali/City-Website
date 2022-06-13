import Person from '../Person';

export default class Employee extends Person {
  private _workName: string;
  private _monthlyHours: number;
  private _hourlyWage: number;

  public get hourlyWage(): number {
    return this._hourlyWage;
  }
  public set hourlyWage(v: number) {
    this._hourlyWage = v;
  }

  public get monthlyHours(): number {
    return this._monthlyHours;
  }
  public set monthlyHours(v: number) {
    this._monthlyHours = v;
  }

  public get workName(): string {
    return this._workName;
  }
  public set workName(v: string) {
    this._workName = v;
  }

  constructor(
    workName: string,
    monthlyHours: number,
    hourlyWage: number,
    id: string,
    fullName: string,
    age: number,
    isMale: boolean,
    imgUrl: string,
    city: string = 'Hadera'
  ) {
    super(id, fullName, age, isMale, imgUrl, city);
    this._workName = this.workName = workName;
    this._monthlyHours = this.monthlyHours = monthlyHours;
    this._hourlyWage = this.hourlyWage = hourlyWage;
  }
}
