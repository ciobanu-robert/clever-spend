import { Component, Input } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import e from 'express';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  constructor(public mode: DarkModeService) {}

  @Input() name = '';
  @Input() type = 'text';

  visible() {
    if (this.type == 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
