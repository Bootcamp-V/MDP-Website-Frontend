import { Component, Input } from '@angular/core';
import { stepsModel } from '../../models/steps.model';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
  @Input() steps!: stepsModel;
}
