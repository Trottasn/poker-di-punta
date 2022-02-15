import { Injectable } from "@angular/core";
import { webSocket } from "rxjs/webSocket";
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { State } from "./state";


@Injectable({
  providedIn: 'root',
})
export class WebsocketService {

  private subject = webSocket<any>("ws://localhost:7071");
  private subscription: Subscription;
  private state: State = {
    points: [],
    consensus: false,
    average: 0,
    userMap: new Map<string, number>()
  };
  private stateSubject: BehaviorSubject<State> = new BehaviorSubject<State>(this.state);
  private stateObservable: Observable<State> = this.stateSubject.asObservable();

  constructor() {
    this.subscription = this.subject.subscribe(message => {
      console.log(message);
      this.stateSubject.next(message);
    });
  }

  public getStateObservable(): Observable<State> {
    return this.stateObservable;
  }

  public sendRoomMessage(name: string, room: string) {
    console.log("Trying to connect to room...");
    this.subject.next({
      type: 'room',
      room: room,
      name: name
    });
    console.log("Message sent!");
  }

  public sendAddPointMessage(pointValue: string) {
    console.log("Trying to add point value to room...");
    this.subject.next({
      type: 'add',
      pointValue: pointValue,
    });
    console.log("Message sent!");
  }

  public disconnect() {
    this.subscription.unsubscribe();
  }

}
