import { Component, Input } from '@angular/core';
import { WebsocketService } from '../shared-services/websocket-service';

@Component({
  selector: 'app-point-button',
  templateUrl: './point-button.component.html',
  styleUrls: ['./point-button.component.scss']
})
export class PointButtonComponent {

  @Input() pointValue: number = 0;

  constructor(private websocketService: WebsocketService) {
  }

  public voteSelected() {
    console.log("Button clicked.");
    this.websocketService.sendMessage();
  }

}
