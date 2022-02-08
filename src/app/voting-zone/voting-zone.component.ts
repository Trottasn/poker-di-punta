import { Component} from '@angular/core';
import { WebsocketService } from '../shared-services/websocket-service';

@Component({
  selector: 'app-voting-zone',
  templateUrl: './voting-zone.component.html',
  styleUrls: ['./voting-zone.component.scss']
})
export class VotingZoneComponent {

  constructor(private websocketService: WebsocketService) {

  }

}
