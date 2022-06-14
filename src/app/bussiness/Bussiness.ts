export default class Bussiness {
  private _workName: string;
  private _bussinessNumber: number;
  private _numberOfEmp: number;
  private _averageProfit: number;

  constructor(
    workName: string,
    bussinessNumber: number,
    numberOfEmp: number,
    averageProfit: number
  ) {
    this._workName = this.workName = workName;
    this._averageProfit = this.averageProfit = averageProfit;
    this._bussinessNumber = this.bussinessNumber = bussinessNumber;
    this._numberOfEmp = this.numberOfEmp = numberOfEmp;
  }

  public get workName(): string {
    return this._workName;
  }
  public set workName(v: string) {
    this._workName = v;
  }

  public get bussinessNumber(): number {
    return this._bussinessNumber;
  }
  public set bussinessNumber(v: number) {
    this._bussinessNumber = v;
  }

  public get numberOfEmp(): number {
    return this._numberOfEmp;
  }
  public set numberOfEmp(v: number) {
    if (v < 1000 || v > 5000)
      throw new RangeError(
        'number of employees need to be between 1000 and 5000'
      );

    this._numberOfEmp = v;
  }

  public get averageProfit(): number {
    return this._averageProfit;
  }
  public set averageProfit(v: number) {
    this._averageProfit = v;
  }
}
