import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebsocketService } from '../shared-services/websocket-service';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: [ './landing-view.component.scss' ],
})
export class LandingViewComponent {

  @Output() inRoom: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  nameFormControl: FormControl = new FormControl('', [Validators.required, Validators.nullValidator]);
  roomFormControl: FormControl = new FormControl('', [Validators.required, Validators.nullValidator]);
  nameAndRoomGroup: FormGroup = new FormGroup({
    name: this.nameFormControl,
    room: this.roomFormControl
  });

  constructor(private websocketService: WebsocketService) {

  }

  onSubmit() {
    this.websocketService.sendRoomMessage(this.nameFormControl.value, this.roomFormControl.value);
    this.inRoom.next(true);
  }

}
