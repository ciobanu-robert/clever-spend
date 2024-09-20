import { Component, Input } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-select',
  standalone: false,
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  constructor(public mode: DarkModeService) {}

@Input() name = '';
@Input() options:String[] = [];
}
