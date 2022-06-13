import Person from '../Person';

export default class EventData {
  private _eventCode: number;
  private _numberOfParticipants: number;
  private _eventName: string;
  private _eventManager: Person;

  public get eventName(): string {
    return this._eventName;
  }
  public set eventName(v: string) {
    this._eventName = v;
  }

  public get eventCode(): number {
    return this._eventCode;
  }
  public set eventCode(v: number) {
    this._eventCode = v;
  }

  public get numberOfParticipants(): number {
    return this._numberOfParticipants;
  }
  public set numberOfParticipants(v: number) {
    this._numberOfParticipants = v;
  }

  public get eventManager(): Person {
    return this._eventManager;
  }
  public set eventManager(v: Person) {
    this._eventManager = v;
  }

  constructor(
    eventName: string,
    eventCode: number,
    numberOfParticipants: number,
    eventManager: Person
  ) {
    this._eventCode = this.eventCode = eventCode;
    this._numberOfParticipants = this.numberOfParticipants =
      numberOfParticipants;
    this._eventName = this.eventName = eventName;
    this._eventManager = this.eventManager = eventManager;
  }
}
