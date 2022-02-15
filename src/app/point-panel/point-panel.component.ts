import { Component, Input } from '@angular/core';
import { WebsocketService } from '../shared-services/websocket-service';

@Component({
  selector: 'app-point-panel',
  templateUrl: './point-panel.component.html',
  styleUrls: ['./point-panel.component.scss']
})
export class PointPanelComponent {

  @Input() points: number[] = [];

  constructor(private websocketService: WebsocketService) {
  }

}
