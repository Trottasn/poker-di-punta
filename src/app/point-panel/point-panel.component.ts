import { Component } from '@angular/core';
import { WebsocketService } from '../shared-services/websocket-service';

@Component({
  selector: 'app-point-panel',
  templateUrl: './point-panel.component.html',
  styleUrls: ['./point-panel.component.scss']
})
export class PointPanelComponent {

  pointValues: number[] = [ 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 10, 20, 30, 40, 50, 60, 70, 80 ];

  constructor(private websocketService: WebsocketService) {

  }

}
