import { Component, Input } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-partner',
  standalone: false,
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.scss'
})
export class PartnerComponent {
constructor(public mode: DarkModeService) {}

@Input() add = false;

@Input() status = '';
@Input() image = '';
@Input() name = '';
@Input() income = 0;
}
