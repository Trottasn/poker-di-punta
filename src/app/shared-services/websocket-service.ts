import { Injectable } from "@angular/core";
import { webSocket } from "rxjs/webSocket";
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class WebsocketService {

  private subject = webSocket("ws://localhost:7071");
  private subscription: Subscription;

  constructor() {
    this.subscription = this.subject.subscribe(x => console.log(x));
  }

  public sendMessage() {
    console.log("Trying to send a message");
    this.subject.next({message: 'some message'});
  }

  public disconnect() {
    this.subscription.unsubscribe();
  }

}
