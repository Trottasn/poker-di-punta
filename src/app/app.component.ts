import { Component, HostListener } from '@angular/core';
import { WebsocketService } from './shared-services/websocket-service';

@Component({
  providers: [WebsocketService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'poker-di-punta';

  inRoom: boolean = false;

  constructor(private websocketService: WebsocketService) {
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy()
  {
    this.websocketService.disconnect();
  }

  roomStateHandler(inRoom: boolean) {
    this.inRoom = inRoom;
  }

}
