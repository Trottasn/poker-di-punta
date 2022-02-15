import { ChangeDetectionStrategy, Component} from '@angular/core';
import { WebsocketService } from '../shared-services/websocket-service';

@Component({
  selector: 'app-voting-zone',
  templateUrl: './voting-zone.component.html',
  styleUrls: ['./voting-zone.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class VotingZoneComponent {

  points: number[] = [];

  constructor(private websocketService: WebsocketService) {
    this.websocketService.getStateObservable().subscribe(state => {
      console.log("updating point values");
      this.points = state.points;
    });
  }

}
