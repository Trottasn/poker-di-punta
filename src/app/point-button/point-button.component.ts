import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-point-button',
  templateUrl: './point-button.component.html',
  styleUrls: ['./point-button.component.scss']
})
export class PointButtonComponent {

  @Input() pointValue: number = 0;

}
