import Person from '../Person';

export default class EventData {
  private _eventName: string;
  public get eventName(): string {
    return this._eventName;
  }
  public set eventName(v: string) {
    this._eventName = v;
  }

  private _eventCode: number;
  public get eventCode(): number {
    return this._eventCode;
  }
  public set eventCode(v: number) {
    this._eventCode = v;
  }

  private _numberOfParticipants: number;
  public get numberOfParticipants(): number {
    return this._numberOfParticipants;
  }
  public set numberOfParticipants(v: number) {
    this._numberOfParticipants = v;
  }

  private _eventManager: Person;
  public get eventManager(): Person {
    return this._eventManager;
  }
  public set eventManager(v: Person) {
    this._eventManager = v;
  }

  constructor(
    eventName: String,
    eventCode: number,
    numberOfParticipants: number,
    eventManager: Person
  ) {}
}
