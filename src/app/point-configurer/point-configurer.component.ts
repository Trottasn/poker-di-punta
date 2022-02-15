import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { WebsocketService } from '../shared-services/websocket-service';

export class PointErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}

export function validatePointValue(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    var valid : boolean = control.value !== null && control.value !== undefined;
    var pointValue: number = control.value;
    valid = valid && pointValue > -1 && pointValue < 100;
    return valid ? null : { badPointValue: { value: pointValue } };
  };
}

@Component({
  selector: 'app-point-configurer',
  templateUrl: './point-configurer.component.html',
  styleUrls: [ './point-configurer.component.scss' ],
})
export class PointConfigurerComponent {

  pointFormControl = new FormControl('', [Validators.required, Validators.nullValidator, validatePointValue()]);
  matcher = new PointErrorStateMatcher();

  newPointGroup: FormGroup = new FormGroup({
    point: this.pointFormControl
  });

  constructor(private websocketService: WebsocketService) {

  }

  onSubmit() {
    if (this.newPointGroup.valid) {
      this.websocketService.sendAddPointMessage(this.pointFormControl.value);
    }
  }

}
